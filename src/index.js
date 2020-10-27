import app from './App';
import './config/database';
import appmqtt from './AppMqtt';
import base64url from 'base64url';
import ip from 'ip';
import http from 'http'
import socketIo from 'socket.io';
import Users from './models/Users';
import Equipment from './models/Equipment';
import Emergency from './models/Emergency';
const server = app.listen(4080);
const io = socketIo(server);

console.log("Server lisen port ", 4080);

appmqtt.on('connect', function () {
    console.log("Se logró conectar exitosmaente");
})

appmqtt.subscribe('Panel/#');
io.on("connection", (socket) => {
    //appmqtt.publish('Panel/PwAXABJRODQ4OTQx/BUTTON','{"ip":"wKgBUQ","id":"443831", "bp":"0"}');
    appmqtt.on('message', function (topic, message) {
        const url = topic.toString();
        const id = url.substring(6, 22);
        const opcode = url.substring(23, url.length);
        console.log(opcode);
        console.log(id);
        let data = [];
        let response = [];
        switch (opcode) {
            case "STATUS":
                data = JSON.parse(message);
                data.ip = ip.toString(base64url.toBuffer(data.ip));
                console.log(data);
                response = Users.findOne({ idEquipment: id }).exec().then(
                    result => {
                        if (result != null) {
                            socket.emit("FromAPI", result);

                        }
                    }
                ).catch(
                    error => {
                        const responsex = {
                            success: false,
                            action: error,
                        }
                        socket.emit("FromAPI", responsex);
                    }
                );
                break;
            case "AUDIO":
                //response = message.toString();
                break;
            case "BUTTON":
                data = JSON.parse(message);
                //console.log(data)
                response = Users.findOne({ idEquipment: id }).exec().then(
                    result => {
                        let responsex = [];
                        if (data.id == result.idControl) {
                            Equipment.findOne({id_MCU:id}).exec().then(
                                result => {
                                    responsex = {
                                        success: true,
                                        emergency: true,
                                        lat: result.latCenter,
                                        lng: result.lngCenter,
                                    }
                                    
                                    if(data.bp==4){
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/AUDIO', '{"tmo":0}');
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/PGM3', 0);
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/PGM2', '0'); 
                                    }else{
                                        socket.emit("FromAPI", responsex);
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/AUDIO', '{"fn":"tono2.wav","lp":"1"}');
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/PGM3', '0');
                                        appmqtt.publish('Panel/PwAXABJRODQ4OTQx/PGM2', '1');
                                    }
                                    const emergency = new Emergency({
                                        lat: result.latCenter.toString(),
                                        lng: result.lngCenter.toString(),
                                    })
                                    
                                   emergency.save().then(
                                        result =>{ 
                                            console.log("se guardo correctamente")
                                        }
                                    ).catch(error => {console.log("se guardo correctamente")})
                                }
                            ).catch(
                                e => console.log("erro2")
                            )                            
                        } else {
                            responsex = {
                                success: false,
                                emergency: false,
                            }
                        }
                        

                    }
                ).catch(
                    error => {
                        const responsex = {
                            success: false,
                            action: error,
                        }
                        return "error";
                    }
                ).finally(
                    e => { return "saludo"; }
                );
                break;
            case "CONFIG":
                response = JSON.parse(message.toString());
                break;
            default:
                break;
        }



    });

});


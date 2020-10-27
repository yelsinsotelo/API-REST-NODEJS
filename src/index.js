import app from './App';
import './config/database';
import appmqtt from './AppMqtt';
import base64url from 'base64url';
import ip from 'ip';
import http from 'http'
import socketIo from 'socket.io';
import Users from './models/Users';
import Equipment from './models/Equipment';
const server = app.listen(4080);
const io = socketIo(server);

console.log("Server lisen port ", 4080);

appmqtt.on('connect', function () {
    console.log("Se logró conectar exitosmaente");
})

appmqtt.subscribe('Panel/#');
io.on("connection", (socket) => {
    //appmqtt.publish('Panel/PwAXABJRODQ4OTQx/BUTTON','{"ip":"wKgBUQ","id":"443831", "bp":"1"}');
    appmqtt.on('message', function (topic, message) {
        const url = topic.toString();
        const id = url.substring(6, 22);
        const opcode = url.substring(23, url.length);
        console.log(opcode);
        console.log(id);
        let data = JSON.parse(message.toString());
        let response = {
            data:"hola"
        };
        switch (opcode) {
            case "STATUS":
                data = JSON.parse(message.toString());
                data.ip =ip.toString(base64url.toBuffer(data.ip));           
                break;
            case "AUDIO":
                data = message.toString();
                break;
            case "BUTTON":
                response = Users.findOne({idEquipment: id}).exec().then(
                    result => {
                        const responsex= [];
                        if(data.id == result.idControl){
                            responsex = {
                                success:true,
                                action: true,
                            }
                           
                        }else{
                            responsex={
                                success:false,
                                message: "no se encontro ninguna coincidencia",
                            }
                        }
                        return "todo bien";
                        
                    }
                ).catch(
                    error => {
                        const responsex={
                            success: false,
                            action: error,
                        }
                        return "error";
                    }
                ).finally(
                    e => {return "saludo" ;}
                );
                break;
            case "CONFIG":
                data = JSON.parse(message.toString());
                break;
            default:
                break;
        }
        socket.emit("FromAPI", data);
    
    
    });
    
  });


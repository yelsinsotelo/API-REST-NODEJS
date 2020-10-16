import app from './App';
import './config/database';
import appmqtt from './AppMqtt';
import base64url from 'base64url';
import ip from 'ip';
app.listen(4080);

console.log("Server lisen port ", 4080);

appmqtt.on('connect', function () {
    console.log("Se logró conectar exitosmaente");
})

appmqtt.subscribe('Panel/#');
appmqtt.on('message', function (topic, message) {
    const url = topic.toString();
    const id = url.substring(6, 22);
    const opcode = url.substring(23, url.length);
    console.log(opcode);
    console.log(id);
    let data = [];
    switch (opcode) {
        case "STATUS":
            data = JSON.parse(message.toString());
            data.ip =ip.toString(base64url.toBuffer(data.ip));           
            break;
        case "AUDIO":
            data = message.toString();
            break;
        case "BUTTON":
            data = JSON.parse(message.toString());
            break;
        case "CONFIG":
            data = JSON.parse(message.toString());
            break;
        default:
            break;
    }
    console.log(data)


});


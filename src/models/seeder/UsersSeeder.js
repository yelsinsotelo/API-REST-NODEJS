import Equipment from '../migrations/Equipment'
import database from '../../config/database'
import AlarmaController from '../../controllers/AlarmaController'
import appMqtt from '../../AppMqtt'
import base64url from 'base64url';
import ip from 'ip';

appMqtt.on('connect',function(){
    console.log('coneccion  mqtt');
})
appMqtt.subscribe('Panel/#');
let Array= [];
let index = 0;
appMqtt.on('message',(topic,message) => {
    console.log(topic)
    const id_MCU = topic.substr(6,16);
    const opcode = topic.substring(23, topic.length);
    console.log(opcode)
    let data = JSON.parse(message);
    if(opcode=='STATUS'){
        const ipx = ip.toString(base64url.toBuffer(data.ip));
        Equipment.exists({id_MCU}).then(result => {
            if(!result){
              const req = {
                  ip: ipx,
                  id_MCU: id_MCU,
                  index: index,
              }
              AlarmaController.InternalStore(req);
              index++;
            }
        }).catch(e => console.log(e));
    }
} 
)
/* const user = new Users({
    name: 'antiny Sotexlo',
    address: 'Urb EL pssixnal',
    cellphone: '9365388x',
    idControl: '47438558x',
    idEquipment: 'Assws44cx7ws',
    email: 'yelson@gmail.cxom'
});
user.save().then(result => {console.log('save');process.exit();}).catch(e => {console.log(e);process.exit();}); */


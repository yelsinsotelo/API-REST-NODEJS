
import Equipment from '../models/Equipment';
import QRlogo from 'qr-with-logo';
import path from 'path';

const BASEDIR = path.join(__dirname, '../images/');
const BASEDIR3 = path.join(__dirname, '../images/team/');
const BASEDIR2 = path.join(__dirname, '../images/QrCode/');

class AlarmaController {
    static Index(req, res) {
        Equipment.find().exec()
            .then(result => {
                res.status(200).json({
                    success: true,
                    data: {
                        alarmas: result,
                        numAlarms: result.length,
                    }
                })
            })
            .catch(e => {
                res.status(500).json({
                    success: false,
                    data: {
                        error: e,
                    }
                })
            }

            )
    }
    static Store(req, res) {
        const { equipment_ip, equipment_id, equipment_name, equipment_num } = req.body;
        const data = JSON.stringify({
            id_MCU: equipment_id,
        });
        QRlogo.generateQRWithLogo(data, BASEDIR + 'recorteu.png', {}, "PNG", BASEDIR2 + equipment_id + '.png').then(result =>
            console.log("completo")).catch(e => console.log(e));
        const urlcode = 'http://34.121.135.157:8080/QrCode/' + equipment_id + '.png';
        const newAlarma = new Equipment({
            ip: equipment_ip,
            id_MCU: equipment_id,
            name: equipment_name,
            numEquipment: equipment_num,
            urlqr: urlcode,
        });
      

        newAlarma.save().then(result => {
            Equipment.find().exec()
                .then(result => {
                    res.json({
                        success: true,
                        data: {
                            alarmas: result,
                            numAlarms: result.length,
                            message: "Se registro correctamente la alarma",
                        }
                    })
                });

        }

        )
            .catch(e => (
                res.json({
                    success: false,
                    error: e,
                })
            ));


    }
    static Edit(req, res) {

    }
    static Update(req, res) {

    }
    static Destroy(req, res) {

    }

}

export default AlarmaController;


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
        Equipment.findById(req.params.id).exec().then(result => {
            result.ip = req.body.equipment_ip,
                result.id_MCU = req.body.equipment_id,
                result.name = req.body.equipment_name,
                result.numEquipment = req.body.equipment_num,
                result.save().then(result => {
                    res.json({
                        success: true,
                        data: {
                            message:'success',
                            code: result,
                        }
                    })
                })
                .catch(error => {
                    res.json({
                        success: false,
                        data: {
                            message:'error',
                            code: error,
                        }
                    })
                    })
        }).catch(error => {
            res.json({
                success: false,
                data: {
                    message:'error',
                    code: error,
                }
            })
        })

    }
    static Update(req, res) {
        const solicitud = JSON.parse(JSON.stringify(req.body));
        Equipment.findOne({ id_MCU: solicitud.id_MCU }).exec().then(
            result => {
                result.latCenter = solicitud.latitude;
                result.lngCenter = solicitud.longitude;
                result.state = "conectado";
                result.save();
                console.log(result)
                res.status(200).json({
                    success: true,
                    data: "completo",
                })
            }
        ).catch(
            error => {
                console.log(error);
                res.status(500).json({
                    success: false,
                    data: error
                })
            }
        );
    }
    static Destroy(req, res) {
        Equipment.findByIdAndDelete(req.params.id).exec().then(result => {
            res.json({
                success: true,
                data: {
                    message : 'success',
                    code: result
                }
            })
        })
        .catch(error => {
            res.json({
                success: false,
                data: {
                    message : 'error',
                    code: error
                }
            })
        })
    }

}

export default AlarmaController;

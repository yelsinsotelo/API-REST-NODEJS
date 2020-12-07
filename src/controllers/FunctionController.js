import appmqtt from '../AppMqtt';
import Users from '../models/Users';
import Equipment from '../models/Equipment'
import Emergency from '../models/Emergency'
import io from '../index'
class FunctioController {
    static tone(req, res, next) {
        const data = req.body;
        const num = req.params.num;
        Users.findOne({ cellphone: data.cellphone }).exec()
            .then(result => {
                console.log(result.idEquipment)
                appmqtt.publish(`Panel/${result.idEquipment}/AUDIO`, `{"fn":"tono${num}.wav"}`);
                appmqtt.publish(`Panel/${result.idEquipment}/PGM3`, '0');
                appmqtt.publish(`Panel/${result.idEquipment}/PGM2`, '0');
                appmqtt.publish(`Panel/${result.idEquipment}/PGM1`, '1');
                res.status(200).json({
                    success: true,
                    message: 'Se Activó la alarma correctamente',
                })
            })
            .catch(error => {
                res.status(200).json({
                    success: false,
                    message: 'El usuario no está asociado a una alarma',
                    code: error,
                })
            })
    }
    static silence(req, res, next) {

    }

    static alarm(req, res, next) {
        const data = req.body;
        let responsex;
        Users.findOne({ cellphone: data.cellphone }).exec()
            .then(result => {
                Equipment.findOne({ id_MCU: result.idEquipment }).exec().then(
                    result => {
                        responsex = {
                            success: true,
                            emergency: true,
                            lat: result.latCenter,
                            lng: result.lngCenter,
                        }
                        io.emit("FromAPI", responsex);
                        console.log(result)
                        appmqtt.publish(`Panel/${result.id_MCU}/AUDIO`, '{"fn":"tono2.wav"}');
                        appmqtt.publish(`Panel/${result.id_MCU}/PGM3`, '0');
                        appmqtt.publish(`Panel/${result.id_MCU}/PGM2`, '0');
                        appmqtt.publish(`Panel/${result.id_MCU}/PGM1`, '1');
                        const emergency = new Emergency({
                            lat: result.latCenter != null ? result.latCenter.toString() : 'null',
                            lng: result.lngCenter != null ? result.lngCenter.toString() : 'null',
                            from: 'Movil',
                            state: 'Pendiente',
                        })
                        emergency.save().then(result => {
                            res.status(200).json({
                                success: true,
                                message: 'Se envio la alerta correctamente',
                                code: result,
                            })
                        }
                        ).catch(error => {
                            res.status(500).json({
                                success: false,
                                message: 'no se puede guardar emergencia',
                                code: error,
                            })
                        }
                        )
                        
                    }
                ).catch(error => {
                    res.status(500).json({
                        success: false,
                        message: 'El usuario no está asociado a una alarma',
                        code: error,
                    })
                }
                )
            })
            .catch(error => {
                res.status(500).json({
                    success: false,
                    message: 'El usuario no está asociado a una alarma',
                    code: error,
                })
            })
    }
}

export default FunctioController;
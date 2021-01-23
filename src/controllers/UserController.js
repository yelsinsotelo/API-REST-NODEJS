
import Users from '../models/migrations/Users';

class UsersController {
    static Index(req, res) {
        Users.find().exec()
            .then(result => {
                res.json({
                    success: true,
                    data: result,
                })
            })
            .catch(e => (
                res.json({
                    success: false,
                    error: e,
                })
            ));
    }
    static Store(req, res) {
        const { equipment, user_address, user_cellphone, user_control_id, user_name , user_email} = req.body;
        const newUSer = new Users({
            name: user_name,
            address: user_address,
            cellphone: user_cellphone,
            idControl: user_control_id,
            idEquipment: equipment,
            email:user_email,
        });

        newUSer.save().then(result => {
            Users.find().exec()
                .then(result => {
                    res.json({
                        success: true,
                        data: {
                            items: result,
                            message: 'success'
                        },
                    })
                });

        }

        )
            .catch(e => (
                Users.find().exec()
                    .then(result => {
                        res.json({
                            success: false,
                            data: {
                                items: result,
                                message: 'error'
                            },
                            error: e,
                        })
                    })

            ));


    }
    static Edit(req, res) {


    }
    static Update(req, res) {
        Users.findById(req.params.id).exec()
            .then(result => {
                result.name = req.body.user_name;
                result.address = req.body.user_address;
                result.cellphone = req.body.user_cellphone;
                result.idControl = req.body.user_control_id;
                result.idEquipment = req.body.equipment;
                result.email = req.body.user_email;
                result.save().then(
                    result => {
                        res.json({
                            success: true,
                            data: {
                                message: 'success',
                                code: result
                            }
                        })
                    }
                )
                    .catch(error => {
                        res.json({
                            success: false,
                            data: {
                                message: 'error',
                                code: error,
                            }
                        })
                    })

            })
            .catch(
                error => {
                    res.json({
                        success: false,
                        data: {
                            message: 'error',
                            code: error,
                        }
                    })
                }
            )
    }
    static Destroy(req, res) {
        Users.findByIdAndDelete(req.params.id).exec()
            .then(result => {
                res.json({
                    success: true,
                    data: {
                        message: 'success',
                        code: result
                    }
                })
            }
            )
            .catch(error => {
                res.json({
                    success: false,
                    data: {
                        message: 'error',
                        code: error,
                    }
                })
            });
    }

}

export default UsersController; 


import Users from '../models/Users';

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
        const { equipment, user_address, user_cellphone, user_control_id, user_name } = req.body;
        const newUSer = new Users({
            name: user_name,
            address: user_address,
            cellphone: user_cellphone,
            idControl: user_control_id,
            idEquipment: equipment,
        });

        newUSer.save().then(result => {
            Users.find().exec()
                .then(result => {
                    res.json({
                        success: true,
                        data: result,
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

export default UsersController; 

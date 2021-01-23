import Users from '../models/migrations/Users';

class AuthController {
    static validateSingUp(req, res, next) {
        const { email, cellphone } = req.body;
        Users.find({ email: email, cellphone: cellphone }).exec()
            .then(result => {
                if (result.length > 0) {
                    res.status(200).json({
                        success: true,
                        data: {
                            auth: true,
                            message: 'Tiene Permiso para usa el App'
                        }
                    })
                } else {
                    res.status(200).json({
                        success: true,
                        data: {
                            auth: false,
                            message: 'No Tiene Permiso para usa el App'
                        }
                    })
                }

            })
            .catch(error => {
                res.status(200).json({
                    success: false,
                    data: {
                        auth: false,
                        message: 'No tiene Permisio para usar el App'
                    }
                })
            })
    }

    static SingIn() {

    }
}

export default AuthController;
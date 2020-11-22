import Emergency from '../models/Emergency';

class EmergencyController {
    static index(req, res) {
        Emergency.find().exec()
            .then(result => {
                res.status(200).json({
                    success: true,
                    data: {
                        items: result,
                        numItems: result.length,
                    }
                })
            })
            .catch(error => {
                res.status(200).json({
                    success: false,
                    data: {
                        message: error,
                    }
                })
            })
    }
    static store(req, res) {
        const emergency = new Emergency({
            lat: req.body.lat,
            lng: req.body.lng,
        })

        emergency.save().then(result => {
            res.status(200).json({
                success: true,
                data: {
                    message: 'success',
                    code: result,
                }
            })
        })
            .catch(error => {
                res.status(500).json({
                    success: false,
                    data: {
                        message: 'error',
                        code: error,
                    }
                })
            })
    }
    static edit(req, res) {

    }
    static update(req, res) {

    }
    static destroy(req, res) {

    }
}
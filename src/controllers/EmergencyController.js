import Emergency from '../models/Emergency';

class EmergencyController {
    static Index(req, res) {
        Emergency.find().sort({'_id': -1}).exec()
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
    static Store(req, res) {
        const emergency = new Emergency({
            lat: req.body.lat,
            lng: req.body.lng,
            from: req.body.from,
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
    static Edit(req, res) {

    }
    static Update(req, res) {

    }
    static Destroy(req, res) {

    }
}

export default EmergencyController;
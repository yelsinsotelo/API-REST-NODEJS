import Equipment from '../models/Equipment'
import Group from '../models/Group'

class GroupController {
    static Index(req, res) {
        Group.find().exec().then(result => {
            res.status(200).json({
                success: true,
                data: {
                    message: "success",
                    items: result,
                    numItems: result.length,
                }
            })
        })
            .catch(error => {
                res.status(500).json({
                    success: true,
                    data: {
                        message: "error",
                        code: error,
                    }
                })
            })
    }
    static Store(req, res) {
        const grupo = new Group({
            name: req.body.group_name,
            equipments: req.body.group_item,
        })
        grupo.save().then(result => {
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
                success: true,
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
        Group.findById(req.params.id).exec().then(result => {
            result.name = req.body.group_name
            result.equipments = req.body.group_item
            result.save().then(result1 => {
                res.status(200).json({
                    success: true, 
                    data: {
                        message:'success',
                        code: result1,
                    }
                })
            })
            .catch(error => {
                res.status(500).json({
                    success: true, 
                    data: {
                        message:'error',
                        code: error,
                    }
                })
            })
        })
        .catch(error => {
            res.status(404
                ).json({
                success: true, 
                data: {
                    message:'error',
                    code: error,
                }
            })
        })
    }
    static Destroy(req, res) {
        Group.findByIdAndDelete(req.params.id).exec().then(result => {
            res.status(200).json({
                success:true,
                data : {
                    message : 'success',
                    code : result,
                }
            })
        })
        .catch(error => {
            res.status(200).json({
                success:true,
                data : {
                    message : 'error',
                    code : error,
                }
            })
        })
    }
}

export default GroupController;
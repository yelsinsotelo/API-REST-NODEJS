class AlarmaController {
    static get_status(req,res) {
        console.log(req.params);
        res.json({
            success : true,
            data: {
                name : "Yeltsin Sotelo Cammones",
                edad : 25,
            }
        })
    }
}

export default AlarmaController;
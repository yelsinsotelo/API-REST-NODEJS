import mongoose from 'mongoose'
mongoose.connect('mongodb://127.0.0.1:27017/securitydb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log("Base de Datos Conectada"))
.catch(error => console.log(error))



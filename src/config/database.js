import mongoose from 'mongoose'
mongoose.connect('mongodb://34.121.135.157:27017/securitydb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log("Se conectó correctamente"))
.catch(error => console.log(error))



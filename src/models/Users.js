import mongosse from 'mongoose';
const { Schema, model } = mongosse;

const UserSchema = new Schema({
    name:{type : String, required:true},
    address : {type : String, required:true},
    cellphone: {type : String, unique:true, required:true},
    idControl: {type: String, unique: true},
    idEquipment: {type:String, required:true},
    email: {type:String , required:true , unique:true},
    password: {type: String, required: true, unique:true},

},{timestamps:true,versionKey:false})


export default model('Users',UserSchema);
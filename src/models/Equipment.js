import { Schema, model} from 'mongoose';

const EquipmmentSchema = new Schema({
    ip:{type:String, unique:true, required:true},
    id_MCU:{type:String, unique:true , required:true},
    name: {type: String, required: true , default: null},
    numEquipment: {type:Number, required:true},
    latCenter: {type:String, default:null},
    lngCenter: {type:String, default:null},
    state: {type:String, default:'desconectado'},
    urlqr: {type:String, unique:true} ,
},{timestamps:true, versionKey:false})

export default model('Equipment', EquipmmentSchema);
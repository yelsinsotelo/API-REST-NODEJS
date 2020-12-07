import {Schema, model} from 'mongoose'

const EmergencySchema = new Schema({
    lat:{type: String, required:true, default: null},
    lng:{type: String, required:true, default: null},
    from:{type: String, required:true , default: null},
    state:{type: String, required:true, default: null} ,

},{timestamps:true, versionKey:false})

export default model('Emergency', EmergencySchema);
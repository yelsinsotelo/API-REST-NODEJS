import {Schema, model} from 'mongoose'

const EmergencySchema = new Schema({
    lat:{type:String, required:true},
    lng:{type:String, required:true},
    from:{type:String, required:true},
    state:{type:String, required:true},

},{timestamps:true, versionKey:true})

export default model('Emergency', EmergencySchema);
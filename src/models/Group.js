import {Schema, model} from 'mongoose';

const GroupSchema = new Schema({
    name: {type:String, required:true, unique:true},
    equipments: { type:Array, required:true}},{
        timestamps:true, versionKey:false
    }
)

export default model('Group', GroupSchema);
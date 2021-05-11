import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:true,
        default:'User'
    }
},{
    timestamps:true
})

export default model('User', UserSchema);
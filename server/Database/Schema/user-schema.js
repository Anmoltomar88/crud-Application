import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";

const userSchema= mongoose.Schema({
    _id:{ type:String , default:uuidv4 },
    Name:String,
    UserName:String,
    Email:String,
    Phone:String   
})

export const User = mongoose.model('User',userSchema);

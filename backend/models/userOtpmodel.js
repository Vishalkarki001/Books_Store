import mongoose, { Schema } from "mongoose";

const UserOtp=new Schema({
   
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    otp:{
        type:String,
       
    }
})
const userotpmodel=mongoose.model("userotps",UserOtp)
export {userotpmodel}
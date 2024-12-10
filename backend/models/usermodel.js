import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const Userschema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        // minlength:[6,"user name is too small"],
        // maxlength:[20,"user name is too big"]
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
        // min:[6,"password is to samll"],
        // maxlength:[12,"password is too big"]
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        // maxlength:[20,"email is too big"],
        // minlength:[8,"email is too small"]
    },
    number:{
        type:String,
        required: true,
      
        // minlength: [10,"Number is not valid"],
    },
    token:{
        Url:String,
    },
    image:{
     type:String,
    },
         watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        

      

},{
    timestamps:true
})

 Userschema.pre('save',async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10)
    next();
 })

 Userschema.methods.ispasswordcorrect = async function (password) {
    // Compare the password with the hashed password stored in DB
    return await bcrypt.compare(password, this.password);
  };

  //genrate token in instace method

Userschema.methods.genratetoken=async function(){
try {
  const token= jwt.sign({
 //this is fthe payload section
    userId:this._id.toString(),
    email:this.email,
 
   },
   //sercet key 
   process.env.ACCESS_TOKEN_SECRET ,
   {
    //expiry
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
   }
);
   this.token=token;
   await this.save();
   return token;
} catch (error) {
    console.log(error)
    
}

}
// Userschema.methods.generateRefreshToken =async function(){
//     try {
//    const token= jwt.sign(
//         {
//             _id: this._id,
            
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
//        // Store the token in the user instance and save
//        this.token = token;
//     await this.save(); // Don't forget to save the user with the updated token
   
    
//        res.cookie('token', token, {
     
//     });
//     return token;
       
// }catch(error){
//     console.log(error)
// }
// }

Userschema.methods.verifytoken=async function() {
    try {
        if(!this.token){
            throw new Error ("Acess not found for this user");
        }
      const decode= jwt.verify(this.token,process.env.ACCESS_TOKEN_SECRET);
        
     
    
        return decode;
        
    } catch (error) {
        console.log(error)
        console.log("user fail to verify")
        
    }
 
    
}


 const usermodel=mongoose.model("user",Userschema);
 export {usermodel};

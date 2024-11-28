 import { usermodel } from "../models/usermodel.js"
 import bcrypt from "bcrypt"
 

 const checkLoginStatus = (req, res) => {
    
    if (req.rootuser) {
        return res.json({ message: "User is logged in", user: req.rootuser });
    } else {
        return res.status(401).json({ message: "User is not logged in" });
    }
    
};

const forgotpasswordcontroller=async (req,res)=>{
    try{
        if(!req.rootuser._id){
            console.log("Error user id is not found ")
        }
 const user=await usermodel.findById(req.rootuser._id).select("+password");
if(!user){
    res.status(200).json({message:"user not found"})
}
console.log(req.body.email)
console.log(req.rootuser.email)
 console.log("this is the user details",user);


 if(req.body.email !== req.rootuser.email){

  return res.status(404).json({message:"the enter email is not varified"})

 }


user.password =req.body.password
console.log(req.rootuser.name)
const updated=await usermodel.updateOne(
    {_id:req.rootuser._id},
    {$set: {password:user.password}}
    
)


 console.log("updated passowrd",updated)
 await user.save();
 
 const jwttoken=await user.genratetoken();
 return res.status(200).json({message:"password update sucessfully ",result:{jwttoken}})
        
       
 
}
catch(error){
console.log(error)
}
}
export {forgotpasswordcontroller,checkLoginStatus}


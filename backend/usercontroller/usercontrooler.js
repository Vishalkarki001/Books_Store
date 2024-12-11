import { response } from "express";
import { usermodel } from "../models/usermodel.js";
import { userotpmodel } from "../models/userOtpmodel.js"
import nodemailer from "nodemailer"



// //email config
// const transpoter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.email,
//     pass: process.env.pass
//   },

// })


const usercontrol = async (req, res) => {

  const { name, email, password ,number} = req.body;

  //  console.log(req.file)
  //first check the user has no empty field

  if (
    [name, email, password].some((field) =>
      field?.trim() == "")
  ) {
    return res.status(200).json({ message: "all field is must required" });
  }
  //check user is already register or not

  const exitsuser = await usermodel.findOne({

    $or: [{ email }]
  })
  if (exitsuser) {
    return res.status(404).json({ message: "This Username Or email is already register" })
  }

  const user = await usermodel.create({

    name,
    email,
    password,
    number,


    // avatar:avatar.url,
    // coverimage:coverImage?.url || ""


  })



  return res.status(200).json({
    message: "user creatd sucessfully", user,
    token: await user.genratetoken(),
    userid: user._id.toString(),
  });


}
const userotpsend = async (req, res) => {
  const { email } = req.body;
  const checkemail = await usermodel.findOne({ email });
  if (!checkemail) {

    return res.status(400).json({ message: "This email is not found" })
  }

  const otpnumber = Math.floor(100000 + Math.random() * 900000)


  const exitsemail = await userotpmodel.findOne({ email: email })
  if (exitsemail) {
    //in this it will only update the jipt if the email is already resgister 
    const updateotp = await userotpmodel.findByIdAndUpdate({ _id: exitsemail._id }, { otp: otpnumber }, { new: true })

    await updateotp.save();
    return res.status(200).json({ message: "sucess" })

    // const mailoptions = {
    //   from: process.env.email,
    //   to: email,

    //   subject: "sending email for otp validation",
    //   text: `Your OTP is ${otpnumber}`
    // }
    // transpoter.sendMail(mailoptions, (error, info) => {
    //   if (error) {
    //     return res.status(404).json({ message: "erro in sent email" })
    //   } else {
    //     return res.status(200).json({ message: "sent otp in email" })
    //   }
    // })
  } else {
    //in this it create a new otp and saved with entered email
    const savedata = new userotpmodel({
      otp: otpnumber, email
    })
    await savedata.save()
  //   const mailoptions = {
  //     from: process.env.email,
  //     to: email,

  //     subject: "sending email for otp validation",
  //     text: `Your OTP is ${otpnumber}`
  //   }
  //   transpoter.sendMail(mailoptions, (error, info) => {
  //     if (error) {
  //       console.error("Error in sending email:", error);
  //       return res.status(404).json({ message: "erro in sent email" })
  //     } else {
  //       console.log("Email sent successfully:", info.response);
  //       return res.status(200).json({ message: "sent otp in email" ,info})
  //     }
  //   })
}



}
 
const checkuserotp =async (req,res)=>{
try {
  const {otp}=req.body;
  if(!otp){
    return res.status(400).json({ message: "plese enter the otp for login"})
  }
  const user=await usermodel.findOne({})
  const chekotp=await userotpmodel.findOne({otp});
  if(!chekotp){
    return res.status(404).json({ message: "Please enter  the valid otp" })
  }
  const jwttoken = await user.genratetoken();
 

  // Set cookie with the token
  res.cookie("token", jwttoken, {
      expires: new Date(Date.now() + 2592000000), // Token expires in 30 days
      httpOnly: true,
  });
  return res.status(200).json({ message: "You Sucessfully log in with otp",jwttoken })

  
} catch (error) {
  console.log(error)
  return res.status(404).json({ message: "Something went wrong" })

  
}}
            //User update

            const updateuser = async (req, res) => {
              const userid = req.rootuser._id;
              const { name, email, password, number } = req.body;
            
              try {
                // Update the name if provided
                if (name && name.trim()) {
                  const existingName = await usermodel.findOne({ name });
                  if (existingName) {
                    return res.status(400).json({ message: "This username is already registered" });
                  }
            
                  const updatedUser = await usermodel.findByIdAndUpdate(
                    userid,
                    { name },
                    { new: true }
                  );
            
                  if (!updatedUser) {
                    return res.status(404).json({ message: "User not found or name not updated" });
                  }
            
                  // Return success for name update
                  return res.status(200).json({
                    message: "User name was updated successfully",
                    updatedUser,
                  });
                }
            
                // Update the email if provided
                if (email && email.trim()) {
                  const existingEmail = await usermodel.findOne({ email });
                  if (existingEmail) {
                    return res.status(400).json({ message: "This email is already registered" });
                  }
            
                  const updatedEmail = await usermodel.findByIdAndUpdate(
                    userid,
                    { email },
                    { new: true }
                  );
            
                  if (!updatedEmail) {
                    return res.status(404).json({ message: "User not found or email not updated" });
                  }
            
                  // Return success for email update
                  return res.status(200).json({
                    message: "User email was updated successfully",
                    updatedEmail,
                  });
                }
            
                // If neither name nor email is provided
                return res.status(400).json({ message: "No valid fields provided for update" });
              } catch (err) {
                console.error(err);
                return res.status(500).json({ message: "An error occurred", error: err.message });
              }
            };
            




export { usercontrol, userotpsend,checkuserotp,updateuser}
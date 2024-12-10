import { usermodel } from "../models/usermodel.js";
import cloudnary from "../cloudnary.js"
import { upload } from "../middleware/multer.js";

 const uploadphoto = async (req, res) => {
  try {
 
    if(!req.file){
      return res.status(400).json({ message: "No file uploaded!" });
    }

  
   const result=await  cloudnary.uploader.upload(req.file.path)
   const imageUrl = result.secure_url;
   const userid=req.rootuser._id
   const updatedUser = await usermodel.findByIdAndUpdate(
    userid,
    { image: imageUrl },  
    { new: true }  
  );
 
   return res.status(200).json({
    message: "Upload successful!",
    result,updatedUser
  });

  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

const profilec = async (req, res) => {
  try {
  
    const user = await usermodel.findById(req.rootuser._id); 


   
    return res.status(200).json({ 
      message: "Profile fetched successfully", 
      user 
    });

  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export { uploadphoto,profilec };

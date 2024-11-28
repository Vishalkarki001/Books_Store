import jwt from "jsonwebtoken"
import { usermodel } from "../models/usermodel.js";



const islogin = async (req, res, next) => {
    try {
        // Check if the token is available in cookies
      
        const token = req.cookies.token; 
        if (!token) {
           
            return res.status(401).json({ message: "No token is provided" });
        }

        // Verify the token
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!verify){
            return res.status(400).json({message:"not verified"})
        }

        // Find the user by ID and token
        const rootuser = await usermodel.findOne({ "token": token });
       
        if (!rootuser) {
            return res.status(404).json({ message: "User not found" }); // Updated to 404
        }

        // Attach user info to the request
        req.token = token;
        req.rootuser = rootuser;
        req.rootuser.id=req.rootuser._id
       
        console.log("User is now found:", rootuser._id,rootuser); // Added user details for debugging

        next(); 
    } catch (error) {
        console.error("Unauthorized access:", error.message); // Log the actual error
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export { islogin}; // Export the middleware

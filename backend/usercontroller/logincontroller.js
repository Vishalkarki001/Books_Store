
import { usermodel } from "../models/usermodel.js";

const logincontroller = async (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }


    const user = await usermodel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.ispasswordcorrect(password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

   
    const jwttoken = await user.genratetoken();

    // Set cookie with the token
    res.cookie("token", jwttoken, {
        expires: new Date(Date.now() + 2592000000), // Token expires in 30 days
        httpOnly: true,
    });


    return res.status(200).json({
        message: "Login successful",
        user,
        token: jwttoken,
        userid: user._id.toString(),
    });
};
const logoutcontroller = async (req, res) => {
    try {

      if (req.cookies && req.cookies.token) {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
      } else {
   
        return res.status(400).json({ message: "User already logged out" });
      }
    } catch (error) {
      console.error("Error during logout:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
    
    

export { logincontroller,logoutcontroller };

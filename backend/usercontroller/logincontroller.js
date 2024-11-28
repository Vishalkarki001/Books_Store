
import { usermodel } from "../models/usermodel.js";

const logincontroller = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await usermodel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Check the password using the method you defined
    const isPasswordValid = await user.ispasswordcorrect(password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token (make sure this method is implemented correctly in your model)
    const jwttoken = await user.genratetoken();

    // Set cookie with the token
    res.cookie("token", jwttoken, {
        expires: new Date(Date.now() + 2592000000), // Token expires in 30 days
        httpOnly: true,
    });

    // Respond with success message and user data
    return res.status(200).json({
        message: "Login successful",
        user,
        token: jwttoken,
        userid: user._id.toString(),
    });
};

export { logincontroller };

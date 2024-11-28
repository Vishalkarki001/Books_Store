import Router from "express"
const router=Router()
import { islogin } from "../middleware/islogin.js";
import { checkuserotp, usercontrol} from "../usercontroller/usercontrooler.js"
import { logincontroller } from "../usercontroller/logincontroller.js";
import { usermodel } from "../models/usermodel.js";
import { contactcontrooler } from "../usercontroller/contact.js";
import { upload } from "../middleware/multer.js";
import { profilec} from "../usercontroller/profilecontoller.js";
import { bookcontroller } from "../usercontroller/bookcontroller.js";
import { forgotpasswordcontroller,checkLoginStatus } from "../usercontroller/forgotpassword.js";
import { freebookcontroller, getBooksController, getdeletebookcontroller } from "../usercontroller/freebooks.js";
import { userotpsend } from "../usercontroller/usercontrooler.js";




//in this eveything is done by controler
router.post('/singup',usercontrol);
router.post("/profile",upload.single('image'),profilec);
router.get("/profile/user",islogin,profilec);

router.route("/login").post(logincontroller);

router.get("/contact",islogin,contactcontrooler);
router.patch("/forgotpassword/reset",islogin,forgotpasswordcontroller)
router.get("/forgotpassword/verify",islogin,checkLoginStatus)
router.get("/about",bookcontroller)
router.get("/books",islogin,getBooksController)
router.post("/books",islogin,freebookcontroller)

router.get("/user/admin",islogin,getBooksController)
router.post("/user/admin/add",islogin,freebookcontroller)
router.post("/user/admin/delete",getdeletebookcontroller)
router.post("/user/login/otp",userotpsend)
router.get("/user/login/otp",userotpsend)
router.post("/user/login/otp/login",checkuserotp)
router.get("/user/login/otp/login",checkuserotp)




export default router;
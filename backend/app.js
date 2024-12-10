import express from "express";
const app=express();
import bodyparser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser";
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(bodyparser.json())
app.use(cookieParser());  

const corsoptions = {
    origin: "http://localhost:5174", // Allow requests from this origin
    methods: "GET, POST, PUT, PATCH, HEAD, DELETE", // Use methods (plural)
    credentials: true, // Allow credentials (cookies) to be sent
    allowedHeaders: ["Content-Type", "Authorization"], // Optional: specify headers you want to allow
};
app.use(cors(corsoptions))
app.options('*', cors(corsoptions));




app.get("/",(req,res)=>{
    res.send("this is the home page")
})
//import routes
import Userroute from './routers/userroutes.js'
app.use('/users',Userroute);


export {app};
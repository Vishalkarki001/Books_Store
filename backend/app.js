import express from "express";
const app=express();
import bodyparser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser";



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(cookieParser());
app.use(express.static('public'));
const corsoptions = {
    origin: "http://localhost:5173", // Allow requests from this origin
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
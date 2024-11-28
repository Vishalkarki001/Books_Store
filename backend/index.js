import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
}).parsed;
import { app } from "./app.js";


const port=process.env.PORT || 3002
//connection
import {connection} from "./db/index.js"
  connection();
app.listen(port,()=>{
    console.log(`server is start at port ${port}`)
})


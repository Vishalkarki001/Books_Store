import mongoose from "mongoose";



const connection=async function(){
    const dburl=process.env.dburl

    try{

   await mongoose.connect(dburl);
   console.log("database is connected")
    
    }catch(error){
        console.log(error.message)
    }
}

export {connection} ;

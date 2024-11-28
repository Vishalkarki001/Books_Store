
const profilec=async (req,res)=>{

try {
   
   return res.status(200).json({message:"this is the profile"})
} catch (error) {
   return res.status(404).json({message:"error"})
}
   

  
}
    
    export {profilec}
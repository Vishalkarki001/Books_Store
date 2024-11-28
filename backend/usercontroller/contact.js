

const contactcontrooler=async (req,res)=>{
try {
    console.log("user is now clear");
if(!req.rootuser){
    return res.status(400).json({message:"user not found "})
}
res.status(200).json(req.rootuser);
    
} catch (error) {
    
}
}

export {contactcontrooler}
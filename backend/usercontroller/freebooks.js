
import { freebookmodel } from "../models/freeboks.js";

const freebookcontroller=async(req,res)=>{
  const {name,authore,image}=req.body
  if(
   [name,authore,image].some((field)=>
     field?.trim() ==="")
 ){   return res.status(400).json({message:"all field is must required"});
 }

 const existbook=await freebookmodel.findOne({name:name.trim()})
 if(existbook){
   return res.status(400).json({ message: "The book already exists" });
 }
 const newbook=await freebookmodel.create({
   name,
   authore,
   image,
 })
return res.status(200).json({message:"the book store sucessfully",newbook})
}

//delete the book
const getdeletebookcontroller = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Please enter the book name" });
  }

  try {
    
    const bookdata = await freebookmodel.findOne({ name }); 
    if (!bookdata) {
      return res.status(404).json({ message: "Book not found" });
    }

  
    await freebookmodel.deleteOne({ name });

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Delete Book Error:", error); // Log error for debugging
    return res.status(500).json({ message: "An error occurred while deleting the book", error });
  }
};

const getBooksController =async (req,res)=>{
  try {
    const books =await freebookmodel.find({})
    return res.status(200).json(books)
    
  } catch (error) {
    return res.status(404).json(error)
    
  }
}

export {freebookcontroller}
export { getBooksController };
export {getdeletebookcontroller}
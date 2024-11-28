import { bookmodel } from "../models/booksmodels.js"

const bookcontroller=async (req,res)=>{
    try {
        const book= await bookmodel.find()
        res.status(200).json(book)
        
        
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        
    }


}
export {bookcontroller}
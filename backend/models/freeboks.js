import mongoose, { Schema } from "mongoose";


const freebooksSchema=new Schema({
    name:{
        type:String,
        unique:true
       },
    authore:{
        type:String,
        unique:true
       
    },
    image:{
        type:String,
        unique:true
    
    }
})
 const freebookmodel=new mongoose.model("freebooks",freebooksSchema)

//  const data = [
//     {
//       name: "The God of Small Things",
//       author: "Arundhati Roy",
//       image: "/src/images/freebooks/smallthings.jpg"
//     },
//     {
//       name: "Midnight's Children",
//       author: "Salman Rushdie",
//       image: "/src/images/freebooks/midnight.jpg"
//     },
//     {
//       name: "A Suitable Boy",
//       author: "Vikram Seth",
//       image: "/src/images/freebooks/sutableboy.jpg"
//     },
//     {
//       name: "The White Tiger",
//       author: "Aravind Adiga",
//       image: "/src/images/freebooks/white tiger.jpg"
//     },
//     {
//       name: "Interpreter of Maladies",
//       author: "Jhumpa Lahiri",
//       image: "/src/images/freebooks/maldivs.jpg"
//     },
//     {
//       name: "Train to Pakistan",
//       author: "Khushwant Singh",
//       image: "/src/images/freebooks/train.jpg"
//     },
 
//     {
//       name: "The Inheritance of Loss",
//       author: "Kiran Desai",
//       image: "/src/images/freebooks/loss.jpg"
//     },
//     {
//       name: "Malgudi Days",
//       author: "R.K. Narayan",
//       image: "/src/images/freebooks/malgudi.jpg"
//     },
//     {
//       name: "An Era of Darkness",
//       author: "Shashi Tharoor",
//       image: "/src/images/freebooks/darkness.jpg"
//     },
//     {
//       name: "The Guide",
//       author: "R.K. Narayan",
//       image: "/src/images/freebooks/guide.jpg"
//     },
//     {
//       name: "The Palace of Illusions",
//       author: "Chitra Banerjee Divakaruni",
//       image: "/src/images/freebooks/illusion.jpg"
//     },
//     {
//       name: "Shantaram",
//       author: "Gregory David Roberts",
//       image: "/src/images/freebooks/shantram.jpg"
//     },
  
//     {
//       name: "The Blue Umbrella",
//       author: "Ruskin Bond",
//       image: "/src/images/freebooks/umbrella.jpg"
//     },
//     {
//       name: "The Namesake",
//       author: "Jhumpa Lahiri",
//       image: "/src/images/freebooks/nameshake.jpg"
//     },

 
//     {
//       name: "The Immortals of Meluha",
//       author: "Amish Tripathi",
//       image: "/src/images/freebooks/melua.jpg"
//     },
//     {
//       name: "The Discovery of India",
//       author: "Jawaharlal Nehru",
//       image: "/src/images/freebooks/india.jpg"
//     }
//   ];
//   const insertBooks=async ()=>{
//     try {
//         for(let book of data){
//             await freebookmodel.updateOne(
//                 { name: book.name },  
//                 { $setOnInsert: book },
//                 { upsert: true }     
//               );
//         }
//         console.log("book insert sucessfuly")
        
//     } catch (error) {
//         console.log("there is an error ")

        
//     }
//   }
//   insertBooks();
  
   

export {freebookmodel}
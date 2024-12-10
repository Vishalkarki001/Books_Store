import mongoose, { Schema } from "mongoose";


const booksschema=new Schema({
    name:{
        type:String,
        
       },
    authore:{
        type:String,
       
    },
    image:{
        type:String,
    
    }
})

        
        const bookmodel=new mongoose.model("books",booksschema)
   
      const data=[
        {
          name:"The God of Small Things",
          authore:"Arundhati Roy",
          image:"/src/images/books1.jpeg"
        },
        {
          name:"The Great Indian Novel",
          authore:"Shashi Tharoor",
          image:"/src/images/book2.jpg"
        },
        {
          name:"A Suitable Boy",
          authore:"Vikram Seth",
          image:"/src/images/book3.jpg"
        },
        {
          name:"Ramayana",
          authore:"Valmiki ",
          image:"/src/images/book4.jpg"
        },
        {
          name:"Wings of Fire",
          authore:"Arun Kumar",
          image:"/src/images/book5.jpg"

        },
        {
          name:"Gitangali",
          authore:"Ravindra Nath Tagore",
          image:"/src/images/book6.jpg"

        },
    

   
    
      ];
      
      
      


      const insertBooks = async () => {
        try {
          for (let book of data) {
 
           await bookmodel.updateOne(
              { name: book.name },  
              { $setOnInsert: book },
              { upsert: true }     
            ); 
          }

        } catch (error) {
          console.error("Error inserting books:", error);
        }
      };
      insertBooks();
export {bookmodel};
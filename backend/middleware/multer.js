import multer from "multer";
import path from "path";

// Define storage options
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images"); // Destination directory
    },
    filename: function(req, file, cb) {
        const fname = Date.now() + path.extname(file.originalname); // Generate filename
    cb(null, fname);
    }
    
});

// Configure multer with storage options
const upload = multer({ storage:storage });


// Export the upload middleware
export { upload };

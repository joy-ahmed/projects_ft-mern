// Import necessary modules
import express from "express";
import multer from "multer";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
} from "../controllers/postController";
import { errorHandler } from "../middlewares/posterror";
import storage from "../utils/fileupload";

// Create a multer instance for file uploads
const upload = multer({ storage });

// Create an instance of Express Router
const router = express.Router();

// Define routes
router.get("/posts", getPosts); // Route to get all posts
router.post("/posts", upload.single("image"), createPost); // Route to create a new post with image upload
router.get("/post/:id", getSinglePost); // Route to get a single post by ID
router.put("/post/:id", updatePost); // Route to update a post by ID
router.delete("/post/:id", deletePost); // Route to delete a post by ID

// Apply error handling middleware
router.use(errorHandler);

// Export the router
export default router;

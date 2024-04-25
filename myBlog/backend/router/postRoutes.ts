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

//create multer instance
const upload = multer({ storage });

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", upload.single("image"), createPost);
router.get("/post/:id", getSinglePost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

//middlewares
router.use(errorHandler);

export default router;

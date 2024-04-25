import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
} from "../controllers/postController";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/post/:id", getSinglePost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;

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
router.get("/posts/:id", getSinglePost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;

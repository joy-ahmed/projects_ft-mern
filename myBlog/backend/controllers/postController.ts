import Post, { type IPost } from "../models/Post/post";
import { type Request, type Response } from "express";

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts: IPost[] = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
  //serach functionality
  // if(req.query.search){
  //   const filterPosts = await Post.find({
  //     title: { $regex: req.query.search, $options: "i" },
  //   })
  // }
};

export const getSinglePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post: IPost | null = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.file);
    const { title, description } = req.body;
    const newPost: Partial<IPost> = {
      title,
      description,
      image: req.file,
    };
    const savedPost = await Post.create(newPost);
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

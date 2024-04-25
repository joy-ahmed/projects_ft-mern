import { type Request, type Response } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User/User";
import passport from "../utils/passport-config";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    //check if username already exists
    const existingUser = await User.findOne({ username, email });
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!userCreated) {
      res.status(400).json({ message: "User not created" });
      return;
    }

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//get all users

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//sign in user
export const signInUser = async (
  req: Request,
  res: Response,
  next: any
): Promise<void> => {
  try {
    const { username, password } = req.body;
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!);
      //set totken inside cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ message: "User signed in successfully" });
    })(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

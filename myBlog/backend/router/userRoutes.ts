import express from "express";
import {
  createUser,
  getAllUsers,
  signInUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/register", createUser);
router.get("/users", getAllUsers);
router.post("/login", signInUser);

export default router;

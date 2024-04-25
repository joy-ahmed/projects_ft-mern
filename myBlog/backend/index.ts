import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./router/postRoutes";
import userRoutes from "./router/userRoutes";

import connectDB from "./utils/dbconnection";
import passport from "./utils/passport-config";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//! Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Passport Middleware
app.use(passport.initialize());

//! Database Connection
connectDB();

//! Routes
app.use("/api", postRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

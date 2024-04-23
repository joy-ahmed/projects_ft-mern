import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.log("MongoDB URL is not set in the environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";
import "dotenv/config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected`);
  } catch {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
};

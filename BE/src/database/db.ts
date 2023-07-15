import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

export default connectDatabase;

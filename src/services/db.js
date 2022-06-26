import { config } from "dotenv";

import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log("connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

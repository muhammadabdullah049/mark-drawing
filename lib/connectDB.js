import mongoose from "mongoose";

let connection = null;

export default async function connectDB() {
  try {
    if (connection?.readyState !== 1) {
      connection = await mongoose.connect(process.env.MONGODB_URI).then((conn) => conn.connection);
      console.log("DB connected");
    }
  } catch (error) {
    console.error("DB connection error:", error);
    throw new Error("Database connection failed");
  }
}

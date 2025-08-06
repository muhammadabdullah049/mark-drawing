// models/Otp.ts
import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "5m" }, // OTP expires in 5 minutes
});

export default mongoose.models.Otp || mongoose.model("Otp", OtpSchema);
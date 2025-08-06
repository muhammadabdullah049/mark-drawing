import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    logo: { type: mongoose.Schema.Types.ObjectId, ref: "MyLogos" },
    address: { type: String },
    failedAttempts: { type: Number, default: 0 },
    lastFailedAttempt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import connectDB from "@/lib/connectDB";
import Otp from "@/lib/models/Otp";

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "gvam1207.siteground.biz",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "info@nameyourlogo.com",
      pass: process.env.SMTP_PASSWORD || "#|&e15.4{14e",
    },
    logger: true, // Enable logging
    debug: true, // Enable debugging
});

export async function POST(request) {
  await connectDB();

  const { email } = await request.json();

  try {
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false, // Exclude lowercase alphabets
      upperCaseAlphabets: false, // Exclude uppercase alphabets
      specialChars: false,
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Your OTP for Sign Up",
      text: `Your OTP is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    // Store the OTP in MongoDB
    await Otp.findOneAndUpdate(
      { email },
      { otp, createdAt: new Date() },
      { upsert: true, new: true }
    );

    console.log("OTP stored in MongoDB for email:", email); // Debugging

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    // ✅ Ensure `error` is an instance of `Error`
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send OTP", details: error.message },
        { status: 500 }
      );
    }
  }
}

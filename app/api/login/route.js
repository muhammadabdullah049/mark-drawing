import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectDB from "@/lib/connectDB";
import User from "@/lib/models/User";
import { sendEmail } from "@/lib/sendEmail";

// In-memory storage for failed login attempts
const failedAttempts = {};

export async function POST(request) {
  await connectDB();

  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Increment failed attempts in the database
      user.failedAttempts += 1;
      user.lastFailedAttempt = new Date();
      await user.save();

      // Send email if failed attempts reach the threshold (e.g., 3)
      if (user.failedAttempts >= 3) {
        await sendEmail(
          email,
          "Failed Login Attempts",
          `You have had ${user.failedAttempts} failed login attempts. Please contact support if this was not you.`
        );
      }

      return NextResponse.json(
        { error: "Invalid password", attempts: user.failedAttempts },
        { status: 401 }
      );
    }

    // Reset failed attempts on successful loginF
    user.failedAttempts = 0;
    await user.save();

    // Reset failed attempts on successful login
    failedAttempts[email] = 0;

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      {
        // expiresIn: "2d", // Token expires in 2 days
      }
    );

    // Convert the full user object to a plain JavaScript object
    const userObject = user.toObject();

    // Remove sensitive fields (e.g., password) before storing in cookies
    delete userObject.password;

    // Serialize the user object to JSON
    const userDataString = JSON.stringify(userObject);

    // Set cookies (expire in 2 days = 172800 seconds)
    const maxAge = 2 * 24 * 60 * 60; // 2 days in seconds

    // Set the token in a cookie
    (await cookies()).set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge, // 2 days
      path: "/",
    });

    // Set the full user data in a cookie
    (await cookies()).set("userData", userDataString, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge, // 2 days
      path: "/",
    });

    // Return the token and user data in the response
    return NextResponse.json({ token, user: userObject }, { status: 200 });
  } catch (error) {
    console.error("Error logging in:", error); // Log the error
    return NextResponse.json({ error: "Error logging in" }, { status: 500 });
  }
}

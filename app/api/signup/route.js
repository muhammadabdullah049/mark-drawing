import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectDB";
import User from "@/lib/models/User";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"; // For generating JWT tokens

export async function POST(request) {
  await connectDB();

  const { username, email, password, role, address } = await request.json();

  try {

    // Check if the email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Check if the username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json(
        { error: "Username is in used" },
        { status: 400 }
      );
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      role,
      address,
      password: hashedPassword,
    });
    await user.save();

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET, // Use a secret key from environment variables
      // { expiresIn: "2d" } // Token expires in 1 hour
    );

    // Set the token and user data in cookies
    const cookieStore = cookies();
    (await cookieStore).set("authToken", token, {
      httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Ensure cookies are only sent over HTTPS in production
      // maxAge: 172800, // 2 days in seconds (60 * 60 * 24 * 2)
      path: "/", // Accessible across the entire site
    });

    (await cookieStore).set(
      "userData",
      JSON.stringify({ email: user.email, role: user.role }),
      {
        httpOnly: false, // Allow client-side JavaScript to access user data
        secure: process.env.NODE_ENV === "production",
        // maxAge: 172800, // 2 days in seconds (60 * 60 * 24 * 2)
        path: "/",
      }
    );

    return NextResponse.json(
      {
        message: "User created successfully",
        user: { email: user.email, role: user.role },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error signing up:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}

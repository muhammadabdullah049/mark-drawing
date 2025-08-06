import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import User from "@/lib/models/User"

export async function POST(request) {
  await connectDB()

  const { email } = await request.json()

  try {
    const existingUser = await User.findOne({ email })
    return NextResponse.json({ exists: !!existingUser }, { status: 200 })
  } catch (error) {
    console.error("Error checking email:", error)
    return NextResponse.json(
      { error: "Error checking email", exists: false },
      { status: 500 }
    )
  }
}
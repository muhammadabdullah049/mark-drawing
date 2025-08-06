import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import Otp from "@/lib/models/Otp"

export async function POST(request) {
  await connectDB()

  try {
    const { email, otp } = await request.json()

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      )
    }

    // Fetch the OTP from MongoDB
    const otpRecord = await Otp.findOne({ email })

    if (!otpRecord) {
      return NextResponse.json(
        { error: "OTP expired or not found" },
        { status: 404 }
      )
    }

    if (otpRecord.otp !== otp) {
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      )
    }

    // Clear the OTP from MongoDB after verification
    await Otp.deleteOne({ email })

    return NextResponse.json(
      { message: "OTP verified successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error verifying OTP:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
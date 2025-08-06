// app/api/send-email/route.ts
import { sendEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Received request to send email");

    const { email, subject, message } = await request.json();
    console.log("Received request to send email");


    if (!email || !subject || !message) {
        console.error("Missing required fields");

      return NextResponse.json(
        { error: "Email, subject, and message are required" },
        { status: 400 }
      );
    }
    console.log("Sending email...");

    // Send email using the reusable function
    await sendEmail(email, subject, message);

    console.log("Email sent successfully");


    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
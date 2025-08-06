import nodemailer from "nodemailer";

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

transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP connection error:", error);
    } else {
      console.log("SMTP connection successful:", success);
    }
  });
// Send email
export const sendEmail = async (
  email,
  subject,
  message
) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`, // Optional: Add HTML version of the email
  };

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to handle it in the API route
  }

  await transporter.sendMail(mailOptions);
};

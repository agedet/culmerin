import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SCRIPT_URL = process.env.GOOGLE_SHEET_SCRIPT_URL;

export async function POST(req: Request) {
  
  try {
    const formData = await req.json();

    // Send form data to Google Sheets
    const sheetResponse = await fetch(SCRIPT_URL || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const sheetData = await sheetResponse.json();

    if (!sheetData.success) {
      throw new Error(`Google Sheets Error: &{sheetData.error}`);
    }

    // Send confirmation email
    await sendConfirmationEmail(formData.email, formData.firstName);

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: `Submission failed: - error: ${error}` }, { status: 500 });
  }
}

// Function to send email using Nodemailer
async function sendConfirmationEmail(email: string, firstName: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });
  try {
    const mailOptions = {
      from: `"Culmerin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Booking Confirmation",
      text: `Hello ${firstName},\n\nThank you for booking a call with us! We will contact you soon.\n\nBest regards,\nCulmerin`,
    };

    // const info = await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Failed to send confirmation - error: ${error}`);
  }
}

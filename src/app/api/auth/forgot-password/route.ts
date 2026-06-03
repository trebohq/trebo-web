import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // In a real production app, you would:
    // 1. Check if user exists
    // 2. Generate a reset token
    // 3. Send an email via SMTP or service like Resend
    
    return NextResponse.json({ 
      message: "Password reset email sent" 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

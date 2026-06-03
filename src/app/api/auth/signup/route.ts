import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, businessName } = body;

    if (!email || !password || !businessName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Save the user and business to the database
    
    return NextResponse.json({ 
      message: "Registration successful",
      user: { email, businessName, id: "user_123" } 
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

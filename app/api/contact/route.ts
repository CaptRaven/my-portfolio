import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, projectType, budget } = body;

    // Validate (simple check)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would integrate with EmailJS, SendGrid, or save to DB.
    // For this demo, we'll simulate a delay and success.
    
    console.log("Contact form submission:", { name, email, projectType, budget, message });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

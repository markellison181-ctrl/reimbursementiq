import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY not configured");
      return NextResponse.json(
        { error: "Subscription service temporarily unavailable." },
        { status: 500 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Add contact to SendGrid
    const sgResponse = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contacts: [
          {
            email: cleanEmail,
            ...(name && { first_name: name }),
          },
        ],
      }),
    });

    if (!sgResponse.ok) {
      const errorData = await sgResponse.text();
      console.error("SendGrid error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email (fire and forget)
    const baseUrl = request.nextUrl.origin;
    fetch(`${baseUrl}/api/email/welcome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cleanEmail, name }),
    }).catch((err) => console.error("Welcome email trigger failed:", err));

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to ReimbursementIQ!",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

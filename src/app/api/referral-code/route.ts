import { NextRequest, NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || "";
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID || "";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const sub = data.data?.[0];

    if (sub?.referral_code) {
      return NextResponse.json({ referral_code: sub.referral_code });
    }

    return NextResponse.json({ referral_code: null });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}

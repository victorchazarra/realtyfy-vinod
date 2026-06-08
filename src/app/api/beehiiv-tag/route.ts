import { NextRequest, NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(req: NextRequest) {
  try {
    const { email, tag } = await req.json();

    if (!email || !tag) {
      return NextResponse.json({ error: "email and tag required" }, { status: 400 });
    }

    const validTags = ["optin-ppc", "optin-seo", "optin-social", "optin-growth"];
    if (!validTags.includes(tag)) {
      return NextResponse.json({ error: "invalid tag" }, { status: 400 });
    }

    // Find subscriber by email
    const searchRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const searchData = await searchRes.json();
    const subscriber = searchData?.data?.[0];

    if (!subscriber) {
      return NextResponse.json({ error: "subscriber not found" }, { status: 404 });
    }

    // Add tag
    const tagRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions/${subscriber.id}/tags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tags: [tag] }),
      }
    );

    if (!tagRes.ok) {
      const errText = await tagRes.text();
      console.error("Beehiiv tag error:", errText);
      return NextResponse.json({ error: "failed to tag" }, { status: 500 });
    }

    return NextResponse.json({ success: true, tag });
  } catch (e) {
    console.error("Tag error:", e);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

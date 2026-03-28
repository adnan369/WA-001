import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// 1. GET: Site settings fetch karne ke liye
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("detroit_db");
    const settings = await db.collection("config").findOne({ id: "site_settings" });
    
    return NextResponse.json(settings || { status: "default" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "DB_FETCH_FAILED" }, { status: 500 });
  }
}

// 2. POST: God Mode se settings update karne ke liye
export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("detroit_db");

    // "God Mode" Protection: PIN verify karein (Environment variable se)
    if (body.adminPin !== process.env.ADMIN_PIN) {
      return NextResponse.json({ error: "UNAUTHORIZED_ACCESS" }, { status: 401 });
    }

    const updatedConfig = {
      primaryColor: body.primaryColor,
      secondaryColor: body.secondaryColor,
      gridOpacity: body.gridOpacity,
      blurStrength: body.blurStrength,
      lastUpdated: new Date()
    };

    await db.collection("config").updateOne(
      { id: "site_settings" },
      { $set: updatedConfig },
      { upsert: true }
    );

    return NextResponse.json({ message: "DETROIT_SYSTEM_UPDATED" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "SAVE_FAILED" }, { status: 500 });
  }
}

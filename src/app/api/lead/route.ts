import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

const ALLOWED_SERVICES = new Set([
  "AC Repair",
  "AC Installation",
  "AC Replacement",
  "AC Maintenance",
  "Emergency AC Repair",
  "Heating & Furnace Repair",
  "Heat Pump Services",
  "Duct Cleaning",
  "Ductwork Repair & Installation",
  "Indoor Air Quality",
  "Thermostat Installation",
  "Commercial HVAC",
  "Other / Not Sure",
]);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(body.name);
  const phone = str(body.phone);
  const email = str(body.email);
  const service = str(body.service);
  const propertyType = str(body.propertyType) || "Residential";
  const message = str(body.message);
  const source = str(body.source) || "website";
  const page = str(body.page) || "/";

  const errors: string[] = [];
  if (name.length < 2 || name.length > 120) errors.push("Name is required.");
  if (phone.replace(/\D/g, "").length < 10) errors.push("A valid phone number is required.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("Email is invalid.");
  if (message.length > 2000) errors.push("Message is too long.");
  if (!["Residential", "Commercial"].includes(propertyType))
    errors.push("Property type is invalid.");

  if (errors.length) {
    return NextResponse.json({ ok: false, message: errors.join(" ") }, { status: 422 });
  }

  try {
    await db.insert(leads).values({
      name: name.slice(0, 120),
      phone: phone.slice(0, 32),
      email: email ? email.slice(0, 160) : null,
      service: (ALLOWED_SERVICES.has(service) ? service : "Other / Not Sure").slice(0, 120),
      propertyType,
      message: message ? message.slice(0, 2000) : null,
      source: source.slice(0, 80),
      page: page.slice(0, 400),
    });
  } catch (err) {
    console.error("[lead] insert failed", err);
    return NextResponse.json(
      {
        ok: false,
        message: "We could not log your request right now. Please call (239) 765-4321.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Your request is logged. A Naples Air Experts coordinator will call you back shortly at the number you provided.",
  });
}

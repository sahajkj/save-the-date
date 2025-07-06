// src/app/api/invite/route.ts
import { NextResponse } from "next/server";
import ical from "ical-generator";

export async function GET() {
  // 1) Build the calendar & event
  const cal = ical({
    // domain: "wedding.example.com",      // change to your domain
    name: "Anna & Sahaj Wedding",
  });

  cal.createEvent({
    start: new Date(Date.UTC(2025, 11, 28)),   // Dec 28, 2025 (all-day)
    end:   new Date(Date.UTC(2025, 11, 29)),   // through Dec 28
    summary: "Anna & Sahaj Wedding Celebration",
    description: "Join us in Bengaluru, India for our wedding on December 28, 2025!",
    location: "Bengaluru, India",
    allDay: true,
    organizer: {
      name: "Anna & Sahaj",
      email: process.env.EMAIL_FROM || "no-reply@wedding.test",
    },
  });

  const ics = cal.toString();

  // 2) Return it with download headers
  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="invite.ics"',
    },
  });
}

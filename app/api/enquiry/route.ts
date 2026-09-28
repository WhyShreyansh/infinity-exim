import { NextRequest, NextResponse } from "next/server";
import { EnquiryPayload } from "@/lib/storage";
import { sendNotificationEmail } from "@/lib/email";
import { saveLeadToGoogleSheet, LeadType } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot Spam Check
    if (body.website || body.honeypot || body.hp) {
      console.warn("[SPAM BLOCKED] Honeypot field triggered");

      return NextResponse.json(
        {
          success: true,
          message: "Enquiry received",
          enquiryId: "EXIM-SPAM-0000",
        },
        { status: 200 }
      );
    }

    // 2. Validate Required Fields
    const { fullName, email, product, message } = body;

    if (!fullName || !email || !product || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill in all required fields: Full Name, Business Email, Product, and Message.",
        },
        { status: 400 }
      );
    }

    // 3. Detect whether this is Contact or Quote
    //
    // We check both:
    // - body.type
    // - body.sourcePage
    //
    // This fixes the situation where the Contact form
    // doesn't explicitly send type: "Contact".

    const sourcePage = String(body.sourcePage || "").trim();

    const type: LeadType =
      body.type === "Contact" ||
      sourcePage === "/contact" ||
      sourcePage.startsWith("/contact?")
        ? "Contact"
        : "Quote";

    console.log(`[ENQUIRY TYPE] ${type} | Source: ${sourcePage}`);

    // 4. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid business email address.",
        },
        { status: 400 }
      );
    }

    // 5. Generate unique enquiry ID
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(100 + Math.random() * 900);

    const enquiryId = `EXIM-2026-${timestamp}${random}`;

    // 6. Date and time
    const now = new Date();

    const dateStr = now.toISOString().split("T")[0];
    const timeStr = now.toTimeString().split(" ")[0];

    // 7. Build enquiry payload
    const payload: EnquiryPayload & { type: LeadType } = {
      enquiryId,
      date: dateStr,
      time: timeStr,

      type,

      fullName: String(fullName).trim(),

      companyName: String(body.companyName || "").trim(),

      email: String(email).trim().toLowerCase(),

      phone: String(body.phone || "").trim(),

      country: String(body.country || "").trim(),

      product: String(product).trim(),

      quantity: String(body.quantity || "").trim(),

      destination: String(body.destination || "").trim(),

      packaging: String(body.packaging || "").trim(),

      timeline: String(body.timeline || "").trim(),

      additionalSpecs: String(body.additionalSpecs || "").trim(),

      message: String(message).trim(),

      sourcePage:
        sourcePage ||
        (type === "Contact"
          ? "/contact"
          : "/request-a-quote"),

      status: "New",
    };

    // 8. Send email
    const emailed = await sendNotificationEmail(payload);

    // 9. Save to Google Sheets
    const sheetSaved = await saveLeadToGoogleSheet({
      date: dateStr,
      type,

      fullName: payload.fullName,

      companyName: payload.companyName,

      email: payload.email,

      phone: payload.phone,

      country: payload.country,

      product: payload.product,

      quantity: payload.quantity,

      destination: payload.destination,

      packaging: payload.packaging,

      timeline: payload.timeline,

      additionalSpecs: payload.additionalSpecs,

      message: payload.message,
    });

    console.log(
      `[ENQUIRY RESULT] Type: ${type} | Email: ${emailed} | Google Sheet: ${sheetSaved}`
    );

    // 10. Success if either service worked
    if (!emailed && !sheetSaved) {
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't complete the submission right now. Please try again or contact us directly at INFINYEXIM01@GMAIL.COM.",
        },
        { status: 500 }
      );
    }

    // 11. Successful response
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received",
        enquiryId: payload.enquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API ENQUIRY EXCEPTION]:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't complete the submission right now. Please try again or contact us directly at INFINYEXIM01@GMAIL.COM.",
      },
      { status: 500 }
    );
  }
}
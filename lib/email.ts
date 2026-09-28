import { EnquiryPayload } from "./storage";

export async function sendNotificationEmail(payload: EnquiryPayload): Promise<boolean> {
  const apiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_EMAIL || "INFINYEXIM01@GMAIL.COM";
  const subject = `New INFINITY EXIM Enquiry — ${payload.product} — ${payload.companyName || payload.fullName}`;

  const textBody = `
New INFINITY EXIM Enquiry Received
----------------------------------------
Enquiry ID: ${payload.enquiryId}
Date: ${payload.date} ${payload.time}
Source Page: ${payload.sourcePage || "Direct Form"}

CONTACT DETAILS:
- Name: ${payload.fullName}
- Company: ${payload.companyName || "N/A"}
- Email: ${payload.email}
- Phone: ${payload.phone || "N/A"}
- Country: ${payload.country || "N/A"}

REQUIREMENT SPECIFICATIONS:
- Product/Commodity: ${payload.product}
- Quantity/Volume: ${payload.quantity || "N/A"}
- Destination Port/City: ${payload.destination || "N/A"}
- Packaging Requirement: ${payload.packaging || "N/A"}
- Target Timeline: ${payload.timeline || "N/A"}
- Additional Specifications: ${payload.additionalSpecs || "N/A"}

MESSAGE / REQUIREMENT:
${payload.message}

Status: ${payload.status}
----------------------------------------
INFINITY EXIM Lead Generation System
  `.trim();

  // If Resend API Key is set in environment, send via Resend REST API
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          from: "INFINITY EXIM System <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: subject,
          text: textBody
        })
      });

      if (res.ok) {
        console.log(`[EMAIL SUCCESS] Notification dispatched for ${payload.enquiryId}`);
        return true;
      } else {
        const errorText = await res.text();
        console.error(`[EMAIL ERROR] Resend API response error:`, errorText);
        return false;
      }
    } catch (err) {
      console.error(`[EMAIL ERROR] Failed to send email:`, err);
      return false;
    }
  }

  // Fallback mode for local dev when EMAIL_API_KEY is not set
  console.log(`[EMAIL DISPATCH SIMULATED] Key not configured. Target: ${recipientEmail}`);
  console.log(textBody);
  return true;
}

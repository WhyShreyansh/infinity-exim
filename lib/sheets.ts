import { google } from "googleapis";

export type LeadType = "Contact" | "Quote";

export interface SheetLead {
  date: string;
  type: LeadType;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  destination: string;
  packaging: string;
  timeline: string;
  additionalSpecs: string;
  message: string;
}

export async function saveLeadToGoogleSheet(
  lead: SheetLead
): Promise<boolean> {
  try {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const clientEmail = process.env.SPREADSHEET_CLIENT_EMAIL;
    const privateKey = process.env.SPREADSHEET_PRIVATE_KEY;

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.error("[SHEETS ERROR] Missing Google Sheets environment variables");
      return false;
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            lead.date,
            lead.type,
            lead.fullName,
            lead.companyName,
            lead.email,
            lead.phone,
            lead.country,
            lead.product,
            lead.quantity,
            lead.destination,
            lead.packaging,
            lead.timeline,
            lead.additionalSpecs,
            lead.message,
          ],
        ],
      },
    });

    console.log("[SHEETS SUCCESS] Lead added to Google Sheets");
    return true;
  } catch (error) {
    console.error("[SHEETS ERROR]", error);
    return false;
  }
}
import fs from "fs";
import path from "path";

export interface EnquiryPayload {
  enquiryId: string;
  date: string;
  time: string;
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
  additionalSpecs?: string;
  message: string;
  sourcePage?: string;
  status: string;
}

const LEADS_FILE_PATH = path.join(process.cwd(), "data", "leads.csv");

const CSV_HEADER = [
  "Submission ID",
  "Date",
  "Time",
  "Full Name",
  "Company",
  "Business Email",
  "Phone",
  "Country",
  "Product",
  "Quantity",
  "Destination",
  "Packaging",
  "Timeline",
  "Additional Specifications",
  "Message",
  "Source Page",
  "Status"
].join(",") + "\n";

/**
 * Escapes CSV field values for safe Excel/CSV storage
 */
function escapeCsvField(val?: string): string {
  if (!val) return '""';
  const clean = val.replace(/"/g, '""').replace(/\r?\n/g, " ");
  return `"${clean}"`;
}

/**
 * Appends lead payload to local CSV file (compatible with Excel & Google Sheets import)
 */
export async function saveLeadToCsv(payload: EnquiryPayload): Promise<boolean> {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    if (!fs.existsSync(LEADS_FILE_PATH)) {
      fs.writeFileSync(LEADS_FILE_PATH, CSV_HEADER, "utf-8");
    }

    const row = [
      escapeCsvField(payload.enquiryId),
      escapeCsvField(payload.date),
      escapeCsvField(payload.time),
      escapeCsvField(payload.fullName),
      escapeCsvField(payload.companyName),
      escapeCsvField(payload.email),
      escapeCsvField(payload.phone),
      escapeCsvField(payload.country),
      escapeCsvField(payload.product),
      escapeCsvField(payload.quantity),
      escapeCsvField(payload.destination),
      escapeCsvField(payload.packaging),
      escapeCsvField(payload.timeline),
      escapeCsvField(payload.additionalSpecs || ""),
      escapeCsvField(payload.message),
      escapeCsvField(payload.sourcePage || "/request-a-quote"),
      escapeCsvField(payload.status || "New")
    ].join(",") + "\n";

    fs.appendFileSync(LEADS_FILE_PATH, row, "utf-8");
    console.log(`[STORAGE SUCCESS] Lead ${payload.enquiryId} saved to ${LEADS_FILE_PATH}`);
    return true;
  } catch (err) {
    console.error("[STORAGE ERROR] Failed to save lead to CSV:", err);
    return false;
  }
}

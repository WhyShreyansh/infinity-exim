export interface Service {
  id: string;
  number: string;
  title: string;
  shortCopy: string;
  fullCopy: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "service-export-import",
    number: "01",
    title: "Export & Import Services",
    shortCopy: "Support around international trade requirements, sourcing and coordination.",
    fullCopy: "INFINITY EXIM assists international buyers and trade partners with export and import requirements. We help navigate cross-border trade documentation, commercial terms, and sourcing alignment from India.",
    features: [
      "International trade document coordination",
      "Commercial contract alignment",
      "Sourcing specifications verification",
      "Cross-border transaction support"
    ],
    ctaText: "Explore Export & Import",
    ctaHref: "/request-a-quote?service=export-import"
  },
  {
    id: "service-logistics-support",
    number: "02",
    title: "Logistics Support",
    shortCopy: "Coordination that connects the commercial requirement with the movement of goods.",
    fullCopy: "Operating near Mundra Port, Gujarat, we coordinate ground movement, container stuffing, port handling, and warehousing alignment to move commodities efficiently from source to vessel.",
    features: [
      "Mundra Port area coordination",
      "Stuffing & packaging supervision alignment",
      "Local haulage & inland transit tracking",
      "Cargo readiness verification"
    ],
    ctaText: "Discuss Logistics",
    ctaHref: "/request-a-quote?service=logistics"
  },
  {
    id: "service-freight-services",
    number: "03",
    title: "Freight Services",
    shortCopy: "Freight enquiries handled around cargo, destination and shipment requirements.",
    fullCopy: "We handle maritime and ocean freight enquiries tailored to your cargo volume, container specifications, target port of discharge, and delivery timeline requirements.",
    features: [
      "FCL & LCL maritime freight enquiries",
      "Destination port alignment",
      "Shipping line option coordination",
      "Schedule & transit time assessment"
    ],
    ctaText: "Enquire for Freight",
    ctaHref: "/request-a-quote?service=freight"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement",
    description: "Buyer defines target commodity, volume, grade, packaging, and destination port."
  },
  {
    step: "02",
    title: "Discussion",
    description: "INFINITY EXIM evaluates sourcing options, logistics feasibility, and trade terms."
  },
  {
    step: "03",
    title: "Quote",
    description: "Commercial pricing and agreed shipping schedules are presented based on real specifications."
  },
  {
    step: "04",
    title: "Coordination",
    description: "Packaging, port clearance, and container movement are supervised from India."
  },
  {
    step: "05",
    title: "Shipment",
    description: "Vessel dispatch and trade documentation tracking until destination port arrival."
  }
];

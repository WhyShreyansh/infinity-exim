export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  description: string;
  email: string;
  location: {
    city: string;
    district: string;
    state: string;
    country: string;
    addressString: string;
    port: string;
  };
  contacts: ContactPerson[];
  workingHours: string;
  social: {
    linkedin?: string;
    whatsapp?: string;
  };
}

export const COMPANY_DATA: CompanyConfig = {
  name: "INFINITY EXIM",
  legalName: "INFINITY EXIM",
  tagline: "GLOBAL TRADE, MADE CLEARER.",
  positioning: "A modern India-based B2B commodity sourcing and international trade partner.",
  description: "INFINITY EXIM connects international buyers with commodities sourced from India, backed by practical export, logistics and freight coordination.",
  email: "admin@infinityexim.net",
  location: {
    city: "Mundra",
    district: "Kutch",
    state: "Gujarat",
    country: "India",
    addressString: "Mundra, Kutch, Gujarat, India",
    port: "Mundra Port, Gujarat, India"
  },
  contacts: [
    {
      name: "Khalid Sama",
      role: "Primary Commercial Lead",
      phone: "+91 84605 68211",
      whatsapp: "+918460568211",
      email: "INFINYEXIM01@GMAIL.COM"
    },
    {
      name: "Khush Mehta",
      role: "Trade & Logistics Coordinator",
      phone: "+91 94296 50248",
      whatsapp: "+919429650248",
      email: "INFINYEXIM01@GMAIL.COM"
    }
  ],
  workingHours: "Monday - Saturday: 09:00 - 18:00 IST (UTC+5:30)",
  social: {
    whatsapp: "https://wa.me/918460568211"
  }
};

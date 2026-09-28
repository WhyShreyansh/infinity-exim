"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

interface EnquiryFormProps {
  initialProduct?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialProduct,
}) => {
  const searchParams = useSearchParams();

  const urlProduct =
    searchParams.get("product") ||
    searchParams.get("commodity") ||
    initialProduct ||
    "";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    quantity: "",
    destination: "",
    packaging: "",
    timeline: "",
    additionalSpecs: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedEnquiryId, setSubmittedEnquiryId] =
    useState<string | null>(null);

  // Sync initial or URL product parameter
  useEffect(() => {
    if (urlProduct) {
      const matched = PRODUCTS_DATA.find(
        (p) =>
          p.slug === urlProduct ||
          p.name.toLowerCase() === urlProduct.toLowerCase()
      );

      if (matched) {
        setFormData((prev) => ({
          ...prev,
          product: matched.name,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          product: urlProduct,
        }));
      }
    }
  }, [urlProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg(null);

    try {
      const sourcePage =
        typeof window !== "undefined"
          ? window.location.pathname
          : "/request-a-quote";

      const res = await fetch("/api/enquiry", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          // IMPORTANT:
          // This form is the Request a Quote form.
          type: "Quote",

          sourcePage,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmittedEnquiryId(
          data.enquiryId || "EXIM-2026-SUCCESS"
        );
      } else {
        setErrorMsg(
          data.message ||
            "We couldn't complete the submission right now. Please try again or contact us directly at INFINYEXIM01@GMAIL.COM."
        );
      }
    } catch (err) {
      console.error("Form submit error:", err);

      setErrorMsg(
        "We couldn't complete the submission right now. Please try again or contact us directly at INFINYEXIM01@GMAIL.COM."
      );
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS STATE
  if (submittedEnquiryId) {
    return (
      <div className="bg-[#FFFFFF] border border-[#B87952] rounded-md p-8 sm:p-12 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-[#102A43] text-[#B87952] rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B87952] bg-[#F7F5EF] px-3 py-1 rounded border border-[#D8C9B5]">
            REFERENCE ID: {submittedEnquiryId}
          </span>

          <h2 className="text-3xl font-black text-[#102A43] mt-4">
            Enquiry received.
          </h2>

          <p className="text-sm text-[#64748B] mt-3 max-w-lg mx-auto leading-relaxed">
            Thank you for reaching out to INFINITY EXIM. We&apos;ve
            received your requirement details and our commercial team
            will review them promptly.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#102A43] hover:bg-[#1E3A5F] text-[#F7F5EF] px-6 py-3.5 rounded-sm text-sm font-semibold tracking-wide transition-all shadow-md"
          >
            Back to Home
          </Link>

          <Link
            href="/commodities"
            className="w-full sm:w-auto bg-[#F7F5EF] hover:bg-[#D8C9B5]/40 text-[#102A43] border border-[#D8C9B5] px-6 py-3.5 rounded-sm text-sm font-semibold tracking-wide transition-all"
          >
            Explore Commodities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFFFFF] border border-[#D8C9B5]/60 rounded-md p-6 sm:p-10 shadow-xl space-y-6"
    >
      {/* Hidden Spam Protection Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Error */}
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-sm flex items-start space-x-3 text-xs leading-relaxed">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />

          <span>{errorMsg}</span>
        </div>
      )}

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Alexander Vance"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            placeholder="e.g. Global Trading House LLC"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Business Email *
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Phone / WhatsApp
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Country & Product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Country / Region
          </label>

          <input
            type="text"
            name="country"
            placeholder="e.g. UAE, Singapore, Vietnam"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Product / Commodity *
          </label>

          <select
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          >
            <option value="">Select a Commodity or Service</option>

            {/* =========================
                SALT COMMODITIES
            ========================== */}
            <optgroup label="Salt Commodities">
              <option value="Triple Refined Free Flow Iodised Salt">
                Triple Refined Free Flow Iodised Salt
              </option>

              <option value="30 Mesh Salt">
                30 Mesh Salt
              </option>

              <option value="Low Hardness Salt">
                Low Hardness Salt
              </option>

              <option value="Low pH Salt">
                Low pH Salt
              </option>

              <option value="Coarse Grade Salt">
                Coarse Grade Salt
              </option>

              <option value="Pure Grade Salt">
                Pure Grade Salt
              </option>

              <option value="Super Fine & Microfine Salt">
                Super Fine & Microfine Salt
              </option>

              <option value="Crystalline Grade Salt">
                Crystalline Grade Salt
              </option>
            </optgroup>

            {/* =========================
                INDUSTRIAL MINERALS & ROCKS
            ========================== */}
            <optgroup label="Industrial Minerals & Rocks">
              <option value="Quartz">
                Quartz
              </option>

              <option value="Feldspar">
                Feldspar
              </option>

              <option value="Silica">
                Silica
              </option>

              <option value="Bentonite">
                Bentonite
              </option>

              <option value="Kaolin">
                Kaolin
              </option>

              <option value="Ceramic Clay">
                Ceramic Clay
              </option>

              <option value="Granite">
                Granite
              </option>

              <option value="Bauxite">
                Bauxite
              </option>
            </optgroup>

            {/* =========================
                AGRICULTURAL PRODUCTS
            ========================== */}
            <optgroup label="Agricultural Products">
              <option value="Non-Basmati Rice">
                Non-Basmati Rice
              </option>

              <option value="Basmati Rice">
                Basmati Rice
              </option>

              <option value="Groundnut (Peanuts)">
                Groundnut (Peanuts)
              </option>

              <option value="Foxnut (Makhana)">
                Foxnut (Makhana)
              </option>

              <option value="Turmeric">
                Turmeric
              </option>

              <option value="Red Chilli">
                Red Chilli
              </option>
            </optgroup>

            {/* =========================
                CHEMICAL, FILLERS & ALKALIS
            ========================== */}
            <optgroup label="Chemical, Fillers & Alkalis">
              <option value="Calcium Carbonate">
                Calcium Carbonate
              </option>

              <option value="Sodium Carbonate">
                Sodium Carbonate
              </option>

              <option value="Sodium Chloride">
                Sodium Chloride
              </option>

              <option value="Calcium Chloride">
                Calcium Chloride
              </option>
            </optgroup>

            {/* =========================
                INDUSTRIAL RAW MATERIALS
            ========================== */}
            <optgroup label="Industrial Raw Materials">
              <option value="Carbon">
                Carbon
              </option>

              <option value="Activated Carbon">
                Activated Carbon
              </option>

              <option value="Carbon Black">
                Carbon Black
              </option>
            </optgroup>

            {/* =========================
                INDUSTRIAL BYPRODUCTS & SLAGS
            ========================== */}
            <optgroup label="Industrial Byproducts & Slags">
              <option value="Copper Slag">
                Copper Slag
              </option>

              <option value="Fly Ash">
                Fly Ash
              </option>
            </optgroup>

            {/* =========================
                TRADE & FREIGHT SERVICES
            ========================== */}
            <optgroup label="Trade & Freight Services">
              <option value="Export & Import Services">
                Export & Import Services
              </option>

              <option value="Logistics Support">
                Logistics Support
              </option>

              <option value="Freight Services">
                Freight Services
              </option>

              <option value="General Commercial Sourcing">
                General Commercial Sourcing
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      {/* Quantity & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Target Quantity / Volume
          </label>

          <input
            type="text"
            name="quantity"
            placeholder="e.g. 500 Metric Tons / 5 FCL"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Destination Port / City
          </label>

          <input
            type="text"
            name="destination"
            placeholder="e.g. Jebel Ali / Port Klang / Haiphong"
            value={formData.destination}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Packaging & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Packaging Requirement
          </label>

          <input
            type="text"
            name="packaging"
            placeholder="e.g. 25kg PP Bags / 1 MT Jumbo Bags / Bulk"
            value={formData.packaging}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
            Target Delivery Timeline
          </label>

          <input
            type="text"
            name="timeline"
            placeholder="e.g. Prompt Loading / Q4 2026"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Additional Specifications */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
          Additional Specifications (Optional)
        </label>

        <input
          type="text"
          name="additionalSpecs"
          placeholder="Mesh size, chemical purity tolerances, moisture %, moisture barrier liner..."
          value={formData.additionalSpecs}
          onChange={handleChange}
          className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] px-4 py-3 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
        />
      </div>

      {/* Requirement Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
          Message / Detailed Requirement *
        </label>

        <textarea
          name="message"
          required
          rows={4}
          placeholder="Please describe your sourcing requirement, target specs, vessel delivery preferences, or commercial questions..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#F7F5EF]/60 border border-[#D8C9B5] focus:border-[#B87952] focus:bg-[#FFFFFF] p-4 text-sm text-[#102A43] rounded-sm focus:outline-none transition-all"
        />
      </div>

      <div className="pt-2 text-[11px] text-[#64748B] italic">
        * Final specifications, grade, packaging, availability and
        commercial terms are confirmed against the buyer&apos;s actual
        requirement before quotation.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#102A43] hover:bg-[#1E3A5F] text-[#F7F5EF] py-4 px-6 rounded-sm text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-75"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-[#B87952]" />
            <span>Processing Enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Sourcing Enquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#D8C9B5]" />
          </>
        )}
      </button>
    </form>
  );
};
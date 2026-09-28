"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const HomepageContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,

          // IMPORTANT:
          // This form is a Contact form, not a Quote form.
          type: "Contact",

          // This also tells the API where the enquiry came from.
          sourcePage: "/contact",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(
          data.message ||
            "Failed to submit enquiry. Please try emailing INFINYEXIM01@GMAIL.COM directly."
        );
      }
    } catch (err) {
      console.error("[HOMEPAGE CONTACT ERROR]", err);

      setErrorMsg(
        "Failed to submit enquiry. Please try emailing INFINYEXIM01@GMAIL.COM directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 bg-[#070E18] text-[#F7F5EF] border-t border-[#D8C9B5]/20 relative overflow-hidden"
      id="homepage-contact"
    >
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C08A5D] font-semibold">
            DIRECT CONTACT · UPPER FOOTER
          </span>

          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
            Have a requirement? <br />
            <span className="text-[#C08A5D]">Let&apos;s talk trade.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Get in touch directly with our commercial leads in Mundra, Gujarat,
            or send your trade enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* EMAIL */}
            <div className="bg-[#0B1726] border border-[#D8C9B5]/20 p-6 rounded-sm space-y-2 hover:border-[#C08A5D] transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-sm bg-[#152538] text-[#C08A5D] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    OFFICIAL EMAIL
                  </span>

                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="text-sm font-bold text-[#F7F5EF] hover:text-[#C08A5D] transition-colors break-all"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* KHALID SAMA */}
            <div className="bg-[#0B1726] border border-[#D8C9B5]/20 p-6 rounded-sm space-y-2 hover:border-[#C08A5D] transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-sm bg-[#152538] text-[#C08A5D] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    PRIMARY CONTACT
                  </span>

                  <span className="text-sm font-bold text-[#F7F5EF] block">
                    Khalid Sama
                  </span>

                  <a
                    href="tel:+918460568211"
                    className="text-xs font-mono text-[#C08A5D] hover:underline"
                  >
                    +91 84605 68211
                  </a>
                </div>
              </div>
            </div>

            {/* KHUSH MEHTA */}
            <div className="bg-[#0B1726] border border-[#D8C9B5]/20 p-6 rounded-sm space-y-2 hover:border-[#C08A5D] transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-sm bg-[#152538] text-[#C08A5D] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    ADDITIONAL CONTACT
                  </span>

                  <span className="text-sm font-bold text-[#F7F5EF] block">
                    Khush Mehta
                  </span>

                  <a
                    href="tel:+919429650248"
                    className="text-xs font-mono text-[#C08A5D] hover:underline"
                  >
                    +91 94296 50248
                  </a>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-[#0B1726] border border-[#D8C9B5]/20 p-6 rounded-sm space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-sm bg-[#152538] text-[#C08A5D] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    LOCATION
                  </span>

                  <span className="text-sm font-bold text-[#F7F5EF] block">
                    Mundra, Kutch, Gujarat, India
                  </span>

                  <span className="text-[11px] font-mono text-[#94A3B8]">
                    PORT ORIGIN: MUNDRA PORT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Sourcing Form */}
          <div className="lg:col-span-7 bg-[#0B1726] border border-[#D8C9B5]/30 p-8 sm:p-10 rounded-sm shadow-2xl">
            {success ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-[#152538] text-[#C08A5D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-[#F7F5EF]">
                  Enquiry Received
                </h3>

                <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting INFINITY EXIM. We will review your
                  requirement and respond shortly.
                </p>

                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      product: "",
                      message: "",
                      honeypot: "",
                    });
                  }}
                  className="text-xs font-mono text-[#C08A5D] underline uppercase tracking-wider"
                >
                  Send another requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      honeypot: e.target.value,
                    })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error */}
                {errorMsg && (
                  <div className="bg-red-950/60 border border-red-500/40 text-red-200 p-3.5 rounded-sm text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C9B5] mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full bg-[#152538]/60 border border-[#D8C9B5]/30 focus:border-[#C08A5D] px-4 py-3 text-xs text-[#F7F5EF] rounded-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C9B5] mb-2">
                      Business Email *
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-[#152538]/60 border border-[#D8C9B5]/30 focus:border-[#C08A5D] px-4 py-3 text-xs text-[#F7F5EF] rounded-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone + Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C9B5] mb-2">
                      Phone / WhatsApp
                    </label>

                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-[#152538]/60 border border-[#D8C9B5]/30 focus:border-[#C08A5D] px-4 py-3 text-xs text-[#F7F5EF] rounded-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C9B5] mb-2">
                      Commodity or Service *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="e.g. Salt, Bentonite, Basmati Rice"
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          product: e.target.value,
                        })
                      }
                      className="w-full bg-[#152538]/60 border border-[#D8C9B5]/30 focus:border-[#C08A5D] px-4 py-3 text-xs text-[#F7F5EF] rounded-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C9B5] mb-2">
                    Message / Requirement *
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your required volume, destination port, packaging, or commercial specifications..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-[#152538]/60 border border-[#D8C9B5]/30 focus:border-[#C08A5D] p-4 text-xs text-[#F7F5EF] rounded-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C08A5D] hover:bg-[#A8744B] text-[#FFFFFF] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Requirement</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { MailIcon, LinkedinIcon, MessageCircleIcon, MapPinIcon } from "@/components/icons";
import { socialLinks } from "@/lib/data";

const contactMethods = [
  {
    icon: MailIcon,
    label: "Electronic Mail",
    value: "walidhnf12@gmail.com",
    href: "mailto:walidhnf12@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Walid Hanif Ataullah",
    href: socialLinks.linkedin,
  },
  {
    icon: MessageCircleIcon,
    label: "WhatsApp",
    value: "+62 822 1928 2003",
    href: socialLinks.whatsapp,
  },
  {
    icon: MapPinIcon,
    label: "Residence",
    value: "Tangerang, Indonesia",
    href: "#",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      formRef.current?.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLy4KPC9zdmc+')] bg-repeat" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Masthead */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[10px] sm:tracking-[0.15em] tracking-[0.08em] uppercase text-[#2a2a2a] border-b-2 border-black pb-2 mb-2">
            <span>{currentDate}</span>
            <span className="font-medium">Letters to the Editor</span>
            <span>Section C</span>
          </div>

          {/* Section Header */}
          <div className="border-b-4 border-black pb-4">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-none">
              CONTACT
            </h2>
            <p className="font-serif text-lg md:text-xl italic text-[#555] mt-2">
              &ldquo;Reach out and let&apos;s collaborate on the next breakthrough&rdquo;
            </p>
          </div>

          {/* Edition info */}
          <div className="border-t border-dashed border-[#999] mt-3 pt-2">
            <p className="text-[10px] tracking-widest uppercase text-[#666]">
              Communication Channel &bull; Network Edition
            </p>
          </div>
        </motion.header>

        {/* Main Content Grid - Newspaper Style */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          {/* Left Column - Letter to Editor Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-8"
          >
            {/* Form Container - Newspaper Style */}
            <div className="bg-white border-2 border-black p-6 sm:p-8 relative">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-black" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-black" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-black" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-black" />

              {/* Section label */}
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase bg-[#DA291C] text-white px-4 py-1">
                  Send Your Message
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-black text-black text-center mb-2">
                Letter to the Author
              </h3>
              <p className="font-serif text-sm text-[#555] text-center italic mb-8">
                Your inquiries, collaborations, and opportunities are welcome
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 border-2 border-dashed border-[#DA291C] bg-[#faf8f5]"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#DA291C]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#DA291C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-black text-black mb-2">Message Received!</h4>
                  <p className="font-serif text-sm text-[#555] mb-4">
                    Thank you for reaching out. A response shall be forthcoming.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-serif text-sm text-[#DA291C] hover:text-[#c02518] transition-colors underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 border-2 border-red-600 bg-red-50">
                      <p className="font-serif text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  {/* Form fields in newspaper columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="border-b-2 border-black pb-1">
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your good name"
                        required
                        disabled={status === "loading"}
                        className="w-full bg-transparent border-none text-black font-serif text-base placeholder:text-[#999] focus:outline-none disabled:opacity-50"
                      />
                    </div>
                    <div className="border-b-2 border-black pb-1">
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@domain.com"
                        required
                        disabled={status === "loading"}
                        className="w-full bg-transparent border-none text-black font-serif text-base placeholder:text-[#999] focus:outline-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="border-b-2 border-black pb-1">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2">Subject Matter</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Collaboration opportunity"
                      disabled={status === "loading"}
                      className="w-full bg-transparent border-none text-black font-serif text-base placeholder:text-[#999] focus:outline-none disabled:opacity-50"
                    />
                  </div>

                  <div className="border-b-2 border-black pb-1">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Compose your message here..."
                      required
                      disabled={status === "loading"}
                      className="w-full bg-transparent border-none text-black font-serif text-base placeholder:text-[#999] focus:outline-none resize-none disabled:opacity-50 min-h-30"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-black text-white font-serif text-base font-bold hover:bg-[#DA291C] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <MailIcon className="w-4 h-4" />
                          Send Letter
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quote box below form */}
            <div className="mt-6 p-5 border-2 border-black bg-[#f5f3f0]">
              <p className="font-serif text-base italic text-[#333] leading-relaxed">
                &ldquo;I believe in the power of connection. Every message opens a door to potential collaboration, innovation, and growth.&rdquo;
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#666] mt-3">
                — From the Author&apos;s Desk
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Directory */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 lg:col-span-4"
          >
            {/* Directory header */}
            <div className="bg-black text-white p-4 mb-0">
              <h3 className="font-serif text-xl font-black tracking-tight text-center">
                CONTACT DIRECTORY
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-center text-[#999] mt-1">
                Reach the author through these channels
              </p>
            </div>

            {/* Contact cards */}
            <div className="border-2 border-t-0 border-black space-y-0">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "Residence" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="p-4 border-b border-dashed border-[#ccc] last:border-b-0 hover:bg-[#faf8f5] transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#DA291C] text-white shrink-0">
                        <method.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#666]">{method.label}</p>
                        <p className="font-serif text-sm text-black mt-1 group-hover:text-[#DA291C] transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <div className="text-[#DA291C] opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Operating hours box */}
            <div className="mt-6 p-5 border-2 border-black bg-white">
              <h4 className="font-serif text-base font-black text-black border-b-2 border-black pb-2 mb-3">
                Response Time
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-serif text-sm text-[#555]">Monday - Friday</span>
                  <span className="font-serif text-sm text-black">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif text-sm text-[#555]">Saturday</span>
                  <span className="font-serif text-sm text-black">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif text-sm text-[#555]">Sunday</span>
                  <span className="font-serif text-sm text-[#DA291C] italic">By appointment</span>
                </div>
              </div>
              <p className="font-serif text-xs text-[#666] italic mt-4">
                * Response times may vary during holidays
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Social bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t-4 border-b-2 border-black py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg font-black text-black">
                Follow The Journey
              </h4>
              <p className="font-serif text-sm text-[#555] mt-1">
                Stay connected with the latest updates and research
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {Object.entries(socialLinks).map(([key, url]) => {
                const icons: Record<string, React.ElementType> = {
                  linkedin: LinkedinIcon,
                  whatsapp: MessageCircleIcon,
                  email: MailIcon,
                  scholar: () => (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                    </svg>
                  ),
                };
                const Icon = icons[key] || MailIcon;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-black text-white hover:bg-[#DA291C] transition-colors duration-300"
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer ornament */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-[#999]" />
            <span className="text-[#DA291C] text-2xl font-serif">&diams;</span>
            <span className="w-24 h-px bg-[#999]" />
          </div>
        </div>

        {/* Issue footer */}
        <div className="mt-6 text-center">
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#666]">
            End of Contact Section &bull; Vol. MMXXVI &bull; Continued on Social Media
          </p>
        </div>
      </div>
    </section>
  );
}
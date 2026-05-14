"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { MailIcon, LinkedinIcon, MessageCircleIcon, MapPinIcon } from "@/components/icons";
import { socialLinks } from "@/lib/data";

const contactMethods = [
  {
    icon: MailIcon,
    label: "Email",
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
    label: "Location",
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

  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#DA291C] uppercase tracking-[0.3em] mb-4"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Get in{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Let&apos;s discuss opportunities, collaborations, and ideas
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 border"
              style={{
                background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                borderColor: "rgba(255,255,255,0.04)",
              }}
            >
              <h3 className="text-lg font-semibold text-white mb-5 sm:mb-6">Send a Message</h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-zinc-500 mb-4">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-[#DA291C] hover:text-[#e64a3a] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-sm text-red-400">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-500 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/6 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-500 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/6 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Collaboration opportunity"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/6 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your message"
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-white/3 border border-white/6 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#DA291C] text-white text-sm font-medium hover:bg-[#c02518] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <MailIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "Location" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="relative rounded-xl p-4 border transition-all duration-500 group-hover:border-white/8"
                  style={{
                    background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                    borderColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-[#DA291C]/10 shrink-0">
                      <method.icon className="w-5 h-5 text-[#DA291C]" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600">{method.label}</p>
                      <p className="text-sm font-medium text-white">{method.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="h-px w-24 bg-linear-to-r from-transparent via-[#DA291C]/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
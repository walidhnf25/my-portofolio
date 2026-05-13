"use client";

import { motion } from "framer-motion";
import { MailIcon, LinkedinIcon, MessageCircleIcon, MapPinIcon } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";

const contactMethods = [
  {
    icon: MailIcon,
    label: "Email",
    value: "walidhanif25@gmail.com",
    href: "mailto:walidhanif25@gmail.com",
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
    value: "+62 819 1111 1111",
    href: socialLinks.whatsapp,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Tangerang, Indonesia",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let&apos;s discuss opportunities and collaborations"
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Collaboration opportunity"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#DA291C]/30 transition-colors resize-none"
                  />
                </div>
                <Button variant="primary" size="lg">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>

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
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="p-4 flex items-center gap-4 hover:border-white/10 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#DA291C]/10">
                    <method.icon className="w-5 h-5 text-[#DA291C]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600">{method.label}</p>
                    <p className="text-sm font-medium text-white">{method.value}</p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
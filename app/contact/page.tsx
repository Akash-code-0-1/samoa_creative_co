"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [successName, setSuccessName] = useState<string | null>(null);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");

  // Cast currentTarget to HTMLFormElement
  const form = e.currentTarget as HTMLFormElement;

  // Access inputs safely
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const data = {
    name,
    subject,
    email,
    phone,
    message,
    _replyto: email,
    _subject: `New message from ${name} — ${subject}`,
  };

  try {
    const res = await fetch("https://formspree.io/f/mqaylyyw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      setSuccessName(name);
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
}


  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.png')]">
        {/* Overlay (optional for dark tint) */}
        <div className="absolute inset-0 bg-[#042944]/70"></div>
        
        {/* Pattern Layer 1 */}
        {/* <div className="absolute inset-0 opacity-10 animate-slowMoveReverse">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contactPattern1"
                x="0"
                y="0"
                width="140"
                height="140"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="20"
                  y="20"
                  width="100"
                  height="100"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                  rx="20"
                />
                <circle cx="70" cy="70" r="12" fill="white" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactPattern1)" />
          </svg>
        </div> */}

        {/* Pattern Layer 2 */}
        {/* <div className="absolute inset-0 opacity-5 animate-slowMove">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contactPattern2"
                x="0"
                y="0"
                width="180"
                height="180"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 90 Q90 0 180 90 T360 90"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                />
                <path
                  d="M90 0 Q0 90 90 180 T90 360"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactPattern2)" />
          </svg>
        </div> */}

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Contact
            </h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Let's discuss your project and bring your creative vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background Image - blurred and faded */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm opacity-80"
          style={{ backgroundImage: "url('/images/about_bg.png')" }}
        ></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block border border-[#042944] px-4 py-1 rounded-full mb-4">
              <span className="text-[#042944] text-sm font-medium tracking-wide">
                CONTACT US
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944]">
              Get In Touch
            </h2>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Call Us Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#3498db] text-white p-8 sm:p-12 rounded-lg text-center hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Call Us</h3>
                <p className="text-lg">+685 7335871</p>
              </Card>
            </motion.div>

            {/* Email Us Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-[#eaecf0] p-8 sm:p-12 rounded-lg text-center hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full">
                <div className="w-16 h-16 bg-[#3498db]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#3498db]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#042944] mb-4">
                  Email Us
                </h3>
                <p className="text-[#101828]">
                  Email: samoacreativeco@gmail.com
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Map and Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="w-full h-[450px] sm:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps?q=Beach+Road,+Apia,+Samoa&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </motion.div>




            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-[#042944] px-4 py-1 rounded-full mb-6">
                <span className="text-[#042944] text-sm font-medium tracking-wide">
                  MESSAGE US
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#042944] mb-6">
                Send A Message
              </h3>

              <p className="text-[#6a797e] mb-8">
                Have a project in mind? We'd love to hear from you! Share your
                ideas and let's create something amazing together.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  disabled={status === "submitting"}
                  rows={6}
                  className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all resize-none"
                />

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-4 text-lg rounded-md transition-all hover:scale-105 disabled:opacity-50"
                >
                  {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
                </Button>
                {status === "success" && (
                  <p className="text-green-600 font-medium text-center">
                    ✅ Thanks{successName ? `, ${successName}` : ""}! Your
                    message has been sent successfully.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Ready to Start Your Project?{" "}
                <span className="text-[#3498db]">Let's Create Together</span>
              </h3>
              <p className="text-[#d0d5dd]">
                From concept to completion, we're here to bring your creative
                vision to life
              </p>
            </div>
            <Link href="/services">
              <Button className="bg-white text-[#042944] hover:bg-[#f8f9fa] px-8 py-4 rounded-md transition-all hover:scale-105 whitespace-nowrap">
                VIEW SERVICES →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

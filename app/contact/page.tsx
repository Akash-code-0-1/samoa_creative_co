"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqaylyyw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset(); // clear form after success
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#eaecf0] animate-in fade-in slide-in-from-top duration-500">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#042944] font-bold text-lg sm:text-xl leading-none">
                SAMOA
              </span>
              <span className="text-[#042944] font-bold text-lg sm:text-xl leading-none">
                CREATIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#101828] hover:text-[#042944] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#101828] hover:text-[#042944] font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-[#101828] hover:text-[#042944] font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#042944] font-medium border-b-2 border-[#042944]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:block bg-[#042944] hover:bg-[#101828] text-white px-4 sm:px-6 py-3 rounded-md text-xs sm:text-sm transition-all hover:scale-105">
              LET'S WORK
              <br />
              TOGETHER
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#eaecf0] bg-white animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors"
              >
                Services
              </Link>
              <Link href="/contact" className="text-[#042944] font-medium py-2">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-[#042944] via-[#042944] to-[#101828]">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="heroPattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M50 10 L50 90 M10 50 L90 50"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>{" "}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Get In Touch
            </h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Let's discuss your project and bring your creative vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal delay={100}>
              <div className="animate-slide-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#042944] mb-6">
                  Send Us a Message
                </h2>

                {/* {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg animate-slide-up ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )} */}

                {/* <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "100ms" }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#042944] focus:border-transparent transition-all hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "200ms" }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#042944] focus:border-transparent transition-all hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "300ms" }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#042944] focus:border-transparent transition-all hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+685 123 4567"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    <label
                      htmlFor="service"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#042944] focus:border-transparent transition-all hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      <option value="graphic-design">Graphic & Design</option>
                      <option value="illustration">Illustration</option>
                      <option value="visual-design">Visual Design</option>
                      <option value="print">Print Design</option>
                      <option value="online-marketing">Online Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "500ms" }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#042944] focus:border-transparent transition-all resize-none hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#042944] hover:bg-[#101828] text-white px-8 py-4 text-lg rounded-md transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-slide-up"
                    style={{ animationDelay: "600ms" }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form> */}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "100ms" }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#042944] 
                     focus:border-transparent transition-all hover:border-[#042944] 
                     disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "200ms" }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#042944] 
                     focus:border-transparent transition-all hover:border-[#042944] 
                     disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "300ms" }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#042944] 
                     focus:border-transparent transition-all hover:border-[#042944] 
                     disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+685 123 4567"
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    <label
                      htmlFor="service"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#042944] 
                     focus:border-transparent transition-all hover:border-[#042944] 
                     disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      <option value="graphic-design">Graphic & Design</option>
                      <option value="illustration">Illustration</option>
                      <option value="visual-design">Visual Design</option>
                      <option value="print">Print Design</option>
                      <option value="online-marketing">Online Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "500ms" }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-[#101828] font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      disabled={status === "submitting"}
                      rows={6}
                      className="w-full px-4 py-3 border border-[#d0d5dd] rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-[#042944] 
                     focus:border-transparent transition-all resize-none 
                     hover:border-[#042944] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#042944] hover:bg-[#101828] text-white 
                   px-8 py-4 text-lg rounded-md transition-all hover:scale-105 
                   disabled:opacity-50 disabled:cursor-not-allowed 
                   disabled:hover:scale-100 animate-slide-up"
                    style={{ animationDelay: "600ms" }}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  {/* Feedback messages */}
                  {status === "success" && (
                    <p className="text-green-600 font-medium animate-slide-up">
                      ✅ Your message has been sent successfully!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 font-medium animate-slide-up">
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={200}>
              <div className="animate-slide-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#042944] mb-6">
                  Contact Information
                </h2>
                <p className="text-[#101828] mb-8 leading-relaxed">
                  Have questions? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>

                <div className="space-y-6">
                  <Card
                    className="p-6 border-2 border-[#eaecf0] rounded-lg hover:border-[#042944] hover-lift hover:shadow-lg transition-all animate-scale-in"
                    style={{ animationDelay: "100ms" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#042944] mb-1">
                          Office Address
                        </h3>
                        <p className="text-[#101828]">
                          Beach Road, Apia
                          <br />
                          Samoa
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card
                    className="p-6 border-2 border-[#eaecf0] rounded-lg hover:border-[#042944] hover-lift hover:shadow-lg transition-all animate-scale-in"
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
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
                      <div>
                        <h3 className="text-lg font-bold text-[#042944] mb-1">
                          Email
                        </h3>
                        <p className="text-[#101828]">info@samoacreative.co</p>
                        <p className="text-[#101828]">hello@samoacreative.co</p>
                      </div>
                    </div>
                  </Card>

                  <Card
                    className="p-6 border-2 border-[#eaecf0] rounded-lg hover:border-[#042944] hover-lift hover:shadow-lg transition-all animate-scale-in"
                    style={{ animationDelay: "300ms" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
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
                      <div>
                        <h3 className="text-lg font-bold text-[#042944] mb-1">
                          Phone
                        </h3>
                        <p className="text-[#101828]">+685 123 4567</p>
                        <p className="text-[#101828]">+685 765 4321</p>
                      </div>
                    </div>
                  </Card>

                  <Card
                    className="p-6 border-2 border-[#eaecf0] rounded-lg hover:border-[#042944] hover-lift hover:shadow-lg transition-all animate-scale-in"
                    style={{ animationDelay: "400ms" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#042944] mb-1">
                          Business Hours
                        </h3>
                        <p className="text-[#101828]">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-[#101828]">
                          Saturday: 10:00 AM - 2:00 PM
                        </p>
                        <p className="text-[#101828]">Sunday: Closed</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Social Media */}
                <div
                  className="mt-8 animate-fade-scale"
                  style={{ animationDelay: "500ms" }}
                >
                  <h3 className="text-xl font-bold text-[#042944] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center hover:bg-[#101828] transition-all hover:scale-110 hover:rotate-6"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 17.006 22 12z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center hover:bg-[#101828] transition-all hover:scale-110 hover:rotate-6"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.78.13 4.653.414 3.678 1.39c-.975.975-1.26 2.102-1.318 3.374C2.014 6.332 2 6.741 2 10s.014 3.668.072 4.948c.058 1.272.343 2.399 1.318 3.374.975.975 2.102 1.26 3.374 1.318C8.332 21.986 8.741 22 12 22s3.668-.014 4.948-.072c1.272-.058 2.399-.343 3.374-1.318.975-.975 1.26-2.102 1.318-3.374.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.343-2.399-1.318-3.374-.975-.975-2.102-1.26-3.374-1.318C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#042944] rounded-full flex items-center justify-center hover:bg-[#101828] transition-all hover:scale-110 hover:rotate-6"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.98 2.98 2.98s2.98-1.35 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 21.5h5.16V9H2.4v12.5zM9.54 21.5h5.16v-6.63c0-1.58.03-3.61-2.2-3.61-2.21 0-2.55 1.73-2.55 3.51v6.73zM14.54 3.5c1.56 0 2.53 1.01 2.53 2.32 0 1.29-.97 2.32-2.53 2.32s-2.53-1.03-2.53-2.32c0-1.31.97-2.32 2.53-2.32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-[#eaecf0]">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="bg-[#d0d5dd] rounded-lg overflow-hidden h-[300px] sm:h-[400px] flex items-center justify-center animate-fade-scale hover-lift">
              <iframe
                src="https://www.google.com/maps?q=Beach+Road,+Apia,+Samoa&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101828] text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                  <Image
                    src="/images/logo.png" // path to your logo image in public folder
                    alt="Logo"
                    fill
                    className="object-contain white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base sm:text-lg leading-none">
                    SAMOA
                  </span>
                  <span className="font-bold text-base sm:text-lg leading-none">
                    CREATIVE
                  </span>
                </div>
              </div>
              <p className="text-[#d0d5dd] text-sm">
                Tempus congue tellus semper sapien urna. Tellus posuere ut.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2 text-[#d0d5dd] text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Graphics Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visual Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Illustration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Online Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Print
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-[#d0d5dd] text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Our Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">SUBSCRIBE</h3>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-md bg-white text-[#101828] mb-3 text-sm"
              />
              <Button className="w-full bg-[#5925dc] hover:bg-[#3e1c96] text-white py-3 rounded-md transition-all hover:scale-105">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          <div className="border-t border-[#394149] pt-6 text-center text-[#d0d5dd] text-xs sm:text-sm">
            COPYRIGHT ©2025 SAMOA CREATIVE CO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

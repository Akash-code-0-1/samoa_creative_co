"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#eaecf0] animate-in fade-in slide-in-from-top duration-500">
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
              className="text-[#042944] font-medium border-b-2 border-[#042944]"
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
              className="text-[#101828] hover:text-[#042944] font-medium transition-colors"
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
              <Link href="/about" className="text-[#042944] font-medium py-2">
                About Us
              </Link>
              <Link
                href="/services"
                className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-[#042944]">
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
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              About Us
            </h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Learn more about our story, mission, and the team behind Samoa
              Creative Co
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 50 L50 0 L100 50 L50 100 Z"
                  fill="none"
                  stroke="#042944"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-block border border-[#042944] px-4 py-1 rounded-full mb-4">
                <span className="text-[#042944] text-sm font-medium">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944] mb-4 sm:mb-6">
                Building Creative Excellence Since 2020
              </h2>
              <p className="text-[#101828] mb-4 leading-relaxed">
                Samoa Creative Co was founded with a simple yet powerful vision:
                to bring world-class creative services to Samoa and the Pacific
                region. What started as a small design studio has grown into a
                full-service creative agency serving clients locally and
                globally.
              </p>
              <p className="text-[#101828] mb-4 leading-relaxed">
                Our team combines international expertise with deep local
                knowledge, allowing us to create designs that resonate both
                culturally and commercially. We believe in the power of
                storytelling through design, and every project we undertake is
                an opportunity to tell a unique story.
              </p>
              <p className="text-[#101828] leading-relaxed">
                Today, we're proud to have delivered over 100 projects, worked
                with 50+ clients across various industries, and established
                ourselves as a trusted partner for businesses looking to make an
                impact through creative excellence.
              </p>
            </div>

            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden animate-in fade-in slide-in-from-right duration-700">
              <Image
                src="/images/team_work.jpg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-[#101828]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#042944] text-white p-6 sm:p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-200">
              <div className="text-4xl sm:text-5xl font-bold mb-2">100+</div>
              <div className="text-[#d0d5dd]">Projects Completed</div>
            </Card>
            <Card className="bg-[#042944] text-white p-6 sm:p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-300">
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <div className="text-[#d0d5dd]">Happy Clients</div>
            </Card>
            <Card className="bg-[#042944] text-white p-6 sm:p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-500">
              <div className="text-4xl sm:text-5xl font-bold mb-2">5+</div>
              <div className="text-[#d0d5dd]">Years Experience</div>
            </Card>
            <Card className="bg-[#042944] text-white p-6 sm:p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-700">
              <div className="text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-[#d0d5dd]">Team Members</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-6 sm:p-8 border-2 border-[#042944] rounded-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-left duration-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#042944] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#042944] mb-4">
                Our Mission
              </h3>
              <p className="text-[#101828] leading-relaxed">
                To empower businesses in Samoa and beyond with creative
                solutions that tell their unique stories, connect with their
                audiences, and drive meaningful results. We're committed to
                delivering excellence in every project while fostering
                creativity and innovation in the Pacific region.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-2 border-[#042944] rounded-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-right duration-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#042944] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#042944] mb-4">
                Our Vision
              </h3>
              <p className="text-[#101828] leading-relaxed">
                To be the leading creative agency in the Pacific, recognized for
                our innovative designs, strategic thinking, and commitment to
                client success. We envision a future where Pacific creativity is
                celebrated globally and local businesses have access to
                world-class creative services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#eaecf0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-top duration-700">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#101828] max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-in fade-in zoom-in delay-200">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  C
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Creativity
              </h3>
              <p className="text-[#101828]">
                We push boundaries and think outside the box to deliver unique,
                innovative solutions
              </p>
            </div>

            <div className="text-center animate-in fade-in zoom-in delay-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  E
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Excellence
              </h3>
              <p className="text-[#101828]">
                We're committed to delivering the highest quality work in
                everything we create
              </p>
            </div>

            <div className="text-center animate-in fade-in zoom-in delay-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  I
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Integrity
              </h3>
              <p className="text-[#101828]">
                We build trust through honesty, transparency, and ethical
                business practices
              </p>
            </div>

            <div className="text-center animate-in fade-in zoom-in delay-700">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  C
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Collaboration
              </h3>
              <p className="text-[#101828]">
                We work closely with our clients as partners to achieve shared
                success
              </p>
            </div>

            <div className="text-center animate-in fade-in zoom-in delay-900">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  I
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Innovation
              </h3>
              <p className="text-[#101828]">
                We stay ahead of trends and embrace new technologies to deliver
                cutting-edge solutions
              </p>
            </div>

            <div className="text-center animate-in fade-in zoom-in delay-1000">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#042944] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  P
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#042944] mb-3">
                Passion
              </h3>
              <p className="text-[#101828]">
                We love what we do and bring enthusiasm and energy to every
                project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-[#042944]">
        <div className="container mx-auto px-4 sm:px-6 text-center animate-in fade-in zoom-in duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Ready to Work Together?
          </h2>
          <p className="text-[#d0d5dd] text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's bring your creative vision to life. Get in touch with us today
            to start your next project.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#042944] hover:bg-[#eaecf0] px-8 py-6 text-lg rounded-md transition-all hover:scale-105">
              GET IN TOUCH
            </Button>
          </Link>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm animate-in fade-in slide-in-from-top duration-500">
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
            className={`font-medium transition-colors ${
              pathname === "/"
                ? "text-[#042944] border-b-2 border-[#042944]"
                : "text-[#101828] hover:text-[#042944]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#042944] border-b-2 border-[#042944]"
                : "text-[#101828] hover:text-[#042944]"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              pathname === "/services"
                ? "text-[#042944] border-b-2 border-[#042944]"
                : "text-[#101828] hover:text-[#042944]"
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors ${
              pathname === "/contact"
                ? "text-[#042944] border-b-2 border-[#042944]"
                : "text-[#101828] hover:text-[#042944]"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center bg-[#042944] hover:bg-[#101828] text-white rounded-md text-xs sm:text-sm h-10 sm:h-12 px-4 sm:px-6 leading-none transition-all hover:scale-105">
            LET'S WORK
          </button>

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
              className={`font-medium py-2 transition-colors ${
                pathname === "/"
                  ? "text-[#042944]"
                  : "text-[#101828] hover:text-[#042944]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium py-2 transition-colors ${
                pathname === "/about"
                  ? "text-[#042944]"
                  : "text-[#101828] hover:text-[#042944]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-medium py-2 transition-colors ${
                pathname === "/services"
                  ? "text-[#042944]"
                  : "text-[#101828] hover:text-[#042944]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`font-medium py-2 transition-colors ${
                pathname === "/contact"
                  ? "text-[#042944]"
                  : "text-[#101828] hover:text-[#042944]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

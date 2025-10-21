"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Footer() {
  
  const router = useRouter();

  return (
    <footer className="bg-[#101828] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image src="/images/logo_2.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-none">SAMOA</span>
                <span className="font-bold text-base sm:text-lg leading-none">CREATIVE</span>
              </div>
            </div>
            <p className="text-[#d0d5dd] text-sm">
              Tempus congue tellus semper sapien urna. Tellus posuere ut.
            </p>
          </div>

          {/* Services */}
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

          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-[#d0d5dd] text-sm mb-4">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Info
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Service
                </Link>
              </li>
            </ul>

            <div className="text-[#d0d5dd] text-sm space-y-1">
              <p><span className="font-bold">Address:</span> Alafua, Apia, Samoa</p>
              <p><span className="font-bold">Number:</span> +685 7335871</p>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold mb-4">SUBSCRIBE</h3>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md bg-white text-[#101828] mb-3 text-sm"
            />
            <Button 
            onClick={() => router.push("/contact")}
            className="w-full bg-[#5925dc] hover:bg-[#3e1c96] text-white py-3 rounded-md transition-all hover:scale-105">
              SUBSCRIBE
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#394149] pt-6 text-center text-[#d0d5dd] text-xs sm:text-sm">
          COPYRIGHT ©2025 SAMOA CREATIVE CO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}

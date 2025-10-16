"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SamoaCreativePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const clientMarqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateMarquee = (element: HTMLElement | null) => {
      if (!element) return

      let scrollAmount = 0
      const scroll = () => {
        scrollAmount += 0.5
        if (scrollAmount >= element.scrollWidth / 2) {
          scrollAmount = 0
        }
        element.style.transform = `translateX(-${scrollAmount}px)`
        requestAnimationFrame(scroll)
      }
      scroll()
    }

    animateMarquee(clientMarqueeRef.current)
  }, [])

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 overflow-hidden">
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image src="/images/banner.png" alt="Team collaboration" fill className="object-cover" priority />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
          </div>

          

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 h-full relative z-10">
            <div className="flex items-center h-full max-w-xl">
              <div className="animate-slide-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#042944] mb-6 sm:mb-8 leading-tight text-balance">
                  Creative Solutions,
                  <br />
                  Designed for Samoa &<br />
                  Beyond
                </h1>
                <Button className="bg-transparent border-2 border-[#042944] text-[#042944] hover:bg-[#042944] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  Explore Our Services
                  <svg
                    className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Diagonal lattice pattern background */}
        <div className="absolute inset-0 bg-[url('/images/about_bg.png')] bg-cover bg-center" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal delay={100}>
              <div className="animate-slide-left">
                {/* WHO WE ARE Badge */}
                <div className="inline-block border-2 border-[#042944] px-4 py-1.5 rounded-full mb-6 animate-pulse-glow">
                  <span className="text-[#042944] text-xs sm:text-sm font-semibold tracking-wide">WHO WE ARE</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#042944] mb-6 sm:mb-8 leading-tight">
                  SAMOA CREATIVE CO
                </h2>

                {/* Description */}
                <p className="text-[#101828] text-base sm:text-lg mb-8 leading-relaxed">
                  Samoa Creative Co is a full-service creative agency based in Apia, Samoa. We specialize in design,
                  print, illustration, and online marketing. Our mission is to help businesses tell their story with
                  impact and creativity.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  <Card
                    className="bg-gradient-to-br from-[#042944] to-[#0a3a5c] text-white p-6 rounded-xl hover-lift hover:shadow-2xl transition-all duration-500 animate-scale-in border-0"
                    style={{ animationDelay: "100ms" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full mb-4 animate-pulse"></div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2">100+</div>
                    <div className="text-sm text-white/90">Designs Delivered</div>
                  </Card>

                  <Card
                    className="bg-gradient-to-br from-[#042944] to-[#0a3a5c] text-white p-6 rounded-xl hover-lift hover:shadow-2xl transition-all duration-500 animate-scale-in border-0"
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full mb-4 animate-pulse"></div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                    <div className="text-sm text-white/90">Serving Local & Global Clients</div>
                  </Card>

                  <Card
                    className="bg-gradient-to-br from-[#042944] to-[#0a3a5c] text-white p-6 rounded-xl hover-lift hover:shadow-2xl transition-all duration-500 animate-scale-in border-0"
                    style={{ animationDelay: "300ms" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full mb-4 animate-pulse"></div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2">5+</div>
                    <div className="text-sm text-white/90">Years of Experience</div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal delay={200}>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden animate-slide-right hover-lift group shadow-2xl">
                <Image
                  src="/images/home_sub.jpg"
                  alt="Professional at work"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042944]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#101828] via-[#042944] to-[#101828] relative overflow-hidden">
        <style jsx>{`
          @keyframes spin-clockwise {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-anticlockwise {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
        `}</style>
        {/* Top Right - Clockwise */}
        <motion.div
          initial={{ x: "50%", y: "50%", opacity: 0 }}
          whileInView={{ x: "330%", y: "-50%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block absolute w-[500px] h-[500px] z-0 opacity-40"
        >
          <img
            src="/images/circuler_pattern.png"
            alt="Rotating Pattern"
            className="w-full h-full"
            style={{
              animation: "spin-clockwise 60s linear infinite",
              transformOrigin: "center",
            }}
          />
        </motion.div>

        {/* Bottom Left - Anticlockwise */}
        <motion.div
          initial={{ x: "50%", y: "50%", opacity: 0 }}
          whileInView={{ x: "-50%", y: "105%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block absolute w-[500px] h-[500px] z-0 opacity-40"
        >
          <img
            src="/images/circuler_pattern.png"
            alt="Rotating Pattern"
            className="w-full h-full"
            style={{
              animation: "spin-anticlockwise 60s linear infinite",
              transformOrigin: "center",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-[#d0d5dd] max-w-2xl mx-auto px-4">
                Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing.
                In lorem lacus quis egestas tincidunt neque id accumsan.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <ScrollReveal delay={100}>
              <Card className="relative h-40 sm:h-48 rounded-lg overflow-hidden group cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in">
                <Image
                  src="/images/graphic.jpg"
                  alt="Graphic & Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 group-hover:from-[#042944]/90 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300">
                    Graphic&Design
                  </h3>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="relative h-40 sm:h-48 rounded-lg overflow-hidden group cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in">
                <Image
                  src="/images/illustration.jpg"
                  alt="Illustration"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 group-hover:from-[#042944]/90 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300">
                    Illustration
                  </h3>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="relative h-40 sm:h-48 rounded-lg overflow-hidden group cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in">
                <Image
                  src="/images/visual.jpg"
                  alt="Visual Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 group-hover:from-[#042944]/90 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300">
                    Visual Design
                  </h3>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12">
            <ScrollReveal delay={400}>
              <Card className="relative h-40 sm:h-48 rounded-lg overflow-hidden group cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in">
                <Image
                  src="/images/print.jpg"
                  alt="Print"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 group-hover:from-[#042944]/90 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300">
                    Print
                  </h3>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Card className="relative h-40 sm:h-48 rounded-lg overflow-hidden group cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in">
                <Image
                  src="/images/marketing.jpg"
                  alt="Online Marketing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 group-hover:from-[#042944]/90 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:translate-y-[-4px] transition-transform duration-300">
                    Online Marketing
                  </h3>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center animate-slide-up">
              <Button className="bg-white text-[#042944] hover:bg-[#eaecf0] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-md transition-all hover:scale-105 hover:shadow-xl">
                START YOUR PROJECT
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute bg-cover bg-center inset-0">
          <Image src="/images/about_bg.png" alt="Background" layout="fill" objectFit="cover" className="opacity-50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="flex justify-center animate-fade-scale">
                <div className="w-64 h-64 sm:w-80 sm:h-80 relative hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/logo.png"
                    alt="Samoan Pattern"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="animate-slide-right text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944] mb-6 sm:mb-8 text-balance">
                  Why Work With
                  <br />
                  Samoa Creative Co?
                </h2>
                <div className="space-y-4">
                  {["Local & Global Expertise", "Full-Service Agency", "Creative + Strategic", "Client-Focused"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex justify-center lg:justify-start items-center gap-3 animate-slide-right hover:translate-x-2 transition-transform duration-300"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <span className="text-[#042944] text-xl font-bold">›</span>
                        <span className="text-[#101828] text-base sm:text-lg font-semibold">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#eaecf0]">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#042944] mb-2">Our Clients</h2>
              <p className="text-[#6a797e]">We have been working with some Fortune 500+ clients</p>
            </div>
          </ScrollReveal>

          <div className="overflow-hidden">
            <div ref={clientMarqueeRef} className="flex gap-12 whitespace-nowrap items-center py-4">
              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image src={`/images/company-${i}.png`} alt={`Client ${i}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

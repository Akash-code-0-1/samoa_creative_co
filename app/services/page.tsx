"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: "Graphic & Design",
      description:
        "From logos to brand identities, we create visual designs that capture your brand's essence and make a lasting impression.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Packaging Design"],
      image: "/images/graphic.jpg",
    },
    {
      title: "Illustration",
      description:
        "Custom illustrations that bring your ideas to life with unique, hand-crafted artwork tailored to your brand's personality.",
      features: ["Digital Illustration", "Character Design", "Editorial Illustration", "Icon Design"],
      image: "/images/illustration.jpg",
    },
    {
      title: "Visual Design",
      description:
        "Creating stunning visual experiences for digital and print media that engage your audience and communicate your message effectively.",
      features: ["UI/UX Design", "Web Design", "App Design", "Presentation Design"],
      image: "/images/visual.jpg",
    },
    {
      title: "Print Design",
      description:
        "Professional print design services that ensure your materials look exceptional in physical form, from business cards to large-format prints.",
      features: ["Brochures & Flyers", "Business Cards", "Posters & Banners", "Magazine Layout"],
      image: "/images/print.jpg",
    },
    {
      title: "Online Marketing",
      description:
        "Strategic digital marketing solutions that help you reach your target audience, build your online presence, and drive results.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "SEO Optimization"],
      image: "/images/marketing.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#eaecf0] animate-in fade-in slide-in-from-top duration-500">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#042944] font-bold text-lg sm:text-xl leading-none">SAMOA</span>
              <span className="text-[#042944] font-bold text-lg sm:text-xl leading-none">CREATIVE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[#101828] hover:text-[#042944] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#101828] hover:text-[#042944] font-medium transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-[#042944] font-medium border-b-2 border-[#042944]">
              Services
            </Link>
            <Link href="/contact" className="text-[#101828] hover:text-[#042944] font-medium transition-colors">
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#eaecf0] bg-white animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-[#042944] font-medium py-2">
                Services
              </Link>
              <Link href="/contact" className="text-[#101828] hover:text-[#042944] font-medium py-2 transition-colors">
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
              <pattern id="heroPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">Our Services</h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-in fade-in slide-in-from-${
                  index % 2 === 0 ? "left" : "right"
                } duration-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden group">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#042944] mb-4">{service.title}</h2>
                      <p className="text-[#101828] mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#042944] rounded-full"></div>
                            <span className="text-[#101828]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-[#042944] hover:bg-[#101828] text-white px-6 py-3 rounded-md transition-all hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#042944] mb-4">{service.title}</h2>
                      <p className="text-[#101828] mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#042944] rounded-full"></div>
                            <span className="text-[#101828]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-[#042944] hover:bg-[#101828] text-white px-6 py-3 rounded-md transition-all hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                    <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden group order-1 lg:order-2">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 bg-[#101828] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="2" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="white" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-top duration-700">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-[#d0d5dd] max-w-2xl mx-auto">
              A proven approach to delivering exceptional creative solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-[#042944] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-200">
              <div className="text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-[#d0d5dd] text-sm">
                We learn about your business, goals, and target audience to understand your unique needs
              </p>
            </Card>

            <Card className="bg-[#042944] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-300">
              <div className="text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-[#d0d5dd] text-sm">
                We develop a creative strategy that aligns with your objectives and resonates with your audience
              </p>
            </Card>

            <Card className="bg-[#042944] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-500">
              <div className="text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Creation</h3>
              <p className="text-[#d0d5dd] text-sm">
                Our team brings your vision to life with stunning designs and creative solutions
              </p>
            </Card>

            <Card className="bg-[#042944] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in delay-700">
              <div className="text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-[#d0d5dd] text-sm">
                We deliver polished, ready-to-use assets and provide ongoing support for your success
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="bg-[#042944] p-8 sm:p-12 rounded-lg text-center animate-in fade-in zoom-in duration-700">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-[#d0d5dd] text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your creative goals and grow your business.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#042944] hover:bg-[#eaecf0] px-8 py-6 text-lg rounded-md transition-all hover:scale-105">
                GET STARTED
              </Button>
            </Link>
          </Card>
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
                  <span className="font-bold text-base sm:text-lg leading-none">SAMOA</span>
                  <span className="font-bold text-base sm:text-lg leading-none">CREATIVE</span>
                </div>
              </div>
              <p className="text-[#d0d5dd] text-sm">Tempus congue tellus semper sapien urna. Tellus posuere ut.</p>
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
  )
}

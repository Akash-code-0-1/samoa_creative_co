"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-[#042944] overflow-hidden">
        {/* Pattern Layer 1 */}
        <div className="absolute inset-0 opacity-10 animate-slowMove">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="aboutPattern1"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                />
                <path
                  d="M60 10 L60 110 M10 60 L110 60"
                  stroke="white"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutPattern1)" />
          </svg>
        </div>

        {/* Pattern Layer 2 */}
        <div className="absolute inset-0 opacity-5 animate-slowMoveReverse">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="aboutPattern2"
                x="0"
                y="0"
                width="160"
                height="160"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 80 Q40 40 80 80 T160 80 M80 0 Q120 40 80 80 T80 160"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                />
                <circle cx="80" cy="80" r="15" fill="white" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutPattern2)" />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              About Us
            </h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Learn more about our story, mission, and the team behind Samoa
              Creative Co.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.png')]"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] sm:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/about_additional_1.jpg"
                  alt="Our Creative Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-[#042944] px-4 py-1 rounded-full mb-6">
                <span className="text-[#042944] text-sm font-medium tracking-wide">
                  OUR STORY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944] mb-6 leading-tight">
                Creative Excellence from the Heart of Samoa
              </h2>

              <div className="space-y-4 text-[#101828] leading-relaxed mb-8">
                <p>
                  Founded in Apia, Samoa Creative Co was born from a passion for
                  design and a vision to bring world-class creative services to
                  businesses across the Pacific and beyond.
                </p>
                <p>
                  We believe that great design has the power to transform
                  businesses, tell compelling stories, and create lasting
                  connections with audiences. Our team combines local insight
                  with global design trends to deliver work that stands out.
                </p>
                <p>
                  From our humble beginnings as a small design studio, we've
                  grown into a full-service creative agency, serving clients
                  locally in Samoa and internationally. Every project we take on
                  is treated with the same dedication and attention to detail.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#042944]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#042944]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#042944] mb-1">
                      Our Commitment
                    </h3>
                    <p className="text-sm text-[#6a797e]">
                      Delivering creative solutions that exceed expectations and
                      drive real results for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 sm:py-20 bg-[#2c3e50] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-white px-4 py-1 rounded-full mb-6">
                <span className="text-white text-sm font-medium tracking-wide">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Empowering Brands Through
                <br />
                <span className="text-[#3498db]">Creative Innovation</span>
              </h2>

              <p className="text-[#d0d5dd] leading-relaxed mb-6">
                At Samoa Creative Co, our mission is to help businesses tell
                their stories with impact and creativity. We combine strategic
                thinking with exceptional design to create visual experiences
                that resonate with audiences and drive business growth. Whether
                you're a local startup or an established brand, we're here to
                bring your vision to life.
              </p>
            </motion.div>

            {/* Right - World Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
                <svg viewBox="0 0 800 400" className="w-full h-full opacity-40">
                  <path
                    d="M100,200 Q200,100 300,200 T500,200 Q600,100 700,200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  />
                  <circle
                    cx="150"
                    cy="180"
                    r="4"
                    fill="currentColor"
                    className="text-[#3498db]"
                  />
                  <circle
                    cx="300"
                    cy="200"
                    r="4"
                    fill="currentColor"
                    className="text-[#3498db]"
                  />
                  <circle
                    cx="450"
                    cy="180"
                    r="4"
                    fill="currentColor"
                    className="text-[#3498db]"
                  />
                  <circle
                    cx="650"
                    cy="160"
                    r="4"
                    fill="currentColor"
                    className="text-[#3498db]"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values & Expertise Section */}
      <section className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.png')]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative h-[600px] sm:h-[650px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/about_additional.jpg"
                  alt="Creative Process"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block border border-[#042944] px-4 py-1 rounded-full mb-6">
                <span className="text-[#042944] text-sm font-medium tracking-wide">
                  WHAT WE STAND FOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#042944] mb-6 leading-tight">
                Quality, Creativity & Results
              </h2>

              <div className="space-y-4 text-[#101828] leading-relaxed mb-8">
                <p>
                  We're more than just a design agency. We're your creative
                  partners, committed to understanding your business goals and
                  delivering solutions that make a real impact.
                </p>
                <p>
                  Our team brings together diverse skills in graphic design,
                  illustration, visual design, print production, and digital
                  marketing. This comprehensive approach ensures that every
                  aspect of your brand is cohesive and compelling.
                </p>
                <p>
                  From concept to completion, we maintain the highest standards
                  of quality and professionalism. Your success is our success,
                  and we're dedicated to exceeding your expectations on every
                  project.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Client-Focused Approach",
                  "Creative Excellence",
                  "Timely Delivery",
                  "Competitive Pricing",
                  "Full-Service Solutions",
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#042944] rounded-full"></div>
                    <span className="text-[#101828] font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/services">
                  <Button className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-6 text-lg rounded-md transition-all hover:scale-105 shadow-lg">
                    EXPLORE OUR SERVICES
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Your Project CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/banner.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block border border-white px-4 py-1 rounded-full mb-6">
              <span className="text-white text-sm font-medium tracking-wide">
                LET'S CREATE TOGETHER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
              Ready to Bring Your Vision to Life?
            </h2>

            <p className="text-[#d0d5dd] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a complete brand identity, stunning
              illustrations, professional print materials, or a comprehensive
              marketing strategy, we're here to help. Let's discuss your project
              and create something amazing together.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button className="bg-white text-[#042944] hover:bg-[#f8f9fa] px-8 py-6 text-lg rounded-md transition-all shadow-xl">
                  START YOUR PROJECT
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
                Have a Project in Mind?{" "}
                <span className="text-[#3498db]">Let's Make It Happen</span>
              </h3>
              <p className="text-[#d0d5dd]">
                Get in touch today and let's discuss how we can help your
                business grow
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-[#042944] hover:bg-[#f8f9fa] px-8 py-4 rounded-md transition-all hover:scale-105 whitespace-nowrap">
                GET IN TOUCH →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

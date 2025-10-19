"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ServicesPage() {
  const topMarqueeRef = useRef<HTMLDivElement>(null);
  const clientMarqueeRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [projectDirection, setProjectDirection] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    if (isSliderHovered) return;

    const interval = setInterval(() => {
      setSlideDirection("right");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isSliderHovered]);

  useEffect(() => {
    const animateMarquee = (element: HTMLElement | null) => {
      if (!element) return;

      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += 0.5;
        if (scrollAmount >= element.scrollWidth / 2) {
          scrollAmount = 0;
        }
        element.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scroll);
      };
      scroll();
    };

    animateMarquee(topMarqueeRef.current);
    animateMarquee(clientMarqueeRef.current);
  }, []);

  const workSamples = [
    "/images/mobile-app-design-concept.png",
    "/images/abstract-branding-elements.png",
    "/images/web-design-concept.png",
    "/images/illustration-work.jpg",
    "/images/marketing-design.jpg",
    "/images/mobile-app-design-concept.png",
    "/images/abstract-branding-elements.png",
    "/images/web-design-concept.png",
    "/images/illustration-work.jpg",
    "/images/marketing-design.jpg",
  ];

  const slides = [
    {
      service: "Website Design & Development",
      title: "E-Commerce Platform Redesign",
      description:
        "We transformed a traditional retail business into a modern e-commerce powerhouse. Our team created a fully responsive, user-friendly website with seamless checkout experience, inventory management, and real-time analytics. The result was a 250% increase in online sales within the first quarter.",
      features: [
        "Responsive Design",
        "Custom CMS Integration",
        "Payment Gateway Setup",
        "SEO Optimization",
        "Performance Optimization",
      ],
      image: "/images/web-design-concept.png",
    },
    {
      service: "Graphic Design",
      title: "Complete Brand Identity Package",
      description:
        "Created a comprehensive brand identity for a startup including logo design, color palette, typography system, and brand guidelines. Our design captures the essence of innovation while maintaining professional appeal. The brand has been successfully applied across all digital and print materials.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Collateral",
        "Social Media Templates",
        "Print Materials",
      ],
      image: "/images/abstract-branding-elements.png",
    },
    {
      service: "Digital Marketing",
      title: "Social Media Campaign Success",
      description:
        "Developed and executed a comprehensive digital marketing strategy that increased brand awareness by 400%. Our data-driven approach combined social media marketing, content creation, and targeted advertising to reach the right audience at the right time, resulting in exceptional ROI.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Paid Advertising",
        "Analytics & Reporting",
        "Community Management",
      ],
      image: "/images/marketing-design.jpg",
    },
    {
      service: "App Development",
      title: "Mobile Fitness Tracking App",
      description:
        "Built a feature-rich mobile application for iOS and Android that helps users track their fitness goals. The app includes workout planning, nutrition tracking, progress analytics, and social features. With over 50,000 downloads in the first month, it's become a favorite among fitness enthusiasts.",
      features: [
        "Cross-Platform Development",
        "Real-time Sync",
        "Push Notifications",
        "In-App Purchases",
        "Analytics Dashboard",
      ],
      image: "/images/mobile-app-design-concept.png",
    },
    {
      service: "Illustration & Visual Design",
      title: "Custom Illustration Series",
      description:
        "Created a unique set of custom illustrations for a tech company's marketing campaign. Our artistic approach combined modern aesthetics with brand personality, resulting in visually striking content that resonated with their target audience and significantly improved engagement rates.",
      features: [
        "Custom Illustrations",
        "Icon Design",
        "Infographics",
        "Animation Ready",
        "Brand Consistency",
      ],
      image: "/images/illustration-work.jpg",
    },
  ];

  const services = [
    {
      title: "Website Design & Development",
      description:
        "Create stunning, responsive websites that engage your audience and drive results. From concept to launch, we build digital experiences that work.",
      icon: "🌐",
    },
    {
      title: "SEO",
      description:
        "Boost your online visibility and rank higher in search results. Our SEO strategies help you reach more customers and grow your business organically.",
      icon: "🔍",
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your target audience with data-driven digital marketing campaigns. We create strategies that convert and deliver measurable results.",
      icon: "📱",
    },
    {
      title: "App Development",
      description:
        "Build powerful mobile applications that users love. We develop iOS and Android apps with seamless functionality and beautiful design.",
      icon: "📲",
    },
    {
      title: "Graphic Design",
      description:
        "Create visual content that captures attention and communicates your brand message. From logos to marketing materials, we design with purpose.",
      icon: "🎨",
    },
  ];

  const stats = [
    { value: "99%", label: "Client Retention" },
    { value: "7", label: "Years of Service" },
    { value: "30+", label: "Team of Professionals" },
    { value: "221+", label: "Satisfied Clients" },
  ];

  const projects = [
    {
      title: "Custom Title",
      image: "/images/custom-design-project.jpg",
      category: "Branding",
    },
    {
      title: "Gallery",
      image: "/images/gallery-design-project.jpg",
      category: "Web Design",
    },
    {
      title: "Centered Image",
      image: "/images/centered-design-project.jpg",
      category: "Marketing",
    },
    {
      title: "E-Commerce Platform",
      image: "/images/web-design-concept.png",
      category: "Web Development",
    },
    {
      title: "Mobile App Design",
      image: "/images/mobile-app-design-concept.png",
      category: "App Design",
    },
    {
      title: "Brand Identity",
      image: "/images/abstract-branding-elements.png",
      category: "Branding",
    },
  ];

  const clients = [
    "/images/generic-company-logo-1.png",
    "/images/generic-client-logo-2.png",
    "/images/generic-abstract-logo-3.png",
    "/images/abstract-logo-4.png",
    "/images/generic-logo-5.png",
    "/images/client-logo-6.jpg",
    "/images/generic-company-logo-1.png",
    "/images/generic-client-logo-2.png",
    "/images/generic-abstract-logo-3.png",
    "/images/abstract-logo-4.png",
  ];

  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextProject = () => {
    setProjectDirection("right");
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectDirection("left");
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentProjectIndex + i) % projects.length]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const projectVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-[#042944]">
        {/* SVG Tribal Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="heroPattern"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                {/* Subtle grid lines */}
                <path
                  d="M0 60 L120 60 M60 0 L60 120"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
                {/* Tribal triangles (chevron style) */}
                <path
                  d="M0 30 L30 0 L60 30 L30 60 Z 
               M60 30 L90 0 L120 30 L90 60 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* Ocean wave band */}
                <path
                  d="M0 90 Q30 60, 60 90 T120 90"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            {/* Apply the pattern */}
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>
        </div>

        {/* Foreground content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Our Services
            </h1>
            <p className="text-[#d0d5dd] text-lg sm:text-xl max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white overflow-hidden">
        <div ref={topMarqueeRef} className="flex gap-6 whitespace-nowrap">
          {workSamples.map((sample, index) => (
            <div
              key={index}
              className="relative w-80 h-52 rounded-lg overflow-hidden flex-shrink-0 shadow-lg"
            >
              <Image
                src={sample || "/placeholder.svg"}
                alt={`Work sample ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50 bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.png')]">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="relative group overflow-hidden"
            onMouseEnter={() => setIsSliderHovered(true)}
            onMouseLeave={() => setIsSliderHovered(false)}
          >
            <AnimatePresence
              initial={false}
              custom={slideDirection}
              mode="popLayout"
            >
              <motion.div
                key={currentSlide}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* LEFT SIDE - TEXT */}
                <div className="bg-[#042944] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="text-sm text-gray-300 mb-2 uppercase tracking-wider">
                      {slides[currentSlide].service}
                    </div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg"
                    >
                      {slides[currentSlide].description}
                    </motion.p>

                    <motion.div
                      className="space-y-3 mb-8"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.07,
                            delayChildren: 0.25,
                          },
                        },
                      }}
                    >
                      {slides[currentSlide].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.4 }}
                          className="flex items-center gap-3 text-white"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm sm:text-base">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <motion.div
                  key={slides[currentSlide].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative h-[400px] sm:h-[500px] lg:h-auto min-h-[600px]"
                >
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#042944]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#042944]" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSlideDirection(idx > currentSlide ? "right" : "left");
                    setCurrentSlide(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-[#042944] w-8"
                      : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 bg-white border-none">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#042944] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="#"
                    className="text-[#042944] font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#042944] rounded-3xl p-8 sm:p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#042944] mb-4">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our
              creativity and expertise
            </p>
          </motion.div>

          <div className="relative group">
            <div className="overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={projectDirection}
                mode="popLayout"
              >
                <motion.div
                  key={currentProjectIndex}
                  custom={projectDirection}
                  variants={projectVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {getVisibleProjects().map((project, index) => (
                    <div
                      key={`${currentProjectIndex}-${index}`}
                      className="group/card cursor-pointer"
                    >
                      <div className="relative h-64 rounded-lg overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#042944] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.category}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevProject}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6 text-[#042944]" />
            </button>
            <button
              onClick={nextProject}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6 text-[#042944]" />
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#eaecf0]">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#042944] mb-2">
                Our Clients
              </h2>
              <p className="text-[#6a797e]">
                We have been working with some Fortune 500+ clients
              </p>
            </div>
          </ScrollReveal>

          <div className="overflow-hidden">
            <div
              ref={clientMarqueeRef}
              className="flex gap-12 whitespace-nowrap items-center py-4"
            >
              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={`/images/company-${i}.png`}
                    alt={`Client ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cover bg-center bg-no-repeat bg-[url('/images/about_bg.png')]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#042944] p-8 sm:p-12 rounded-2xl text-center border-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something amazing together. Get in
                touch with our team today.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-[#042944] hover:bg-gray-100 px-8 py-6 text-lg rounded-md transition-all hover:scale-105">
                  START YOUR PROJECT
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

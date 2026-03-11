"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Phone, HelpCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Barry's Emergency Plumbing"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "Call Now: (555) 123-4567",
            href: "tel:+15551234567",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <ContactCenter
          tag="Get Help Now"
          title="Stop the Leak, Start Your Peace of Mind"
          description="Don't let plumbing emergencies drain your wallet or your patience. Call Barry's Emergency Plumbing now for fast, honest service and fair pricing."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{
            variant: "rotated-rays-animated",
          }}
          useInvertedBackground={false}
          inputPlaceholder="Your phone number"
          buttonText="Call Now: (555) 123-4567"
          termsText="We'll respond to your request within 1 hour. Available 24/7 for emergencies."
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Answers to common questions homeowners ask about our emergency plumbing service and pricing."
          tag="Have Questions?"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "Do you offer 24/7 emergency plumbing service?",
              content: "Yes! We're available 24 hours a day, 7 days a week for emergency plumbing calls. Nights, weekends, holidays—call (555) 123-4567 anytime you need urgent help.",
            },
            {
              id: "2",
              title: "How quickly can you respond to emergency calls?",
              content: "Our average emergency response time is 30 minutes. We prioritize urgent calls to minimize water damage and get your plumbing working again fast.",
            },
            {
              id: "3",
              title: "Do you provide upfront pricing?",
              content: "Absolutely. We give you a clear price quote before we start work. No surprises, no hidden fees. What we quote is what you pay.",
            },
            {
              id: "4",
              title: "What plumbing issues do you handle?",
              content: "We handle all residential plumbing: emergency repairs, leak detection, drain cleaning, water heater service, toilet/faucet repair, pipe work, and plumbing for remodels. If it involves plumbing, we can help.",
            },
            {
              id: "5",
              title: "Do you service water heaters and drain clogs?",
              content: "Yes! We repair, maintain, and install water heaters of all brands and types. We also specialize in drain cleaning and clog removal using modern equipment.",
            },
            {
              id: "6",
              title: "What areas do you serve?",
              content: "We serve the greater metro area and surrounding communities. Call (555) 123-4567 to confirm we service your location, or fill out our online contact form and we'll get back to you quickly.",
            },
            {
              id: "7",
              title: "Can I request service online?",
              content: "Yes! You can fill out our online service request form with details about your plumbing issue. We'll contact you within 1 hour to confirm your appointment time.",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          buttons={[
            {
              text: "Request Service Online",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Services",
                  href: "/services",
                },
                {
                  label: "About",
                  href: "/about",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
              ],
            },
            {
              title: "Services",
              items: [
                {
                  label: "Emergency Plumbing",
                  href: "/services",
                },
                {
                  label: "Leak Repair",
                  href: "/services",
                },
                {
                  label: "Drain Cleaning",
                  href: "/services",
                },
                {
                  label: "Water Heater",
                  href: "/services",
                },
              ],
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Call: (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  label: "Emergency: 24/7",
                  href: "#",
                },
                {
                  label: "Service Request Form",
                  href: "/contact",
                },
                {
                  label: "Email: info@barrysplumbing.com",
                  href: "mailto:info@barrysplumbing.com",
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#",
                },
                {
                  label: "Terms of Service",
                  href: "#",
                },
                {
                  label: "Service Area",
                  href: "#",
                },
                {
                  label: "License & Insurance",
                  href: "#",
                },
              ],
            },
          ]}
          bottomLeftText="© 2025 Barry's Emergency Plumbing. All rights reserved. Licensed and insured."
          bottomRightText="Serving your community with honest plumbing service."
        />
      </div>
    </ThemeProvider>
  );
}
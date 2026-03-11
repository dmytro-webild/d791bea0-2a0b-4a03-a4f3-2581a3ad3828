"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import Link from "next/link";
import { Wrench, Phone } from "lucide-react";

export default function ServicesPage() {
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

      <div id="services-detail" data-section="services-detail">
        <FeatureCardTwentyOne
          title="Comprehensive Plumbing Services"
          description="Barry's Emergency Plumbing offers a full range of residential plumbing services. Whether you need an emergency repair, preventive maintenance, or installation work, we're here to help with professional, honest service and fair pricing."
          tag="All Your Plumbing Needs"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721525.jpg"
          imageAlt="Professional plumbing service and tools"
          mediaAnimation="slide-up"
          accordionItems={[
            {
              id: "1",
              title: "Emergency Plumbing",
              content: "24/7 emergency response for burst pipes, severe leaks, and urgent issues. We prioritize emergency calls to minimize water damage and restore service quickly. When you need help at 2 AM on a holiday, we'll be there.",
            },
            {
              id: "2",
              title: "Leak Detection & Repair",
              content: "Expert leak detection and repair for all types of leaks—from hidden wall leaks to under-sink drips. We find the source and fix it right, preventing costly water damage and helping you save on your water bill.",
            },
            {
              id: "3",
              title: "Drain Cleaning & Clog Removal",
              content: "Fast, effective drain cleaning services using modern equipment. We clear clogs in sinks, showers, tubs, and main lines. No more backed-up water—just clear, flowing drains.",
            },
            {
              id: "4",
              title: "Water Heater Services",
              content: "Water heater repair, maintenance, and installation. We service all brands and types of water heaters—tankless, gas, electric, and hybrid. Keep your hot water flowing reliably.",
            },
            {
              id: "5",
              title: "Toilet, Faucet & Fixture Repair",
              content: "Fast repairs and replacements for toilets, faucets, sinks, and shower fixtures. Running toilets, dripping faucets, or broken fixtures? We fix them quickly with quality parts and workmanship.",
            },
            {
              id: "6",
              title: "Pipe Repair & Remodeling",
              content: "Comprehensive pipe repair and replacement services. Corroded pipes, pinhole leaks, or burst sections—we handle it all. We also provide full plumbing support for kitchen remodels, bathroom renovations, and new construction.",
            },
          ]}
          buttons={[
            {
              text: "Request Service Now",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
          mediaPosition="left"
        />
      </div>

      <div id="services-commitment" data-section="services-commitment">
        <TextSplitAbout
          title="Our Service Commitment"
          description={[
            "Every service call is backed by our commitment to quality, honesty, and fair pricing. We show up on time, equipped with the right tools and parts. We listen carefully to your concerns, diagnose accurately, and explain our recommendations clearly.",
            "We work efficiently to minimize disruption to your home. Our technicians treat your property with respect, keeping your home clean throughout the repair. When we finish, your plumbing problem is solved, and you have confidence in the work we've done.",
            "Many customers have trusted Barry's Emergency Plumbing for years. We aim to be your reliable, professional local plumber for all your residential plumbing needs.",
          ]}
          buttons={[
            {
              text: "Call Now: (555) 123-4567",
              href: "tel:+15551234567",
            },
            {
              text: "Back to Home",
              href: "/",
            },
          ]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="services-cta" data-section="services-cta">
        <ContactCenter
          tag="Ready to Help"
          title="Need Plumbing Service? We're Ready"
          description="Contact Barry's Emergency Plumbing today for professional, honest service. Available 24/7 for emergencies. Call now or submit your service request online."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="Your phone number"
          buttonText="Call Now: (555) 123-4567"
          termsText="We'll respond to your request within 1 hour. Available 24/7 for emergencies."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Emergency Plumbing", href: "/services" },
                { label: "Leak Repair", href: "/services" },
                { label: "Drain Cleaning", href: "/services" },
                { label: "Water Heater", href: "/services" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "Call: (555) 123-4567", href: "tel:+15551234567" },
                { label: "Emergency: 24/7", href: "#" },
                { label: "Service Request Form", href: "/contact" },
                { label: "Email: info@barrysplumbing.com", href: "mailto:info@barrysplumbing.com" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Service Area", href: "#" },
                { label: "License & Insurance", href: "#" },
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
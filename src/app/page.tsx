"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import Link from "next/link";
import { Zap, Clock, Star, CheckCircle, Award, Wrench, Phone, HelpCircle } from "lucide-react";

export default function HomePage() {
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
            text: "Call Now: (555) 123-4567",            href: "tel:+15551234567"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Fast, Reliable Plumbing When You Need It Most"
          description="Local emergency plumbing service with honest pricing, fast response times, and professional expertise. Available 24/7 for residential plumbing emergencies."
          tag="Emergency Plumbing Available"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            {
              text: "Call Now: (555) 123-4567",              href: "tel:+15551234567"},
            {
              text: "Request Service",              href: "/contact"},
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-plumber_23-2150746388.jpg",              imageAlt: "Professional plumber working on pipes"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/sanitary-technician-lying-sink_23-2147772221.jpg",              imageAlt: "Emergency plumbing repair in progress"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-nurse-giving-scan-patient_23-2149341551.jpg",              imageAlt: "Water heater installation service"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721545.jpg",              imageAlt: "Drain cleaning equipment"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/household-problem-woman-pointing-broken-tap-with-jet-water-man-with-suitcase-tools_259150-58295.jpg",              imageAlt: "Leak repair services"},
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="trust-signals" data-section="trust-signals">
        <MetricCardOne
          title="Why Barry's Plumbing Wins Your Trust"
          description="Built on years of honest service, fair pricing, and rapid response to homeowner emergencies."
          metrics={[
            {
              id: "1",              value: "20",              title: "Years",              description: "Professional local plumbing experience",              icon: Clock,
            },
            {
              id: "2",              value: "4.8",              title: "Stars",              description: "Based on 500+ verified customer reviews",              icon: Star,
            },
            {
              id: "3",              value: "30",              title: "Minutes",              description: "Average response time to emergency calls",              icon: Zap,
            },
            {
              id: "4",              value: "100%",              title: "Fair",              description: "Upfront pricing with no hidden fees",              icon: CheckCircle,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Trusted Local Plumber"
          tagIcon={Award}
        />
      </div>

      <div id="services-preview" data-section="services-preview">
        <FeatureCardTwentyOne
          title="Our Plumbing Services"
          description="From emergency repairs to routine maintenance, we handle all your residential plumbing needs with professionalism and care."
          tag="Full Service Coverage"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721525.jpg?_wi=1"
          imageAlt="Professional plumbing service van and tools"
          mediaAnimation="slide-up"
          accordionItems={[
            {
              id: "1",              title: "Emergency Plumbing",              content: "24/7 emergency response for burst pipes, severe leaks, and urgent issues. We prioritize emergency calls to minimize water damage and restore service quickly."},
            {
              id: "2",              title: "Leak Detection & Repair",              content: "Expert leak detection and repair for all types of leaks. We find the source and fix it right, preventing costly water damage."},
            {
              id: "3",              title: "Drain Cleaning & Clog Removal",              content: "Fast, effective drain cleaning services using modern equipment. We clear clogs and restore flow to your drains, sinks, and showers."},
            {
              id: "4",              title: "Water Heater Services",              content: "Water heater repair, maintenance, and installation. We service all brands and types of water heaters."},
            {
              id: "5",              title: "Toilet, Faucet & Fixture Repair",              content: "Fast repairs and replacements for toilets, faucets, sinks, and shower fixtures. All work backed by our satisfaction guarantee."},
            {
              id: "6",              title: "Pipe Repair & Remodeling",              content: "Comprehensive pipe repair and replacement services. We also handle plumbing for home remodels and renovations."},
          ]}
          buttons={[
            {
              text: "View All Services",              href: "/services"},
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
          mediaPosition="right"
        />
      </div>

      <div id="why-choose-barry" data-section="why-choose-barry">
        <TextSplitAbout
          title="Why Choose Barry's Emergency Plumbing?"
          description={[
            "We're your trusted neighborhood plumber. With over 20 years of local experience, we've built our reputation on honest recommendations, fair pricing, and fast response times. When plumbing emergencies strike, you need someone you can count on.",            "Every customer is treated with respect and clear communication. We explain repair options, pricing upfront with no hidden fees, and take pride in quality workmanship. Many of our customers have trusted us for years—and we aim to earn your trust too.",            "Available 24/7 for emergency calls. Respectful, professional service in your home. Fair, competitive pricing. Experienced, knowledgeable plumber. That's the Barry's Emergency Plumbing difference."]}
          buttons={[
            {
              text: "Request Service Now",              href: "/contact"},
            {
              text: "Call (555) 123-4567",              href: "tel:+15551234567"},
          ]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real testimonials from homeowners in our community who've trusted Barry's Emergency Plumbing with their most urgent repairs."
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahjohnsonfamily",              testimonial: "Barry arrived within 30 minutes of my emergency call. He quickly diagnosed our burst pipe, explained the repair clearly, and fixed it without any fuss. Honest pricing, professional work. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-young-woman-posing_23-2148454538.jpg?_wi=1",              imageAlt: "Sarah Johnson"},
            {
              id: "2",              name: "Michael Chen",              handle: "@mchen_home",              testimonial: "Had a major drain clog in my basement. Barry was straightforward about what needed to be done and the cost—no surprises. The work was done efficiently and my drain is flowing perfectly now.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-holding-mobile-phone-coffee-cup-waiting-area_107420-95820.jpg?_wi=1",              imageAlt: "Michael Chen"},
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emilyrodriguezdiy",              testimonial: "Called for a water heater issue on a Sunday. Barry answered immediately, came out the same day, and got us hot water again. Great service, fair price. We've used him three times now.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-broadly-business-woman-showing-thumb-up_1262-1127.jpg?_wi=1",              imageAlt: "Emily Rodriguez"},
            {
              id: "4",              name: "David Kim",              handle: "@dkimhomeowner",              testimonial: "Most plumbers just show up and quote high prices. Barry took time to explain our options, recommended the most cost-effective solution, and did excellent work. A plumber you can actually trust.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/people-recording-their-house-tour_23-2151139106.jpg?_wi=1",              imageAlt: "David Kim"},
            {
              id: "5",              name: "Jessica Martinez",              handle: "@jmartinez_homecare",              testimonial: "Leaky faucet turned into a bigger problem. Barry diagnosed it quickly, explained what went wrong in terms I could understand, and fixed it properly. Professional and friendly. Will call him again.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/pretty-teenager-talking-phone_23-2148804651.jpg?_wi=1",              imageAlt: "Jessica Martinez"},
            {
              id: "6",              name: "Robert Thompson",              handle: "@rthompson_builder",              testimonial: "Used Barry for our home remodel plumbing work. Reliable, on-time, quality work, and fair pricing. He's now our go-to plumber for everything. Definitely recommend to anyone in the area.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-businessman-looking-camera_23-2147839978.jpg?_wi=1",              imageAlt: "Robert Thompson"},
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Verified Reviews"
          tagIcon={CheckCircle}
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
              id: "1",              title: "Do you offer 24/7 emergency plumbing service?",              content: "Yes! We're available 24 hours a day, 7 days a week for emergency plumbing calls. Nights, weekends, holidays—call (555) 123-4567 anytime you need urgent help."},
            {
              id: "2",              title: "How quickly can you respond to emergency calls?",              content: "Our average emergency response time is 30 minutes. We prioritize urgent calls to minimize water damage and get your plumbing working again fast."},
            {
              id: "3",              title: "Do you provide upfront pricing?",              content: "Absolutely. We give you a clear price quote before we start work. No surprises, no hidden fees. What we quote is what you pay."},
            {
              id: "4",              title: "What plumbing issues do you handle?",              content: "We handle all residential plumbing: emergency repairs, leak detection, drain cleaning, water heater service, toilet/faucet repair, pipe work, and plumbing for remodels. If it involves plumbing, we can help."},
            {
              id: "5",              title: "Do you service water heaters and drain clogs?",              content: "Yes! We repair, maintain, and install water heaters of all brands and types. We also specialize in drain cleaning and clog removal using modern equipment."},
            {
              id: "6",              title: "What areas do you serve?",              content: "We serve the greater metro area and surrounding communities. Call (555) 123-4567 to confirm we service your location, or fill out our online contact form and we'll get back to you quickly."},
            {
              id: "7",              title: "Can I request service online?",              content: "Yes! You can fill out our online service request form with details about your plumbing issue. We'll contact you within 1 hour to confirm your appointment time."},
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          buttons={[
            {
              text: "Request Service Online",              href: "/contact"},
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <ContactCenter
          tag="Get Help Now"
          title="Stop the Leak, Start Your Peace of Mind"
          description="Don't let plumbing emergencies drain your wallet or your patience. Call Barry's Emergency Plumbing now for fast, honest service and fair pricing."
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
              title: "Quick Links",              items: [
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Emergency Plumbing", href: "/services" },
                { label: "Leak Repair", href: "/services" },
                { label: "Drain Cleaning", href: "/services" },
                { label: "Water Heater", href: "/services" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Call: (555) 123-4567", href: "tel:+15551234567" },
                { label: "Emergency: 24/7", href: "#" },
                { label: "Service Request Form", href: "/contact" },
                { label: "Email: info@barrysplumbing.com", href: "mailto:info@barrysplumbing.com" },
              ],
            },
            {
              title: "Legal",              items: [
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

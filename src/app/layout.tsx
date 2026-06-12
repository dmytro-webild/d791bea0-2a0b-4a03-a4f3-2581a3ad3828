import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergency Plumbing Services - Barry's Plumbing | Fast Response",
  description: "24/7 emergency plumbing service with fast response, fair pricing, and honest recommendations. Leak repair, drain cleaning, water heater service & more.",
  keywords: "emergency plumbing, plumber near me, leak repair, drain cleaning, water heater repair, residential plumbing",
  metadataBase: new URL("https://barrysplumbing.com"),
  alternates: {
    canonical: "https://barrysplumbing.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Barry's Emergency Plumbing - Fast, Honest, Fair",
    description: "Local emergency plumbing service you can trust. Available 24/7. Fast response, honest pricing, professional service.",
    url: "https://barrysplumbing.com",
    siteName: "Barry's Emergency Plumbing",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-plumber_23-2150746388.jpg",
        alt: "Professional plumbing emergency service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barry's Emergency Plumbing - 24/7 Service",
    description: "Fast emergency plumbing with honest pricing and fast response times.",
    images: ["http://img.b2bpic.net/free-photo/high-angle-woman-working-as-plumber_23-2150746388.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${openSans.variable} antialiased`}
        >
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
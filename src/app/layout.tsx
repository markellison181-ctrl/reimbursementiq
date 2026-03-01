import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReimbursementIQ — Healthcare Reimbursement Intelligence",
  description: "Weekly intelligence on CMS policy changes, CPT/ICD updates, Medicare/Medicaid rate changes, payer policy shifts, and denial trends for healthcare revenue cycle leaders.",
  keywords: "healthcare reimbursement, CMS policy, CPT codes, ICD codes, Medicare rates, Medicaid, denial management, revenue cycle",
  metadataBase: new URL("https://reimbursementiq.com"),
  alternates: { canonical: "https://reimbursementiq.com" },
  authors: [{ name: "SignalStack Media" }],
  creator: "SignalStack Media",
  publisher: "SignalStack Media",
  openGraph: {
    title: "ReimbursementIQ — Healthcare Reimbursement Intelligence",
    description: "Weekly intelligence on CMS policy changes, CPT/ICD updates, Medicare/Medicaid rate changes, and denial trends.",
    type: "website",
    url: "https://reimbursementiq.com",
    siteName: "ReimbursementIQ",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ReimbursementIQ - Healthcare Reimbursement Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReimbursementIQ — Healthcare Reimbursement Intelligence",
    description: "Weekly intelligence on CMS policy changes, CPT/ICD updates, Medicare/Medicaid rate changes, and denial trends.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

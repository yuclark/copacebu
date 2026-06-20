import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "COPA Cebu 2026 | Football Tournament",
  description: "Official website for COPA Cebu 2026. A premier 3-day football tournament held from June 19-21, 2026 at the Dynamic Herb Sports Complex, Talisay City, Cebu.",
  keywords: ["COPA Cebu", "Cebu Football", "Football Tournament", "Dynamic Herb Sports Complex", "Cebu Soccer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space.variable} ${jakarta.variable}`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col antialiased">
        {/* Background Mesh Gradient and Grid */}
        <div className="fixed inset-0 z-[-2] bg-background"></div>
        <div className="fixed inset-0 z-[-1] mesh-bg animate-gradient-shift"></div>
        <div className="fixed inset-0 z-[-1] grid-overlay pointer-events-none"></div>

        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

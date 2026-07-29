import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/client-providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingEmergencyButton } from "@/components/common/floating-emergency-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahanaya - Mental Wellness Platform | Leo Club of Pannipitiya Paradise",
  description: "Providing free, confidential mental wellness support, screening tools, and educational resources for Sri Lankan students and employees. An initiative by the Leo Club of Pannipitiya Paradise.",
  keywords: ["Mental Health Sri Lanka", "Leo Club Pannipitiya Paradise", "Sahanaya", "Mental Wellness Support", "Sumithrayo Colombo", "Sri Lanka Helplines"],
  authors: [{ name: "Leo Club of Pannipitiya Paradise" }],
  openGraph: {
    title: "Sahanaya - Mental Wellness Platform",
    description: "Provide free, confidential mental wellness support for Sri Lankan students and employees while directing users toward professional mental health services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ClientProviders>
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
          <FloatingEmergencyButton />
        </ClientProviders>
      </body>
    </html>
  );
}

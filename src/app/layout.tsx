import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { headers } from "next/headers";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star",
  description: "Workflow & Portfolio App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50`}
      >
        <Navigation session={session} />

        <main className="flex-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

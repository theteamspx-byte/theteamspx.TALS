import "./globals.css";
import React from "react";

export const metadata = {
  title: "THETEAMSPX.TALS",
  description: "Official Website — Real Estate, Crypto, Gym, Dating, Shop, Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

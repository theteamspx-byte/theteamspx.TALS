import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>THE TEAMSPX TALS</title>
        <meta
          name="description"
          content="Official website powered by Next.js + Tailwind. Explore Real Estate, Crypto, Gym, Dating, Shop & Portfolio — all in one place."
        />
        {/* 👇 Add this here */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

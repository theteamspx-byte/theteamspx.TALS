import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>THE TEAMSPX TALS</title>
        <meta 
          name="description" 
          content="Official THE TEAMSPX TALS Website — Real Estate, Crypto, Gym, Dating, Shop, Portfolio." 
        />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

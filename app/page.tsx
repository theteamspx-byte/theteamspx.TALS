import React from "react";
import "./globals.css";

export default function THETEAMSPX_TALS() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="THETEAMSPX" className="h-8 w-8" />
            <span className="font-semibold tracking-wide">THETEAMSPX.TALS</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#realestate" className="hover:text-purple-300">Real Estate</a>
            <a href="#crypto" className="hover:text-purple-300">Crypto</a>
            <a href="#gym" className="hover:text-purple-300">Gym</a>
            <a href="#dating" className="hover:text-purple-300">Dating</a>
            <a href="#shop" className="hover:text-purple-300">Shop</a>
            <a href="#portfolio" className="hover:text-purple-300">Portfolio</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <section className="text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Build the future with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              THETEAMSPX.TALS
            </span>
          </h1>
        </section>

        <Section id="realestate" title="Real Estate" desc="Buy, sell, and rent with verified listings." />
        <Section id="crypto"     title="Crypto"     desc="Trade the top digital assets securely." />
        <Section id="gym"        title="Gym"        desc="Memberships, classes, and coaching." />
        <Section id="dating"     title="Dating"     desc="Real profiles. Real conversations." />
        <Section id="shop"       title="Shop"       desc="Merch and premium products." />
        <Section id="portfolio"  title="Portfolio"  desc="Our work, partners, and results." />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} THETEAMSPX.TALS • All rights reserved
      </footer>
    </div>
  );
}

function Section({ id, title, desc }: { id: string; title: string; desc: string }) {
  return (
    <section id={id} className="rounded-2xl border border-white/10 p-6 sm:p-10 bg-gradient-to-b from-white/5 to-transparent">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-white/70">{desc}</p>
    </section>
  );
              }

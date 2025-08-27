import React from "react";

export default function THETEAMSPXTALS() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="THETEAMSPX.TALS" className="h-9 w-9" />
            <span className="font-bold">THETEAMSPX.TALS</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#realestate">Real Estate</a>
            <a href="#crypto">Crypto</a>
            <a href="#gym">Gym</a>
            <a href="#dating">Dating</a>
            <a href="#shop">Shop</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to THETEAMSPX.TALS
            <span className="block text-slate-400 text-2xl mt-2">
              Real Estate · Crypto · Gym · Dating · Shop · Portfolio
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl">
            One hub. Many opportunities. From homes to fitness, from crypto
            education to mature dating, from shopping to personal branding—all in
            one place.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-800 aspect-video grid place-items-center text-slate-500">
          Hero Image Placeholder
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} THETEAMSPX.TALS. All rights reserved.
      </footer>
    </div>
  );
      }

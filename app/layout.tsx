import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">THETEAMSPX.TALS</h1>
      <p className="mt-4 text-gray-400">
        Real Estate · Crypto · Gym · Dating · Shop · Portfolio
      </p>
      <img src="/logo.png" alt="THETEAMSPX" className="w-24 h-24 mt-6" />
    </main>
  );
}

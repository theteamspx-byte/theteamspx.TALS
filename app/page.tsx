export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-4xl font-bold">Welcome to THE TEAMSPX TALS 🚀</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        Official website powered by Next.js + Tailwind. Explore Real Estate, Crypto, Gym, Dating, Shop & Portfolio — all in one place.
      </p>
      <img 
        src="/logo.png" 
        alt="THE TEAMSPX Logo" 
        className="mt-6 w-32 h-32"
      />
    </main>
  );
}

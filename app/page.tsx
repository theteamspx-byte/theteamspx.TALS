// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold">Official website powered by THE TEAMSPX</h1>
      <p className="mt-4 text-lg">Welcome to our platform 🚀</p>

      <img
        src="/logo.png"
        alt="THE TEAMSPX Logo"
        className="mt-6 w-32 h-32"
      />

      {/* Navigation link to About page */}
      <a href="/about" className="mt-6 underline text-blue-400 hover:text-blue-600">
        Go to About →
      </a>
    </main>
  );
}

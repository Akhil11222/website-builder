export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
        <span>🚀</span> Ready to Launch
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
        Website Builder & Deployment Hub
      </h1>
      <p className="mt-4 text-neutral-400 text-lg max-w-xl">
        Select your template, book with a 10% token, and get your business website live.
      </p>
    </main>
  );
}
import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Guys the Imposter",
  description: "Find the imposter among your friends — offline or online!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00bfff" />
      </head>
      <body>
        <main className="min-h-screen flex flex-col items-center justify-start gap-6 p-4 bg-black">
          <header className="w-full max-w-3xl flex items-center justify-between mb-2">
            <div>
              <h1 className="h1 font-extrabold neon-text">Guys the Imposter</h1>
              <p className="text-sm text-sky-200/60">Pass & play — find the imposter</p>
            </div>
            <nav className="flex gap-2">
              <Link href="/" className="text-sky-300/80 hover:underline">Home</Link>
              <Link href="/setup" className="text-sky-300/80 hover:underline">Setup</Link>
            </nav>
          </header>
          <div className="w-full max-w-3xl">{children}</div>
        </main>
      </body>
    </html>
  );
}

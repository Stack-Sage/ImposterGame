import "../styles/globals.css";
import Navbar from "../components/Navbar";

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
      <body className="bg-[#0a1120]">
        <main className="min-h-screen flex flex-col items-center justify-start gap-8 p-0">
          <Navbar />
          <section className="w-full max-w-3xl mx-auto px-2 md:px-8 py-6 rounded-3xl bg-gradient-to-br from-sky-900/10 via-cyan-900/10 to-blue-900/10 shadow-xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

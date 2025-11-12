import "./globals.css";

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
      <body className="bg-[#0a1120] text-white text-2xl">
        <main className="min-h-screen flex flex-col items-center justify-start gap-4 p-2 sm:p-4">
          <h1 className="text-xl sm:text-2xl font-bold text-center mt-2 mb-2 text-cyan-200">
            I'm not a fucking Imposter, Trust me guys...
          </h1>
          <section className="w-screen sm:max-w-md mx-1 sm:mx-auto px-2 sm:px-6 py-4 sm:py-6 rounded-xl bg-gradient-to-br from-sky-900/10 via-cyan-900/10 to-blue-900/10 shadow transition hover:shadow-lg active:scale-95">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}

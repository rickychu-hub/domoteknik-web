import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://domoteknik.com'),
  title: {
    template: '%s | Domoteknik Ingeniería',
    default: 'Domoteknik | Energía Renovable e Ingeniería Avanzada',
  },
  description: "Soluciones en Fotovoltaica, Aerotermia, Domótica y Cargadores Eléctricos. Tecnología eficiente para un futuro sostenible.",
  keywords: ["Energía solar", "Aerotermia", "Madrid", "Instaladores", "Placas solares", "Cargadores VE"],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://domoteknik.com',
    siteName: 'Domoteknik',
  },
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans bg-slate-950 text-slate-50`}
      >
        <Navbar />
        <main className="flex-grow bg-slate-950">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

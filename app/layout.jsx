import { Outfit, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Airline","name":"SkyWings","iataCode":"SW","description":"Maskapai antarkota fiktif dengan hub di Jakarta","url":"https://landing-skywings.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://landing-skywings.pintuweb.id"),
  title: { default: "SkyWings — Maskapai Antarkota yang Tepat Waktu", template: "%s — SkyWings" },
  description: "SkyWings terbang langsung dari Jakarta ke Bali, Yogyakarta, Lombok, dan Labuan Bajo. Jam setempat, tarif termasuk pajak, dan angka tepat waktu tiap bulan.",
  applicationName: "SkyWings",
  keywords: ["tiket pesawat jakarta bali", "jadwal penerbangan labuan bajo", "tiket pesawat yogyakarta", "maskapai tepat waktu", "harga tiket pesawat lombok"],
  authors: [{ name: "SkyWings" }],
  creator: "SkyWings",
  publisher: "SkyWings",
  alternates: { canonical: "https://landing-skywings.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-skywings.pintuweb.id",
    siteName: "SkyWings",
    title: "SkyWings — Maskapai Antarkota yang Tepat Waktu",
    description: "SkyWings terbang langsung dari Jakarta ke Bali, Yogyakarta, Lombok, dan Labuan Bajo. Jam setempat, tarif termasuk pajak, dan angka tepat waktu tiap bulan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "SkyWings — Maskapai Antarkota yang Tepat Waktu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWings — Maskapai Antarkota yang Tepat Waktu",
    description: "SkyWings terbang langsung dari Jakarta ke Bali, Yogyakarta, Lombok, dan Labuan Bajo. Jam setempat, tarif termasuk pajak, dan angka tepat waktu tiap bulan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-aviation focus:px-4 focus:py-2 focus:text-sky">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=skywings" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}

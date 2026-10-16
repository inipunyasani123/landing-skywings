// app/blog/layout.jsx — metadata untuk /blog (halaman daftarnya client component).
// Halaman artikel menimpanya lewat generateMetadata di [slug]/page.jsx.
export const metadata = {
  title: { default: "Blog Perjalanan", template: "%s — SkyWings" },
  description: "Panduan memesan tiket, pola harga, bagasi kabin 7 kg, dan cerita di balik layar penerbangan SkyWings.",
  alternates: { canonical: "https://landing-skywings.pintuweb.id/blog" },
};

export default function BlogLayout({ children }) {
  return children;
}

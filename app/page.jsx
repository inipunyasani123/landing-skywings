import { BlogTeaser, FAQ, Hero, PapanKeberangkatan, Rute, Tarif, TepatWaktu } from "./components/Beranda";

// Label bulan grafik ketepatan waktu dihitung dari tanggal hari ini; bangun ulang harian.
export const revalidate = 86400;

export default function Home() {
  return (
    <main>
      <Hero />
      <PapanKeberangkatan />
      <Rute />
      <Tarif />
      <TepatWaktu />
      <FAQ />
      <BlogTeaser />
    </main>
  );
}

// app/data/blog.js
// `content` berupa HTML sederhana (h2, p, ul, ol) yang dirender di app/blog/[slug]/page.jsx
// dan ditata oleh kelas .article-body di globals.css.
// Angka di artikel (jadwal, tarif, bagasi, batas check-in) mengikuti lib/penerbangan.js.
const SITE = "https://landing-skywings.pintuweb.id";

export const blogPosts = [
  {
    id: 1,
    slug: "cara-memesan-tiket",
    title: "Memesan Tiket Tanpa Salah Nama",
    excerpt:
      "Lima langkah memesan tiket SkyWings, dari memilih jam setempat sampai menyimpan kode pemesanan enam huruf.",
    content: `
<p>Memesan tiket hanya butuh beberapa menit, asal urutannya benar. Kesalahan kecil, misalnya nama yang tidak sama dengan KTP, justru yang paling sering membuat penumpang tertahan di konter. Ini urutan yang kami sarankan.</p>
<h2>1. Pilih rute dan hari terbang</h2>
<p>Semua penerbangan SkyWings langsung, tanpa transit. Beberapa rute tidak terbang setiap hari: Jakarta–Labuan Bajo hanya Selasa, Kamis, dan Sabtu, sedangkan Surabaya–Labuan Bajo Senin, Rabu, dan Jumat. Halaman jadwal menandai hari terbang setiap penerbangan.</p>
<h2>2. Baca jamnya dalam waktu setempat</h2>
<p>Jam berangkat dan tiba ditulis dalam waktu bandara masing-masing. Penerbangan ke Bali, Lombok, dan Labuan Bajo tiba dalam WITA, satu jam lebih cepat dari WIB. SW 110 yang berangkat dari Jakarta pukul 05.40 WIB, misalnya, tiba di Denpasar pukul 08.35 WITA meski lama terbangnya 1 jam 55 menit.</p>
<h2>3. Tulis nama persis seperti di KTP</h2>
<p>Nama penumpang tidak bisa dipindahkan ke orang lain. Salah ketik sampai tiga huruf masih bisa diperbaiki gratis lewat layanan pelanggan, tetapi lebih aman memeriksanya sebelum membayar.</p>
<h2>4. Putuskan bagasi sekarang, bukan di bandara</h2>
<p>Tarif Hemat hanya berisi bagasi kabin 7 kg. Kalau Anda membawa koper, bandingkan dulu dengan tarif Fleksibel yang sudah termasuk bagasi tercatat 20 kg dan satu kali ubah jadwal gratis.</p>
<h2>5. Simpan kode pemesanan</h2>
<p>Setelah pembayaran berhasil, Anda menerima kode pemesanan enam huruf. Simpan kode itu: dipakai untuk check-in online, yang dibuka 24 jam dan ditutup 60 menit sebelum keberangkatan.</p>
`,
    image: "/images/rute/yogyakarta.webp",
    date: "2026-06-04",
    category: "Panduan",
    url: `${SITE}/blog/cara-memesan-tiket`,
  },
  {
    id: 2,
    slug: "diskon-tiket-spesial",
    title: "Kapan Tiket Paling Murah? Tiga Pola Harga",
    excerpt:
      "Kursi yang sama bisa berbeda harga ratusan ribu rupiah. Tiga pola yang bisa Anda manfaatkan saat memesan.",
    content: `
<p>Harga tiket bergerak mengikuti permintaan. Kursi yang sama bisa berbeda harga cukup jauh hanya karena jam terbang atau waktu pemesanannya. Polanya bisa dibaca, dan tidak perlu menunggu promo mendadak.</p>
<h2>Penerbangan pertama biasanya paling murah</h2>
<p>Di rute Jakarta–Denpasar, tarif Hemat SW 110 yang berangkat pukul 05.40 mulai Rp 899.000, sedangkan SW 114 pukul 11.20 mulai Rp 1.049.000. Kalau Anda sanggup bangun pagi, selisihnya cukup untuk ongkos taksi ke bandara.</p>
<h2>Pesan jauh hari untuk musim ramai</h2>
<p>Libur sekolah, akhir tahun, dan hari raya selalu padat. Untuk tanggal-tanggal ini, memesan jauh hari hampir selalu lebih murah daripada menunggu mendekati keberangkatan.</p>
<h2>Longgarkan tanggal</h2>
<p>Terbang di hari kerja, misalnya Selasa atau Rabu, umumnya lebih hemat daripada Jumat sore atau Minggu malam. Bergeser satu hari saja kadang sudah memberi selisih yang terasa.</p>
<h2>Yang tidak berubah: pajak sudah termasuk</h2>
<p>Harga yang tampil di jadwal SkyWings sudah termasuk pajak bandara dan biaya layanan. Angka yang Anda bandingkan adalah angka yang Anda bayar.</p>
`,
    image: "/images/rute/bali.webp",
    date: "2026-06-25",
    category: "Tips",
    url: `${SITE}/blog/diskon-tiket-spesial`,
  },
  {
    id: 3,
    slug: "tips-perjalanan",
    title: "Hari Keberangkatan, dari Rumah sampai Gerbang",
    excerpt:
      "Kapan harus tiba di bandara, dokumen apa yang disiapkan, dan cara menghitung jam tiba di WITA.",
    content: `
<p>Perjalanan yang tenang dimulai jauh sebelum pesawat lepas landas. Persiapan kecil di rumah menghemat banyak waktu dan tenaga di bandara.</p>
<h2>Datang lebih awal dari batas konter</h2>
<p>Konter check-in SkyWings tutup 45 menit sebelum keberangkatan. Usahakan tiba sekitar 90 menit sebelumnya, karena antrean pemeriksaan keamanan di jam sibuk sulit ditebak. Kalau sudah check-in online dan tidak membawa bagasi tercatat, Anda bisa langsung menuju pemeriksaan keamanan.</p>
<h2>Simpan dokumen di dua tempat</h2>
<p>Bawa KTP asli, lalu simpan salinan digital kode pemesanan dan boarding pass di ponsel dan di email. Kalau ponsel mati atau hilang, salinan di email masih bisa dibuka dari perangkat lain.</p>
<h2>Hitung jam tiba dengan benar</h2>
<p>Bali, Lombok, dan Labuan Bajo memakai WITA. Kalau Anda dijemput, kirimkan jam tiba sesuai jadwal di tiket, bukan jam di ponsel saat berangkat dari Jakarta.</p>
<h2>Jaga tubuh selama penerbangan</h2>
<ul>
  <li>Minum air secukupnya, karena udara kabin cenderung kering.</li>
  <li>Berdiri dan regangkan kaki sesekali pada penerbangan di atas dua jam, seperti Jakarta–Labuan Bajo.</li>
  <li>Kenakan sabuk pengaman setiap kali duduk, meski lampu tanda sudah padam.</li>
</ul>
<h2>Pertimbangkan asuransi perjalanan</h2>
<p>Asuransi membantu bila terjadi keterlambatan panjang, bagasi hilang, atau sakit di perjalanan. Baca cakupannya dan simpan nomor layanan daruratnya.</p>
`,
    image: "/images/rute/labuan-bajo.webp",
    date: "2026-07-16",
    category: "Tips",
    url: `${SITE}/blog/tips-perjalanan`,
  },
  {
    id: 4,
    slug: "panduan-packing",
    title: "Bagasi Kabin 7 kg: Yang Muat dan Yang Dicatat",
    excerpt:
      "Cara mengemas tas kabin 7 kg untuk tarif Hemat, aturan cairan dan power bank, dan kapan perlu bagasi tercatat.",
    content: `
<p>Tarif Hemat SkyWings berisi satu bagasi kabin 7 kg. Untuk perjalanan dua sampai tiga hari, itu cukup, asal Anda tahu cara mengemasnya dan barang apa yang tidak boleh masuk kabin.</p>
<h2>Mulai dari daftar</h2>
<p>Tulis kebutuhan per hari: pakaian, perlengkapan mandi, obat, dan dokumen. Daftar mencegah dua masalah sekaligus, yaitu barang penting yang tertinggal dan barang tak perlu yang ikut terbawa.</p>
<h2>Gulung, jangan lipat</h2>
<p>Pakaian yang digulung lebih hemat ruang dan tidak mudah kusut. Masukkan pakaian dalam dan kaus kaki ke sela sepatu agar ruang kosong terpakai.</p>
<h2>Kenali aturan kabin</h2>
<ul>
  <li>Cairan dibatasi 100 ml per wadah, dikemas dalam satu kantong plastik bening.</li>
  <li>Power bank dan baterai litium cadangan wajib dibawa ke kabin, tidak boleh masuk bagasi tercatat.</li>
  <li>Obat rutin, barang berharga, dan satu set pakaian ganti tetap di tas kabin.</li>
</ul>
<h2>Timbang sebelum berangkat</h2>
<p>Timbang tas di rumah. Kalau beratnya jelas lebih dari 7 kg, tarif Fleksibel dengan bagasi tercatat 20 kg sering lebih masuk akal daripada membayar kelebihan bagasi di bandara.</p>
<h2>Beri tanda pada tas</h2>
<p>Pasang label berisi nama dan nomor telepon, serta pita atau stiker yang mudah dikenali. Tas Anda lebih cepat ditemukan, baik di bagasi atas kabin maupun di ban bagasi.</p>
`,
    image: "/images/rute/lombok.webp",
    date: "2026-08-06",
    category: "Tips",
    url: `${SITE}/blog/panduan-packing`,
  },
  {
    id: 5,
    slug: "keamanan-penerbangan",
    title: "Lapisan Keselamatan di Balik Satu Penerbangan",
    excerpt:
      "Dari perawatan pesawat sampai peragaan keselamatan di kabin: lapisan yang menjaga setiap penerbangan.",
    content: `
<p>Keselamatan penerbangan tidak bergantung pada satu hal saja. Ia dibangun dari banyak lapisan yang saling menjaga, mulai dari bengkel perawatan hingga kursi tempat Anda duduk.</p>
<h2>Perawatan terjadwal</h2>
<p>Setiap pesawat diperiksa sebelum terbang dan menjalani perawatan berkala yang lebih mendalam sesuai jam terbangnya. Komponen diganti mengikuti batas pemakaian, bukan menunggu rusak.</p>
<h2>Awak yang terus berlatih</h2>
<p>Pilot berlatih secara berkala di simulator untuk menghadapi situasi darurat yang jarang terjadi di dunia nyata. Awak kabin juga dilatih evakuasi, pertolongan pertama, dan penanganan penumpang.</p>
<h2>Teknologi di kokpit</h2>
<p>Pesawat modern dilengkapi sistem peringatan tabrakan di udara, radar cuaca, dan peringatan kedekatan dengan daratan. Semuanya bekerja bersama pemandu lalu lintas udara di darat.</p>
<h2>Pemeriksaan di bandara</h2>
<p>Pemindaian penumpang dan bagasi memastikan barang berbahaya tidak masuk ke pesawat. Antrean pemeriksaan memang memakan waktu, tetapi itu salah satu lapisan pengaman terpenting.</p>
<h2>Peran penumpang</h2>
<ul>
  <li>Dengarkan peragaan keselamatan dan kenali pintu darurat terdekat.</li>
  <li>Kencangkan sabuk pengaman saat duduk untuk berjaga dari turbulensi.</li>
  <li>Ikuti instruksi awak kabin, terutama saat lepas landas dan mendarat.</li>
</ul>
`,
    image: "/images/rute/pesawat-gerbang.webp",
    date: "2026-08-27",
    category: "Di balik layar",
    url: `${SITE}/blog/keamanan-penerbangan`,
  },
  {
    id: 6,
    slug: "teknologi-terbaru",
    title: "A320neo dan ATR 72-600: Teknologi Armada Kami",
    excerpt:
      "Mengapa dua belas pesawat kami hanya terdiri dari dua tipe, dan apa artinya bagi jadwal yang tepat waktu.",
    content: `
<p>Armada SkyWings sengaja sederhana: delapan Airbus A320neo untuk rute dari dan ke Jakarta, dan empat ATR 72-600 untuk rute pendek dari Surabaya. Dua tipe saja berarti suku cadang, pelatihan awak, dan jadwal perawatan lebih mudah diatur, dan itu langsung terasa pada ketepatan waktu.</p>
<h2>Mesin yang lebih irit</h2>
<p>A320neo memakai mesin generasi baru dan ujung sayap yang lebih efisien, sehingga konsumsi bahan bakar per kursi lebih rendah dibanding generasi sebelumnya. Kabinnya juga lebih senyap.</p>
<h2>Baling-baling untuk landasan pendek</h2>
<p>ATR 72-600 bermesin turboprop dan nyaman di landasan yang lebih pendek. Untuk penerbangan 55 menit seperti Surabaya–Denpasar, pesawat ini lebih hemat daripada jet.</p>
<h2>Perawatan yang bisa direncanakan</h2>
<p>Dengan armada yang masih muda, perawatan berkala bisa dijadwalkan di malam hari tanpa mengganggu penerbangan pagi. Pesawat cadangan selalu siap di Jakarta.</p>
<h2>Bagasi yang bisa dilacak</h2>
<p>Setiap label bagasi dipindai di konter, di ban berjalan, dan di pintu pesawat. Kalau tas Anda tertinggal, kami tahu titik terakhir ia terlihat.</p>
`,
    image: "/images/rute/ruang-tunggu.webp",
    date: "2026-09-17",
    category: "Di balik layar",
    url: `${SITE}/blog/teknologi-terbaru`,
  },
];

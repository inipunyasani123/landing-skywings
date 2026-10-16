'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* Navigasi ponsel & tablet: panel selebar layar di bawah kepala halaman.
   Tertutup sendiri saat pindah halaman, saat tautan diklik, atau dengan Escape
   (dulu <details>, yang tetap terbuka setelah pindah halaman). */
export default function MenuPonsel({ tautan }) {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const pathname = usePathname();

  useEffect(() => setBuka(false), [pathname]);
  useEffect(() => {
    if (!buka) return;
    const tutup = (e) => {
      if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); }
    };
    document.addEventListener('keydown', tutup);
    return () => document.removeEventListener('keydown', tutup);
  }, [buka]);

  return (
    <div className="lg:hidden">
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls="menu-ponsel"
        onClick={() => setBuka((b) => !b)}
        className="inline-flex h-11 items-center rounded-lg border border-aviation/20 bg-white px-3.5 text-sm font-semibold text-aviation hover:border-aviation"
      >
        {buka ? 'Tutup' : 'Menu'}
      </button>
      <nav id="menu-ponsel" aria-label="Navigasi utama" hidden={!buka} className="absolute inset-x-0 top-full border-b border-aviation/10 bg-sky px-5 pb-5 shadow-[0_24px_40px_-24px_rgb(11_37_69/0.4)]">
        <ul className="mx-auto max-w-6xl divide-y divide-aviation/10">
          {tautan.map(([h, l, kode]) => (
            <li key={h}>
              <Link href={h} onClick={() => setBuka(false)} className="flex min-h-14 items-center justify-between gap-4 py-2 text-lg font-bold text-aviation hover:text-runway-ink">
                {l}
                <span className="pass-label text-slate-ink">{kode}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="perforation mx-auto mt-2 max-w-6xl text-aviation" />
      </nav>
    </div>
  );
}

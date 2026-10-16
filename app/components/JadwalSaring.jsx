'use client';

import { useEffect, useState } from 'react';
import { BANDARA, HARI, JADWAL, ZONA, durasi, rp } from '@/lib/penerbangan';

const ASAL = [...new Set(JADWAL.map((f) => f.dari))];
const TUJUAN = [...new Set(JADWAL.map((f) => f.ke))];

function HariTerbang({ hari, className = '' }) {
  return (
    <p className={`gap-1 ${className}`}>
      <span className="sr-only">Terbang {hari.length === 7 ? 'setiap hari' : `hari ${hari.map((h) => HARI[h - 1]).join(', ')}`}</span>
      {HARI.map((h, i) => <span key={h} aria-hidden="true" className={`grid h-6 w-9 place-items-center rounded text-[0.625rem] font-bold ${hari.includes(i + 1) ? 'bg-aviation text-sky' : 'bg-sky-2 text-slate-ink/60'}`}>{h}</span>)}
    </p>
  );
}

export default function JadwalSaring() {
  const [dari, setDari] = useState('semua');
  const [ke, setKe] = useState('semua');
  const [hari, setHari] = useState(0);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (BANDARA[q.get('dari')]) setDari(q.get('dari'));
    if (BANDARA[q.get('ke')]) setKe(q.get('ke'));
  }, []);

  const tampil = JADWAL.filter((f) => (dari === 'semua' || f.dari === dari) && (ke === 'semua' || f.ke === ke) && (!hari || f.hari.includes(hari)));
  const pilih = 'w-full rounded-lg border border-aviation/15 bg-white px-3 py-2.5 font-semibold text-aviation focus:border-boarding focus:outline-none';

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-3">
        <div>
          <label htmlFor="j-dari" className="pass-label">Dari</label>
          <select id="j-dari" value={dari} onChange={(e) => setDari(e.target.value)} className={`${pilih} mt-2`}>
            <option value="semua">Semua</option>
            {ASAL.map((k) => <option key={k} value={k}>{BANDARA[k].kota} ({k})</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="j-ke" className="pass-label">Ke</label>
          <select id="j-ke" value={ke} onChange={(e) => setKe(e.target.value)} className={`${pilih} mt-2`}>
            <option value="semua">Semua</option>
            {TUJUAN.map((k) => <option key={k} value={k}>{BANDARA[k].kota} ({k})</option>)}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="j-hari" className="pass-label">Hari</label>
          <select id="j-hari" value={hari} onChange={(e) => setHari(Number(e.target.value))} className={`${pilih} mt-2`}>
            <option value={0}>Semua hari</option>
            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((h, i) => <option key={h} value={i + 1}>{h}</option>)}
          </select>
        </div>
      </div>

      <p role="status" className="pass-label mt-6">{tampil.length} penerbangan</p>
      {tampil.length ? (
        <ul className="mt-4 space-y-4">
          {tampil.map((f) => (
            <li key={f.no} className="notch relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-4 rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto] md:items-center md:gap-5">
              <div className="col-span-2 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 md:col-span-1">
                <div>
                  <p className="pass-code text-3xl text-aviation">{f.berangkat}</p>
                  <p className="pass-label mt-1">{f.dari} · {ZONA[BANDARA[f.dari].zona]}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs">{durasi(f.durasi)} · langsung</p>
                  <div aria-hidden="true" className="route-dash my-2 text-aviation" />
                  <p className="pass-label">{f.no}</p>
                </div>
                <div className="text-right">
                  <p className="pass-code text-3xl text-aviation">{f.tiba}{f.besok && <sup className="text-sm">+1</sup>}</p>
                  <p className="pass-label mt-1">{f.ke} · {ZONA[BANDARA[f.ke].zona]}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-aviation">{BANDARA[f.dari].kota} → {BANDARA[f.ke].kota}</p>
                <p className="mt-1 text-sm">{f.pesawat}</p>
                <HariTerbang hari={f.hari} className="mt-2 hidden md:flex" />
              </div>
              <div className="text-right">
                <p className="text-xs">mulai</p>
                <p className="pass-code text-xl text-aviation sm:text-2xl">{rp(f.hemat)}</p>
                <p className="text-xs">tarif Hemat<span className="hidden sm:inline">, termasuk pajak</span></p>
              </div>
              {/* Ponsel: deret hari terbang selebar kartu, di bawah rute dan harga. */}
              <HariTerbang hari={f.hari} className="col-span-2 flex md:hidden" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 rounded-2xl border border-dashed border-aviation/25 p-8 text-center">Belum ada penerbangan langsung untuk pilihan ini. Coba ganti hari atau bandara asal.</p>
      )}
    </>
  );
}

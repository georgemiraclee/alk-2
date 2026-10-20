# Alank Photography (Next.js)

Website fotografer Alank dari Balikpapan, dikonversi dari template HTML ke Next.js (App Router).

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Struktur

- `app/page.jsx` — seluruh konten halaman (teks Bahasa Indonesia)
- `app/layout.jsx` — metadata, font, bahasa `id`
- `app/globals.css` — CSS asli, tidak diubah
- `components/Effects.jsx` — animasi GSAP + ScrollTrigger + SplitText + Lenis (client component)
- `lib/images.js` — semua URL foto (masih foto placeholder Unsplash)

## Yang perlu diganti dengan data asli

Nama tim, angka statistik, penghargaan, klien, ulasan, harga paket, email, nomor telepon/WhatsApp,
link media sosial, dan semua foto masih contoh. Cari di `app/page.jsx` dan `lib/images.js`.

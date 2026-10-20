/** @type {import('next').NextConfig} */
const nextConfig = {
  // Animasi GSAP/Lenis diinisialisasi sekali lewat DOM, jadi Strict Mode dimatikan
  // agar effect tidak dijalankan dua kali saat development.
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;

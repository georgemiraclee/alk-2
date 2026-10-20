import "./globals.css";

export const metadata = {
  title: "Alank Photography — Fotografer dari Balikpapan",
  description:
    "Alank Photography adalah fotografer independen asal Balikpapan: pernikahan, potret, acara, dan foto komersial dengan hasil rapi, cepat, dan penuh cerita.",
  robots: { index: false, follow: false },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(d){if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion')}})(document.documentElement);",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hubot+Sans:wght@400..800&family=Brygada+1918:wght@400..500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

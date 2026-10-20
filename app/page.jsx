import Effects from "@/components/Effects";
import images from "@/lib/images";

/* eslint-disable @next/next/no-img-element */

const Tick = () => (
  <svg className="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const galleryPhotos = [
  ["a", images.galA, "Kubus logam melayang dalam nuansa biru dan ungu"],
  ["b", images.galB, "Sebuah jeruk di atas tumpukan pecahan batu"],
  ["c", images.galC, "Kacamata hitam di atas objek patung putih"],
  ["d", images.galD, "Perempuan berkacamata hitam di bawah lampu studio berwarna"],
  ["e", images.galE, "Headphone nirkabel hitam di atas meja putih"],
  ["f", images.galF, "Spiral cakram biru, ungu, dan kuning di latar ungu"],
  ["g", images.galG, "Lapisan poster robek memperlihatkan tangan hitam putih"],
  ["h", images.galH, "Patung logam abstrak dengan dua ujung melengkung"],
];

const projects = [
  { img: images.projectCar, alt: "Mobil sport hitam di dalam ruangan gelap", title: "Midnight Garage", a: "Foto dan video otomotif", b: "Otomotif, 2026" },
  { img: images.projectPool, alt: "Arsitektur modern dengan pilar di sekeliling kolam renang saat senja", title: "Villa Senja", a: "Foto arsitektur dan properti", b: "Properti, 2025" },
  { img: images.projectCoffee, alt: "Dua kemasan kopi di samping cangkir di permukaan merah muda", title: "Kopi Borneo", a: "Foto produk dan kemasan", b: "Makanan dan minuman, 2025" },
  { img: images.projectPurple, alt: "Perempuan berdiri di depan cahaya ungu", title: "Violet Hour", a: "Potret dan editorial", b: "Fashion, 2024" },
];

const stats = [
  ["94%", "klien kembali memesan untuk sesi berikutnya"],
  ["87%", "galeri preview dikirim dalam 48 jam"],
  ["98%", "hasil final selesai sesuai tanggal yang dijanjikan"],
  ["72%", "klien baru datang dari rekomendasi klien lama"],
];

const clients = [
  ["Balikpapan Fest", false],
  ["Maison Ardent", true],
  ["Mahakam Studio", false],
  ["Kopi Borneo", true],
  ["Teluk Lumbung", false],
  ["Arden & Vale", true],
  ["Sundial", false],
  ["Fieldnote", true],
];

const awards = [
  ["2026", "Juara 1, Fotografi Komersial", "Kaltim Creative Awards", "Midnight Garage"],
  ["2025", "Pilihan Editor", "Galeri Nusantara", "Villa Senja"],
  ["2025", "Fotografi Produk Terbaik", "Borneo Food Expo", "Kopi Borneo"],
  ["2024", "Finalis, Fotografi Potret", "Indonesia Photo Fest", "Violet Hour"],
  ["2024", "Fotografer Pilihan Tahun Ini", "Komunitas Foto Balikpapan", "Alank Photography"],
];

const services = [
  { name: "Pernikahan", desc: "Dari prewedding sampai resepsi, dipotret natural dan tenang tanpa mengganggu jalannya acara.", tags: ["Prewedding", "Akad", "Resepsi", "Album", "Video highlight"] },
  { name: "Potret", desc: "Sesi personal, keluarga, dan profesional yang terasa santai, dengan arahan pose yang jelas.", tags: ["Personal", "Keluarga", "Wisuda", "Profil bisnis"] },
  { name: "Acara", desc: "Liputan seminar, ulang tahun, sampai acara perusahaan, dengan hasil cepat untuk langsung dibagikan.", tags: ["Seminar", "Ulang tahun", "Gathering", "Liputan cepat"] },
  { name: "Komersial", desc: "Foto produk, kuliner, properti, dan otomotif yang siap dipakai untuk katalog dan media sosial.", tags: ["Produk", "Kuliner", "Properti", "Otomotif", "Retouching"] },
];

const steps = [
  ["Hari pertama", "Konsultasi", "Ceritakan acara dan gaya foto yang Anda suka lewat WhatsApp. Pesan singkat atau beberapa foto referensi sudah cukup."],
  ["48 jam", "Preview", "Setelah sesi, Alank mengirim beberapa foto pilihan sebagai gambaran warna dan gaya hasil akhir."],
  ["Minggu pertama", "Seleksi dan edit", "Anda memilih foto favorit, lalu kami edit dan rapikan sampai puas, tanpa biaya tambahan."],
  ["Selesai", "Serah terima", "File resolusi penuh dan galeri online dikirim, siap dicetak atau dibagikan ke keluarga dan tim."],
];

const people = [
  { img: images.person2, alt: "Potret pria berkaus hitam", name: "Alank", role: "Fotografer utama" },
  { img: images.person1, alt: "Potret perempuan berkaus hitam", name: "Rina Putri", role: "Second shooter" },
  { img: images.person3, alt: "Potret perempuan dengan ekspresi tenang", name: "Dewi Anggraini", role: "Editor foto" },
  { img: images.person4, alt: "Potret pria tersenyum berkaus hitam", name: "Fajar Ramadhan", role: "Videografer" },
];

const quotes = [
  { img: images.avatar1, alt: "Potret perempuan bergaun hitam", text: "Alank tidak terasa seperti fotografer sewaan, lebih seperti teman yang tahu persis kapan harus menekan shutter.", name: "Sari Wulandari", role: "Pengantin, Balikpapan" },
  { img: images.avatar2, alt: "Potret pria berkemeja abu-abu", text: "Foto produk kami selesai dalam tiga hari dan langsung dipakai untuk kemasan dan Instagram. Rapi, tidak ada yang terlewat.", name: "Dimas Pratama", role: "Pemilik, Kopi Borneo" },
  { img: images.avatar3, alt: "Potret perempuan berbaju hitam", text: "Awalnya ragu soal revisi edit, tapi Alank sangat mendengarkan sampai hampir tidak ada yang perlu direvisi.", name: "Clara Mahendra", role: "Manajer, Villa Senja" },
  { img: images.avatar4, alt: "Potret pria berjenggot", text: "Preview 48 jam itu benar-benar nyata. Tim kami bisa langsung posting saat suasana acara masih hangat.", name: "Leo Hartono", role: "Event manager, Balikpapan Fest" },
];

const faqs = [
  ["Apa yang saya dapat dalam 48 jam setelah sesi?", "Beberapa foto pilihan yang sudah diedit sebagai preview, lengkap dengan catatan singkat soal gaya warnanya. Setelah itu kita lanjut ke seleksi foto."],
  ["Bagaimana cara booking?", "Kirim pesan lewat WhatsApp atau email berisi tanggal, lokasi, dan jenis sesi. Jadwal dikunci setelah uang muka diterima."],
  ["Apakah bisa ganti jadwal atau batal?", "Bisa. Kabari secepatnya agar tanggal baru bisa diatur. Ketentuan uang muka dijelaskan dengan jelas sebelum booking."],
  ["Siapa yang akan memotret?", "Alank sendiri sebagai fotografer utama, dibantu second shooter dan editor sesuai kebutuhan paket yang dipilih."],
  ["Bagaimana dengan revisi edit?", "Revisi edit dikerjakan sampai hasilnya pas sesuai paket, dan kami jujur kalau sebuah perubahan justru membuat foto kurang baik."],
  ["Apakah melayani di luar Balikpapan?", "Ya, termasuk Samarinda, Penajam, dan kota lain di Kalimantan. Ada tambahan biaya transport dan akomodasi sesuai lokasi."],
];

const posts = [
  { img: images.post1, alt: "Latar abstrak hitam dan biru berisi kotak-kotak", title: "Kenapa cahaya pagi Balikpapan cocok untuk prewedding", date: "Maret 2026", read: "6 menit baca" },
  { img: images.post2, alt: "Bentuk abstrak mengalir berwarna ungu dan merah muda", title: "Cara memilih foto agar album pernikahan tidak terasa penuh", date: "Februari 2026", read: "8 menit baca" },
  { img: images.post3, alt: "Empat orang rapat di sekeliling meja hitam di kantor modern", title: "Persiapan sebelum sesi: pelajaran dari 186 pemotretan", date: "Januari 2026", read: "5 menit baca" },
];

export default function Home() {
  return (
    <>
      <header className="site-header" data-tone="dark">
        <a className="brand" href="#hero" aria-label="Alank Photography, kembali ke atas">Alank</a>
        <nav className="nav" aria-label="Utama">
          <a className="link" href="#work">Karya</a>
          <a className="link" href="#services">Layanan</a>
          <a className="link" href="#pricing">Paket</a>
          <a className="link" href="#journal">Jurnal</a>
        </nav>
        <a className="btn head-cta" href="#contact">Booking sekarang</a>
        <button className="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Buka menu" data-open="Buka menu" data-close="Tutup menu"><i></i><i></i></button>
        <div className="menu" id="menu">
          <nav aria-label="Menu">
            <a href="#work">Karya</a>
            <a href="#services">Layanan</a>
            <a href="#process">Proses</a>
            <a href="#pricing">Paket</a>
            <a href="#journal">Jurnal</a>
            <a href="#contact">Kontak</a>
          </nav>
          <div className="menu-foot"><a className="link" href="mailto:halo@alankphotography.id">halo@alankphotography.id</a><p>Balikpapan, Kalimantan Timur</p></div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero" data-kind="hero" data-tone="dark">
          <div className="hero-stage">
            <div className="hero-frame">
              <div className="hero-zoom"><img className="hero-img ph" src={images.hero} alt="Seorang penampil memegang mikrofon dalam cahaya biru dan asap panggung" width="2000" height="1333" fetchPriority="high" /></div>
              <div className="hero-grid" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i}></i>)}</div>
            </div>
            <div className="hero-crop" aria-hidden="true"><b className="c-tl"></b><b className="c-tr"></b><b className="c-bl"></b><b className="c-br"></b></div>
            <div className="hero-copy">
              <h1 className="hero-title">Foto yang jujur dan rapi, langsung dari Balikpapan.</h1>
              <p className="hero-sub"><span className="ring" aria-hidden="true"></span>Pernikahan, potret, acara, dan produk, dipotret langsung oleh Alank dan dikirim tepat waktu.</p>
              <a className="btn" href="#pricing">Lihat paket</a>
            </div>
            <p className="hero-tag serif"><span>Fotografer</span><span>Balikpapan—</span></p>
            <div className="hero-word"><div className="fill"><p className="wm" style={{ "--len": 6 }}>Alank</p></div><span className="wm-r" aria-hidden="true">®</span></div>
          </div>
        </section>

        <section className="gallery" id="gallery" data-kind="gallery" data-tone="dark">
          <div className="gal-stage">
            <h2 className="gal-statement">Foto yang menahan jempol hari ini &amp; tetap berkesan sepuluh tahun lagi.</h2>
            <div className="gal-photos" data-fixed="8">
              {galleryPhotos.map(([k, src, alt]) => (
                <figure className={`gp gp-${k}`} key={k}><img className="ph" loading="lazy" src={src} alt={alt} /></figure>
              ))}
            </div>
          </div>
          <div className="gal-foot wrap">
            <p className="serif" data-reveal>Satu fotografer,<br />satu tim kecil—</p>
            <div className="copy" data-reveal>
              <p>Berbasis di Balikpapan, Alank turun langsung ke lapangan bersama second shooter dan editor, untuk klien yang ingin dikenang, bukan sekadar difoto.</p>
              <a className="link" href="#team">Kenalan dengan tim</a>
            </div>
          </div>
        </section>

        <section className="work" id="work" data-kind="projects" data-tone="dark">
          <div className="work-head wrap">
            <h2 className="h2" data-split>Karya pilihan</h2>
            <div className="side" data-reveal>
              <p>Beberapa proyek dari dua tahun terakhir. Semuanya bermula dari satu pesan singkat.</p>
              <a className="link" href="#contact">Minta portofolio lengkap</a>
            </div>
          </div>
          <div className="work-list">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-inner">
                  <img className="project-img ph" loading="lazy" src={p.img} alt={p.alt} />
                  <div className="project-shade"></div>
                  <div className="project-meta">
                    <h3 className="project-title" data-arp>{p.title}</h3>
                    <div className="project-info"><p>{p.a}</p><p>{p.b}</p></div>
                  </div>
                  <div className="project-dim"></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="results" id="results" data-kind="results" data-tone="dark">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Di balik setiap angka, ada klien yang puas dan kembali lagi.</h2>
              <div className="side" data-reveal><p>Dihitung dari 186 sesi pemotretan sejak 2021, dari sesi potret kecil sampai liputan besar.</p><a className="link" href="#work">Lihat karya di baliknya</a></div>
            </div>
            <ul className="bars" data-chart data-max="100">
              {stats.map(([n, label]) => (
                <li className="bar" key={label}><p className="bar-num"><span style={{ "--len": 3 }}>{n}</span></p><div className="bar-body"><p className="bar-label">{label}</p><span className="bar-track"><span className="bar-fill"></span></span></div></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="clients" id="clients" data-kind="clients" data-tone="accent">
          <p className="clients-note wrap">Dipercaya 120 klien, dari pasangan pengantin sampai brand dan perusahaan lokal.</p>
          <div className="marquee" data-marquee>
            <ul className="marquee-list">
              {clients.map(([name, serif]) => <li className={serif ? "serif" : undefined} key={name}>{name}</li>)}
            </ul>
          </div>
        </section>

        <section className="awards" id="awards" data-kind="awards" data-tone="dark">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Pengakuan, setelah karya bicara lebih dulu.</h2>
              <div className="side" data-reveal><p>Apresiasi dari juri dan komunitas yang kami hormati, untuk proyek yang masih dipakai klien setiap hari.</p></div>
            </div>
            <ol className="award-list">
              {awards.map(([year, name, org, proj]) => (
                <li className="award" key={year + name}><p className="award-year serif">{year}</p><p className="award-name">{name}</p><p className="award-org">{org}</p><p className="award-proj">{proj}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="services" id="services" data-kind="services" data-tone="light">
          <div className="wrap">
            <div className="svc-word"><div className="fill"><h2 className="wm svc-title" style={{ "--len": 7.8 }}>Layanan</h2></div></div>
            <p className="svc-lead" data-words>Dari sesi singkat sampai liputan seharian, semuanya ditangani orang yang sama, supaya momen tetap utuh sampai ke tangan Anda.</p>
            <div className="svc-list">
              {services.map((s) => (
                <article className="svc" key={s.name}>
                  <span className="svc-rule" data-draw aria-hidden="true"></span>
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc" data-reveal>{s.desc}</p>
                  <ul className="svc-items" data-reveal>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process" data-kind="process" data-tone="light">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Dari pesan pertama sampai foto di tangan, empat langkah.</h2>
              <div className="side" data-reveal><p>Tanpa proposal berbelit dan tanpa antre lama. Hubungi, atur jadwal, lalu foto final dikirim.</p></div>
            </div>
            <div className="steps-wrap">
              <span className="steps-line" aria-hidden="true"><span className="steps-fill"></span></span>
              <ol className="steps">
                {steps.map(([time, name, text]) => (
                  <li className="step" key={name}><span className="step-mark" aria-hidden="true"></span><p className="step-time">{time}</p><h3 className="step-name">{name}</h3><p className="step-text">{text}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="benefits" id="benefits" data-kind="benefits" data-tone="light">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Teman memotret yang selalu siap, bukan jasa sekali pakai.</h2>
              <div className="side" data-reveal><p>Satu fotografer yang paham selera Anda, dengan harga yang jelas sejak awal.</p><a className="btn btn--ink" href="#pricing">Bandingkan paket</a></div>
            </div>
            <div className="bento" data-fixed="6">
              <article className="bn bn-a has-photo">
                <img className="ph" loading="lazy" src={images.bentoTeam} alt="Empat rekan kerja tersenyum di sekeliling laptop" />
                <h3>Satu fotografer utama</h3>
                <p>Anda berhubungan langsung dengan Alank, jadi tidak perlu menjelaskan selera berulang kali.</p>
              </article>
              <article className="bn bn-b">
                <h3>Harga transparan</h3>
                <p>Tanpa biaya tersembunyi. Harga di halaman ini sudah termasuk editing dasar.</p>
              </article>
              <article className="bn bn-c">
                <p className="bn-num" style={{ "--len": 3 }}>98%</p>
                <p>klien memberi ulasan lima bintang untuk hasil fotonya</p>
              </article>
              <article className="bn bn-d">
                <h3>Jadwal fleksibel</h3>
                <p>Perlu ganti tanggal? Kabari kami, jadwal bisa diatur ulang sesuai kesepakatan.</p>
              </article>
              <article className="bn bn-e has-photo">
                <img className="ph" loading="lazy" src={images.bentoHeadphones} alt="Foto hitam putih sepasang headphone" />
                <h3>Galeri online pribadi</h3>
                <p>Semua foto tersimpan di satu galeri yang bisa dibuka keluarga dan tim Anda.</p>
              </article>
              <article className="bn bn-f has-photo">
                <img className="ph" loading="lazy" src={images.bentoPackage} alt="Kemasan plastik hitam putih di latar abu-abu" />
                <h3>Foto jadi, tepat waktu</h3>
                <p>Hasil edit dikirim sesuai janji, bukan sekadar kabar bahwa masih diproses.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="team" id="team" data-kind="team" data-tone="light">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Orang-orang di balik lensa.</h2>
              <div className="side" data-reveal><p>Kecil dengan sengaja. Setiap sesi dikerjakan langsung oleh orang berpengalaman yang paham lapangan di Balikpapan.</p><a className="link" href="#contact">Gabung jadi asisten</a></div>
            </div>
            <ul className="people">
              {people.map((p) => (
                <li className="person" data-reveal key={p.name}><figure className="person-photo" data-parallax><img className="ph" loading="lazy" src={p.img} alt={p.alt} /></figure><h3 className="person-name" data-arp>{p.name}</h3><p className="person-role">{p.role}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pricing" id="pricing" data-kind="pricing" data-tone="dark">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Satu paket, sesuai kebutuhan. Hubungi kapan saja.</h2>
              <div className="side" data-reveal>
                <p>Harga jelas tanpa biaya tersembunyi. Pilih paket dan kirim pesan hari ini.</p>
                <div className="period" role="group" aria-label="Lokasi sesi"><button type="button" data-period="month" aria-pressed="true">Di Balikpapan</button><button type="button" data-period="quarter" aria-pressed="false">Luar kota, +15%</button></div>
              </div>
            </div>
            <div className="plans">
              <article className="plan" data-reveal>
                <div className="plan-top"><h3 className="plan-name">Esensial</h3><p className="plan-for">Untuk sesi singkat: potret, produk, atau acara kecil.</p></div>
                <p className="plan-price"><span className="plan-num" data-month="Rp1,5 jt" data-quarter="Rp1,7 jt">Rp1,5 jt</span><span className="plan-per" data-month="per sesi" data-quarter="per sesi, belum termasuk transport">per sesi</span></p>
                <ul className="plan-list">
                  <li><Tick />Sesi hingga 2 jam</li>
                  <li><Tick />30 foto edit pilihan</li>
                  <li><Tick />Preview dalam 48 jam</li>
                  <li><Tick />Galeri online pribadi</li>
                  <li><Tick />Revisi edit hingga 2 kali</li>
                </ul>
                <a className="btn btn--line" href="#contact">Pilih Esensial</a>
              </article>
              <article className="plan plan--main" data-reveal>
                <div className="plan-top"><h3 className="plan-name">Lengkap</h3><p className="plan-for">Untuk pernikahan, acara besar, dan proyek komersial.</p></div>
                <p className="plan-price"><span className="plan-num" data-month="Rp6,5 jt" data-quarter="Rp7,5 jt">Rp6,5 jt</span><span className="plan-per" data-month="per acara" data-quarter="per acara, belum termasuk transport">per acara</span></p>
                <ul className="plan-list">
                  <li><Tick />Liputan seharian penuh</li>
                  <li><Tick />Fotografer utama + second shooter</li>
                  <li><Tick />300+ foto edit</li>
                  <li><Tick />Album cetak dan video highlight</li>
                  <li><Tick />Prioritas jadwal</li>
                </ul>
                <a className="btn" href="#contact">Pilih Lengkap</a>
              </article>
            </div>
            <p className="plans-note">Bingung memilih paket? <a className="link" href="#contact">Konsultasi gratis 20 menit</a></p>
          </div>
        </section>

        <section className="reviews" id="reviews" data-kind="reviews" data-tone="light">
          <div className="wrap reviews-grid">
            <div className="reviews-side">
              <h2 className="h2" data-split>Kata klien, dengan kata mereka sendiri.</h2>
              <p className="rating"><span className="rating-num">4.9</span><span className="rating-of">dari 5 berdasarkan 210 ulasan</span></p>
              <a className="btn btn--ink" href="#contact">Jadi klien berikutnya</a>
            </div>
            <ul className="quotes">
              {quotes.map((q) => (
                <li className="quote" key={q.name}><blockquote>“{q.text}”</blockquote><div className="quote-by"><img className="ph" loading="lazy" src={q.img} alt={q.alt} /><div><p className="quote-name">{q.name}</p><p className="quote-role">{q.role}</p></div></div></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="faq" id="faq" data-kind="faq" data-tone="light">
          <div className="wrap faq-grid">
            <div className="faq-side">
              <h2 className="h2" data-split>Pertanyaan umum.</h2>
              <p>Seputar paket, jadwal, dan cara kerja bersama Alank, dijawab dengan bahasa sederhana.</p>
              <div className="faq-ask" data-reveal><p className="serif">Ada yang belum terjawab?</p><a className="btn btn--ink" href="#contact">Hubungi kami</a></div>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <div className="qa" key={q}><h3 className="qa-q"><button type="button" aria-expanded="false"><span>{q}</span></button></h3><div className="qa-a"><p>{a}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="journal" id="journal" data-kind="journal" data-tone="light">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" data-split>Catatan dari balik lensa.</h2>
              <div className="side" data-reveal><p>Tulisan singkat tentang teknik, proses, dan keputusan kecil yang membuat foto terasa hidup.</p><a className="link" href="#journal">Semua artikel</a></div>
            </div>
            <div className="posts">
              {posts.map((p) => (
                <article className="post" data-reveal key={p.title}><a className="post-link" href="#journal"><figure className="post-photo" data-parallax><img className="ph" loading="lazy" src={p.img} alt={p.alt} /></figure><h3 className="post-title">{p.title}</h3><p className="post-meta"><span>{p.date}</span><span>{p.read}</span></p></a></article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact" data-kind="contact" data-tone="dark">
          <figure className="contact-bg"><img className="ph" loading="lazy" src={images.contactBg} alt="Cakrawala kota yang menyala di malam hari" /></figure>
          <div className="wrap contact-inner">
            <h2 className="contact-title" data-split>Momen Anda berikutnya mulai dari satu pesan. <span className="accent">Biar kami yang menjaganya tetap abadi.</span></h2>
            <div className="contact-row">
              <div className="contact-cta" data-reveal>
                <p className="contact-lead">Ceritakan acara atau proyek Anda. Kami balas dalam satu hari kerja dengan ide awal dan paket yang cocok.</p>
                <div className="contact-actions"><a className="btn" href="mailto:halo@alankphotography.id">Booking sekarang</a><a className="btn btn--line" href="https://wa.me/6281200000000">Chat WhatsApp</a></div>
              </div>
              <dl className="contact-details" data-reveal>
                <div><dt>Email</dt><dd><a className="link" href="mailto:halo@alankphotography.id">halo@alankphotography.id</a></dd></div>
                <div><dt>Telepon</dt><dd><a className="link" href="tel:+6281200000000">+62 812 0000 0000</a></dd></div>
                <div><dt>Studio</dt><dd>Balikpapan, Kalimantan Timur</dd></div>
                <div><dt>Jam kerja</dt><dd>Senin sampai Sabtu, 09.00 sampai 18.00 WITA</dd></div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-tone="light">
        <div className="wrap">
          <div className="foot-word"><div className="fill"><p className="wm" style={{ "--len": 6 }}>Alank</p></div><span className="wm-r" aria-hidden="true">®</span></div>
          <div className="foot-grid">
            <p className="foot-tag serif"><span>Fotografer</span><span>Balikpapan—</span></p>
            <div className="foot-col"><h3>Halaman</h3><ul><li><a className="link" href="#work">Karya</a></li><li><a className="link" href="#services">Layanan</a></li><li><a className="link" href="#pricing">Paket</a></li><li><a className="link" href="#journal">Jurnal</a></li></ul></div>
            <div className="foot-col"><h3>Studio</h3><ul><li><a className="link" href="#team">Tim</a></li><li><a className="link" href="#process">Proses</a></li><li><a className="link" href="#faq">Pertanyaan</a></li><li><a className="link" href="#contact">Kontak</a></li></ul></div>
            <div className="foot-col"><h3>Ikuti</h3><ul><li><a className="link" href="https://www.instagram.com/">Instagram</a></li><li><a className="link" href="https://www.tiktok.com/">TikTok</a></li><li><a className="link" href="https://www.youtube.com/">YouTube</a></li></ul></div>
            <form className="news" action="#" data-done="Terima kasih, Anda sudah terdaftar.">
              <label htmlFor="news-email">Catatan dari balik lensa, sebulan sekali</label>
              <div className="news-row"><input id="news-email" type="email" name="email" placeholder="Email Anda" autoComplete="email" required /><button className="ibtn" type="submit" aria-label="Berlangganan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg></button></div>
              <p className="news-note">Satu email sebulan. Berhenti kapan saja.</p>
            </form>
          </div>
          <div className="foot-bottom">
            <p>© 2026 Alank Photography, Balikpapan</p>
            <nav aria-label="Legal"><a className="link" href="#">Privasi</a><a className="link" href="#">Syarat</a></nav>
          </div>
        </div>
      </footer>

      <Effects />
    </>
  );
}

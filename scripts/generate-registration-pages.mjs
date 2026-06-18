import { writeFileSync } from 'node:fs';

const whatsappNumber = '6282261301538';

const programs = [
  {
    key: 'teens',
    file: 'daftar-teens.html',
    title: 'English for Teens',
    meta: 'Daftar program English for Teens di Elevaree.Academy. Kelas online untuk remaja usia 13-17 tahun dengan fokus speaking, grammar, dan confidence building.',
    badge: 'Teens · Usia 13-17 Tahun',
    tagline: 'Program Bahasa Inggris untuk remaja yang ingin lebih percaya diri saat speaking, memahami grammar, dan siap berkomunikasi di sekolah maupun lingkungan global.',
    priceLabel: '400K',
    priceUnit: '/bulan',
    basePrice: 400000,
    priceMeta: '8x pertemuan · 90 menit/sesi · Maks 8 siswa per kelas',
    sectionTitle: 'Kenapa Pilih<br><em>English for Teens?</em>',
    features: [
      ['💬', 'Conversation class untuk bangun percaya diri'],
      ['📚', 'Grammar praktis yang langsung dipakai saat speaking'],
      ['🎤', 'Presentasi dan diskusi interaktif untuk remaja'],
      ['📝', 'School support untuk tugas dan kebutuhan akademik'],
      ['👥', 'Kelas kecil agar tutor bisa memberi feedback personal'],
      ['🏅', 'Sertifikat kelulusan di akhir program'],
    ],
    requirementsTitle: 'Persyaratan<br><em>Untuk Remaja</em>',
    requirements: [
      ['Usia 13-17 tahun', 'materi, topik diskusi, dan aktivitas kelas disesuaikan dengan kebutuhan remaja SMP-SMA.'],
      ['Placement check singkat', 'kami bantu cek level awal agar peserta masuk kelas yang ritmenya tepat.'],
      ['Komitmen hadir minimal 80%', 'agar progress speaking, grammar, dan confidence building terasa konsisten.'],
      ['Perangkat kelas online', 'laptop/tablet/smartphone dengan koneksi internet stabil untuk belajar via Zoom.'],
      ['Siap aktif di kelas', 'peserta akan diajak berdiskusi, role play, dan presentasi ringan.'],
    ],
    faqTitle: 'Pertanyaan<br><em>Untuk Teens</em>',
    faqs: [
      ['Apakah kelas ini cocok untuk pemula?', 'Cocok. Peserta akan diarahkan ke level yang sesuai setelah placement check singkat, jadi pemula tidak perlu khawatir tertinggal.'],
      ['Apakah program ini membantu pelajaran sekolah?', 'Ya. Tutor bisa mengaitkan latihan grammar, vocabulary, speaking, dan writing dengan kebutuhan sekolah peserta.'],
      ['Apakah ada latihan speaking setiap sesi?', 'Ada. Kelas Teens dirancang aktif dengan conversation practice, role play, diskusi, dan presentasi ringan.'],
      ['Berapa maksimal peserta per kelas?', 'Maksimal 8 siswa per kelas agar suasana tetap hidup, tetapi feedback dari tutor tetap personal.'],
    ],
    schedules: [
      ['t1', 'Senin & Rabu · 18.30', '13 Jul - 5 Agt 2026'],
      ['t2', 'Selasa & Kamis · 19.00', '14 Jul - 6 Agt 2026'],
      ['t3', 'Sabtu · 10.00', '18 Jul - 5 Sep 2026'],
      ['t4', 'Minggu · 15.30', '19 Jul - 6 Sep 2026'],
    ],
    maxParticipants: 8,
    promoCodes: { TEENS20: 20, ELEVAREE10: 10, COBA15: 15 },
    whatsappProgram: 'English for Teens',
  },
  {
    key: 'ielts',
    file: 'daftar-ielts.html',
    title: 'IELTS Preparation',
    meta: 'Daftar IELTS Preparation di Elevaree.Academy. Program intensif online untuk target studi, beasiswa, dan karier internasional.',
    badge: 'Academic Test Preparation',
    tagline: 'Program intensif untuk peserta yang menargetkan skor IELTS lebih tinggi melalui strategi terarah, latihan 4 skills, writing feedback, dan simulasi berkala.',
    priceLabel: '650K',
    priceUnit: '/bulan',
    basePrice: 650000,
    priceMeta: '10x pertemuan · 90 menit/sesi · Fokus target band score',
    sectionTitle: 'Kenapa Pilih<br><em>IELTS Preparation?</em>',
    features: [
      ['🎯', 'Diagnostic test dan target score mapping'],
      ['🗣️', 'Latihan Speaking dengan feedback struktur jawaban'],
      ['✍️', 'Writing Task 1 & 2 feedback yang spesifik'],
      ['📖', 'Listening dan Reading strategy untuk efisiensi waktu'],
      ['⏱️', 'Timed practice dan mock test berkala'],
      ['📊', 'Progress tracking sesuai target band score'],
    ],
    requirementsTitle: 'Persyaratan<br><em>Target IELTS</em>',
    requirements: [
      ['Minimal basic English', 'peserta sebaiknya sudah mampu memahami instruksi dasar dalam Bahasa Inggris.'],
      ['Punya target skor', 'misalnya untuk studi, beasiswa, kerja, atau migrasi agar strategi belajar lebih tajam.'],
      ['Siap latihan mandiri', 'akan ada latihan writing, reading, dan vocabulary di luar jam kelas.'],
      ['Komitmen hadir minimal 80%', 'karena materi test prep saling berurutan dan berbasis progres.'],
      ['Perangkat kelas online', 'laptop sangat disarankan untuk writing practice dan simulasi tes via Zoom.'],
    ],
    faqTitle: 'Pertanyaan<br><em>IELTS Prep</em>',
    faqs: [
      ['Apakah bisa mulai dari nol?', 'Untuk IELTS, peserta idealnya sudah punya dasar Bahasa Inggris. Jika masih sangat pemula, kami akan sarankan program general English terlebih dahulu.'],
      ['Apakah ada mock test?', 'Ya. Program mencakup timed practice dan mock test berkala untuk memantau perkembangan menuju target band score.'],
      ['Apakah writing akan dikoreksi?', 'Ya. Peserta mendapat feedback untuk struktur, task response, grammar, vocabulary, dan coherence.'],
      ['Apakah cocok untuk academic dan general training?', 'Bisa. Saat konsultasi awal, kami akan cek kebutuhan peserta dan menyesuaikan fokus latihan.'],
    ],
    schedules: [
      ['i1', 'Senin & Rabu · 19.30', '13 Jul - 12 Agt 2026'],
      ['i2', 'Selasa & Kamis · 19.30', '14 Jul - 13 Agt 2026'],
      ['i3', 'Sabtu & Minggu · 13.00', '18 Jul - 16 Agt 2026'],
      ['i4', 'Jumat · 19.00', '17 Jul - 18 Sep 2026'],
    ],
    maxParticipants: 8,
    promoCodes: { IELTS20: 20, ELEVAREE10: 10, COBA15: 15 },
    whatsappProgram: 'IELTS Preparation',
  },
  {
    key: 'toefl',
    file: 'daftar-toefl.html',
    title: 'TOEFL Preparation',
    meta: 'Daftar TOEFL Preparation di Elevaree.Academy. Kelas online terstruktur untuk listening, structure, reading, dan strategi tes.',
    badge: 'Test Prep · TOEFL',
    tagline: 'Kelas terstruktur untuk membantu peserta mempersiapkan TOEFL secara efektif, baik untuk kebutuhan kampus, seleksi, maupun pengembangan profesional.',
    priceLabel: '600K',
    priceUnit: '/bulan',
    basePrice: 600000,
    priceMeta: '10x pertemuan · 90 menit/sesi · Latihan soal intensif',
    sectionTitle: 'Kenapa Pilih<br><em>TOEFL Preparation?</em>',
    features: [
      ['🎧', 'Listening practice dengan strategi menangkap ide utama'],
      ['🧩', 'Structure and written expression mastery'],
      ['📚', 'Reading strategy untuk teks akademik'],
      ['⏱️', 'Timed practice sesuai format tes'],
      ['📈', 'Score analysis dan progress tracking'],
      ['📝', 'Bank soal dan pembahasan intensif'],
    ],
    requirementsTitle: 'Persyaratan<br><em>Target TOEFL</em>',
    requirements: [
      ['Minimal basic English', 'peserta sebaiknya mengenal grammar dasar dan vocabulary umum.'],
      ['Punya kebutuhan tes', 'misalnya kampus, wisuda, kerja, atau sertifikasi institusi.'],
      ['Siap mengerjakan latihan soal', 'program ini menekankan drilling dan pembahasan untuk membangun strategi.'],
      ['Komitmen hadir minimal 80%', 'agar pembahasan tiap section terserap dengan utuh.'],
      ['Perangkat kelas online', 'kelas berlangsung 100% online via Zoom dengan materi digital.'],
    ],
    faqTitle: 'Pertanyaan<br><em>TOEFL Prep</em>',
    faqs: [
      ['TOEFL jenis apa yang dipelajari?', 'Fokus utama adalah TOEFL ITP-style preparation: Listening, Structure, dan Reading. Kebutuhan lain bisa dibahas saat konsultasi.'],
      ['Apakah ada pembahasan grammar?', 'Ada. Section Structure dibahas bertahap dari pola kalimat, error recognition, sampai timed practice.'],
      ['Apakah tersedia latihan soal?', 'Ya. Peserta mendapat latihan soal intensif dan pembahasan agar tahu pola kesalahan yang perlu diperbaiki.'],
      ['Apakah cocok untuk kebutuhan kampus?', 'Cocok untuk peserta yang membutuhkan persiapan TOEFL untuk kampus, kelulusan, seleksi, atau kebutuhan profesional.'],
    ],
    schedules: [
      ['f1', 'Senin & Rabu · 20.00', '13 Jul - 12 Agt 2026'],
      ['f2', 'Selasa & Kamis · 18.30', '14 Jul - 13 Agt 2026'],
      ['f3', 'Sabtu · 15.30', '18 Jul - 19 Sep 2026'],
      ['f4', 'Minggu · 10.00', '19 Jul - 20 Sep 2026'],
    ],
    maxParticipants: 8,
    promoCodes: { TOEFL20: 20, ELEVAREE10: 10, COBA15: 15 },
    whatsappProgram: 'TOEFL Preparation',
  },
  {
    key: 'pte',
    file: 'daftar-pte.html',
    title: 'English PTE',
    meta: 'Daftar English PTE di Elevaree.Academy. Program persiapan Pearson Test of English dengan strategi speaking, writing, reading, dan listening.',
    badge: 'Test Prep · PTE',
    tagline: 'Program untuk peserta yang ingin mempersiapkan Pearson Test of English dengan strategi, latihan intensif, timed simulation, dan penguatan respons berbasis skor.',
    priceLabel: '700K',
    priceUnit: '/bulan',
    basePrice: 700000,
    priceMeta: '8x pertemuan · 90 menit/sesi · PTE strategy & simulation',
    sectionTitle: 'Kenapa Pilih<br><em>English PTE?</em>',
    features: [
      ['🎙️', 'Speaking practice untuk format jawaban PTE'],
      ['✍️', 'Writing structure dan response building'],
      ['📖', 'Reading dan listening strategy berbasis task'],
      ['🧠', 'Vocabulary dan grammar yang score-focused'],
      ['⏱️', 'Mock test dan timed simulation'],
      ['🌏', 'Cocok untuk studi, kerja, dan migrasi'],
    ],
    requirementsTitle: 'Persyaratan<br><em>Target PTE</em>',
    requirements: [
      ['Minimal basic English', 'peserta sebaiknya sudah mampu mengikuti instruksi kelas dalam Bahasa Inggris sederhana.'],
      ['Punya target penggunaan skor', 'untuk studi, kerja, atau migrasi agar latihan bisa diarahkan.'],
      ['Siap latihan speaking', 'PTE membutuhkan respons cepat, jadi peserta akan sering berlatih produksi lisan.'],
      ['Komitmen hadir minimal 80%', 'agar strategi tiap task dipahami berurutan.'],
      ['Laptop dan koneksi stabil', 'sangat disarankan untuk simulasi dan latihan online via Zoom.'],
    ],
    faqTitle: 'Pertanyaan<br><em>PTE Prep</em>',
    faqs: [
      ['Apa bedanya PTE dengan IELTS?', 'PTE berbasis komputer dan punya tipe task yang berbeda. Program ini fokus pada strategi menjawab task PTE secara efisien.'],
      ['Apakah ada latihan speaking?', 'Ada. Speaking adalah salah satu fokus utama, termasuk latihan ritme, kejelasan, dan struktur respons.'],
      ['Apakah ada simulasi tes?', 'Ya. Peserta mendapat timed simulation agar terbiasa dengan tekanan waktu dan format pertanyaan PTE.'],
      ['Cocok untuk target migrasi?', 'Cocok. Saat konsultasi, kami akan cek target skor dan timeline agar rencana belajar lebih realistis.'],
    ],
    schedules: [
      ['p1', 'Senin & Rabu · 19.00', '13 Jul - 5 Agt 2026'],
      ['p2', 'Selasa & Kamis · 20.00', '14 Jul - 6 Agt 2026'],
      ['p3', 'Sabtu & Minggu · 16.00', '18 Jul - 9 Agt 2026'],
      ['p4', 'Jumat · 19.30', '17 Jul - 4 Sep 2026'],
    ],
    maxParticipants: 8,
    promoCodes: { PTE20: 20, ELEVAREE10: 10, COBA15: 15 },
    whatsappProgram: 'English PTE',
  },
  {
    key: 'privat',
    file: 'daftar-privat.html',
    title: 'English Privat',
    meta: 'Daftar English Privat di Elevaree.Academy. Kelas 1-on-1 online yang fleksibel dan disesuaikan dengan target personal peserta.',
    badge: 'Private · 1-on-1 Personalized',
    tagline: 'Program eksklusif 1-on-1 dengan tutor untuk kebutuhan belajar yang lebih fokus, fleksibel, dan disesuaikan dengan target personal peserta.',
    priceLabel: '900K',
    priceUnit: '/bulan',
    basePrice: 900000,
    priceMeta: '8x pertemuan · 90 menit/sesi · 1 tutor 1 siswa',
    sectionTitle: 'Kenapa Pilih<br><em>English Privat?</em>',
    features: [
      ['👤', 'Private class 1 tutor 1 siswa'],
      ['🧭', 'Materi disesuaikan dengan target personal'],
      ['💬', 'Bisa fokus speaking, grammar, writing, atau test prep'],
      ['📅', 'Jadwal lebih fleksibel sesuai kesepakatan'],
      ['📈', 'Progress monitoring lebih intensif'],
      ['🎓', 'Tutor bersertifikat dan berpengalaman'],
    ],
    requirementsTitle: 'Persyaratan<br><em>Kelas Privat</em>',
    requirements: [
      ['Konsultasi target belajar', 'kami akan menanyakan kebutuhan utama peserta sebelum kelas dimulai.'],
      ['Placement check singkat', 'agar tutor bisa menyesuaikan materi dengan level saat ini.'],
      ['Kesepakatan jadwal', 'slot privat dikonfirmasi bersama admin dan tutor berdasarkan ketersediaan.'],
      ['Komitmen mengikuti paket sesi', 'agar progres bisa terlihat dan dievaluasi dengan baik.'],
      ['Perangkat kelas online', 'kelas berlangsung 100% online via Zoom dengan materi digital.'],
    ],
    faqTitle: 'Pertanyaan<br><em>Kelas Privat</em>',
    faqs: [
      ['Apakah jadwal benar-benar fleksibel?', 'Ya, jadwal privat lebih fleksibel dan akan dikonfirmasi bersama admin serta tutor berdasarkan ketersediaan slot.'],
      ['Bisa fokus ke kebutuhan spesifik?', 'Bisa. Materi dapat diarahkan ke speaking, grammar, interview, writing, TOEFL, IELTS, PTE, atau kebutuhan kerja.'],
      ['Apakah bisa untuk anak atau dewasa?', 'Bisa. Program privat dapat disesuaikan untuk anak, remaja, maupun dewasa setelah konsultasi awal.'],
      ['Bagaimana progres dipantau?', 'Tutor akan memberi catatan progres dan rekomendasi latihan yang lebih personal sesuai tujuan peserta.'],
    ],
    schedules: [
      ['v1', 'Weekday Morning · Fleksibel', 'Slot 08.00 - 11.00 WIB'],
      ['v2', 'Weekday Evening · Fleksibel', 'Slot 18.00 - 21.00 WIB'],
      ['v3', 'Weekend Morning · Fleksibel', 'Slot 09.00 - 12.00 WIB'],
      ['v4', 'Custom Schedule', 'Dikonfirmasi bersama admin'],
    ],
    maxParticipants: 1,
    promoCodes: { PRIVAT20: 20, ELEVAREE10: 10, COBA15: 15 },
    whatsappProgram: 'English Privat',
  },
];

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderProgram(program) {
  const schedules = program.schedules.map(([id, name, date]) => `
              <div class="picker-option" data-id="${esc(id)}" onclick="pickSchedule(this)">
                <div class="picker-dot"></div>
                <div class="picker-info">
                  <div class="pi-name">${esc(name)}</div>
                  <div class="pi-date">${esc(date)}</div>
                </div>
                <span class="picker-tag tag-online">Online</span>
              </div>`).join('');

  const features = program.features.map(([icon, text]) => `
          <div class="feature-item">
            <div class="feature-icon">${icon}</div>
            <div class="feature-text">${esc(text)}</div>
          </div>`).join('');

  const requirements = program.requirements.map(([title, text], index) => `
          <div class="req-item">
            <div class="req-num">${index + 1}</div>
            <div class="req-text"><strong>${esc(title)}</strong> — ${esc(text)}</div>
          </div>`).join('');

  const faqs = program.faqs.map(([question, answer]) => `
          <div class="faq-item">
            <button class="faq-q" onclick="toggleFaq(this)">
              ${esc(question)}
              <svg viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <div class="faq-a"><div class="faq-a-inner">${esc(answer)}</div></div>
          </div>`).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daftar ${esc(program.title)} — Elevaree.Academy</title>
  <meta name="description" content="${esc(program.meta)}" />
  <link rel="canonical" href="https://elevaree.academy/${esc(program.file)}" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎀</text></svg>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --pink: #BC6186; --pink-light: #FAAFCC; --pink-pale: #FDF0F6; --pink-mid: #F8D5E6;
      --rose: #9E4D71; --white: #FFFFFF; --off-white: #FAF8F9; --text: #1C1C1E;
      --text-2: #3A3A3C; --text-3: #6C6C70; --border: #F0E0E8; --nav-h: 68px;
      --ease: cubic-bezier(0.22, 1, 0.36, 1);
    }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { font-family: 'Outfit', sans-serif; background: var(--off-white); color: var(--text); overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: var(--nav-h); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; background: rgba(255,255,255,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); transition: box-shadow .3s; }
    nav.scrolled { box-shadow: 0 2px 24px rgba(188,97,134,.08); }
    .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--text); text-decoration: none; }
    .nav-logo span { color: var(--pink); }
    .nav-links { display: flex; gap: 28px; list-style: none; align-items: center; }
    .nav-links a { text-decoration: none; color: var(--text-2); font-size: .875rem; font-weight: 500; transition: color .2s; }
    .nav-links a:hover { color: var(--pink); }
    .nav-cta { background: var(--pink); color: white !important; padding: 10px 20px; border-radius: 99px; font-weight: 600 !important; transition: background .2s, transform .2s !important; }
    .nav-cta:hover { background: var(--rose) !important; transform: translateY(-1px); }
    .hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
    .hamburger span { width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all .3s; display: block; }
    .mobile-menu { position: fixed; top: var(--nav-h); left: 0; right: 0; z-index: 99; background: white; padding: 20px 5%; display: flex; flex-direction: column; gap: 4px; border-bottom: 1px solid var(--border); transform: translateY(-110%); transition: transform .3s var(--ease); }
    .mobile-menu.open { transform: translateY(0); }
    .mobile-menu a { padding: 12px 0; color: var(--text-2); text-decoration: none; font-size: .95rem; border-bottom: 1px solid var(--border); }
    .mobile-menu a:last-child { border-bottom: none; color: var(--pink); font-weight: 700; }
    .breadcrumb { padding: calc(var(--nav-h) + 28px) 5% 0; display: flex; align-items: center; gap: 8px; font-size: .8rem; color: var(--text-3); }
    .breadcrumb a { color: var(--text-3); text-decoration: none; transition: color .2s; }
    .breadcrumb a:hover { color: var(--pink); }
    .breadcrumb svg { width: 12px; height: 12px; stroke: currentColor; fill: none; flex-shrink: 0; }
    .breadcrumb span { color: var(--pink); font-weight: 600; }
    .page-wrap { max-width: 1160px; margin: 0 auto; padding: 28px 5% 80px; display: grid; grid-template-columns: 1fr 380px; gap: 40px; align-items: start; }
    .prog-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--pink-mid); color: var(--rose); font-size: .72rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; border-radius: 99px; margin-bottom: 16px; }
    .prog-badge svg { width: 13px; height: 13px; stroke: currentColor; fill: none; }
    h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem, 4vw, 3.2rem); font-weight: 600; line-height: 1.1; color: var(--text); margin-bottom: 8px; }
    .prog-tagline { font-size: 1rem; color: var(--text-3); margin-bottom: 28px; line-height: 1.6; }
    .price-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px; }
    .price-big { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 600; color: var(--text); line-height: 1; }
    .price-unit { font-size: .9rem; color: var(--text-3); font-weight: 500; }
    .price-meta { font-size: .82rem; color: var(--text-3); margin-bottom: 32px; }
    .divider { height: 1px; background: var(--border); margin: 32px 0; }
    .sec-label { font-size: .7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--pink); margin-bottom: 14px; }
    .sec-title { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 600; color: var(--text); margin-bottom: 16px; line-height: 1.2; }
    .sec-title em { font-style: italic; }
    .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 0; }
    .feature-item { display: flex; align-items: flex-start; gap: 10px; background: white; border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; }
    .feature-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--pink-pale); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; }
    .feature-text { font-size: .85rem; color: var(--text-2); font-weight: 500; line-height: 1.4; }
    .req-list { display: flex; flex-direction: column; gap: 10px; }
    .req-item { display: flex; align-items: flex-start; gap: 12px; }
    .req-num { width: 24px; height: 24px; border-radius: 50%; background: var(--pink-pale); color: var(--pink); font-size: .75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
    .req-text { font-size: .9rem; color: var(--text-2); line-height: 1.5; }
    .faq-list { display: flex; flex-direction: column; gap: 10px; }
    .faq-item { background: white; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    .faq-q { width: 100%; padding: 16px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: .9rem; font-weight: 600; color: var(--text); background: none; border: none; cursor: pointer; text-align: left; font-family: 'Outfit', sans-serif; }
    .faq-q svg { width: 16px; height: 16px; stroke: var(--text-3); flex-shrink: 0; transition: transform .3s; }
    .faq-item.open .faq-q svg { transform: rotate(45deg); }
    .faq-a { max-height: 0; overflow: hidden; transition: max-height .35s var(--ease); }
    .faq-a-inner { padding: 0 18px 16px; font-size: .85rem; color: var(--text-3); line-height: 1.7; }
    .faq-item.open .faq-a { max-height: 240px; }
    .form-sticky { position: sticky; top: calc(var(--nav-h) + 20px); }
    .form-card { background: white; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; box-shadow: 0 8px 40px rgba(188,97,134,.1); }
    .form-card-head { padding: 22px 24px 18px; border-bottom: 1px solid var(--border); }
    .form-card-head h3 { font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
    .form-card-head p { font-size: .8rem; color: var(--text-3); }
    .form-body { padding: 20px 24px; display: flex; flex-direction: column; gap: 18px; }
    .field-label { font-size: .7rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--text-3); margin-bottom: 8px; display: block; }
    .schedule-picker { display: flex; flex-direction: column; gap: 8px; }
    .picker-option { display: flex; align-items: center; gap: 12px; padding: 13px 14px; border: 1.5px solid var(--border); border-radius: 12px; cursor: pointer; transition: border-color .2s, background .2s; }
    .picker-option:hover { border-color: var(--pink-light); }
    .picker-option.active { border-color: var(--pink); background: var(--pink-pale); }
    .picker-dot { width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--border); flex-shrink: 0; transition: all .2s; }
    .picker-option.active .picker-dot { border-color: var(--pink); background: var(--pink); box-shadow: 0 0 0 3px rgba(188,97,134,.15); }
    .picker-info { flex: 1; min-width: 0; }
    .picker-info .pi-name { font-size: .85rem; font-weight: 600; color: var(--text); }
    .picker-info .pi-date { font-size: .75rem; color: var(--text-3); margin-top: 1px; }
    .picker-tag { font-size: .67rem; font-weight: 700; padding: 3px 8px; border-radius: 99px; white-space: nowrap; }
    .tag-online { background: #d1fae5; color: #059669; }
    .counter-row { display: flex; align-items: center; gap: 0; border: 1.5px solid var(--border); border-radius: 12px; overflow: hidden; }
    .counter-btn { width: 44px; height: 44px; background: var(--off-white); border: none; cursor: pointer; font-size: 1.2rem; color: var(--text-2); font-weight: 500; transition: background .2s; flex-shrink: 0; }
    .counter-btn:hover { background: var(--pink-pale); color: var(--pink); }
    .counter-val { flex: 1; text-align: center; font-size: .95rem; font-weight: 700; color: var(--text); border-left: 1.5px solid var(--border); border-right: 1.5px solid var(--border); height: 44px; display: flex; align-items: center; justify-content: center; gap: 6px; }
    .counter-val small { font-size: .78rem; font-weight: 400; color: var(--text-3); }
    .promo-row { display: flex; gap: 8px; }
    .promo-input { flex: 1; min-width: 0; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: .85rem; font-family: 'Outfit', sans-serif; color: var(--text); outline: none; transition: border-color .2s; background: var(--off-white); text-transform: uppercase; letter-spacing: 1px; }
    .promo-input:focus { border-color: var(--pink-light); background: white; }
    .promo-input::placeholder { text-transform: none; letter-spacing: 0; color: var(--text-3); }
    .promo-btn { padding: 11px 16px; border-radius: 10px; border: none; cursor: pointer; background: var(--pink-pale); color: var(--pink); font-size: .82rem; font-weight: 700; font-family: 'Outfit', sans-serif; transition: background .2s; }
    .promo-btn:hover { background: var(--pink-mid); }
    .promo-success { font-size: .78rem; color: #059669; font-weight: 600; display: none; margin-top: 4px; }
    .price-summary { background: var(--off-white); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; }
    .ps-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: .83rem; color: var(--text-3); }
    .ps-row.discount { color: #059669; }
    .ps-row.total { font-size: .95rem; font-weight: 700; color: var(--text); padding-top: 8px; border-top: 1px solid var(--border); }
    .ps-row.total span:last-child { color: var(--pink); }
    .submit-btn { width: 100%; padding: 15px; border-radius: 12px; border: none; cursor: pointer; background: linear-gradient(135deg, var(--pink), var(--rose)); color: white; font-size: .95rem; font-weight: 700; font-family: 'Outfit', sans-serif; display: flex; align-items: center; justify-content: center; gap: 8px; transition: opacity .2s, transform .2s, box-shadow .2s; box-shadow: 0 4px 20px rgba(188,97,134,.3); }
    .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(188,97,134,.38); }
    .submit-btn:disabled { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
    .form-note { font-size: .75rem; color: var(--text-3); text-align: center; line-height: 1.5; }
    .form-note a { color: var(--pink); text-decoration: none; }
    .trust-row { display: flex; justify-content: center; gap: 16px; padding-top: 4px; }
    .trust-item { display: flex; align-items: center; gap: 5px; font-size: .72rem; color: var(--text-3); font-weight: 500; }
    .trust-item svg { width: 13px; height: 13px; stroke: var(--pink); fill: none; }
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s var(--ease), transform .7s var(--ease); }
    .reveal.in { opacity: 1; transform: none; }
    .reveal-delay-1 { transition-delay: .1s; }
    .reveal-delay-2 { transition-delay: .2s; }
    .reveal-delay-4 { transition-delay: .4s; }
    @media (max-width: 900px) {
      .page-wrap { grid-template-columns: 1fr; }
      .form-sticky { position: static; }
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .feature-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      .breadcrumb { padding-top: calc(var(--nav-h) + 16px); }
      .page-wrap { padding: 16px 4% 60px; gap: 28px; }
      .picker-option { align-items: flex-start; }
      .picker-tag { margin-top: 1px; }
    }
  </style>
</head>
<body>
  <nav id="navbar">
    <a href="index.html" class="nav-logo">Elevaree<span>.Academy</span></a>
    <ul class="nav-links">
      <li><a href="index.html#about">Tentang Kami</a></li>
      <li><a href="index.html#programs">Program</a></li>
      <li><a href="index.html#schedule">Jadwal</a></li>
      <li><a href="tutor.html">Tutor</a></li>
      <li><a href="testimoni.html">Testimoni</a></li>
      <li><a href="index.html#faq">FAQ</a></li>
      <li><a href="#form-card" class="nav-cta">Daftar Sekarang</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html#about">Tentang Kami</a>
    <a href="index.html#programs">Program</a>
    <a href="index.html#schedule">Jadwal</a>
    <a href="tutor.html">Tutor</a>
    <a href="testimoni.html">Testimoni</a>
    <a href="index.html#faq">FAQ</a>
    <a href="#form-card">Daftar Sekarang</a>
  </div>

  <div class="breadcrumb">
    <a href="index.html">Beranda</a>
    <svg viewBox="0 0 24 24" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    <a href="index.html#programs">Program</a>
    <svg viewBox="0 0 24 24" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    <span>${esc(program.title)}</span>
  </div>

  <div class="page-wrap">
    <div class="left-col">
      <div class="reveal">
        <div class="prog-badge">
          <svg viewBox="0 0 24 24" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${esc(program.badge)}
        </div>
        <h1>${esc(program.title)}</h1>
        <p class="prog-tagline">${esc(program.tagline)}</p>
        <div class="price-row">
          <span class="price-big">${esc(program.priceLabel)}</span>
          <span class="price-unit">${esc(program.priceUnit)}</span>
        </div>
        <p class="price-meta">${esc(program.priceMeta)}</p>
      </div>

      <div class="divider"></div>

      <div class="reveal reveal-delay-1">
        <div class="sec-label">Keunggulan Program</div>
        <div class="sec-title">${program.sectionTitle}</div>
        <div class="feature-grid">${features}
        </div>
      </div>

      <div class="divider"></div>

      <div class="reveal reveal-delay-2">
        <div class="sec-label">Syarat Pendaftaran</div>
        <div class="sec-title">${program.requirementsTitle}</div>
        <div class="req-list">${requirements}
        </div>
      </div>

      <div class="divider"></div>

      <div class="reveal reveal-delay-4">
        <div class="sec-label">FAQ</div>
        <div class="sec-title">${program.faqTitle}</div>
        <div class="faq-list">${faqs}
        </div>
      </div>
    </div>

    <div class="form-sticky" id="form-card">
      <div class="form-card">
        <div class="form-card-head">
          <h3>Atur Jadwal &amp; Daftar</h3>
          <p>Pilih periode, isi data, dan kami hubungi via WhatsApp</p>
        </div>
        <div class="form-body">
          <div>
            <label class="field-label">Pilih Jadwal</label>
            <div class="schedule-picker" id="formSchedulePicker">${schedules}
            </div>
          </div>

          <div>
            <label class="field-label">Jumlah Peserta</label>
            <div class="counter-row">
              <button class="counter-btn" onclick="changeCount(-1)">−</button>
              <div class="counter-val">
                <span id="countVal">1</span>
                <small>peserta</small>
              </div>
              <button class="counter-btn" onclick="changeCount(1)">+</button>
            </div>
          </div>

          <div>
            <label class="field-label">Kode Voucher / Promo</label>
            <div class="promo-row">
              <input class="promo-input" id="promoInput" type="text" placeholder="Masukkan kode promo" maxlength="20" oninput="this.value=this.value.toUpperCase()" />
              <button class="promo-btn" onclick="applyPromo()">Pakai</button>
            </div>
            <div class="promo-success" id="promoSuccess">✓ Promo <strong id="promoCode"></strong> berhasil! Diskon diterapkan.</div>
          </div>

          <div class="price-summary">
            <div class="ps-row">
              <span>Harga per peserta</span>
              <span id="psBase"></span>
            </div>
            <div class="ps-row">
              <span>Jumlah peserta</span>
              <span id="psPeserta">×1</span>
            </div>
            <div class="ps-row discount" id="psDiscountRow" style="display:none">
              <span>Diskon promo</span>
              <span id="psDiscount">−Rp0</span>
            </div>
            <div class="ps-row total">
              <span>Total</span>
              <span id="psTotal"></span>
            </div>
          </div>

          <button class="submit-btn" id="submitBtn" type="button" onclick="submitForm()" disabled>
            Isi Formulir Yuk! ✨
          </button>

          <p class="form-note">
            Dengan mendaftar, kamu setuju dengan <a href="#">syarat & ketentuan</a> Elevaree.Academy.<br>
            Kami tidak akan menyebarkan data pribadi kamu.
          </p>

          <div class="trust-row">
            <div class="trust-item">
              <svg viewBox="0 0 24 24" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              Aman
            </div>
            <div class="trust-item">
              <svg viewBox="0 0 24 24" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
              Trial gratis
            </div>
            <div class="trust-item">
              <svg viewBox="0 0 24 24" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Respon cepat
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const PROGRAM_NAME = ${JSON.stringify(program.whatsappProgram)};
    const PRICE_UNIT = ${JSON.stringify(program.priceUnit)};
    const BASE_PRICE = ${program.basePrice};
    const MAX_PARTICIPANTS = ${program.maxParticipants};
    const PROMOS = ${JSON.stringify(program.promoCodes)};
    const WA_NUMBER = '${whatsappNumber}';
    let count = 1;
    let selectedScheduleId = null;
    let discountPct = 0;

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 20));

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(r => obs.observe(r));

    function pickSchedule(opt) {
      document.querySelectorAll('#formSchedulePicker .picker-option').forEach(p => p.classList.remove('active'));
      opt.classList.add('active');
      selectedScheduleId = opt.dataset.id;
      updateSummary();
    }

    function changeCount(delta) {
      count = Math.max(1, Math.min(MAX_PARTICIPANTS, count + delta));
      document.getElementById('countVal').textContent = count;
      updateSummary();
    }

    function applyPromo() {
      const code = document.getElementById('promoInput').value.trim().toUpperCase();
      if (PROMOS[code]) {
        discountPct = PROMOS[code];
        document.getElementById('promoSuccess').style.display = 'block';
        document.getElementById('promoCode').textContent = code;
        document.getElementById('promoInput').style.borderColor = '#059669';
      } else {
        discountPct = 0;
        document.getElementById('promoSuccess').style.display = 'none';
        document.getElementById('promoInput').style.borderColor = '#dc2626';
        setTimeout(() => document.getElementById('promoInput').style.borderColor = '', 1500);
      }
      updateSummary();
    }

    function fmt(n) { return 'Rp' + n.toLocaleString('id-ID'); }

    function updateSummary() {
      const subtotal = BASE_PRICE * count;
      const discAmt = Math.round(subtotal * discountPct / 100);
      const total = subtotal - discAmt;
      document.getElementById('psPeserta').textContent = '×' + count;
      document.getElementById('psBase').textContent = fmt(BASE_PRICE);
      const discRow = document.getElementById('psDiscountRow');
      if (discountPct > 0) {
        discRow.style.display = 'flex';
        document.getElementById('psDiscount').textContent = '−' + fmt(discAmt);
      } else {
        discRow.style.display = 'none';
      }
      document.getElementById('psTotal').textContent = fmt(total);
      validateForm();
    }

    function validateForm() {
      document.getElementById('submitBtn').disabled = !selectedScheduleId;
    }

    function submitForm() {
      const promoCode = document.getElementById('promoInput').value.trim().toUpperCase();
      const selOpt = document.querySelector(\`#formSchedulePicker .picker-option[data-id="\${selectedScheduleId}"]\`);
      const schName = selOpt ? selOpt.querySelector('.pi-name').textContent : '';
      const schDate = selOpt ? selOpt.querySelector('.pi-date').textContent : '';
      const schMode = selOpt ? selOpt.querySelector('.picker-tag').textContent : '';
      const subtotal = BASE_PRICE * count;
      const discAmt = Math.round(subtotal * discountPct / 100);
      const total = subtotal - discAmt;
      const params = new URLSearchParams({
        program: PROGRAM_NAME,
        schedule: schName,
        date: schDate,
        mode: schMode,
        count: String(count),
        promo: promoCode && discountPct > 0 ? \`\${promoCode} (\${discountPct}% off)\` : '-',
        total: \`Rp\${total.toLocaleString('id-ID')}\${PRICE_UNIT}\`
      });
      window.location.href = \`formulir-pendaftaran.html?\${params.toString()}\`;
    }

    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }

    updateSummary();
  </script>
</body>
</html>
`;
}

for (const program of programs) {
  writeFileSync(program.file, renderProgram(program));
}

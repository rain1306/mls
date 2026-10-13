# Validasi dan uji penerimaan

## Pemeriksaan di lingkungan pembuat

TypeScript dan build produksi berhasil. Dua belas pengujian lulus: lima pengujian penilaian/payload dan tujuh pengujian API menggunakan PostgreSQL lokal WASM (PGlite). Uji API memeriksa migrasi, akses kelas, penolakan guru lain, keanggotaan, progres, diskusi, kuis, batas percobaan, idempotensi kirim, penilaian tugas, audit, sesi kosong dan origin. Autentikasi sesi dimock pada uji API; ini bukan pengujian login Better Auth menyeluruh. Tidak ada database Neon atau Blob pengguna yang tersedia. Pengujian browser dan beban serentak belum dilakukan.

## Checklist setelah konfigurasi

- Admin berhasil login; password salah ditolak; logout menghapus sesi dan draf lokal.
- Buat guru dan dua murid. Pendaftaran publik tidak tersedia.
- Guru A membuat kelas. Murid A bergabung. Murid B tidak dapat membaca endpoint kelas A sebelum bergabung.
- Guru B tidak dapat menambah materi/menilai tugas kelas A.
- Buat materi, tandai selesai, unduh teks; progres muncul pada guru.
- Buat diskusi dan balasan; konten teks tidak dieksekusi sebagai HTML.
- Buat kuis dua soal dengan indikator. Kunci jawaban tidak ada di respons GET kelas atau respons start.
- Kerjakan satu benar/satu salah; nilai 50. Mengirim ulang tidak menggandakan hasil.
- Putuskan koneksi saat tab terbuka, jawab soal, sambungkan kembali: status berubah dari perangkat ke server.
- Muat ulang saat online, lanjutkan percobaan yang sama. Setelah logout draf lokal harus hilang.
- Coba jadwal belum dibuka, sudah ditutup, percobaan habis, dan kirim setelah waktu berakhir. Setelah waktu habis, hanya jawaban terakhir yang sudah tersimpan di server dinilai.
- Kirim tugas teks; unggah PDF kecil setelah Blob terhubung; file >10 MB ditolak.
- Guru memberi nilai 0 dan 100; nilai di luar rentang ditolak. Cek audit_logs.
- Ekspor CSV dan buka di Excel; data yang diawali formula tidak dieksekusi sebagai formula.
- Uji HP Android Chrome dan iPhone Safari, keyboard, pembaca layar, instalasi PWA dan halaman offline.
- Uji beberapa puluh murid mengirim bersamaan pada database uji dan paket hosting aktual; ukur error, latensi dan koneksi database.

## Catatan akses file

Tautan Blob versi 1 bersifat publik acak. Gunakan hanya berkas tugas tanpa data sensitif. Sebelum penggunaan yang membutuhkan kerahasiaan, implementasikan private storage dan endpoint unduh berotorisasi.

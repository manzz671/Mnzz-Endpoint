function quotes() {
    const allQuotes = [
        "Hidup ini bukan sekedar pay to win. Tapi juga play to win",
        "Kesuksesan tidak ditemukan dengan modal keberuntungan. Tapi pengorbanan",
        "Gagal bukan akhir. melainkan akselerasi menuju keberhasilan",
        "Jika kamu lelah, beristirahatlah. Tidak ada yang memaksamu terus berdiri. Tapi ingat, jangan pernah menyerah",
        "Anggaplah seperti naik motor. Gagal itu akselerasi, berhasil berjalan artinya sukses, dan jika menyerah artinya kamu telah membuang kunci motornya",
        "Belajar adalah perjalanan yang tak pernah usai; setiap hari ada pelajaran baru",
        "Kerja keras tanpa arah hanya melelahkan; kerja cerdas memberi hasil",
        "Kesederhanaan seringkali membuka ruang bagi kebahagiaan yang tulus",
        "Keberanian bukan tanpa takut, melainkan bertindak meski takut ada",
        "Waktu yang digunakan untuk merenung seringkali lebih berharga daripada waktu yang dihabiskan untuk sibuk",
        "Jaga kata-katamu, karena ia membentuk dunia yang kamu jalani",
        "Senyum kecil bisa meredakan hari yang berat bagi orang lain",
        "Konsistensi kecil setiap hari mengalahkan semangat besar yang datang sesaat",
        "Hargai proses, bukan hanya hasil akhir",
        "Rencana tanpa tindakan hanyalah harapan; tindakan tanpa rencana mudah tersesat",
        "Belas kasih pada diri sendiri adalah awal dari penyembuhan",
        "Persahabatan yang baik memberi ruang untuk tumbuh, bukan mengekang",
        "Kerendahan hati membuka pintu untuk belajar dari siapa saja",
        "Jangan takut memperbaiki arah ketika kamu tahu itu perlu",
        "Kreativitas muncul saat kamu memberi izin pada kesalahan untuk terjadi",
        "Diam kadang lebih kuat daripada kata-kata yang terburu-buru",
        "Bekerja untuk sesuatu yang lebih besar dari dirimu memberi makna pada lelahmu",
        "Kejujuran membuat hubungan sederhana dan kuat",
        "Belajar mendengarkan adalah investasi pada kualitas percakapan",
        "Kebiasaan kecil yang baik menumpuk menjadi perubahan besar",
        "Jaga batasan agar energi dan perhatianmu tetap terarah",
        "Rasa ingin tahu adalah bahan bakar untuk penemuan",
        "Kegigihan seringkali lebih menentukan daripada bakat semata",
        "Berhenti sejenak untuk melihat kembali bisa menyelamatkan langkahmu berikutnya",
        "Kebaikan yang konsisten meninggalkan jejak yang lama terasa",
        "Jangan menunggu sempurna untuk memulai; mulailah agar menjadi lebih baik",
        "Ketulusan lebih mudah dikenali daripada kata-kata manis",
        "Belajar mengatakan tidak adalah bentuk penghormatan pada prioritasmu",
        "Kerja tim yang baik menghargai perbedaan peran dan kekuatan",
        "Kesalahan adalah guru yang paling jujur jika kita mau mendengarkan",
        "Hidup yang bermakna sering dibangun dari pilihan sederhana sehari-hari",
        "Rasa syukur mengubah apa yang kita miliki menjadi cukup",
        "Jangan biarkan ketakutan menulis naskah hidupmu",
        "Fokus pada hal yang bisa kamu kendalikan, lepaskan yang tidak bisa",
        "Istirahat bukan kemunduran, melainkan strategi agar bisa bertahan lama",
        "Belajar memberi tanpa berharap balasan melatih hati yang lapang",
        "Kebijaksanaan sering lahir dari pengalaman yang sulit",
        "Jaga integritasmu, karena reputasi susah dibangun dan mudah runtuh",
        "Perubahan kecil yang konsisten lebih mudah dipertahankan daripada perubahan drastis",
        "Berbagi ilmu memperbesar manfaatnya bagi semua",
        "Kerja yang baik adalah bentuk penghormatan pada proses dan penerima",
        "Jangan bandingkan babak awalmu dengan babak akhir orang lain",
        "Rencana yang baik fleksibel terhadap kenyataan",
        "Keheningan memberi ruang bagi ide untuk tumbuh",
        "Belajar memaafkan adalah melepaskan beban yang tak perlu",
        "Kebahagiaan sering ditemukan dalam hal-hal yang sederhana",
        "Berani mengambil tanggung jawab adalah tanda kedewasaan",
        "Kualitas hubungan menentukan kualitas hidup lebih dari jumlah pencapaian",
        "Jangan takut bertanya; pertanyaan membuka jalan untuk memahami",
        "Ketekunan adalah jembatan antara niat dan hasil",
        "Berinvestasi pada keterampilan adalah investasi pada masa depanmu",
        "Kreativitas butuh batas agar tidak menjadi kekacauan",
        "Hargai proses belajar orang lain seperti kamu menghargai prosesmu sendiri",
        "Ketenangan pikiran membantu keputusan yang lebih baik",
        "Jadilah pelaku, bukan hanya pengamat dalam hidupmu",
        "Kebaikan kecil yang dilakukan terus menerus mengubah lingkungan",
        "Berani mengakui salah adalah langkah pertama memperbaiki",
        "Rasa hormat pada waktu orang lain adalah bentuk profesionalisme",
        "Jangan menunda hal penting karena sempurna belum datang",
        "Belajar dari kritik yang membangun, abaikan yang merusak",
        "Kebebasan sejati datang dari kemampuan mengendalikan diri",
        "Tujuan yang jelas membuat langkah kecil terasa bermakna",
        "Berbagi beban membuat perjalanan terasa lebih ringan",
        "Jaga rasa ingin tahu, karena ia menjaga pikiran tetap muda",
        "Kesabaran bukan pasif, melainkan tindakan menunggu dengan arah",
        "Setiap hari adalah kesempatan untuk memperbaiki sedikit saja"
    ];
    return allQuotes[Math.floor(Math.random() * allQuotes.length)];
}

export default function handler(
    req,
    res,
    statusCode,
    creator
) {
    const data = {
        meta: {
            status: statusCode,
            creator: creator,
            timestamp: new Date().toISOString()
        },
        result: {
            quote: quotes()
        }
    };

    res.status(statusCode).json(data);
}

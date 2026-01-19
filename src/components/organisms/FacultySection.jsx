const faculties = [
  {
    icon: "⚖️",
    title: "HUKUM (FH)",
    items: [
      "Prodi Ilmu Hukum (S1)",
      "http://fh.unla.ac.id",
    ],
  },
  {
    icon: "🎓",
    title: "KEGURUAN & ILMU PENDIDIKAN (FKIP)",
    items: [
      "Prodi Pendidikan Ekonomi (S1)",
      "Prodi Pendidikan Matematika (S1)",
      "Prodi Pendidikan Guru Sekolah Dasar (S1)",
      "https://fkip.unla.ac.id",
    ],
  },
  {
    icon: "📊",
    title: "EKONOMI & BISNIS (FEB)",
    items: [
      "Prodi Manajemen (S1)",
      "Prodi Akuntansi (S1)",
      "Prodi Bisnis Digital (D3)",
      "https://feb.unla.ac.id",
    ],
  },
  {
    icon: "⚙️",
    title: "TEKNIK (FT)",
    items: [
      "Prodi Teknik Industri (S1)",
      "Prodi Teknik Sipil (S1)",
      "Prodi Teknik Elektro (S1)",
      "Prodi Teknik Informatika (S1)",
      "http://ft.unla.ac.id",
    ],
  },
  {
    icon: "👥",
    title: "ILMU SOSIAL & ILMU POLITIK (FISIP)",
    items: [
      "Prodi Ilmu Pemerintahan (S1)",
      "Prodi Kesejahteraan Sosial (S1)",
      "Prodi Ilmu Komunikasi (S1)",
      "http://fisip.unla.ac.id",
    ],
  },
  {
    icon: "🎓",
    title: "PASCASARJANA",
    items: [
      "Prodi Magister Ilmu Hukum (S2)",
      "Prodi Magister Manajemen (S2)",
      "Prodi Magister Teknik Informatika (S2)",
      "Prodi Doktor Ilmu Hukum (S3)",
      "http://pasca.unla.ac.id",
    ],
  },
];

const FacultySection = () => {
  return (
    <section className="relative w-full py-16">
      <img
        src="/univ.png"
        alt="Universitas Langlangbuana"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-6
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          text-white
          text-sm
        "
      >
        {faculties.map((faculty, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400">{faculty.icon}</span>
              <h3 className="font-amethysta">
                {faculty.title}
              </h3>
            </div>

            {faculty.items.map((item, i) => (
              <p key={i} className="font-inria">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
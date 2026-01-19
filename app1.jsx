import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative h-12 px-4 bg-black flex items-center">
        <div className="flex items-center gap-2 text-white">
          <img src="/unla.png" alt="UNLA" className="w-6 h-6" />
          <div className="text-[9px] font-semibold leading-tight">
            <p>PASCASARJANA</p>
            <p>UNIVERSITAS LANGLANGBUANA</p>
          </div>
        </div>

        <ul
          className="
            hidden lg:flex
            absolute left-1/2 -translate-x-1/2
            items-center gap-6
            text-xs font-semibold tracking-widest text-white
          "
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Academic</li>
          <li>Registration</li>
          <li>News</li>
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className={`absolute right-2 top-0 z-20 lg:h-56 w-[90px] bg-blue-500 transition-all duration-300
          ${open ? "h-44" : "h-12"}
          cursor-pointer lg:cursor-default
          lg:pointer-events-none`}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 96%, 65% 82%, 50% 75%, 35% 82%, 0 96%)"
          }}
        >
          <div className="lg:hidden">
            {open && (
              <ul className="mt-3 flex flex-col items-center gap-2 text-[10px] font-semibold tracking-widest text-white">
                <li>Home</li>
                <li>About Us</li>
                <li>Academic</li>
                <li>Registration</li>
                <li>News</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
            {/* slider */}
      <main className="relative w-full lg:h-screen md:h-screen xl:h-screen h-screen">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center gap-1">
          <img src="/unla.png" alt="UNLA" className="w-16 sm:w-24 md:w-36 lg:w-44" />
          <h1 className="text-sm lg:text-lg">Universitas Langlangbuana</h1>
          <h2 className="text-xs lg:text-sm">Karawang</h2>
           <div className="w-full -mr-4">
             <div className="w-14 h-3 bg-blue-500 rounded-3xl absolute bottom-2"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-3xl translate-x-16 absolute bottom-2"></div>
           </div>
        </div>
      </main>

    <section className="w-full lg:h-96 bg-[#03619A] py-12 lg:py-0 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    <div className="text-white">
      <h2
        className="
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          lg:-translate-y-14
          font-bold
          mb-4
        "
      >
        Universitas Langlangbuana
      </h2>

      <p
        className="
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          lg:-translate-y-14
          leading-relaxed
          text-white/90
        "
      >
        Berdiri sejak tahun 1982 di bawah naungan Yayasan Pendidikan Tri Bhakti,
        UNLA merupakan institusi pendidikan tinggi di Bandung yang lahir dari
        sinergi purnawirawan Polri dan cendekiawan akademisi. Berpusat di Jalan
        Karapitan, kami berkomitmen menyelenggarakan pendidikan berkualitas
        melalui 5 fakultas unggulan dengan total 19 program studi (D3, S1, dan
        S2). Dengan lebih dari 14.000 alumni yang tersebar secara global, UNLA
        terus mencetak lulusan profesional yang berkontribusi nyata bagi
        instansi pemerintah maupun swasta.
      </p>
    </div>

    <div className="flex justify-center lg:justify-end">
      <img
        src="../public/rektor.png"
        alt="Rektor Universitas Langlangbuana"
        className="
          w-40
          sm:w-48
          md:w-56
          lg:w-64
          xl:w-72
          lg:-translate-y-16
          lg:relative
          object-cover
          rounded-md
          shadow-lg
        "
      />
    </div>
  </div>
</section>

<section className="bg-black w-full lg:h-64 py-12 lg:py-0 px-6 flex items-center justify-center">
  <div className="text-white text-center">
    <h1
      className="
        font-amethysta
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
        mb-2
      "
    >
      Fakultas dan Program Studi
    </h1>

    <p
      className="
        font-inria
        text-xs
        sm:text-sm
        md:text-base
        text-white/80
      "
    >
      Universitas Langlangbuana
    </p>
  </div>
</section>

<section className="relative w-full py-16">
  <img
    src="/univ.png"
    alt="Universitas Langlangbuana"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white text-sm">
    
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">⚖️</span>
        <h3 className="font-amethysta text-white">
          HUKUM (FH)
        </h3>
      </div>
      <p className="font-inria">Prodi Ilmu Hukum (S1)</p>
      <p className="font-inria">http://fh.unla.ac.id</p>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">🎓</span>
        <h3 className="font-amethysta text-white">
          KEGURUAN & ILMU PENDIDIKAN (FKIP)
        </h3>
      </div>
      <p className="font-inria">Prodi Pendidikan Ekonomi (S1)</p>
      <p className="font-inria">Prodi Pendidikan Matematika (S1)</p>
      <p className="font-inria">Prodi Pendidikan Guru Sekolah Dasar (S1)</p>
      <p className="font-inria">https://fkip.unla.ac.id</p>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">📊</span>
        <h3 className="font-amethysta text-white">
          EKONOMI & BISNIS (FEB)
        </h3>
      </div>
      <p className="font-inria">Prodi Manajemen (S1)</p>
      <p className="font-inria">Prodi Akuntansi (S1)</p>
      <p className="font-inria">Prodi Bisnis Digital (D3)</p>
      <p className="font-inria">https://feb.unla.ac.id</p>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">⚙️</span>
        <h3 className="font-amethysta text-white">
          TEKNIK (FT)
        </h3>
      </div>
      <p className="font-inria">Prodi Teknik Industri (S1)</p>
      <p className="font-inria">Prodi Teknik Sipil (S1)</p>
      <p className="font-inria">Prodi Teknik Elektro (S1)</p>
      <p className="font-inria">Prodi Teknik Informatika (S1)</p>
      <p className="font-inria">http://ft.unla.ac.id</p>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">👥</span>
        <h3 className="font-amethysta text-white">
          ILMU SOSIAL & ILMU POLITIK (FISIP)
        </h3>
      </div>
      <p className="font-inria">Prodi Ilmu Pemerintahan (S1)</p>
      <p className="font-inria">Prodi Kesejahteraan Sosial (S1)</p>
      <p className="font-inria">Prodi Ilmu Komunikasi (S1)</p>
      <p className="font-inria">http://fisip.unla.ac.id</p>
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">🎓</span>
        <h3 className="font-amethysta text-white">
          PASCASARJANA
        </h3>
      </div>
      <p className="font-inria">Prodi Magister Ilmu Hukum (S2)</p>
      <p className="font-inria">Prodi Magister Manajemen (S2)</p>
      <p className="font-inria">Prodi Magister Teknik Informatika (S2)</p>
      <p className="font-inria">Prodi Doktor Ilmu Hukum (S3)</p>
      <p className="font-inria">http://pasca.unla.ac.id</p>
    </div>

  </div>
</section>

<section className="relative py-10 sm:py-12 md:py-14 lg:py-16 w-full bg-black text-white">
  <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3">
    
    <h1
      className="
        font-amethysta
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
      "
    >
      Informasi Pendaftaran (PMB)
    </h1>

    <p
      className="
        font-inria
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        text-white/90
      "
    >
      Pendaftaran Mahasiswa Baru Tahun Akademik 2026/2027
    </p>

    <p
      className="
        font-inria
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        text-white/80
      "
    >
      Universitas Langlangbuana
    </p>

    <button
      className="
        mt-4 sm:mt-5
        px-6 py-2.5 sm:py-3
        bg-blue-600
        rounded-xl
        w-44 sm:w-48 md:w-52
        text-sm sm:text-base
      "
    >
      Daftar Sekarang
    </button>

  </div>
</section>


{/* Berita & Informasi */}
<section className="relative bg-black py-10 sm:py-12 lg:py-14 w-full">
  <h2
    className="
      font-amethysta
      text-white
      text-xl
      sm:text-2xl
      lg:text-3xl
      text-center
      mb-6
      sm:mb-8
    "
  >
    Berita & Informasi
  </h2>

  <div className="overflow-x-auto hide-scrollbar">
    <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 w-max">

      {[
        { img: "/event1.jpeg", title: "PKKMB UNS 2025 Program Magister & Doktor" },
        { img: "/event2.jpeg", title: "Workshop Fundamental Bisnis & Marketing Strategi" },
        { img: "/event3.jpeg", title: "Seminar Youth Standing Out with Innovative Business" },
        { img: "/event4.jpeg", title: "Kuliah Umum Nasional Universitas Langlangbuana" },
        { img: "/event5.jpeg", title: "Wisuda Sarjana & Pascasarjana UNLA" },
      ].map((item, index) => (
        <div
          key={index}
          className="
            relative
            min-w-[180px]
            sm:min-w-[220px]
            md:min-w-[260px]
            lg:min-w-[300px]
            xl:min-w-[320px]
            h-[260px]
            sm:h-[300px]
            md:h-[340px]
            lg:h-[380px]
            xl:h-[420px]
            overflow-hidden
            rounded-lg
            group
            cursor-pointer
          "
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300"></div>

          <div
            className="
              absolute inset-0
              flex items-end
              p-3 sm:p-4
              opacity-0
              group-hover:opacity-100
              transition-all duration-300
            "
          >
            <p
              className="
                font-inria
                text-white
                text-[11px]
                sm:text-xs
                md:text-sm
              "
            >
              {item.title}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

<footer className="bg-black text-white pt-10 p-2 sm:pt-12">
  <div
    className="
      max-w-7xl mx-auto px-4 sm:px-6
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-10 lg:gap-12
      items-start
    "
  >

   
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      <img src="/unla.png" alt="UNLA" className="w-16 sm:w-20" />

      <p className="font-inria text-xs sm:text-sm leading-relaxed">
        universitas langlangbuana<br />
        Karawang
      </p>

      <div className="flex gap-3 sm:gap-4 mt-2">
        <a className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-xs">f</a>
        <a className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-xs">t</a>
        <a className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-xs">i</a>
        <a className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-xs">▶</a>
      </div>
    </div>

    
    <div className="font-inria text-xs sm:text-sm space-y-5 text-center lg:text-left">
      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">Kontak</h4>
        <p>+62 822 3344 5566</p>
        <p>http://pasca.unla.ac.id</p>
      </div>

      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">About Us</h4>
        <p>Akademik</p>
      </div>

      <div>
        <h4 className="font-amethysta text-sm sm:text-base mb-1">Alamat</h4>
        <p className="leading-relaxed">
          UNIVERSITAS LANGLANGBUANA<br />
          Jl. Karapitan No. 116, Kb. Kacang,<br />
          Lengkong, Kota Bandung, Jawa Barat 40261
        </p>
      </div>
    </div>

    
    <div className="w-full h-52 sm:h-60 md:h-64 lg:h-56 xl:h-64 rounded-md overflow-hidden">
      <iframe
        title="Universitas Langlangbuana"
        src="https://www.google.com/maps?q=Universitas%20Langlangbuana&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>

  </div>

</footer>

    </>
  );
};

export default App;
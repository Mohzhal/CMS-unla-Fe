const WelcomeSection = () => {
  return (
    <section className="w-full bg-[#03619A] py-12 lg:py-0 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* TEXT */}
        <div className="text-white">
          <h2
            className="
              font-[var(--font-amethysta)]
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              lg:-translate-y-14
              mb-4
            "
          >
            Universitas Langlangbuana
          </h2>

          <p
            className="
              font-[var(--font-inter)]
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

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/rektor.png"
            alt="Rektor Universitas Langlangbuana"
            className="
              w-40
              sm:w-48
              md:w-56
              lg:w-64
              xl:w-72
              lg:-translate-y-16
              object-cover
              rounded-md
              shadow-lg
            "
          />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;

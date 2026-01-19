import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";

const VisiMisi = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT - TEXT */}
            <div>
              <h1
                className="
                  font-amethysta
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  mb-8
                  tracking-widest
                "
              >
                Visi & Misi
              </h1>

              {/* VISI */}
              <div className="mb-6">
                <h2 className="font-amethysta text-lg sm:text-xl mb-2">
                  Visi
                </h2>
                <p className="font-inria text-sm sm:text-base leading-relaxed text-gray-700">
                  Menjadi Program Pascasarjana yang unggul dan berdaya saing
                  regional dalam menghasilkan lulusan yang profesional,
                  inovatif, dan berintegritas dalam bidang Ilmu Pemerintahan,
                  Ilmu Hukum, Ilmu Manajemen, dan Teknik Informatika di kawasan
                  ASEAN pada tahun 2030.
                </p>
              </div>

              {/* MISI */}
              <div>
                <h2 className="font-amethysta text-lg sm:text-xl mb-2">
                  Misi
                </h2>

                <ul className="font-inria text-sm sm:text-base leading-relaxed text-gray-700 list-decimal pl-5 space-y-2">
                  <li>
                    Menyelenggarakan pendidikan, penelitian, dan pengabdian
                    kepada masyarakat yang berkualitas berdasarkan keahlian dan
                    kompetensi bidang ilmu.
                  </li>
                  <li>
                    Menyelenggarakan program pendidikan dan pengajaran secara
                    profesional dalam bidang Ilmu Pemerintahan, Ilmu Hukum,
                    Ilmu Manajemen, dan Teknik Informatika.
                  </li>
                  <li>
                    Melaksanakan penelitian serta menyebarluaskan ilmu
                    pengetahuan untuk menjawab permasalahan yang berkaitan
                    dengan pengembangan profesi dan kebutuhan masyarakat.
                  </li>
                  <li>
                    Melaksanakan pengabdian kepada masyarakat sesuai dengan
                    kompetensi keilmuan masing-masing dalam rangka mewujudkan
                    kesejahteraan dan pembangunan masyarakat.
                  </li>
                  <li>
                    Mengembangkan pemikiran, konsep, serta karakter inovatif
                    dan kreatif dalam bidang Kebijakan Publik dan Manajemen
                    Pemerintahan, Hukum Pidana dan Perdata, Bisnis Jasa,
                    Keuangan, Pemasaran, SDM, Keamanan Informasi, dan Smart City.
                  </li>
                  <li>
                    Memperluas jejaring kerja sama dan menciptakan sinergi
                    dengan berbagai pemangku kepentingan.
                  </li>
                  <li>
                    Mengembangkan kualitas sumber daya manusia untuk memberikan
                    layanan akademik yang prima.
                  </li>
                  <li>
                    Mengembangkan sarana dan prasarana guna mendukung proses
                    pembelajaran yang berkualitas.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src="/visimisi.png"
                alt="Visi dan Misi Pascasarjana"
                className="
                  w-full
                  max-w-xs
                  sm:max-w-sm
                  md:max-w-md
                  lg:max-w-lg
                  xl:max-w-xl
                  object-contain
                "
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VisiMisi;

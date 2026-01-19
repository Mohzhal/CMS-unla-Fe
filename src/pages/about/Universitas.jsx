import React from "react";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";

const Universitas = () => {
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
                  mb-6
                  tracking-widest
                "
              >
                UNIVERSITAS
              </h1>

              <p className="font-inria text-sm sm:text-base leading-relaxed text-gray-700">
                Pascasarjana Universitas Langlangbuana Bandung mulai
                diselenggarakan pada tahun akademik 2002/2003 dengan membuka
                Program Magister Bidang Kajian Utama Ilmu Pemerintahan melalui
                Surat Keputusan Direktorat Jenderal Perguruan Tinggi Departemen
                Pendidikan Nasional Nomor 196/D/T/2002 tertanggal 12 Februari
                2002 (sejak tahun 2008 sudah berstatus Terakreditasi).
                <br /><br />
                Kehadiran Bidang Kajian Utama Ilmu Pemerintahan sebagai bidang
                kajian utama yang pertama dibuka didorong oleh prestasi alumni
                yang telah tersebar di seluruh Indonesia, baik pada lingkungan
                pemerintahan maupun sektor lainnya, sejalan dengan prinsip-prinsip
                good governance.
                <br /><br />
                Pada tahun 2005 didirikan Program Studi Magister Ilmu Hukum melalui
                Surat Keputusan Direktorat Jenderal Perguruan Tinggi Departemen
                Pendidikan Nasional Nomor 1997/D/T/2005 tanggal 24 Juni 2005.
                Tahun 2006 menyusul Program Studi Magister Manajemen dan Magister
                Teknik Informatika.
                <br /><br />
                Hingga tahun 2012, Program Pascasarjana Universitas Langlangbuana
                telah meluluskan lebih dari 650 magister yang tersebar di seluruh
                Indonesia pada sektor eksekutif, legislatif, yudikatif, akademisi,
                praktisi hukum, manajemen, IT, serta TNI/Polri.
              </p>
            </div>

            {/* RIGHT - IMAGE COMPOSITE */}
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src="/rektor2.png"
                alt="Universitas Langlangbuana"
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

export default Universitas;

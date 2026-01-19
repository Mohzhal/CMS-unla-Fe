import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const academicDetail = {
  "ilmu-pemerintahan": {
    title: "Magister Ilmu Pemerintahan",
    content: `
Program Magister Ilmu Pemerintahan dirancang untuk menghasilkan
lulusan yang memiliki kompetensi dalam bidang kebijakan publik,
tata kelola pemerintahan, dan kepemimpinan birokrasi.

Lulusan diharapkan mampu menganalisis permasalahan pemerintahan,
merumuskan kebijakan publik, serta berkontribusi dalam pembangunan
nasional dan daerah.
    `,
    career: "Aparatur Sipil Negara, Analis Kebijakan, Konsultan Pemerintahan",
  },
  "ilmu-hukum": {
    title: "Magister Ilmu Hukum",
    content: `
Program ini memfokuskan pada pengembangan keilmuan hukum pidana
dan perdata yang aplikatif dan kontekstual terhadap dinamika hukum
nasional.
    `,
    career: "Praktisi Hukum, Akademisi, Konsultan Hukum",
  },
  "manajemen": {
    title: "Magister Manajemen",
    content: `
Program Magister Manajemen bertujuan menghasilkan lulusan yang
memiliki kemampuan manajerial, kepemimpinan, dan pengambilan
keputusan strategis.
    `,
    career: "Manajer, Entrepreneur, Konsultan Bisnis",
  },
  "teknik-informatika": {
    title: "Magister Teknik Informatika",
    content: `
Program ini berfokus pada pengembangan teknologi informasi,
sistem cerdas, keamanan informasi, dan transformasi digital.
    `,
    career: "IT Manager, System Architect, Data Analyst",
  },
};

const DetailAcademic = () => {
  const { id } = useParams();
  const data = academicDetail[id];

  if (!data) {
    return (
      <>
        <Navbar />
        <section className="pt-32 text-center">
          <p className="font-inria">Program akademik tidak ditemukan.</p>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <h1
            className="
              font-amethysta
              text-2xl
              sm:text-3xl
              md:text-4xl
              mb-6
            "
          >
            {data.title}
          </h1>

          <div
            className="
              font-inria
              text-sm
              sm:text-base
              text-gray-700
              leading-relaxed
              whitespace-pre-line
              mb-8
            "
          >
            {data.content}
          </div>

          <div className="mb-10">
            <h3 className="font-amethysta text-lg mb-2">
              Prospek Karier
            </h3>
            <p className="font-inria text-gray-600">
              {data.career}
            </p>
          </div>

          <Link
            to="/academic"
            className="
              inline-block
              text-sm
              tracking-widest
              font-semibold
              text-blue-600
              hover:text-blue-800
            "
          >
            ← KEMBALI KE ACADEMIC
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailAcademic;

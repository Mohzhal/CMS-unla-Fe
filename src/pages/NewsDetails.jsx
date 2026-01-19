import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const newsData = [
  {
    id: 1,
    title: "PKKMB Pascasarjana UNLA Tahun 2025",
    date: "3 Desember 2025",
    image: "/event1.jpeg",
    content: `
      Kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)
      Pascasarjana Universitas Langlangbuana tahun 2025 dilaksanakan
      dengan tujuan memperkenalkan lingkungan akademik, sistem
      pembelajaran, serta nilai-nilai universitas.

      Kegiatan ini diikuti oleh seluruh mahasiswa baru dan diisi
      dengan pemaparan visi misi universitas, pengenalan fakultas,
      serta pembekalan akademik.
    `,
  },
  {
    id: 2,
    title: "Workshop Fundamental Bisnis & Marketing",
    date: "12 November 2025",
    image: "/event2.jpeg",
    content: `
      Workshop ini bertujuan meningkatkan pemahaman mahasiswa
      dalam bidang bisnis, pemasaran, dan strategi digital
      yang relevan dengan kebutuhan industri saat ini.
    `,
  },
  {
    id: 3,
    title: "Seminar Nasional Inovasi & Kepemimpinan",
    date: "20 Oktober 2025",
    image: "/event3.jpeg",
    content: `
      Seminar nasional ini menghadirkan narasumber dari kalangan
      akademisi dan praktisi untuk membahas tantangan inovasi
      dan kepemimpinan di era global.
    `,
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <>
        <Navbar />
        <section className="pt-32 text-center">
          <p className="font-inria">Berita tidak ditemukan.</p>
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

          {/* TITLE */}
          <h1
            className="
              font-amethysta
              text-2xl
              sm:text-3xl
              md:text-4xl
              mb-4
            "
          >
            {news.title}
          </h1>

          <p className="font-inria text-sm text-gray-500 mb-6">
            {news.date}
          </p>

          {/* IMAGE */}
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-8"
          />

          {/* CONTENT */}
          <div
            className="
              font-inria
              text-sm
              sm:text-base
              leading-relaxed
              text-gray-700
              whitespace-pre-line
            "
          >
            {news.content}
          </div>

          {/* BACK */}
          <Link
            to="/news"
            className="
              inline-block
              mt-10
              text-sm
              tracking-widest
              font-semibold
              text-blue-600
              hover:text-blue-800
            "
          >
            ← KEMBALI KE BERITA
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewsDetails;

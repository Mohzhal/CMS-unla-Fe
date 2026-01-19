import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const newsData = [
  {
    id: 1,
    title: "PKKMB Pascasarjana UNLA Tahun 2025",
    excerpt:
      "Kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Pascasarjana Universitas Langlangbuana tahun 2025.",
    date: "3 Desember 2025",
    image: "/event1.jpeg",
  },
  {
    id: 2,
    title: "Workshop Fundamental Bisnis & Marketing",
    excerpt:
      "Workshop peningkatan kompetensi mahasiswa dalam bidang bisnis dan strategi pemasaran.",
    date: "12 November 2025",
    image: "/event2.jpeg",
  },
  {
    id: 3,
    title: "Seminar Nasional Inovasi & Kepemimpinan",
    excerpt:
      "Seminar nasional membahas inovasi, kepemimpinan, dan tantangan global.",
    date: "20 Oktober 2025",
    image: "/event3.jpeg",
  },
];

const News = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* TITLE */}
          <div className="text-center mb-12">
            <h1
              className="
                font-amethysta
                text-2xl
                sm:text-3xl
                md:text-4xl
                tracking-widest
              "
            >
              Berita & Informasi
            </h1>
            <p className="font-inria text-gray-600 mt-2">
              Informasi terbaru seputar Pascasarjana Universitas Langlangbuana
            </p>
          </div>

          {/* NEWS GRID */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >
            {newsData.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white
                  rounded-xl
                  shadow-md
                  overflow-hidden
                  hover:shadow-lg
                  transition
                "
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                {/* CONTENT */}
                <div className="p-5">
                  <p className="font-inria text-xs text-gray-500 mb-1">
                    {item.date}
                  </p>

                  <h2
                    className="
                      font-amethysta
                      text-lg
                      mb-2
                      text-gray-800
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      font-inria
                      text-sm
                      text-gray-600
                      mb-4
                      leading-relaxed
                    "
                  >
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="
                      inline-block
                      text-sm
                      font-semibold
                      tracking-widest
                      text-blue-600
                      hover:text-blue-800
                    "
                  >
                    LIHAT DETAIL →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;

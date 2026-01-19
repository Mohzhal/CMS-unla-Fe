import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const academicData = [
  {
    id: "ilmu-pemerintahan",
    title: "Magister Ilmu Pemerintahan",
    description:
      "Program studi yang berfokus pada pengembangan kebijakan publik, tata kelola pemerintahan, dan kepemimpinan.",
  },
  {
    id: "ilmu-hukum",
    title: "Magister Ilmu Hukum",
    description:
      "Program studi yang mendalami hukum pidana, perdata, dan penerapannya dalam sistem hukum nasional.",
  },
  {
    id: "manajemen",
    title: "Magister Manajemen",
    description:
      "Program studi yang mempersiapkan lulusan profesional di bidang manajemen, bisnis, dan kepemimpinan strategis.",
  },
  {
    id: "teknik-informatika",
    title: "Magister Teknik Informatika",
    description:
      "Program studi yang berfokus pada teknologi informasi, sistem cerdas, dan transformasi digital.",
  },
];

const Academic = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h1
              className="
                font-amethysta
                text-2xl
                sm:text-3xl
                md:text-4xl
                tracking-widest
              "
            >
              Academic
            </h1>
            <p className="font-inria text-gray-600 mt-3">
              Program Akademik Pascasarjana Universitas Langlangbuana
            </p>
          </div>

          {/* GRID */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >
            {academicData.map((item) => (
              <div
                key={item.id}
                className="
                  border
                  border-gray-200
                  rounded-xl
                  p-6
                  hover:shadow-lg
                  transition
                  bg-white
                "
              >
                <h2
                  className="
                    font-amethysta
                    text-lg
                    mb-3
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
                    leading-relaxed
                    mb-6
                  "
                >
                  {item.description}
                </p>

                <Link
                  to={`/academic/${item.id}`}
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
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Academic;

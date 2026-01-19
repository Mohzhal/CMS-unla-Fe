import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col items-center justify-center text-center gap-6">

            {/* ERROR CODE */}
            <h1
              className="
                font-amethysta
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
                text-gray-900
                tracking-widest
              "
            >
              404
            </h1>

            {/* TITLE */}
            <h2
              className="
                font-amethysta
                text-xl
                sm:text-2xl
                md:text-3xl
                text-gray-800
              "
            >
              Halaman Tidak Ditemukan
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                font-inria
                text-sm
                sm:text-base
                md:text-lg
                text-gray-600
                max-w-xl
              "
            >
              Maaf, halaman yang Anda akses tidak tersedia atau URL yang dimasukkan
              tidak valid. Silakan kembali ke halaman utama atau gunakan menu
              navigasi di atas.
            </p>

            {/* BUTTON */}
            <Link
              to="/"
              className="
                mt-4
                inline-block
                bg-[#0EA5E9]
                hover:bg-[#0284C7]
                transition
                text-white
                px-8
                py-3
                rounded-xl
                text-sm
                sm:text-base
                tracking-widest
                font-semibold
              "
            >
              KEMBALI KE BERANDA
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ErrorPage;

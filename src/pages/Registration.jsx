import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";


const Registration = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* CARD */}
          <div
            className="
              bg-[#0A5E93]
              rounded-3xl
              p-6 sm:p-8 lg:p-12
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* LEFT - IMAGE */}
              <div className="relative w-full">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/univ1.png"
                    alt="Universitas Langlangbuana"
                    className="
                      w-full
                      h-[320px]
                      sm:h-[360px]
                      md:h-[420px]
                      lg:h-[460px]
                      object-cover
                    "
                  />
                </div>

                {/* TEXT OVER IMAGE */}
                <h2
                  className="
                    absolute
                    top-6 left-6
                    font-amethysta
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    text-white
                    tracking-widest
                  "
                >
                  Registration
                </h2>
              </div>

              {/* RIGHT - FORM */}
              <div className="text-white space-y-6">

                {/* INPUT */}
                <div>
                  <label className="font-inria text-sm mb-1 block">
                    Nama Lengkap :
                  </label>
                  <input
                    type="text"
                    className="
                      w-full
                      bg-transparent
                      border
                      border-white
                      rounded-lg
                      px-4 py-2
                      outline-none
                      text-sm
                    "
                  />
                </div>

                <div>
                  <label className="font-inria text-sm mb-1 block">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="
                      w-full
                      bg-transparent
                      border
                      border-white
                      rounded-lg
                      px-4 py-2
                      outline-none
                      text-sm
                    "
                  />
                </div>

                {/* RADIO */}
                <div>
                  <label className="font-inria text-sm mb-2 block">
                    Jenis Kelamin :
                  </label>
                  <div className="flex gap-6 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      Perempuan
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      Laki-Laki
                    </label>
                  </div>
                </div>

                <div>
                  <label className="font-inria text-sm mb-1 block">
                    Pendidikan Terakhir :
                  </label>
                  <input
                    type="text"
                    className="
                      w-full
                      bg-transparent
                      border
                      border-white
                      rounded-lg
                      px-4 py-2
                      outline-none
                      text-sm
                    "
                  />
                </div>

                <div>
                  <label className="font-inria text-sm mb-1 block">
                    Program Studi :
                  </label>
                  <input
                    type="text"
                    className="
                      w-full
                      bg-transparent
                      border
                      border-white
                      rounded-lg
                      px-4 py-2
                      outline-none
                      text-sm
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  className="
                    w-full
                    mt-6
                    bg-[#0EA5E9]
                    hover:bg-[#0284C7]
                    transition
                    text-white
                    font-semibold
                    py-3
                    rounded-xl
                    tracking-widest
                    text-sm
                  "
                >
                  DAFTAR SEKARANG
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Registration;

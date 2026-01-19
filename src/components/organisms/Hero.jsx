const Hero = () => {
  return (
    <main className="relative w-full h-screen">
      <img
        src="/background.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center gap-2">
        <img
          src="/unla.png"
          alt="UNLA"
          className="w-16 sm:w-24 md:w-36 lg:w-44"
        />

        <h1 className="font-[var(--font-amethysta)] text-sm sm:text-base lg:text-lg">
          Universitas Langlangbuana
        </h1>

        <h2 className="font-[var(--font-amethysta)] text-xs sm:text-sm">
          Karawang
        </h2>

        <div className="relative mt-4">
          <div className="w-14 h-3 bg-blue-500 rounded-3xl"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full absolute top-0 left-16"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

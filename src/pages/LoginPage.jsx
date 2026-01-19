import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0B5E8E] flex items-center justify-center p-6">

     
      <div
        className="
          w-full
          max-w-6xl
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          grid grid-cols-1
          lg:grid-cols-2
        "
      >
     
        <div className="relative p-8 sm:p-12 flex flex-col justify-center">

         
          <div
            className="
              absolute
              bottom-0 left-0
              w-40 h-40
              bg-sky-500
              rounded-tr-[120px]
            "
          />

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Hello
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Welcome Back
            </h2>

           
            <div className="mb-5">
              <label className="block text-sm mb-2 font-medium">
                Email :
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-full
                  px-5 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500
                "
              />
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">
                  Password :
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Forget Password ?
                </a>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-full
                  px-5 py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500
                "
              />
            </div>

        
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                className="w-4 h-4 accent-sky-600"
              />
              <span className="text-sm">
                Remember Me
              </span>
            </div>

            <button
              className="
                w-full
                bg-[#0B5E8E]
                text-white
                py-3
                rounded-full
                font-semibold
                tracking-widest
                hover:bg-[#094e76]
                transition
              "
            >
              LOGIN
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <img
            src="/univ1.png"
            alt="Universitas Langlangbuana"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

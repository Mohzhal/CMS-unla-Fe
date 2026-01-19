import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../atoms/Logo";

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-12 bg-black px-4 flex items-center">
      
      {/* LEFT */}
      <div className="flex items-center gap-2 text-white">
        <Logo />
        <div className="text-[9px] font-semibold leading-tight">
          <p>PASCASARJANA</p>
          <p>UNIVERSITAS LANGLANGBUANA</p>
        </div>
      </div>

      {/* CENTER MENU (lg & xl) */}
      <ul
        className="
          hidden lg:flex
          absolute left-1/2 -translate-x-1/2
          items-center gap-6
          text-xs tracking-widest text-white
        "
      >
        <li>
          <NavLink to="/" className="hover:text-blue-400">
            Home
          </NavLink>
        </li>

        {/* ABOUT US – CLICK */}
        <li className="relative">
          <button
            onClick={() => setOpenAbout(!openAbout)}
            className="flex items-center gap-1 hover:text-blue-400"
          >
            About Us
            <FiChevronDown
              size={12}
              className={`transition-transform ${
                openAbout ? "rotate-180" : ""
              }`}
            />
          </button>

          {openAbout && (
            <div
              className="
                absolute top-6 left-0
                bg-black border border-white/10
                rounded-md
                py-2 w-40
                shadow-lg
              "
            >
              <NavLink
                to="/about/university"
                className="block px-4 py-2 text-[11px] hover:bg-white/10"
                onClick={() => setOpenAbout(false)}
              >
                Universitas
              </NavLink>

              <NavLink
                to="/about/vision-mission"
                className="block px-4 py-2 text-[11px] hover:bg-white/10"
                onClick={() => setOpenAbout(false)}
              >
                Visi & Misi
              </NavLink>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/academic" className="hover:text-blue-400">
            Academic
          </NavLink>
        </li>

        <li>
          <NavLink to="/registration" className="hover:text-blue-400">
            Registration
          </NavLink>
        </li>

        <li>
          <NavLink to="/news" className="hover:text-blue-400">
            News
          </NavLink>
        </li>
      </ul>

      {/* RIBBON (mobile only clickable) */}
      <div
        onClick={() => setOpenMobile(!openMobile)}
        className={`
          absolute right-2 top-0
          w-[90px]
          bg-blue-500
          transition-all duration-300
          ${openMobile ? "h-44" : "h-12"}
          cursor-pointer
          lg:h-56
          lg:cursor-default
          lg:pointer-events-none
        `}
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 96%, 65% 82%, 50% 75%, 35% 82%, 0 96%)",
        }}
      >
        {/* MOBILE MENU */}
        <div className="lg:hidden">
          {openMobile && (
            <ul className="mt-1 flex flex-col items-center gap-2 text-[10px] tracking-widest text-white font-semibold">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about/university">Universitas</NavLink></li>
              <li><NavLink to="/about/vision-mission">Visi & Misi</NavLink></li>
              <li><NavLink to="/academic">Academic</NavLink></li>
              <li><NavLink to="/registration">Registration</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

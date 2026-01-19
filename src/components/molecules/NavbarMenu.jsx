import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const NavbarMenu = () => {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <ul className="hidden lg:flex gap-6 text-xs tracking-widest text-white items-center">
      
      <li>
        <NavLink to="/" className="hover:text-blue-400">
          Home
        </NavLink>
      </li>

      {/* ABOUT US DROPDOWN */}
      <li
        className="relative"
        onMouseEnter={() => setOpenAbout(true)}
        onMouseLeave={() => setOpenAbout(false)}
      >
        <button className="flex items-center gap-1 hover:text-blue-400">
          About Us <FiChevronDown size={12} />
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
            >
              Universitas
            </NavLink>

            <NavLink
              to="/about/vision-mission"
              className="block px-4 py-2 text-[11px] hover:bg-white/10"
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
  );
};

export default NavbarMenu;

import { useState, useEffect } from "react";
import { close, menu, adzatlogo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-fit flex items-center py-2 px-6 mt-8 border rounded-full fixed left-1/2 -translate-x-1/2 z-30 transition-all duration-300
        ${scrolled ? "shadow-xl border-white/30" : "border-white/20"} 
        bg-white/10 backdrop-blur-md`}
    >
      {/* Logo */}
      <img src={adzatlogo} alt="logo" className="w-[70px] object-contain mr-6" />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] transition-colors ${
              active === nav.title ? "text-white" : "text-gray-300"
            } hover:text-white`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* White Sign Up Button */}
        <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
          Sign Up
        </button>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle navigation"
          className="w-[28px] h-[28px] flex justify-center items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-full h-full object-contain"
          />
        </button>

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black/60 backdrop-blur-md absolute top-20 right-4 min-w-[180px] rounded-xl border border-white/20 flex-col gap-6`}
        >
          <ul className="list-none flex flex-col items-start gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-300"
                } hover:text-white`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

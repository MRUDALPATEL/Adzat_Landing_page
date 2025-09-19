import { useState, useEffect } from "react";
import { close, menu, adzatlogo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-30 transition-all duration-300
      flex items-center justify-between border rounded-full backdrop-blur-md mt-4
      px-6 sm:px-10 py-3
      w-[95%] md:w-[85%] lg:w-[75%]
      ${scrolled ? "shadow-xl border-white/30" : "border-white/20"} 
      bg-white/10`}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img
          src={adzatlogo}
          alt="logo"
          className="w-[50px] sm:w-[60px] md:w-[70px] object-contain"
        />
      </div>

      {/* Center: Desktop Nav */}
      <ul className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
        {navLinks.map((nav) => (
          <li key={nav.id} className="relative">
            <a
              href={`#${nav.id}`}
              className={`font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] transition-colors whitespace-nowrap relative pb-1
              ${active === nav.id ? "text-white" : "text-gray-300"} hover:text-white`}
            >
              {nav.title}
              {/* Underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full rounded origin-left transition-transform duration-300
                ${active === nav.id ? "bg-white scale-x-100" : "scale-x-0 bg-transparent"}`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Sign Up (Desktop) */}
      <div className="hidden md:flex">
        <button className="px-4 sm:px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition whitespace-nowrap">
          Sign Up
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden flex-1 justify-end items-center">
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
          } p-6 bg-black/70 backdrop-blur-md absolute top-20 right-4 min-w-[220px] rounded-xl border border-white/20 flex-col gap-6`}
        >
          <ul className="flex flex-col items-start gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id} className="relative">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className={`font-poppins font-medium text-[16px] transition-colors relative pb-1
                  ${active === nav.id ? "text-white" : "text-gray-300"} hover:text-white`}
                >
                  {nav.title}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full rounded origin-left transition-transform duration-300
                    ${active === nav.id ? "bg-white scale-x-100" : "scale-x-0 bg-transparent"}`}
                  />
                </a>
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

import { useState, useEffect } from "react";
import { adzatlogo } from "../assets";
import { socialMedia } from "../constants";
import { FaArrowUp } from "react-icons/fa"; // install react-icons if not already

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Show top button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-gray-300 py-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">

        {/* Left: Logo + Tagline */}
        <div className="flex flex-col items-start">
          <img src={adzatlogo} alt="Logo" className="w-40 h-auto object-contain mb-2" />
          <p className="text-gray-400 text-sm md:max-w-xs">
            Tagline
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex flex-row gap-4 md:gap-6">
          {socialMedia.map((social) => (
            <button
              key={social.id}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500"
              onClick={() => window.open(social.link)}
            >
              <img src={social.icon} alt={social.id} className="w-5 h-5 object-contain" />
            </button>
          ))}
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-gray-400 text-sm">
          <a href="/privacy" className="hover:text-indigo-400 transition">Privacy Notice</a>
          <a href="/terms" className="hover:text-indigo-400 transition">Terms of Service</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 MarkMart Media. All Rights Reserved. <br />
        Created by Mrudal
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-500 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;

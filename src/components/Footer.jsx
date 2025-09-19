import { useState, useEffect } from "react";
import { adzatlogo } from "../assets";
import { socialMedia } from "../constants";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="text-gray-300 py-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-start">
          <img src={adzatlogo} alt="Logo" className="w-40 h-auto object-contain mb-2" />
          <p className="text-gray-400 text-sm md:max-w-xs">
            All Jobs. One Platform. Find your dream job faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/jobs" className="hover:text-indigo-400 transition">Jobs</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="/privacy" className="hover:text-indigo-400 transition">Privacy Notice</a></li>
            <li><a href="/terms" className="hover:text-indigo-400 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-2">
            Get job updates and news directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-l-full bg-gray-800 text-white w-full focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 rounded-r-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-4 mt-10 md:mt-12">
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

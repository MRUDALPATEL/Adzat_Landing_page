// Contact.jsx
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-10 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whether you have a question, want to start a project, or just say hi — we’d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 ">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Office</h3>
                <p className="text-gray-400">123 Business Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl">
                <FaPhoneAlt className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl">
                <FaEnvelope className="text-indigo-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">contact@yourcompany.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="
           p-8  shadow-lg space-y-6 border border-gray-400">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition rounded-lg font-semibold shadow-lg"
            >
              Send Message ✨
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

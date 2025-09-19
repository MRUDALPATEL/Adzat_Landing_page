import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 text-center overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Left glow */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 -left-32 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
        ></motion.div>

        {/* Right glow */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 -right-32 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
        ></motion.div>

        {/* Center subtle glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white mb-10 relative z-10"
      >
        See How It Works
      </motion.h2>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-700 shadow-xl z-10"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
};

export default VideoSection;

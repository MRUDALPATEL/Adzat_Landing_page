const VideoSection = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20 text-center">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Left glow */}
        <div className="absolute top-1/3 -left-32 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Right glow */}
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
        See How It Works
      </h2>

      {/* Video */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-700 shadow-lg z-10">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;

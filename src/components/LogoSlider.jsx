import { useEffect, useRef } from "react";
import gsap from "gsap";
import { adzatlogo } from "../assets";

const logos = [
  adzatlogo,
  adzatlogo,
  adzatlogo,
  adzatlogo,
  adzatlogo,
  adzatlogo,
];

export default function LogoSlider() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    track.innerHTML += track.innerHTML; // duplicate for seamless loop
    const totalWidth = track.scrollWidth / 2;

    // fade-in intro
    gsap.fromTo(
      track,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // infinite horizontal loop
    gsap.to(track, {
      x: -totalWidth,
      duration: 25, // adjust speed
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <section className="w-full py-12 text-center">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-white mb-2">
        Trusted by Leading Companies
      </h2>
      <p className="text-gray-400 mb-10">
        Powering job search and recruitment with cutting-edge technology
      </p>

      {/* Slider container */}
      <div className="overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-40 h-24 min-w-[160px] border border-gray-800 rounded-lg bg-black hover:border-gray-500 transition duration-300"
            >
              <img
                src={logo}
                alt={`logo-${i}`}
                className="max-h-12 max-w-[120px] object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

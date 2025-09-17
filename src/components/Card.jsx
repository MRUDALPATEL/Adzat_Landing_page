import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // initial offset: push each card down slightly more
      gsap.set(cards, {
        yPercent: (i) => i * 55, // 30% offset so cards peek out
        zIndex: (i) => i + 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + cards.length * 100 + "%",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        // each card moves closer to 0, but keeps a little offset
        tl.to(
          card,
          {
            yPercent: i * 5, // leave a 5% offset so previous card is still visible
            duration: 1,
          },
          i
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      {/* section heading */}
      <div className="text-center mt-20">
        <span className="px-4 rounded-full border border-gray-600 text-sm text-gray-400">
          FEATURES
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          From raw data to real understanding
        </h2>
      </div>

      {/* cards */}
      {[1, 2, 3, 4].map((n, i) => (
        <section
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="absolute inset-0 flex items-center justify-center"
        >
         <div className="bg-[#00040f] border border-neutral-800 rounded-3xl shadow-[0_20px_60px_-10px_rgba(66,71,91,0.3)] p-10 md:p-16 w-11/12 max-w-6xl flex flex-col md:flex-row items-center gap-10 transform transition-all hover:scale-105 duration-300">
            {/* Graphic / Illustration */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 shadow-lg flex items-center justify-center text-white text-6xl font-bold ">
                Img
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left space-y-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Innovative Feature {n}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta.
              </p>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Card;

import { useRef } from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { leftarrow } from "../assets";
import { rightarrow } from "../assets";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350, // adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      {/* Header */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Our users love how we bring jobs from all platforms into one place,
            optimize resumes with AI, and boost their interview readiness —
            making career growth faster and easier.
          </p>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth feedback-container relative z-[1] w-full"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center w-full gap-4 mb-6 relative z-[2] mt-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 border border-gray-700 rounded-full text-white"
        >
          <img src={leftarrow} alt="left arrow" className="w-10 h-10" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="p-2 border border-gray-700 rounded-full text-white"
        >
          <img src={rightarrow} alt="right arrow" className="w-10 h-10 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

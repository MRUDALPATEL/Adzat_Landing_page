import styles from "../style";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Spline from '@splinetool/react-spline';
// import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col pl-12 mt-16 h-[580px]`}
      style={{ backgroundColor: "var(--bg-color)", transition: "all 0.3s ease" }}
    >
      {/* Left Side */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 font-inter font-semibold ss:text-[50px] text-[24px] ss:leading-[70px] leading-[35px]"
            style={{ color: "var(--text-color)" }}
          >
            All Jobs. <br className="sm:block hidden" />
            <span className="text-gradient font-funnel" >
              One Platform.
            </span>
            <br />
            <ReactTyped 
              strings={[
                "Find Jobs Faster.",
                "Stop Searching Everywhere.",
                "Apply Smarter."
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            >
              <span style={{ color: "var(--gradient-blue)", fontWeight: "bold" }} />
            </ReactTyped>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-poppins font-semibold w-full text-sm sm:text-base md:text-lg leading-snug sm:leading-normal md:leading-relaxed mt-4"
          style={{ color: "var(--text-color)" }}
        >
          Adzat aggregates jobs from multiple platforms into one smart dashboard,<br/>
          so you save time and never miss an opportunity.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 flex gap-4"
        >
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium hover:opacity-90 transition">
            Try Free
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white font-medium hover:bg-gray-400 dark:hover:bg-gray-900 transition">
            Explore Feature
          </button>
          {/* <ThemeToggle/> */}
        </motion.div>
      </div>

      {/* Right Side - Spline 3D */}
      <div className="mt-10">
        <Spline scene="https://prod.spline.design/4ugBKYWCj3la4zGy/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;

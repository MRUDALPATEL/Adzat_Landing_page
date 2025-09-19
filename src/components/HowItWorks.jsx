import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { svg } from "../assets";

const tabs = [
  {
    id: "persona",
    title: "Persona Creation",
    heading: "Create realistic personas",
    description:
      "Quickly generate detailed personas from raw data, making it easier to model and simulate real-world behavior.",
    image: svg,
  },
  {
    id: "society",
    title: "Society Construction",
    heading: "Modeling how ideas spread through social networks",
    description:
      "We map how they connect and influence one another through a Social Graph — linking people by shared interests, backgrounds, and past interactions.",
   image: svg,
  },
  {
    id: "ai",
    title: "AI-driven Simulations",
    heading: "Run simulations powered by AI",
    description:
      "Simulate real-world interactions and outcomes with AI, allowing you to test and predict scenarios.",
    image: svg,
  },
  {
    id: "results",
    title: "Result Generation",
    heading: "Generate meaningful insights",
    description:
      "Turn raw simulations into actionable insights with automated analysis and visualizations.",
    image: svg,
  },
  {
    id: "abtest",
    title: "Automatic A/B Testing",
    heading: "Validate ideas through testing",
    description:
      "Automatically set up and run A/B tests to validate hypotheses and refine strategies.",
    image: svg,
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("society");
  const contentRef = useRef(null);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  return (
    <section id="howitworks"
    className="w-full min-h-screen  text-white flex flex-col items-center py-20">
      {/* heading */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 rounded-full border border-gray-600 text-sm text-gray-400">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          From raw data to real understanding
        </h2>
      </div>

      {/* tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === tab.id
                ? "bg-white text-black font-semibold"
                : "border-gray-600 text-gray-300 hover:border-gray-400"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* animated card content */}
      <div
        ref={contentRef}
        className="w-11/12 max-w-5xl  border border-neutral-800 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">{activeContent.heading}</h3>
          <p className="text-gray-400">{activeContent.description}</p>
        </div>
        <div className="flex-1">
          <img
            src={activeContent.image}
            alt={activeContent.title}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

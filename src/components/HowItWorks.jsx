import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { svg } from "../assets";
import { jobSeekerTabs, companyTabs } from "../constants";



function TabSection({ title, tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
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
    <div className="w-full flex flex-col items-center mb-20">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>

      {/* Tabs */}
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

      {/* Animated card content */}
      <div
        ref={contentRef}
        className="w-11/12 max-w-5xl border border-neutral-800 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
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
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="w-full min-h-screen text-white flex flex-col items-center py-20"
    >
      {/* Main Heading */}
      <div className="text-center mb-16">
        <span className="px-4 py-1 rounded-full border border-gray-600 text-sm text-gray-400">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Simplifying hiring for everyone
        </h2>
      </div>

      {/* Job Seeker Section */}
      <TabSection title="For Job Seekers" tabs={jobSeekerTabs} />

      {/* Company Section */}
      <TabSection title="For Companies" tabs={companyTabs} />
    </section>
  );
}

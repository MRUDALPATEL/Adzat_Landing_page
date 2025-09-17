import { useState } from "react";
import { faqs } from "../constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Top Section Heading */}
      <div className="text-center mb-16">
        <span className="px-4 py-1  rounded-full text-lg border border-gray-600 text-gray-400">
          FAQ
        </span>
       
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-6">
            We simulated what questions <br /> you need answering
          </h3>
          <p className="text-gray-400 text-lg mb-4">
            Explore quick solutions to common questions. <br />
            Need more? Feel free to contact our{" "}
            <a href="#" className="text-purple-400 hover:underline">
              support team
            </a>.
          </p>
        </div>

        {/* Right FAQ */}
        <div className="w-full border p-4 border-gray-500">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-500">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left font-medium text-white"
              >
                {faq.question}
                <span
                  className={`ml-2 text-xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

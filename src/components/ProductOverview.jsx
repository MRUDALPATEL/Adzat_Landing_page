import React from 'react';
import { FaUsers, FaRocket, FaClock, FaDollarSign } from 'react-icons/fa'; // Example icons

const features = [
  {
    icon: <FaUsers />,
    title: 'Tangible',
    description: 'Human-based results. Not theory.',
  },
  {
    icon: <FaRocket />,
    title: 'Scalable',
    description: 'Test any type of idea, content, or decision.',
  },
  {
    icon: <FaClock />,
    title: 'Rapid',
    description: 'Get actionable insights in minutes, not months.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Affordable',
    description: 'A fraction of the cost of traditional research.',
  },
];

const ProductOverview = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <span className="px-4 py-1  rounded-full text-lg border border-gray-600 text-gray-400 ">
          Product Overview
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center justify-start border border-gray-500 p-6">
              <div className="text-4xl mb-4 border border-gray-600 rounded-full p-4 ">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
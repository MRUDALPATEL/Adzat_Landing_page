import { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Basic Plan",
      price: 19,
      features: [
        "Access to all basic features",
        "10 GB of cloud storage",
        "Email support",
        "Single user access",
      ],
    },
    {
      name: "Professional Plan",
      price: 49,
      features: [
        "All features in Basic Plan",
        "50 GB of cloud storage",
        "Priority email and chat support",
        "Multi-user access (up to 5 users)",
      ],
    },
    {
      name: "Enterprise Plan",
      price: 99,
      features: [
        "All features in Professional Plan",
        "Unlimited cloud storage",
        "24/7 dedicated support",
        "Unlimited user access",
      ],
    },
  ],
  annual: [
    {
      name: "Basic Plan",
      price: 199,
      features: [
        "Access to all basic features",
        "10 GB of cloud storage",
        "Email support",
        "Single user access",
      ],
    },
    {
      name: "Professional Plan",
      price: 499,
      features: [
        "All features in Basic Plan",
        "50 GB of cloud storage",
        "Priority email and chat support",
        "Multi-user access (up to 5 users)",
      ],
    },
    {
      name: "Enterprise Plan",
      price: 999,
      features: [
        "All features in Professional Plan",
        "Unlimited cloud storage",
        "24/7 dedicated support",
        "Unlimited user access",
      ],
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("annual");

  return (
    <section id="pricing" className="w-full text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover flexible subscription plans tailored to meet your business
          needs. Whether you're a small startup or a growing enterprise, we've
          got you covered.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full transition ${
              billing === "monthly"
                ? "bg-white text-black font-semibold"
                : "border border-gray-500 text-gray-300"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full transition ${
              billing === "annual"
                ? "bg-white text-black font-semibold"
                : "border border-gray-500 text-gray-300"
            }`}
            onClick={() => setBilling("annual")}
          >
            Annual
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[billing].map((plan, i) => (
            <div
              key={i}
              className=" border border-neutral-800 rounded-2xl p-8 flex flex-col items-center shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg font-normal text-gray-400">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </p>
              <ul className="text-gray-400 space-y-3 mb-8 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl font-semibold text-black bg-white relative overflow-hidden">
                <span className="relative z-10">Subscribe Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 blur-md"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

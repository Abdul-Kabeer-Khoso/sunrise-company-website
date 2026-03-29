import React from "react";
import ScrollReveal from "../UI/ScrollReveal";

const values = [
  { name: "Integrity", icon: "🤝", desc: "Honesty & transparency" },
  { name: "Innovation", icon: "💡", desc: "Modern tech" },
  { name: "Excellence", icon: "🏆", desc: "Quality first" },
  { name: "Sustainability", icon: "🌱", desc: "Eco-friendly" },
  { name: "Collaboration", icon: "🤲", desc: "Partnership synergy" },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl font-bold text-sunrise-navy">
            Our Core Values
          </h2>
          <p className="text-gray-500 mt-2">
            Principles that drive everything we do
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {values.map((value, index) => (
            <ScrollReveal
              key={index}
              className="text-center p-5 bg-amber-50/40 rounded-xl hover:bg-amber-100 transition"
            >
              <div className="text-3xl mb-2">{value.icon}</div>
              <h4 className="font-bold text-sunrise-navy">{value.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{value.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

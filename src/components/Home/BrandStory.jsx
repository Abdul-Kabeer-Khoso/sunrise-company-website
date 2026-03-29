import React from "react";
import ScrollReveal from "../UI/ScrollReveal";

const Sustainability = () => {
  return (
    <section className="py-16 bg-sunrise-navy text-white">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold">
            🌿 Sustainability & Environmental Responsibility
          </h2>
          <p className="text-lg text-amber-100 mt-4 max-w-3xl mx-auto">
            Promoting renewable energy, eco-friendly materials, and
            energy-efficient practices to create long-term environmental and
            economic value.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sustainability;

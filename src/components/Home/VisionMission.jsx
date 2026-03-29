import React from "react";
import ScrollReveal from "../UI/ScrollReveal";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-sunrise-orange card-hover">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-2xl font-bold text-sunrise-navy">Our Vision</h3>
            <p className="text-gray-600 mt-3">
              To become a recognized leader in sustainable construction,
              renewable energy solutions, and international trade, driving
              innovation and economic growth while contributing to environmental
              protection and community development.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-sunrise-gold card-hover">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-2xl font-bold text-sunrise-navy">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-3">
              Delivering reliable construction services, efficient solar energy
              solutions, and trusted global trading operations that empower
              businesses and communities. Through innovation, responsible
              practices, and strategic collaboration.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

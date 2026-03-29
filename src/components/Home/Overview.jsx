import React from "react";
import ScrollReveal from "../UI/ScrollReveal";

const Overview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sunrise-orange font-semibold tracking-wide">
            WHO WE ARE
          </span>
          <h2 className="text-4xl font-bold text-sunrise-navy mt-2">
            Company Overview
          </h2>
        </ScrollReveal>

        <ScrollReveal className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-lg">
            Sunrise & Co. is a forward-looking enterprise headquartered in{" "}
            <strong className="text-sunrise-darkOrange">
              Karachi, Pakistan
            </strong>
            , operating across three key sectors: construction, renewable solar
            energy, and international trade. Established with a vision to
            contribute to sustainable economic growth, the company integrates
            infrastructure development, clean energy solutions, and global
            commercial networks to deliver comprehensive and innovative
            services. Guided by our brand philosophy —{" "}
            <em>“A New Dawn of Sustainable Development”</em> — we expand
            capabilities to serve local and global markets.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Overview;

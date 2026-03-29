import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../UI/ScrollReveal";

const Hero = () => {
  return (
    <section className="hero-bg relative pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-sunrise-orange/10 text-sunrise-darkOrange rounded-full text-sm font-semibold mb-4">
              A New Dawn of Sustainable Development
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-sunrise-navy leading-tight">
              Powering Progress.
              <br />
              Building Tomorrow.
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Construction · Solar Energy · Global Trade — Integrated solutions
              for a sustainable future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-sunrise-orange hover:bg-sunrise-darkOrange text-white font-bold px-7 py-3 rounded-full transition shadow-md hover:shadow-lg"
              >
                Explore Services →
              </Link>
              <Link
                to="/company"
                className="border-2 border-sunrise-orange text-sunrise-darkOrange font-semibold px-7 py-3 rounded-full hover:bg-sunrise-orange/10 transition"
              >
                Our Story
              </Link>
            </div>
          </ScrollReveal>

          <div className="relative flex justify-center animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-sunrise-gold/30 to-orange-200 rounded-full blur-3xl absolute"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-orange-100">
              <div className="text-center">
                <div className="text-7xl mb-3">☀️</div>
                <p className="font-bold text-sunrise-navy">Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">
                  Global reach, local excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

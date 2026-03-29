import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700",
        "ease-out",
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    { name: "Integrity", icon: "🤝", desc: "Honesty & transparency" },
    { name: "Innovation", icon: "💡", desc: "Modern technologies" },
    { name: "Excellence", icon: "🏆", desc: "Quality & professionalism" },
    {
      name: "Sustainability",
      icon: "🌱",
      desc: "Environmental responsibility",
    },
    { name: "Collaboration", icon: "🤲", desc: "Strong partnerships" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                A New Dawn of Sustainable Development
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6 font-['Playfair_Display']">
                Powering Progress.
                <br />
                <span className="text-amber-500">Building Tomorrow.</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Construction · Solar Energy · Global Trade — Integrated
                solutions for a sustainable future.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Explore Services
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link to="/company" className="btn-outline">
                  Our Story
                </Link>
              </div>
            </div>

            <div className="relative reveal-on-scroll">
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">☀️</div>
                  <p className="text-2xl font-bold text-slate-800 mb-2">
                    Karachi, Pakistan
                  </p>
                  <p className="text-slate-600">
                    Global reach, local excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="section-subtitle">WHO WE ARE</span>
            <h2 className="section-title">Company Overview</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="reveal-on-scroll max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-10 md:p-12 rounded-3xl shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed">
                Sunrise & Co. is a forward-looking enterprise headquartered in{" "}
                <strong className="text-amber-600">Karachi, Pakistan</strong>,
                operating across three key sectors: construction, renewable
                solar energy, and international trade. Established with a vision
                to contribute to sustainable economic growth, the company
                integrates infrastructure development, clean energy solutions,
                and global commercial networks to deliver comprehensive and
                innovative services.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                In an era where urban development, energy demand, and global
                commerce are rapidly evolving, Sunrise & Co. positions itself as
                a reliable partner for businesses, communities, and institutions
                seeking efficient and sustainable solutions. By combining
                technical expertise, strategic partnerships, and modern
                technologies, the company provides services that not only meet
                immediate needs but also support long-term development.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                Sunrise & Co. is committed to maintaining the highest standards
                of{" "}
                <strong>
                  quality, safety, and environmental responsibility
                </strong>
                . Through its multidisciplinary operations, the company
                contributes to the development of resilient infrastructure, the
                adoption of renewable energy technologies, and the facilitation
                of international trade relationships.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                Guided by our brand philosophy —{" "}
                <em className="text-amber-600 font-semibold">
                  “A New Dawn of Sustainable Development”
                </em>{" "}
                — we expand capabilities to serve local and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="reveal-on-scroll group">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full border-b-4 border-amber-500">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-['Playfair_Display']">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To become a recognized leader in sustainable construction,
                  renewable energy solutions, and international trade, driving
                  innovation and economic growth while contributing to
                  environmental protection and community development.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll group">
              <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full border-b-4 border-amber-400">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-['Playfair_Display']">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Sunrise & Co. is dedicated to delivering reliable construction
                  services, efficient solar energy solutions, and trusted global
                  trading operations that empower businesses and communities.
                  Through innovation, responsible practices, and strategic
                  collaboration, the company aims to create sustainable value
                  and long-term opportunities for clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="section-subtitle">OUR CORE VALUES</span>
            <h2 className="section-title">What Drives Us</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="reveal-on-scroll group text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">
                  {value.name}
                </h4>
                <p className="text-sm text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container-custom relative z-10 text-center">
          <div className="reveal-on-scroll">
            <div className="text-6xl mb-6">🌿</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']">
              Sustainability & Environmental Responsibility
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Sustainability is a fundamental principle guiding the operations
              of Sunrise & Co. The company recognizes the importance of
              balancing economic growth with environmental protection and social
              responsibility.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm">
                Renewable Energy
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm">
                Eco-Friendly Materials
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm">
                Energy-Efficient Practices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 font-['Playfair_Display']">
              Brand Story: <span className="text-amber-500">A New Dawn</span>
            </h2>
            <div className="relative">
              <div className="absolute -left-4 top-0 text-8xl text-amber-100 font-serif">
                "
              </div>
              <div className="pl-12 pr-4 py-8 text-slate-700 leading-relaxed space-y-4 text-lg">
                <p>
                  The name <strong>Sunrise & Co.</strong> symbolizes more than
                  just the start of a new day—it represents opportunity, growth,
                  and the promise of progress. Every sunrise marks a moment of
                  renewal and the beginning of new possibilities.
                </p>
                <p>
                  Inspired by this symbolism, Sunrise & Co. was founded with the
                  vision of creating a company that contributes meaningfully to
                  modern development while promoting sustainability and
                  innovation.
                </p>
                <p>
                  From its earliest projects, the company focused on combining
                  infrastructure development, renewable energy solutions, and
                  global trade networks into a unified approach to business. By
                  integrating these sectors, Sunrise & Co. is able to provide
                  comprehensive services that address some of the most important
                  challenges of modern economies—urban growth, energy
                  sustainability, and global connectivity.
                </p>
                <p className="font-semibold text-amber-600 text-xl">
                  “Powering Progress. Building Tomorrow.”
                </p>
                <p>
                  Every construction project represents a strong foundation for
                  communities. Every solar installation contributes to a cleaner
                  and more sustainable energy future. Every international trade
                  partnership strengthens global economic connections.
                </p>
                <p className="font-bold text-slate-800 text-xl mt-6">
                  Build. Power. Connect. — The essence of our legacy.
                </p>
                <p>
                  As Sunrise & Co. continues to grow, its mission remains clear:
                  to bring innovative solutions, responsible development, and
                  long-term value to clients and communities around the world.
                  Like the rising sun, Sunrise & Co. strives to illuminate
                  pathways for sustainable progress and shared prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

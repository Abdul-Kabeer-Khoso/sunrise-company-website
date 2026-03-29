import React, { useEffect } from "react";

const CompanyPage = () => {
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
    {
      name: "Integrity",
      desc: "We conduct our business with honesty, transparency, and strong ethical principles. Trust and accountability are central to every partnership we establish.",
    },
    {
      name: "Innovation",
      desc: "We continuously adopt modern technologies and creative solutions to improve infrastructure development, energy efficiency, and operational performance.",
    },
    {
      name: "Excellence",
      desc: "Quality and professionalism define our approach. We strive to deliver services and projects that meet the highest standards of performance and reliability.",
    },
    {
      name: "Sustainability",
      desc: "We believe in responsible development that supports environmental protection and long-term community well-being.",
    },
    {
      name: "Collaboration",
      desc: "Successful projects are built on strong partnerships. We work closely with clients, suppliers, and stakeholders to achieve shared goals.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20 mb-16">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">
            About Sunrise & Co.
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Construction · Solar Energy · Global Trade
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      <div className="container-custom">
        {/* Company Introduction */}
        <div className="reveal-on-scroll max-w-4xl mx-auto text-center mb-20">
          <div className="text-6xl mb-6">☀️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-['Playfair_Display']">
            A New Dawn of Sustainable Development
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Headquartered in{" "}
            <strong className="text-amber-600">Karachi, Pakistan</strong>,
            Sunrise & Co. operates at the intersection of construction,
            renewable solar energy, and international trade. Established with a
            vision to contribute to sustainable economic growth, the company
            integrates infrastructure development, clean energy solutions, and
            global commercial networks to deliver comprehensive and innovative
            services.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="reveal-on-scroll bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To become a recognized leader in sustainable construction,
              renewable energy solutions, and international trade, driving
              innovation and economic growth while contributing to environmental
              protection and community development.
            </p>
          </div>

          <div className="reveal-on-scroll bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Sunrise & Co. is dedicated to delivering reliable construction
              services, efficient solar energy solutions, and trusted global
              trading operations that empower businesses and communities.
              Through innovation, responsible practices, and strategic
              collaboration, the company aims to create sustainable value and
              long-term opportunities for clients and partners.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="reveal-on-scroll mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 font-['Playfair_Display']">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-amber-600 mb-3">
                  {value.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Commitment */}
        <div className="reveal-on-scroll bg-slate-800 rounded-3xl p-10 md:p-12 mb-20 text-white">
          <div className="text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="text-3xl font-bold mb-4 font-['Playfair_Display']">
              Sustainability and Environmental Responsibility
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Sustainability is a fundamental principle guiding the operations
              of Sunrise & Co. The company recognizes the importance of
              balancing economic growth with environmental protection and social
              responsibility.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">☀️</div>
                <p className="text-sm">
                  Promoting renewable energy through solar power solutions
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🌱</div>
                <p className="text-sm">
                  Using environmentally responsible construction materials
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">💡</div>
                <p className="text-sm">
                  Implementing energy-efficient building practices
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-sm">
                  Supporting initiatives that reduce environmental impact
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🏗️</div>
                <p className="text-sm">
                  Encouraging sustainable infrastructure development
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm">
                  Aligning with global sustainability goals
                </p>
              </div>
            </div>
            <p className="mt-6 text-amber-100">
              These efforts align with global sustainability goals and
              demonstrate the company's commitment to creating long-term
              environmental and economic value.
            </p>
          </div>
        </div>

        {/* Brand Story Full */}
        <div className="reveal-on-scroll max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8 font-['Playfair_Display']">
            Brand Story
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-10 md:p-12 rounded-3xl">
            <div className="text-center mb-6">
              <div className="text-5xl mb-2">🌅</div>
              <p className="text-2xl font-semibold text-amber-600 italic">
                A New Dawn of Sustainable Development
              </p>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">
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
              <p className="font-bold text-amber-600 text-xl text-center my-6">
                “Powering Progress. Building Tomorrow.”
              </p>
              <p>
                Every construction project represents a strong foundation for
                communities. Every solar installation contributes to a cleaner
                and more sustainable energy future. Every international trade
                partnership strengthens global economic connections.
              </p>
              <p className="font-bold text-slate-800 text-xl text-center my-6">
                Build. Power. Connect.
              </p>
              <p>
                As Sunrise & Co. continues to grow, its mission remains clear:
                to bring innovative solutions, responsible development, and
                long-term value to clients and communities around the world.
              </p>
              <p className="italic">
                Like the rising sun, Sunrise & Co. strives to illuminate
                pathways for sustainable progress and shared prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyPage;

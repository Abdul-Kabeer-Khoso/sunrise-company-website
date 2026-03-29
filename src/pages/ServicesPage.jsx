import React, { useEffect } from "react";

const ServicesPage = () => {
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

  const services = [
    {
      icon: "🏗️",
      title: "Construction Services",
      desc: "Construction is one of the foundational pillars of Sunrise & Co.’s operations. The company provides comprehensive construction services that focus on durability, safety, and modern engineering standards. With an experienced team of engineers, architects, and project managers, Sunrise & Co. manages projects from initial planning and design to final execution and delivery.",
      projects: [
        "Residential construction: Development of modern housing projects and residential communities designed for comfort, efficiency, and durability.",
        "Commercial buildings: Construction of office complexes, retail spaces, and mixed-use developments that support business growth and urban development.",
        "Industrial infrastructure: Development of facilities and industrial structures that meet operational and safety requirements.",
        "Renovation and structural upgrades: Enhancing existing buildings with improved design, safety features, and energy-efficient solutions.",
        "Project management and engineering consultation: Providing professional guidance and management to ensure projects are delivered on time and within budget.",
      ],
      note: "Sunrise & Co. emphasizes the use of high-quality materials, modern construction techniques, and environmentally responsible practices, ensuring that each project contributes positively to the built environment.",
    },
    {
      icon: "☀️",
      title: "Solar Energy Solutions",
      desc: "Recognizing the growing importance of renewable energy, Sunrise & Co. actively promotes solar power as a sustainable and cost-effective solution for residential, commercial, and industrial clients. The company designs and implements customized solar energy systems that reduce electricity costs, increase energy independence, and support environmental sustainability.",
      projects: [
        "Solar panel system installation for homes, offices, and industrial facilities",
        "Solar energy system design and engineering, tailored to specific energy requirements",
        "Hybrid and off-grid solar solutions for areas with limited grid connectivity",
        "Energy efficiency consulting to help clients optimize energy consumption",
        "Maintenance and monitoring services to ensure long-term system performance",
      ],
      note: "By leveraging advanced solar technologies and engineering expertise, Sunrise & Co. helps clients transition toward clean, renewable energy while reducing carbon emissions and operational costs.",
    },
    {
      icon: "🌍",
      title: "International Trade",
      desc: "In addition to infrastructure and energy services, Sunrise & Co. operates in the field of international trade, facilitating the exchange of goods and resources between global markets. The company works with international suppliers, manufacturers, and distributors to ensure efficient sourcing and delivery of products that support construction, energy, and industrial sectors.",
      projects: [
        "Import and export of construction materials and equipment",
        "Procurement and sourcing of industrial and energy-related products",
        "Supply chain coordination and logistics support",
        "Strategic partnerships with global suppliers and manufacturers",
      ],
      note: "Through its trading operations, Sunrise & Co. strengthens international business relationships and contributes to the efficient movement of goods across borders, supporting economic development and market connectivity.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 mb-16">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">
            Our Core Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Construction · Solar Energy · International Trade
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>
      </section>

      <div className="container-custom">
        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="reveal-on-scroll group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-['Playfair_Display']">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      The company undertakes a wide range of projects,
                      including:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.projects.map((project, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <span className="text-amber-500 mt-1">✓</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
                    <p className="text-slate-700 italic">{service.note}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;

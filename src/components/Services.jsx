import React from "react";

const services = [
  {
    title: "HTML & CSS",
    description: "Build the visual foundation of the web with semantic HTML5 and modern CSS3 (Flexbox/Grid).",
    icon: "🌐",
    accent: "bg-blue-100 text-blue-600"
  },
  {
    title: "JavaScript & React",
    description: "Master the MERN stack basics. Build high-performance, component-based web applications.",
    icon: "⚛️",
    accent: "bg-cyan-100 text-cyan-600"
  },
  {
    title: "Version Control",
    description: "Industry-standard Git workflows. Learn to collaborate on GitHub like a pro developer.",
    icon: "🛠️",
    accent: "bg-orange-100 text-orange-600"
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach. Ensure your applications look perfect on every screen size.",
    icon: "📱",
    accent: "bg-green-100 text-green-600"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50" id="service">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">What we offer</span>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mt-3 mb-6">
            Everything you need to become a <span className="text-orange-500">World-Class</span> Developer
          </h2>
          <p className="text-gray-600 text-lg">
            We don't just teach code; we teach the industry standards and workflows used at top tech companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle Decorative Circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-green-50 transition-colors duration-500"></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner relative z-10`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* "Learn More" Arrow (Appears on Hover) */}
              <div className="mt-6 flex items-center text-green-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
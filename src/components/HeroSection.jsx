import React from "react";

function HeroSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white py-24 rounded-2xl mx-10 mt-10 overflow-hidden shadow-xl"
    >
      {/* Background Decorative Circle */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-pops mb-4">
          Janardan Insurance
        </h1>
        <p className="text-lg sm:text-xl mb-8 font-light font-pops text-sky-50">
          Your trusted partner for life, health, and vehicle insurance.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollToSection("services")}
            className="font-pops bg-white text-sky-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border font-pops border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

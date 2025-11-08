// import React from "react";
// import logo from "../assets/logo.png";

// function HeroSection() {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white py-24 rounded-2xl mx-10 mt-10 overflow-hidden shadow-xl"
//     >
//       {/* Background Decorative Circle */}
//       <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"></div>

//  {/* ✅ Logo Section */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg flex items-center justify-center">
//             <img
//               src={logo}
//               alt="Janardan Insurance Logo"
//               className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
//             />
//           </div>
//         </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fadeInUp">
//         <h1 className="text-4xl sm:text-5xl font-extrabold font-pops mb-4">
//           Janardan Insurance
//         </h1>
//         <p className="text-lg sm:text-xl mb-8 font-light font-pops text-sky-50">
//           Your trusted partner for life, health, and vehicle insurance.
//         </p>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => scrollToSection("services")}
//             className="font-pops bg-white text-sky-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//           >
//             Services
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="border font-pops border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;




import React from "react";
import logo from "../assets/logo.png";

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
      className="relative bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-400 text-white py-24 rounded-2xl mx-10 mt-10 overflow-hidden shadow-xl"
    >
      {/* Background Decorative Circle */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* ✅ Bigger Logo */}
     {/* <div className="flex justify-center mb-6">
  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg flex items-center justify-center">
    <img
      src={logo}
      alt="Janardan Insurance Logo"
      className="h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain"
    />
  </div>
</div> */}


<div className="flex justify-center mb-10 px-4">
  <div className="w-[90%] sm:w-[85%] lg:w-[80%] rounded-2xl max-w-4xl bg-white/95 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] border border-white/40 flex items-center justify-center py-8 sm:py-10 lg:py-14">
    <img
      src={logo}
      alt="Janardan Insurance Logo"
      className="w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72  max-w-full object-contain"
    />
  </div>
</div>


      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fadeInUp">
 <p className="text-xs sm:text-sm mb-8 font-medium font-pops text-purple-100 uppercase tracking-wide">
  Your trusted partner for life, health, and vehicle insurance.
</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollToSection("services")}
            className="font-pops bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border font-pops border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;








// import React from "react";
// import logo from "../assets/logo.png";

// function HeroSection() {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-sky-500 text-white py-24 rounded-2xl mx-10 mt-10 overflow-hidden shadow-xl"
//     >
//       {/* Background Decorative Circle */}
//       <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

//       {/* ✅ Bigger Logo */}
//       <div className="flex justify-center mb-6">
//         <div className="bg-white rounded-full p-4 sm:p-5 shadow-lg flex items-center justify-center">
//           <img
//             src={logo}
//             alt="Janardan Insurance Logo"
//             className="h-18 w-18 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fadeInUp">
//         <h1 className="text-4xl sm:text-5xl font-extrabold font-pops mb-4">
//           Janardan Insurance
//         </h1>
//         <p className="text-lg sm:text-xl mb-8 font-light font-pops text-blue-100">
//           Your trusted partner for life, health, and vehicle insurance.
//         </p>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => scrollToSection("services")}
//             className="font-pops bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//           >
//             Services
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="border font-pops border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


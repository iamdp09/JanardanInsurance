// import React from "react";
// import aboutImg from "../assets/about-us.jpg"; // optional image

// function AboutUs() {
//   return (
//     <section className="container mx-auto px-10 mt-24">
//       <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
        
//         {/* Left Side - Image */}
//         <div className="md:w-1/2">
//           <img
//             src={aboutImg}
//             alt="About Janardan Insurance"
//             className="rounded-xl shadow-md"
//           />
//         </div>

//         {/* Right Side - Text */}
//         <div className="md:w-1/2 text-gray-700 font-pops">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             About Janardan Insurance
//           </h2>
//           <p className="text-base leading-relaxed mb-4">
//             Founded with the vision of **making insurance simple and accessible**, 
//             <span className="font-semibold text-sky-600"> Janardan Insurance </span> 
//             helps individuals and families find the right protection for every stage of life.
//           </p>
//           <p className="text-base leading-relaxed mb-4">
//             From vehicle and health to life and property insurance, 
//             we offer a complete range of coverage plans tailored to your needs. 
//             Our team ensures that you understand every detail — 
//             so you make confident, worry-free decisions.
//           </p>
//           <p className="text-base leading-relaxed">
//             With transparent advice, quick claim support, and 24/7 assistance, 
//             we stand beside you as a trusted partner — 
//             helping you protect what matters most.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;



// import React from "react";
// import aboutImg from "../assets/about-us.jpg";

// function AboutUs() {
//   return (
//     <section id="about" className="container mx-auto px-6 sm:px-10 mt-24 font-pops">
//       <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-14 overflow-hidden">
        
//         {/* Left: Image */}
//         <div className="md:w-1/2 w-full flex justify-center">
//           <img
//             src={aboutImg}
//             alt="About Janardan Insurance"
//             className="rounded-xl shadow-md object-cover w-full md:w-[90%] h-64 sm:h-80 md:h-[420px] transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Right: Content */}
//         <div className="md:w-1/2 text-gray-700 text-center md:text-left">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
//             About <span className="text-sky-600">Janardan Insurance</span>
//           </h2>
//           <p className="text-base sm:text-lg leading-relaxed mb-4">
//             Founded with the vision of making insurance simple and accessible,{" "}
//             <span className="font-semibold text-sky-600">Janardan Insurance</span>{" "}
//             helps individuals and families find the right protection for every stage of life.
//           </p>
//           <p className="text-base sm:text-lg leading-relaxed mb-4">
//             From vehicle and health to life and property insurance, we offer a complete
//             range of coverage plans tailored to your needs. Our team ensures you understand
//             every detail — helping you make confident, worry-free decisions.
//           </p>
//           <p className="text-base sm:text-lg leading-relaxed">
//             With transparent advice, quick claim support, and 24/7 assistance, we stand beside
//             you as a trusted partner — protecting what matters most.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;


import React from "react";
import aboutImg from "../assets/about-us.jpg";

function AboutUs() {
  return (
    <section id="about" className="container mx-auto px-6 sm:px-10 mt-24 font-pops">
      <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden">

        {/* Background Gradient Blurs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/25 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/25 rounded-full blur-[100px]"></div>

        {/* Left: Image */}
        <div className="relative z-10 md:w-1/2 w-full flex justify-center">
          <img
            src={aboutImg}
            alt="About Janardan Insurance"
            className="rounded-2xl shadow-lg object-cover w-full md:w-[90%] h-64 sm:h-80 md:h-[420px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div className="relative z-10 md:w-1/2 text-blue-900 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-purple-600">Janardan Insurance</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            Founded with the vision of making insurance simple and accessible, 
            <span className="font-semibold text-purple-600"> Janardan Insurance </span>
            helps individuals and families find the right protection for every stage of life.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            From vehicle and health to life and property insurance, we offer a complete
            range of coverage plans tailored to your needs. Our team ensures you understand
            every detail — helping you make confident, worry-free decisions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            With transparent advice, quick claim support, and 24/7 assistance, we stand beside
            you as a trusted partner — protecting what matters most.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;


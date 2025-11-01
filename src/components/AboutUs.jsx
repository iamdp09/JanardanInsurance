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



import React from "react";
import aboutImg from "../assets/about-us.jpg";

function AboutUs() {
  return (
    <section id="about" className="container mx-auto px-6 sm:px-10 mt-24 font-pops">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-14 overflow-hidden">
        
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={aboutImg}
            alt="About Janardan Insurance"
            className="rounded-xl shadow-md object-cover w-full md:w-[90%] h-64 sm:h-80 md:h-[420px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 text-gray-700 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
            About <span className="text-sky-600">Janardan Insurance</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Founded with the vision of making insurance simple and accessible,{" "}
            <span className="font-semibold text-sky-600">Janardan Insurance</span>{" "}
            helps individuals and families find the right protection for every stage of life.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            From vehicle and health to life and property insurance, we offer a complete
            range of coverage plans tailored to your needs. Our team ensures you understand
            every detail — helping you make confident, worry-free decisions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            With transparent advice, quick claim support, and 24/7 assistance, we stand beside
            you as a trusted partner — protecting what matters most.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

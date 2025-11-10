// import React from "react";
// import bike from "../assets/v2_icon_bike.svg";
// import car from "../assets/v2_icon_car.svg";
// import family from "../assets/v2_icon_family.svg";
// import health from "../assets/v2_icon_health.svg";
// import fire from "../assets/fire-svgrepo-com.svg";
// import material from "../assets/material-svgrepo-com.svg";

// function Services() {
//   const services = [
//     {
//       img: car,
//       title: "Car Insurance",
//       desc: "Comprehensive protection for your car from accidents, theft, or damage.",
//     },
//     {
//       img: bike,
//       title: "Bike Insurance",
//       desc: "Secure your two-wheeler with fast claim support and easy renewals.",
//     },
//     {
//       img: health,
//       title: "Health Insurance",
//       desc: "Get health coverage for you and your loved ones with trusted plans.",
//     },
//     {
//       img: family,
//       title: "Family Insurance",
//       desc: "Protect your family’s future with our reliable insurance options.",
//     },
//     {
//       img: fire,
//       title: "Fire Insurance",
//       desc: "Safeguard your home and business from fire-related damages.",
//     },
//     {
//       img: material,
//       title: "Material Insurance",
//       desc: "Cover your valuable materials and goods against loss or damage.",
//     },
//   ];

//   return (
//     <section className="px-10 mt-20">
//       <h2 className="text-3xl font-bold text-center font-pops text-sky-700 mb-10">
//         Our Services
//       </h2>

//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//           >
//             <div className="flex justify-center mb-4">
//               <img src={service.img} alt={service.title} className="h-14 w-14" />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-2 font-pops">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-600 font-pops">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;

// import React from "react";
// import bike from "../assets/v2_icon_bike.svg";
// import car from "../assets/v2_icon_car.svg";
// import family from "../assets/v2_icon_family.svg";
// import health from "../assets/v2_icon_health.svg";
// import fire from "../assets/fire-svgrepo-com.svg";
// import material from "../assets/material-svgrepo-com.svg";

// function Services() {
//   const services = [
//     { img: car, title: "Car Insurance" },
//     { img: bike, title: "Bike Insurance" },
//     { img: health, title: "Health Insurance" },
//     { img: family, title: "Family Insurance" },
//     { img: fire, title: "Fire Insurance" },
//     { img: material, title: "Material Insurance" },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-sky-50 to-white px-10 py-20 mt-20 rounded-t-3xl">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT TEXT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-bold text-sky-700 font-pops mb-6">
//             We’ve Got You Covered
//           </h2>
//           <p className="text-gray-700 font-pops mb-6 leading-relaxed">
//             From health to vehicles, Janardan Insurance provides reliable, affordable,
//             and easy-to-claim insurance solutions tailored for you.  
//             Our team ensures you stay protected — always.
//           </p>
//           <button className="bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition">
//             Learn More
//           </button>
//         </div>

//         {/* RIGHT ICON GRID */}
//         <div className="grid grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-all duration-300"
//             >
//               <img src={service.img} alt={service.title} className="h-10 w-10 mb-2" />
//               <p className="text-sm font-medium text-gray-800 text-center font-pops">
//                 {service.title}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Services;

// import React from 'react';
// import consultation from "../assets/consultant.png";
// import policy from "../assets/policy.png";
// import available from "../assets/24:7.png";
// import planning from "../assets/planning.png";
// import support from "../assets/support.png";
// import assistance from "../assets/call-center.png";

// function Services() {
//   const services = [
//     {
//       img: consultation,
//       title: "Free Consultation",
//       desc: "We guide you to choose the perfect insurance plan based on your needs and lifestyle.",
//     },
//     {
//       img: support,
//       title: "Quick Claim Support",
//       desc: "Our experts help you settle claims fast — with transparency and minimal paperwork.",
//     },
//     {
//       img: policy,
//       title: "Policy Renewal Reminders",
//       desc: "Never miss your renewal date! We notify you in advance for a hassle-free experience.",
//     },
//     {
//       img: available,
//       title: "24/7 Assistance",
//       desc: "Our support team is available round the clock through call or WhatsApp.",
//     },
//     {
//       img: planning,
//       title: "Custom Coverage Plans",
//       desc: "We design tailored insurance solutions to perfectly match your specific requirements.",
//     },
//     {
//       img: assistance,
//       title: "Document Assistance",
//       desc: "From policy papers to claims — we take care of all your documentation needs.",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-10 mt-24">
//       <h2 className="text-3xl font-bold font-pops text-center mb-10 text-gray-800 font-pops">
//         Our Services
//       </h2>

//       <div className="bg-white w-full rounded-2xl shadow-lg p-8">
//         <ul className="grid grid-cols-3 gap-6 justify-items-center">
//           {services.map((item, index) => (
//             <li
//               key={index}
//               className="flex flex-col items-center justify-center bg-sky-50 hover:bg-sky-100 transition-all rounded-xl p-6 w-60 h-56 shadow-sm"
//             >
//               <img src={item.img} alt={item.title} className="h-10 w-10 mb-3" />
//               <h3 className="text-lg font-semibold text-gray-800 text-center">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600 text-center mt-2 leading-snug">
//                 {item.desc}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Services;






// import React from "react";
// import consultation from "../assets/consultant.png";
// import policy from "../assets/policy.png";
// import available from "../assets/24:7.png";
// import planning from "../assets/planning.png";
// import support from "../assets/support.png";
// import assistance from "../assets/call-center.png";

// function Services() {
//   const services = [
//     {
//       img: consultation,
//       title: "Free Consultation",
//       desc: "We guide you to choose the perfect insurance plan based on your needs and lifestyle.",
//     },
//     {
//       img: support,
//       title: "Quick Claim Support",
//       desc: "Our experts help you settle claims fast — with transparency and minimal paperwork.",
//     },
//     {
//       img: policy,
//       title: "Policy Renewal Reminders",
//       desc: "Never miss your renewal date! We notify you in advance for a hassle-free experience.",
//     },
//     {
//       img: available,
//       title: "24/7 Assistance",
//       desc: "Our support team is available round the clock through call or WhatsApp.",
//     },
//     {
//       img: planning,
//       title: "Custom Coverage Plans",
//       desc: "We design tailored insurance solutions to perfectly match your specific requirements.",
//     },
//     {
//       img: assistance,
//       title: "Document Assistance",
//       desc: "From policy papers to claims — we take care of all your documentation needs.",
//     },
//   ];

//   return (
//     <section id="services" className="container mx-auto px-6 sm:px-10 mt-24">
//       <h2 className="text-3xl sm:text-4xl font-bold font-pops text-center mb-10 text-gray-800">
//         Our Services
//       </h2>

//       <div className="bg-white w-full rounded-2xl shadow-lg p-6 sm:p-10">
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {services.map((item, index) => (
//             <li
//               key={index}
//               className="flex flex-col items-center justify-center bg-sky-50 hover:bg-sky-100 transition-all duration-300 rounded-xl p-6 w-full sm:w-64 h-auto sm:h-56 shadow-sm hover:shadow-md transform hover:-translate-y-1"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-12 w-12 sm:h-14 sm:w-14 mb-3"
//               />
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
//                 {item.title}
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 text-center mt-2 leading-snug">
//                 {item.desc}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Services;


import React from "react";
import consultation from "../assets/consultant.png";
import policy from "../assets/policy.png";
import available from "../assets/24:7.png";
import planning from "../assets/planning.png";
import support from "../assets/support.png";
import assistance from "../assets/call-center.png";

function Services() {
  const services = [
    {
      img: consultation,
      title: "Free Consultation",
      desc: "We guide you to choose the perfect insurance plan based on your needs and lifestyle.",
    },
    {
      img: support,
      title: "Quick Claim Support",
      desc: "Our experts help you settle claims fast — with transparency and minimal paperwork.",
    },
    {
      img: policy,
      title: "Policy Renewal Reminders",
      desc: "Never miss your renewal date! We notify you in advance for a hassle-free experience.",
    },
    {
      img: available,
      title: "24/7 Assistance",
      desc: "Our support team is available round the clock through call or WhatsApp.",
    },
    {
      img: planning,
      title: "Custom Coverage Plans",
      desc: "We design tailored insurance solutions to perfectly match your specific requirements.",
    },
    {
      img: assistance,
      title: "Document Assistance",
      desc: "From policy papers to claims — we take care of all your documentation needs.",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-6 sm:px-10 mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold font-pops text-center mb-12 text-indigo-900">
        Our Services
      </h2>

      <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 overflow-hidden">
        {/* Decorative blurred gradients */}
        {/* <div className="absolute top-0 right-0 w-60 h-60 bg-purple-400/25 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300/25 rounded-full blur-[100px]"></div> */}

        <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-start bg-white w-full sm:w-72 h-auto rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-14 w-14 sm:h-16 sm:w-16 mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 text-center font-pops">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mt-2 leading-snug">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;


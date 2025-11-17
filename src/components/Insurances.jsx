
// import React from 'react';
// import bike from "../assets/v2_icon_bike.svg";
// import car from "../assets/v2_icon_car.svg";
// import family from "../assets/v2_icon_family.svg";
// import health from "../assets/v2_icon_health.svg";
// import fire from "../assets/fire-svgrepo-com.svg";
// import material from "../assets/material-svgrepo-com.svg";

// function Insurances() {
//   const insurances = [
//     { img: car, name: "Car Insurance" },
//     { img: bike, name: "Bike Insurance" },
//     { img: health, name: "Health Insurance" },
//     { img: family, name: "Family Insurance" },
//     { img: fire, name: "Fire Insurance" },
//     { img: material, name: "Material Insurance" },
//   ];

//   return (
//     <>
//     <div className="container mx-auto px-1 mt-20">
//       <div className="bg-white w-full rounded-2xl shadow-lg p-8 animate-slideUp">
//         <ul className="grid grid-cols-3 gap-6 justify-items-center">
//           {insurances.map((item, index) => (
//          <li
//         key={index}
//         className="flex flex-col items-center justify-center bg-sky-50 hover:bg-sky-100 transition-all rounded-xl p-4 w-28 h-28 shadow-sm"
//           >
//   <img src={item.img} alt={item.name} className="h-10 w-10 mb-2" />
//   <p className="text-center font-pops">
//     <span className="block text-sm font-semibold text-gray-800 leading-tight">
//       {item.name.split(" ")[0]}
//     </span>
//     <span className="block text-xs text-gray-500 -mt-1">
//       {item.name.split(" ")[1]}
//     </span>
//   </p>
// </li>

//           ))}
//         </ul>
//       </div>
//     </div>

// <section className="mt-16 px-10">
//   <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
//   <div className="grid md:grid-cols-3 gap-6">
//     <div className="bg-sky-50 p-6 rounded-xl shadow">
//       <p className="text-gray-700 italic">"Janardan Insurance helped me find the best car insurance at the lowest rate!"</p>
//       <p className="mt-2 font-semibold text-sky-700">– Rajesh Patel</p>
//     </div>
//     <div className="bg-sky-50 p-6 rounded-xl shadow">
//       <p className="text-gray-700 italic">"The team is supportive and makes the process easy."</p>
//       <p className="mt-2 font-semibold text-sky-700">– Sneha Sharma</p>
//     </div>
//         <div className="bg-sky-50 p-6 rounded-xl shadow">
//       <p className="text-gray-700 italic">"The team is supportive and makes the process easy."</p>
//       <p className="mt-2 font-semibold text-sky-700">– Sneha Sharma</p>
//     </div>
//   </div>
// </section>


//      </>
//   );
// }

// export default Insurances;


// import React from 'react';
// import bike from "../assets/v2_icon_bike.svg";
// import car from "../assets/v2_icon_car.svg";
// import family from "../assets/v2_icon_family.svg";
// import health from "../assets/v2_icon_health.svg";
// import fire from "../assets/fire-svgrepo-com.svg";
// import material from "../assets/material-svgrepo-com.svg";

// function Insurances() {
//   const insurances = [
//     { img: car, name: "Car Insurance" },
//     { img: bike, name: "Bike Insurance" },
//     { img: health, name: "Health Insurance" },
//     { img: family, name: "Family Insurance" },
//     { img: fire, name: "Fire Insurance" },
//     { img: material, name: "Material Insurance" },
//   ];

//   return (
//     <>
//       {/* Insurance Section */}
//       <section className="relative bg-white rounded-2xl mx-10 mt-10 shadow-xl py-17 overflow-hidden animate-slideUp">
//         {/* Decorative Blur Circles (for matching Hero aesthetic) */}
//         <div className="absolute top-10 right-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl"></div>

//         {/* Content */}
//         <div className="relative z-10 px-8">
//           <h2 className="text-3xl font-bold text-center text-sky-700 font-pops mb-10">
//             Our Insurance Plans
//           </h2>

//           <ul className="grid grid-cols-3 gap-6 justify-items-center">
//             {insurances.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex flex-col items-center justify-center bg-sky-50 hover:bg-sky-100 transition-all rounded-xl p-4 w-28 h-28 shadow-sm"
//               >
//                 <img src={item.img} alt={item.name} className="h-10 w-10 mb-2" />
//                 <p className="text-center font-pops">
//                   <span className="block text-sm font-semibold text-gray-800 leading-tight">
//                     {item.name.split(" ")[0]}
//                   </span>
//                   <span className="block text-xs text-gray-500 -mt-1">
//                     {item.name.split(" ")[1]}
//                   </span>
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="mt-16 px-10">
//         <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-sky-50 p-6 rounded-xl shadow">
//             <p className="text-gray-700 italic">
//               "Janardan Insurance helped me find the best car insurance at the lowest rate!"
//             </p>
//             <p className="mt-2 font-semibold text-sky-700">– Rajesh Patel</p>
//           </div>
//           <div className="bg-sky-50 p-6 rounded-xl shadow">
//             <p className="text-gray-700 italic">
//               "The team is supportive and makes the process easy."
//             </p>
//             <p className="mt-2 font-semibold text-sky-700">– Sneha Sharma</p>
//           </div>
//           <div className="bg-sky-50 p-6 rounded-xl shadow">
//             <p className="text-gray-700 italic">
//               "Their service is professional and responsive."
//             </p>
//             <p className="mt-2 font-semibold text-sky-700">– Nikhil Verma</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Insurances;




// import React from 'react';
// import bike from "../assets/v2_icon_bike.svg";
// import car from "../assets/v2_icon_car.svg";
// import family from "../assets/v2_icon_family.svg";
// import health from "../assets/v2_icon_health.svg";
// import fire from "../assets/fire-svgrepo-com.svg";
// import material from "../assets/material-svgrepo-com.svg";

// function Insurances() {
//   const insurances = [
//     { img: car, name: "Car Insurance" },
//     { img: bike, name: "Bike Insurance" },
//     { img: health, name: "Health Insurance" },
//     { img: family, name: "Family Insurance" },
//     { img: fire, name: "Fire Insurance" },
//     { img: material, name: "Material Insurance" },
//   ];

//   return (
//     <>
//       {/* ===== Insurance Section ===== */}
//       <section className="relative bg-white rounded-2xl mx-4 sm:mx-8 md:mx-10 mt-10 shadow-xl py-14 overflow-hidden animate-slideUp">
//         {/* Decorative Blur Circles */}
//         <div className="absolute top-10 right-10 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-sky-200/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-sky-100/40 rounded-full blur-3xl"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4 sm:px-6 md:px-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-700 font-pops mb-8 sm:mb-10">
//             Our Insurance Plans
//           </h2>

//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
//             {insurances.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex flex-col items-center justify-center bg-sky-50 hover:bg-sky-100 transition-all rounded-xl p-4 sm:p-5 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 shadow-sm"
//               >
//                 <img src={item.img} alt={item.name} className="h-8 sm:h-10 w-8 sm:w-10 mb-2" />
//                 <p className="text-center font-pops">
//                   <span className="block text-sm sm:text-base font-semibold text-gray-800 leading-tight">
//                     {item.name.split(" ")[0]}
//                   </span>
//                   <span className="block text-xs sm:text-sm text-gray-500 -mt-1">
//                     {item.name.split(" ")[1]}
//                   </span>
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* ===== Testimonials Section ===== */}
//       <section className="mt-16 px-4 sm:px-6 md:px-10">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-pops text-gray-800">
//           What Our Clients Say
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
//             <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
//               "Janardan Insurance helped me find the best car insurance at the lowest rate!"
//             </p>
//             <p className="mt-3 font-semibold text-sky-700 text-sm sm:text-base">– Rajesh Patel</p>
//           </div>
//           <div className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
//             <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
//               "The team is supportive and makes the process easy."
//             </p>
//             <p className="mt-3 font-semibold text-sky-700 text-sm sm:text-base">– Sneha Sharma</p>
//           </div>
//           <div className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
//             <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
//               "Their service is professional and responsive."
//             </p>
//             <p className="mt-3 font-semibold text-sky-700 text-sm sm:text-base">– Nikhil Verma</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Insurances;




import React from 'react';
import bike from "../assets/v2_icon_bike.svg";
import car from "../assets/v2_icon_car.svg";
import family from "../assets/v2_icon_family.svg";
import health from "../assets/v2_icon_health.svg";
import fire from "../assets/fire-svg.svg";
import material from "../assets/cartoon2.svg";

function Insurances() {
  const insurances = [
    { img: car, name: "Car Insurance" },
    { img: bike, name: "Bike Insurance" },
    { img: health, name: "Health Insurance" },
    { img: family, name: "Family Insurance" },
    { img: fire, name: "Fire Insurance" },
    { img: material, name: "Material Insurance" },
  ];

  return (
    <>
      {/* ===== Insurance Section ===== */}
      <section className="relative bg-white rounded-2xl mx-4 sm:mx-8 md:mx-10 mt-16 shadow-xl py-16 overflow-hidden">
        
        {/* Background Gradient Blurs */}
        {/* <div className="absolute top-10 right-10 w-60 h-60 bg-purple-400/25 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300/25 rounded-full blur-[100px]"></div> */}

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center font-pops text-indigo-900 mb-10">
            Our Insurance Plans
          </h2>

          {/* ✅ Auto-fit responsive grid */}
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5 sm:gap-6">
            {insurances.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-12 w-12 mb-3 object-contain"
                />
                <p className="text-center font-pops text-sm sm:text-base font-semibold text-indigo-900 leading-tight">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="mt-20 px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 font-pops text-indigo-900">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "Janardan Insurance helped me find the best car insurance at the lowest rate!",
              name: "Rakesh Sharma",
            },
            {
              text: "The team is supportive and makes the process easy.",
              name: "Rahul Maheshwari",
            },
            {
              text: "Their service is professional and responsive.",
              name: "Pradeep Sharma",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                "{item.text}"
              </p>
              <p className="mt-4 font-semibold text-indigo-900 text-sm sm:text-base">
                – {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Insurances;




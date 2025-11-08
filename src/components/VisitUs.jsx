// // src/components/VisitUs.jsx
// import React from "react";

// /*
//   Replace the imports below with your SVG/PNG icons.
//   Example:
//     import PhoneIcon from "../assets/phone.svg";
//     import EmailIcon from "../assets/email.svg";
//     import LocationIcon from "../assets/location.svg";
//     import HoursIcon from "../assets/hours.svg";
// */
// import PhoneIcon from "../assets/phone.png";      // <-- replace
// import EmailIcon from "../assets/email.png";      // <-- replace
// import LocationIcon from "../assets/location.png";// <-- replace
// import HoursIcon from "../assets/hours.png";      // <-- replace

// function VisitUs() {
//   const addressLine1 = "Janardan Insurance";
//   const addressLine2 = "8, Dhanraj Complex, Opp. Ambica Petrol Pump, Sarkhej";
//   const cityStateZip = "Bavla Road, Sarkhej, Ahmedabad - 382210.";
//   const phone = "+91 99792 83940";
//   const email = "janardaninsurance2002@gmail.com";
//   const hours = "Mon - Sat: 9:30 AM - 6:30 PM";

//   // Example google maps embed — replace MAP_EMBED_URL with the real embed URL you get from Google Maps.
//   // To get embed url: open Google Maps -> search address -> Share -> Embed a map -> copy iframe src
//   const MAP_EMBED_URL =
//   "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3673.169466443582!2d72.4909710753126!3d22.980794979203154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU4JzUwLjkiTiA3MsKwMjknMzYuOCJF!5e0!3m2!1sen!2sin!4v1761994997377!5m2!1sen!2sin";


//   // Optional direct "open in maps" link (desktop/mobile) - encodes address for directions
//   const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//     `${addressLine1} ${addressLine2} ${cityStateZip}`
//   )}`;

//   return (
//     <section className="container mx-auto px-10 mt-20">
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* LEFT - Contact details */}
//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-sky-700 font-pops mb-6">Visit Us / Contact</h2>
//             <p className="text-gray-700 mb-6 leading-relaxed">
//               Have questions or want a personalised plan? Visit our office or reach out — we’re happy to help.
//             </p>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-4">
//                 <div className="bg-sky-50 p-3 rounded-lg shadow-sm">
//                   <img src={PhoneIcon} alt="Phone" className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Call Us</p>
//                   <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-lg font-semibold text-gray-800 hover:text-sky-600">
//                     {phone}
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <div className="bg-sky-50 p-3 rounded-lg shadow-sm">
//                   <img src={EmailIcon} alt="Email" className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <a href={`mailto:${email}`} className="text-lg font-semibold text-gray-800 hover:text-sky-600">
//                     {email}
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <div className="bg-sky-50 p-3 rounded-lg shadow-sm">
//                   <img src={LocationIcon} alt="Location" className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <address className="not-italic text-lg font-semibold text-gray-800">
//                     {addressLine1}<br />
//                     {addressLine2}<br />
//                     {cityStateZip}
//                   </address>
//                 </div>
//               </li>

//               <li className="flex items-start gap-4">
//                 <div className="bg-sky-50 p-3 rounded-lg shadow-sm">
//                   <img src={HoursIcon} alt="Hours" className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Office Hours</p>
//                   <p className="text-lg font-semibold text-gray-800">{hours}</p>
//                 </div>
//               </li>
//             </ul>

//             <div className="mt-6 flex gap-3">
//               <a
//                 href={googleMapsDirections}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-sky-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
//               >
//                 Get Directions
//               </a>
//               <a
//                 href={`mailto:${email}`}
//                 className="inline-block border border-sky-600 text-sky-600 px-5 py-3 rounded-full font-semibold hover:bg-sky-50 transition"
//               >
//                 Email Us
//               </a>
//             </div>
//           </div>

//           {/* RIGHT - Map (and optionally repeat basic contact info) */}
//           <div className="md:p-8 p-4 flex flex-col gap-4">
//             <div className="rounded-xl overflow-hidden shadow-sm flex-1">
//               {/* Replace MAP_EMBED_URL with your Google Maps embed src */}
//               <iframe
//                 title="Janardan Insurance location"
//                 src={MAP_EMBED_URL}
//                 width="100%"
//                 height="100%"
//                 className="min-h-[260px] md:min-h-[360px] w-full border-0"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>

//             {/* Optional compact contact card under map */}
//             <div className="bg-sky-50 p-4 rounded-lg shadow-inner">
//               <p className="text-sm text-gray-600">Office</p>
//               <p className="font-semibold text-gray-800">{addressLine1}</p>
//               <p className="text-sm text-gray-600">{addressLine2}</p>
//               <p className="text-sm text-gray-600">{cityStateZip}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VisitUs;




// src/components/VisitUs.jsx



// import React from "react";
// import PhoneIcon from "../assets/phone.png";
// import EmailIcon from "../assets/email.png";
// import LocationIcon from "../assets/location.png";
// import HoursIcon from "../assets/hours.png";

// function VisitUs() {
//   const addressLine1 = "Janardan Insurance";
//   const addressLine2 = "8, Dhanraj Complex, Opp. Ambica Petrol Pump, Sarkhej";
//   const cityStateZip = "Bavla Road, Sarkhej, Ahmedabad - 382210.";
//   const phone = "+91 99792 83940";
//   const email = "janardaninsurance@gmail.com";
//   const hours = "Mon - Sat: 9:30 AM - 6:30 PM";

//   const MAP_EMBED_URL =
//     "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3673.169466443582!2d72.4909710753126!3d22.980794979203154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU4JzUwLjkiTiA3MsKwMjknMzYuOCJF!5e0!3m2!1sen!2sin!4v1761994997377!5m2!1sen!2sin";

//   const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//     `${addressLine1} ${addressLine2} ${cityStateZip}`
//   )}`;

//   return (
//     <section id="visit" className="container mx-auto px-4 sm:px-10 mt-24 font-pops">
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//         {/* LEFT - Contact Info */}
//         <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4 md:mb-6 text-center md:text-left">
//             Visit Us / Contact
//           </h2>

//           <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center md:text-left">
//             Have questions or want a personalised plan? Visit our office or reach out — we’re happy to help.
//           </p>

//           <ul className="space-y-4">
//             <li className="flex items-start gap-3">
//               <div className="bg-sky-50 p-2 rounded-lg shadow-sm flex-shrink-0">
//                 <img
//                   src={PhoneIcon}
//                   alt="Phone"
//                   className="h-5 w-5 sm:h-6 sm:w-6 object-contain block"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-500">Call Us</p>
//                 <a
//                   href={`tel:${phone.replace(/\s+/g, "")}`}
//                   className="text-sm sm:text-base font-semibold text-gray-800 hover:text-sky-600 break-words"
//                 >
//                   {phone}
//                 </a>
//               </div>
//             </li>

//             <li className="flex items-start gap-3">
//               <div className="bg-sky-50 p-2 rounded-lg shadow-sm flex-shrink-0">
//                 <img
//                   src={EmailIcon}
//                   alt="Email"
//                   className="h-5 w-5 sm:h-6 sm:w-6 object-contain block"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-500">Email</p>
//                 <a
//                   href={`mailto:${email}`}
//                   className="text-sm sm:text-base font-semibold text-gray-800 hover:text-sky-600 break-words"
//                 >
//                   {email}
//                 </a>
//               </div>
//             </li>

//             <li className="flex items-start gap-3">
//               <div className="bg-sky-50 p-2 rounded-lg shadow-sm flex-shrink-0">
//                 <img
//                   src={LocationIcon}
//                   alt="Location"
//                   className="h-5 w-5 sm:h-6 sm:w-6 object-contain block"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-500">Address</p>
//                 <address
//                   className="not-italic text-sm sm:text-base font-semibold text-gray-800 leading-snug break-words whitespace-normal"
//                 >
//                   {addressLine1}
//                   <br />
//                   {addressLine2}
//                   <br />
//                   {cityStateZip}
//                 </address>
//               </div>
//             </li>

//             <li className="flex items-start gap-3">
//               <div className="bg-sky-50 p-2 rounded-lg shadow-sm flex-shrink-0">
//                 <img
//                   src={HoursIcon}
//                   alt="Hours"
//                   className="h-5 w-5 sm:h-6 sm:w-6 object-contain block"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs sm:text-sm text-gray-500">Office Hours</p>
//                 <p className="text-sm sm:text-base font-semibold text-gray-800">{hours}</p>
//               </div>
//             </li>
//           </ul>

//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <a
//               href={googleMapsDirections}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-sky-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-sky-700 transition text-center"
//             >
//               Get Directions
//             </a>
//             <a
//               href={`mailto:${email}`}
//               className="border border-sky-600 text-sky-600 px-5 py-3 rounded-full font-semibold hover:bg-sky-50 transition text-center"
//             >
//               Email Us
//             </a>
//           </div>
//         </div>

//         {/* RIGHT - Map */}
//         <div className="md:w-1/2 bg-sky-100">
//           <div className="w-full h-[260px] sm:h-[320px] md:h-[420px]">
//             <iframe
//               title="Janardan Insurance location"
//               src={MAP_EMBED_URL}
//               width="100%"
//               height="100%"
//               className="w-full h-full border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* compact contact summary under map for small screens (optional) */}
//           <div className="p-4 md:p-6 bg-sky-50">
//             <p className="text-sm text-gray-600">Office</p>
//             <p className="font-semibold text-gray-800 text-sm sm:text-base">{addressLine1}</p>
//             <p className="text-xs sm:text-sm text-gray-600">{addressLine2}</p>
//             <p className="text-xs sm:text-sm text-gray-600">{cityStateZip}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VisitUs;







import React from "react";
import PhoneIcon from "../assets/phone.png";
import EmailIcon from "../assets/email.png";
import LocationIcon from "../assets/location.png";
import HoursIcon from "../assets/hours.png";

function VisitUs() {
  const addressLine1 = "Janardan Insurance";
  const addressLine2 = "8, Dhanraj Complex, Opp. Ambica Petrol Pump, Sarkhej";
  const cityStateZip = "Bavla Road, Sarkhej, Ahmedabad - 382210.";
  const phone = "+91 99792 83940";
  const email = "janardaninsurance@gmail.com";
  const hours = "Mon - Sat: 9:30 AM - 6:30 PM";

  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3673.169466443582!2d72.4909710753126!3d22.980794979203154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU4JzUwLjkiTiA3MsKwMjknMzYuOCJF!5e0!3m2!1sen!2sin!4v1761994997377!5m2!1sen!2sin";

  const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${addressLine1} ${addressLine2} ${cityStateZip}`
  )}`;

  return (
    <section id="visit" className="container mx-auto px-4 sm:px-10 mt-24 font-pops">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-full">

        {/* Background Blur Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/25 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300/25 rounded-full blur-[100px]"></div>

        {/* LEFT - Contact Info */}
        <div className="relative z-10 p-6 sm:p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center md:text-left">
            Visit Us / Contact
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center md:text-left">
            Have questions or want a personalised plan? Visit our office or reach out — we’re happy to help.
          </p>

          <ul className="space-y-5">
            {[
              { icon: PhoneIcon, label: "Call Us", value: phone, link: `tel:${phone.replace(/\s+/g, "")}` },
              { icon: EmailIcon, label: "Email", value: email, link: `mailto:${email}` },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="bg-white shadow-md border border-gray-100 p-3 rounded-xl flex-shrink-0">
                  <img src={item.icon} alt={item.label} className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <a href={item.link} className="text-base font-semibold text-blue-900 hover:text-purple-600 transition">
                    {item.value}
                  </a>
                </div>
              </li>
            ))}

            {/* Address */}
            <li className="flex items-start gap-4">
              <div className="bg-white shadow-md border border-gray-100 p-3 rounded-xl flex-shrink-0">
                <img src={LocationIcon} alt="Location" className="h-6 w-6 object-contain" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Address</p>
                <address className="not-italic text-base font-semibold text-blue-900 leading-snug">
                  {addressLine1} <br /> {addressLine2} <br /> {cityStateZip}
                </address>
              </div>
            </li>

            {/* Hours */}
            <li className="flex items-start gap-4">
              <div className="bg-white shadow-md border border-gray-100 p-3 rounded-xl flex-shrink-0">
                <img src={HoursIcon} alt="Hours" className="h-6 w-6 object-contain" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Office Hours</p>
                <p className="text-base font-semibold text-blue-900">{hours}</p>
              </div>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:opacity-90 transition"
            >
              Get Directions
            </a>
            <a
              href={`mailto:${email}`}
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-purple-50 transition"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* RIGHT - Map (Full Height Fix ✅) */}
        <div className="relative md:w-1/2 flex">
          <iframe
            title="Janardan Insurance location"
            src={MAP_EMBED_URL}
            className="w-full h-full min-h-[300px] md:min-h-[100%] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VisitUs;

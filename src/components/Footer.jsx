// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white mt-24 shadow-inner font-pops">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">

//         {/* Left Side - Brand Info */}
//         <div className="md:w-1/3">
//           <h2 className="text-2xl sm:text-3xl font-semibold">Janardan Insurance</h2>
//           <p className="text-sm sm:text-base mt-2 opacity-90 leading-snug">
//             Protecting what matters most — with trust and transparency.
//           </p>
//         </div>

//         {/* Center - Social Links */}
//         <div className="flex justify-center space-x-6 md:space-x-8">
//           {/* Facebook */}
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-80 transition"
//             aria-label="Facebook"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 sm:w-7 sm:h-7"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.32 1.37-3.6 3.48-3.6.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7.03C18.34 21.25 22 17.09 22 12.07Z" />
//             </svg>
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-80 transition"
//             aria-label="Instagram"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 sm:w-7 sm:h-7"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.75-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
//             </svg>
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-80 transition"
//             aria-label="LinkedIn"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 sm:w-7 sm:h-7"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.75-2.2C20.33 8 22 10 22 13.4V24h-4v-9.2c0-2.2-.78-3.7-2.75-3.7-1.5 0-2.4 1-2.8 2-.15.36-.2.86-.2 1.37V24h-4V8Z" />
//             </svg>
//           </a>

//           {/* Twitter */}
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-80 transition"
//             aria-label="Twitter"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 sm:w-7 sm:h-7"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.93-4.28 4.29 0 .34.04.68.11 1A12.15 12.15 0 0 1 3.15 5.1a4.28 4.28 0 0 0-.58 2.16c0 1.48.75 2.78 1.9 3.54a4.24 4.24 0 0 1-1.94-.53v.05c0 2.06 1.46 3.78 3.4 4.18a4.25 4.25 0 0 1-1.12.15c-.27 0-.55-.03-.81-.08a4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.38-.01-.56A8.74 8.74 0 0 0 22.46 6Z" />
//             </svg>
//           </a>
//         </div>

//         {/* Right Side - Copyright */}
//         <div className="md:w-1/3 text-sm sm:text-base opacity-90">
//           <p>© {new Date().getFullYear()} Janardan Insurance</p>
//           <p className="opacity-80">All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";

function Footer() {
  return (
    <footer className="mt-32 font-pops bg-indigo-800 text-white shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 text-center md:text-left">

        {/* Brand Info */}
        <div className="md:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-bold">Janardan Insurance</h2>
          <p className="text-sm sm:text-base mt-2 text-purple-100 leading-snug">
            Protecting what matters most — with trust and transparency.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 md:space-x-8">
          {[
            { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
            { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
            { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
            { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-110 transition transform"
              aria-label={item.label}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 sm:w-8 sm:h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* ICON PATHS */}
                {item.icon === "facebook" && (
                  <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.32 1.37-3.6 3.48-3.6.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7.03C18.34 21.25 22 17.09 22 12.07Z" />
                )}
                {item.icon === "instagram" && (
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.75-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                )}
                {item.icon === "linkedin" && (
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.75-2.2C20.33 8 22 10 22 13.4V24h-4v-9.2c0-2.2-.78-3.7-2.75-3.7-1.5 0-2.4 1-2.8 2-.15.36-.2.86-.2 1.37V24h-4V8Z" />
                )}
                {item.icon === "twitter" && (
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.36 0-4.28 1.93-4.28 4.29 0 .34.04.68.11 1A12.15 12.15 0 0 1 3.15 5.1a4.28 4.28 0 0 0-.58 2.16c0 1.48.75 2.78 1.9 3.54a4.24 4.24 0 0 1-1.94-.53v.05c0 2.06 1.46 3.78 3.4 4.18a4.25 4.25 0 0 1-1.12.15c-.27 0-.55-.03-.81-.08a4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.38-.01-.56A8.74 8.74 0 0 0 22.46 6Z" />
                )}
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="md:w-1/3 text-sm sm:text-base text-purple-100">
          <p>© {new Date().getFullYear()} Janardan Insurance</p>
          <p className="opacity-80">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react'
// import logo from "../assets/logo.png";

// function NavBar() {
//   return (
//     <div>
// <div className='flex justify-between p-1.5 pr-12 pl-12 bg-white items-center wrap-normal'>
//   <div className='flex gap-2 items-center'>
//     <h1 className='font-pops font-medium text-xl'>JanardanInsurance</h1>
//     <img src={logo} alt="Logo" className=' h-12 w-12' />
//   </div>
// <ul className=' flex gap-3 text-xl font-pops '>
//         <li>Home</li>
//         <li>Services</li>
//         <li>About Us</li>
//         <li>Contact Us</li>
//       </ul>
// </div>
      
//     </div>
//   )
// }

// export default NavBar

// import React from 'react';
// import logo from "../assets/logo.png";

// function NavBar() {
//   return (
//     <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
//       {/* Left side logo */}
//       <div className="flex items-center space-x-3">
//         <h1 className="text-2xl font-pops font-medium text-gray-800">JanardanInsurance</h1>
//         <img src={logo} alt="Logo" className="h-10 w-auto" />
//       </div>

//       {/* Center links */}
//       <ul className="flex space-x-8 text-lg font-medium text-gray-800">
//         <li className=" font-pops cursor-pointer">Home</li>
//         <li className=" font-pops  cursor-pointer">Services</li>
//         <li className="font-pops  cursor-pointer">About Us</li>
//         <li className=" font-pops  cursor-pointer">Contact Us</li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

// import React from "react";
// import logo from "../assets/logo.png";

// function NavBar() {
//   return (
//     <nav className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white shadow-md  px-10 py-4 flex justify-between items-center">
//       {/* Left side: Logo + name */}
//       {/* <div className="flex items-center gap-3">
//         <img src={logo} alt="Logo" className="h-10 w-10 object-contain drop-shadow-md" />
//         <h1 className="text-2xl font-bold font-pops tracking-wide">
//           Janardan<span className="text-sky-100">Insurance</span>
//         </h1>
//       </div> */}

// <div className="flex items-center gap-3">
//   <div className="bg-white p-2 rounded-full shadow-md">
//     <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
//   </div>
//   <h1 className="text-2xl font-bold font-pops tracking-wide">
//     Janardan<span className="text-sky-100">Insurance</span>
//   </h1>
// </div>


//       {/* Right side: Menu links */}
//       <ul className="flex gap-8 font-pops text-lg">
//         <li className="hover:text-sky-100 cursor-pointer transition">Home</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Services</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">About</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Contact</li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;




// import React, { useState } from "react";
// import logo from "../assets/logo.png";

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white shadow-md px-6 md:px-10 py-4 flex justify-between items-center relative">
//       {/* Left: Logo + Name */}
//       <div className="flex items-center gap-3">
//         <div className="bg-white p-2 rounded-full shadow-md">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300"
//           />
//         </div>
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-pops tracking-wide transition-all duration-300">
//           Janardan<span className="text-sky-100">Insurance</span>
//         </h1>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-8 font-pops text-lg">
//         <li className="hover:text-sky-100 cursor-pointer transition">Home</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Services</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">About</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Contact</li>
//       </ul>

//       {/* Hamburger Icon for Mobile */}
//       <button
//         className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span
//           className={`block w-full h-0.5 bg-white transform transition duration-300 ${
//             menuOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-full h-0.5 bg-white transition duration-300 ${
//             menuOpen ? "opacity-0" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-full h-0.5 bg-white transform transition duration-300 ${
//             menuOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         ></span>
//       </button>

//       {/* Animated Dropdown Menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-sky-600 text-center overflow-hidden transition-all duration-500 ease-in-out md:hidden z-20 shadow-lg ${
//           menuOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
//         }`}
//       >
//         <ul className="space-y-3">
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Home</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Services</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">About</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;



// import React, { useState } from "react";
// import logo from "../assets/logo.png";

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//    const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white shadow-md px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative overflow-visible z-50">
//       {/* Left: Logo + Name */}
//       <div className="flex items-center gap-3">
//         <div className="bg-white p-2 rounded-full shadow-md">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain transition-all duration-300"
//           />
//         </div>
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-pops tracking-wide transition-all duration-300">
//           Janardan<span className="text-sky-100">Insurance</span>
//         </h1>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden lg:flex gap-10 font-pops text-lg">
//         <li className="hover:text-sky-100 cursor-pointer transition">Home</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Services</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">About</li>
//         <li className="hover:text-sky-100 cursor-pointer transition">Contact</li>
//       </ul>

//       {/* Hamburger */}
//       <button
//         className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span
//           className={`block w-full h-0.5 bg-white transform transition duration-300 ${
//             menuOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-full h-0.5 bg-white transition duration-300 ${
//             menuOpen ? "opacity-0" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-full h-0.5 bg-white transform transition duration-300 ${
//             menuOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         ></span>
//       </button>

//       {/* Dropdown */}
//       <div
//         className={`absolute top-full left-0 w-full bg-sky-600 text-center overflow-hidden transition-all duration-500 ease-in-out lg:hidden shadow-lg ${
//           menuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
//         }`}
//       >
//         <ul className="space-y-3 font-pops text-lg">
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Home</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Services</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">About</li>
//           <li className="hover:bg-sky-500 py-2 cursor-pointer transition">Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;





import React, { useState } from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    // <nav className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-400 text-white shadow-md px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative overflow-visible z-50">
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 text-white shadow-md px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative overflow-visible z-50">


      {/* Left: Logo + Name */}
      <div
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="bg-white p-2 rounded-full shadow-md">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain transition-all duration-300"
          />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-pops tracking-wide transition-all duration-300">
          Janardan<span className="text-sky-100">Insurance</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10 font-pops text-lg">
        <li
          onClick={() => scrollToSection("home")}
          className="hover:text-sky-100 cursor-pointer transition"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("services")}
          className="hover:text-sky-100 cursor-pointer transition"
        >
          Services
        </li>
        <li
          onClick={() => scrollToSection("about")}
          className="hover:text-sky-100 cursor-pointer transition"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="hover:text-sky-100 cursor-pointer transition"
        >
          Contact
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-full h-0.5 bg-white transform transition duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-white transition duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-white transform transition duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 text-center overflow-hidden transition-all duration-500 ease-in-out lg:hidden shadow-lg ${
          menuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="space-y-3 font-pops text-lg">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:bg-sky-500 py-2 cursor-pointer transition"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className="hover:bg-sky-500 py-2 cursor-pointer transition"
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:bg-sky-500 py-2 cursor-pointer transition"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:bg-sky-500 py-2 cursor-pointer transition"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;










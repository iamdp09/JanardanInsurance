// import React from "react";

// function ContactForm() {
//   return (
//     <section id="contact" className="container mx-auto px-4 sm:px-10 mt-20 mb-20 font-pops">
//       <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center justify-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
//           Contact Us
//         </h2>

//         <form
//           className="w-full max-w-lg bg-sky-50 p-6 sm:p-8 rounded-xl shadow-inner flex flex-col space-y-5"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//               required
//             />
//           </div>

//           <textarea
//             rows="5"
//             placeholder="Your Message"
//             className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition text-sm sm:text-base"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;


// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';

// function ContactForm() {
//   const form = useRef();
//   const [isSending, setIsSending] = useState(false);
//   const [sent, setSent] = useState(false);
//   const [error, setError] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setSent(false);
//     setError("");

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ from .env
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✅ from .env
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✅ from .env
//       )
//       .then(
//         () => {
//           setIsSending(false);
//           setSent(true);
//           form.current.reset();
//         },
//         (err) => {
//           setIsSending(false);
//           setError("❌ Failed to send. Please try again later.");
//           console.error(err);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="container mx-auto px-4 sm:px-10 mt-20 mb-20 font-pops"
//     >
//       <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center justify-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
//           Contact Us
//         </h2>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="w-full max-w-lg bg-blue-50 p-6 sm:p-8 rounded-xl shadow-inner flex flex-col space-y-5"
//         >
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               name="from_name"
//               placeholder="Your Name"
//               className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//               required
//             />
//             <input
//               type="email"
//               name="from_email"
//               placeholder="Your Email"
//               className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//               required
//             />
//           </div>

//           <textarea
//             rows="5"
//             name="message"
//             placeholder="Your Message"
//             className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={isSending}
//             className={`bg-sky-600 text-white py-3 rounded-lg font-semibold transition text-sm sm:text-base ${
//               isSending
//                 ? "opacity-70 cursor-not-allowed"
//                 : "hover:bg-sky-700 hover:shadow-md"
//             }`}
//           >
//             {isSending ? "Sending..." : "Send Message"}
//           </button>

//           {sent && (
//             <p className="text-green-600 text-center font-pops">
//               ✅ Message sent successfully!
//             </p>
//           )}
//           {error && (
//             <p className="text-red-600 text-center font-pops">{error}</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;




import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSent(false);
    setError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✅ from .env
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✅ from .env
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
        },
        (err) => {
          setIsSending(false);
          setError("❌ Failed to send. Please try again later.");
          console.error(err);
        }
      );
  };

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-10 mt-20 mb-20 font-pops">
      <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center overflow-hidden">
        {/* Decorative blurred gradients */}
        <div className="pointer-events-none absolute -top-8 -right-8 w-64 h-64 bg-purple-400/25 rounded-full blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-300/25 rounded-full blur-[100px]" />

        <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
          Contact Us
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-5"
        >
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              autoComplete="name"
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-sm sm:text-base placeholder:text-gray-400"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              autoComplete="email"
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-sm sm:text-base placeholder:text-gray-400"
              required
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-sm sm:text-base placeholder:text-gray-400"
            required
          ></textarea>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white text-sm sm:text-base transition ${
                isSending
                  ? "opacity-80 cursor-not-allowe bg-indigo-500"
                  : " bg-indigo-600 hover:opacity-90 shadow-md"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            <span className="text-xs text-gray-500">
              We’ll get back within 24 hours.
            </span>
          </div>

          {/* Status messages */}
          <div role="status" aria-live="polite" className="min-h-6">
            {sent && (
              <p className="text-green-600 text-center font-medium mt-1">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 text-center font-medium mt-1">{error}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

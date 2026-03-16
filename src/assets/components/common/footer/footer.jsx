import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  Home,
  Info,
  Calendar,
  Book,
  UserPlus,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StylizedFooter() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
          style={parallaxStyle}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>

      {/* Footer Section */}
      <footer className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-95"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-amber-400"
              style={{
                width: `${Math.random() * 150 + 80}px`,
                height: `${Math.random() * 150 + 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full px-6 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:justify-between md:gap-8">
              {/* Logo and Conference Info */}
              <div className="md:w-2/5 mb-8 md:mb-0">
                <div className="flex flex-col justify-start items-start gap-y-6">
                  <div className="group bg-white backdrop-blur-md border-2 border-amber-400 p-6 rounded-3xl hover:bg-amber-400 transition-all duration-300">
                    <img
                      src="/images/logo/ceradalogo.webp"
                      className="h-20 w-20"
                      alt="Cerada Logo"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-y-3">
                    <h1 className="font-black text-white text-xl leading-tight">
                      2<sup>nd</sup> Asia Pacific Conference on Engineering,
                      Education, Social Science and Humanities (APCEESH-2026)
                    </h1>
                    <p className="text-amber-300 font-semibold">
                      <span className="text-amber-400 font-black">Theme:</span>{" "}
                      " Redefining Futures through Education, Technology and
                      Social Progress for Global Sustainability"
                    </p>
                    <p className="text-blue-100 font-semibold">
                      <span className="text-amber-400 font-black">
                        Organized by:
                      </span>{" "}
                      Confworld Educational Research and Development Association
                    </p>
                  </div>
                </div>
              </div>

              {/* Links Grid */}
              <div className="md:w-3/5 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {/* Navigation Links */}
                <div>
                  <h3 className="text-amber-400 font-black text-lg mb-4 tracking-wider">
                    NAVIGATION
                  </h3>
                  <ul className="space-y-3 text-blue-100 font-semibold">
                    <li className="group">
                      <a
                        href="/"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <Home className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="/about-apceesh"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <Info className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>About</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="/session-tracks-call-for-papers"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <Calendar className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Session</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="/abstract-full-paper-submission"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <Book className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Paper Submission</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="/registration-fees"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <UserPlus className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Registration</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-amber-400 font-black text-lg mb-4 tracking-wider">
                    CONNECT
                  </h3>
                  <ul className="space-y-3 text-blue-100 font-semibold">
                    <li className="group">
                      <a
                        href="https://www.facebook.com/people/Confworld-Educational-Research-and-Development-Association/61560894663027/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-400 group-hover:scale-110 transition-transform"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="https://www.youtube.com/@Confworld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-400 group-hover:scale-110 transition-transform"
                        >
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0 A2 2 0 0 1 21.5 7 a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0 A2 2 0 0 1 2.5 17" />
                          <path d="m10 15 5-3-5-3z" />
                        </svg>
                        <span>Youtube</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="https://www.instagram.com/infoconfworld/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-400 group-hover:scale-110 transition-transform"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="https://x.com/infoconfworld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <FaXTwitter className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-400 group-hover:scale-110 transition-transform"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li className="group">
                      <a
                        href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 hover:text-amber-400 transition-colors duration-300"
                      >
                        <FaWhatsapp className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span>Whatsapp</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-amber-400 font-black text-lg mb-4 tracking-wider">
                    CONTACT
                  </h3>
                  <ul className="space-y-4 text-blue-100 font-semibold">
                    <li className="flex items-start gap-x-3">
                      <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <span>+91 8072381719</span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                      <span>info@cerada.in</span>
                    </li>
                  </ul>

                  {/* Organizer Address */}
                  <div className="mt-6 bg-white/10 backdrop-blur-md border-2 border-amber-400 p-4 rounded-2xl hover:bg-amber-400/10 transition-all duration-300">
                    <h3 className="text-amber-400 font-black text-sm mb-2 tracking-wider flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      ORGANIZER ADDRESS
                    </h3>
                    <div className="text-xs text-blue-100 leading-relaxed">
                      No.147/383A, Second Floor, Paper Mills Road, Peravallur,
                      Chennai-600082, Tamil Nadu, India.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t-2 border-amber-400/30">
              <div className="text-center">
                <span className="text-blue-100 font-semibold">
                  © 2026{" "}
                  <a
                    href="https://confworld.org/"
                    className="text-amber-400 font-black hover:text-amber-300 transition-colors"
                  >
                    CERADA
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
        `}</style>
      </footer>
    </div>
  );
}

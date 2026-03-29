import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                    SUNRISE
                  </span>
                  <span className="text-2xl font-bold text-white">&</span>
                  <span className="text-2xl font-black text-white">CO.</span>
                </div>
                <div className="text-[10px] tracking-[0.25em] font-semibold text-amber-400/80 uppercase mt-[-4px]">
                  Build. Power. Connect.
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Powering Progress. Building Tomorrow. — Integrated solutions for a
              sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-400 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-amber-400 transition">
                  About Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Construction Services</span>
              </li>
              <li>
                <span className="text-gray-400">Solar Energy Solutions</span>
              </li>
              <li>
                <span className="text-gray-400">International Trade</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@sunriseco.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 21 111 786 123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            © {currentYear} Sunrise & Co. All rights reserved. | Build. Power.
            Connect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

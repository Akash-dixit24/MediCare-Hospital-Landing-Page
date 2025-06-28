import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Header from "./Header";

const Footer = () => {
  return (
    <div className="bg-[#f2f9ff] ">
        <Header />
        <footer className="bg-[#f2f9ff] py-10 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-blue-600 text-xl">
          <a
            href="#"
            className="bg-white rounded-full p-3 shadow hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-white rounded-full p-3 shadow hover:scale-110 transition"
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            className="bg-white rounded-full p-3 shadow hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">©2023 · 01118Q</p>
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;



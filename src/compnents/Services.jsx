import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaTooth,
  FaLungs,
  FaBrain,
  FaClipboard,
} from "react-icons/fa";

const iconMap = {
  FaTooth: <FaTooth size={150} />,
  FaLungs: <FaLungs size={150} />,
  FaBrain: <FaBrain size={150} />,
  FaClipboard: <FaClipboard size={150} />,
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("/services.json")
      .then((res) => setServices(Array.isArray(res.data) ? res.data : res.data.services))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <section
      id="services"
      className="bg-[#f2f9ff] py-20 px-6 md:px-12 text-center"
    >
      <h2 className="text-5xl font-semibold text-blue-900 mb-4">Our Services</h2>
      <p className="text-center text-gray-700 font-sans font-normal text-[20px] leading-[39px] max-w-2xl mx-auto mb-12">
  We provide the most full medical services, so every person could have
  the opportunity to receive qualitative medical help.
</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-[360px] transition-all duration-300 rounded-2xl px-6 py-10 cursor-pointer shadow-md bg-white text-blue-700 hover:text-white"
          >
            {/* Blur Overlay on Hover */}
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-80 hover:text-white backdrop-blur-sm transition-all duration-300 rounded-2xl z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="mb-4 text-4xl">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-3xl font-semibold hover:text-white mt-7">{service.title}</h3>

              <p className="mt-6 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LEARN MORE <span className="text-lg">→</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

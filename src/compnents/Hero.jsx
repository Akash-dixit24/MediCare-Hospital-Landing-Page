import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#f2f9ff] px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* First Child: Hero Content */}
        <div className="max-w-xl">
          <h3 className="text-black text-3xl font-bold mb-6">
            Welcome to MediCare+ Clinic
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold text-[#003B79] leading-tight mb-6">
            Best Specialists
          </h1>

          <p className="text-[20px] text-gray-700 mb-10 leading-relaxed">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row sm:justify-start gap-6">
            <a
              href="#appointment"
              className="bg-blue-600 text-lg text-white px-6 py-3 rounded-full transition hover:bg-blue-700"
            >
              Make an Appointment
            </a>
            <a
              href="#departments"
              className="text-lg text-black px-6 py-3 rounded-full border border-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Departments
            </a>
          </div>
        </div>

        {/* Second Child: Styled Box */}
        <div className="w-[574px] h-[672px] rounded-[32px] bg-[#EBEEFF] mt-10 md:mt-0"></div>
      </div>
    </section>
  );
};

export default Hero;

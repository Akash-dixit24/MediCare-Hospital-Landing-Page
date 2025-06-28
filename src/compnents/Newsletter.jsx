import React from "react";

const Newsletter = () => {
  return (
    <div>
    <section id="news" className="py-20 px-6 text-white w-[100%] bg-[#f2f9ff] ">
      {/* Outer Container to center inner box */}
      <div className="h-[400px] mx-auto bg-[#007BFF] rounded-[20px] flex flex-col items-center text-center px-6 w-[100%]">
        {/* Title & Subtitle */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 mt-10">
          Subscribe to Newsletter
        </h2>
        <p className="mb-6 text-white/90 mt-7">
          We have a wide experience in experience design and strategy,
        </p>

        {/* Inner white box with input and button */}
        <div className="w-full max-w-[846px] h-[100px] bg-white rounded-[10px] flex items-center px-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 text-gray-700 text-2xl outline-none bg-transparent placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-[#007BFF] hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full transition-all"
          >
            Send Now
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Newsletter;

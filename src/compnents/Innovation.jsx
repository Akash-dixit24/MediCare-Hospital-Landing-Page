import React from "react";
import AmbulanceImg from "../assets/AmbulanceImg.png";
import NurseImg from "../assets/NurseImg.png";
import AssistanceImg from "../assets/AssistanceImg.png";

const Innovation = () => {
  const cardData = [
    { title: "Qualified Doctors", img: NurseImg },
    { title: "Emergency Care", img: AmbulanceImg },
    { title: "24/7 Assistance", img: AssistanceImg },
  ];

  return (
    <section id="about" className="bg-[#f2f9ff] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-bold text-[#003B79]">
            Clinic With Innovative
          </h2>
          <p className="text-gray-700 text-[20px] leading-[32px] max-w-md mx-auto md:mx-0">
            We provide the most full medical services, so every person could
            have the opportunity to receive qualitative medical help.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-8 rounded-full transition-all mt-2">
            Learn More
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="group bg-white w-[282px] h-[350px] p-2 rounded-[20px] shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
            >
              {/* Zoom Image */}
              <div className=" w-[250px] h-[270px] ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-200"
                />
              </div>
              <h3 className="text-center text-[#003B79] text-xl font-semibold">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;

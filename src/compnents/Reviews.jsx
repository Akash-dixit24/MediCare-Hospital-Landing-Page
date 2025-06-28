import React from "react";

const reviews = [
  {
    name: "Jacqueline Asong",
    role: "Patient",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "I wanted to thank everyone at this facility for the quality of care and compassion they showed during my stay.",
  },
  {
    name: "Patrícia Ribeiro",
    role: "Patient",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "I wanted to thank everyone at this facility for the quality of care and compassion they showed during my stay.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#f2f9ff] py-20 px-6 md:px-12 text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#003B79] mb-4">
        What Our Customers Say
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white relative p-8 rounded-[20px] shadow-md text-left"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 right-2 bg-blue-600 w-14 h-14 text-white text-3xl rounded-full flex items-center justify-center">
              “
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 leading-relaxed mt-6 text-[18px]">{review.text}</p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[#003B79] font-bold w-[200px] mt-2 text-x">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
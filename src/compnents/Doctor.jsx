import React, { useEffect, useState } from "react";
import axios from "axios";

const doctorData = [
  {
    name: "Dr. Awaatif Al",
    specialty: "Dental Care",
  },
  {
    name: "Dr. Filipa Gaspar",
    specialty: "Cardiology",
  },
  {
    name: "Dr. Sukhmeet Gorae",
    specialty: "Neurological",
  },
  {
    name: "Dr. Siri Jakobsson",
    specialty: "Pediatrics",
  },
];

const Doctors = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => {
        const fetchedImages = res.data.data
          .map((item) => item.image)
          .filter((img) => img)
          .slice(0, 4); // only take first 4 images
        setImages(fetchedImages);
      })
      .catch((err) => console.error("Failed to load doctor images:", err));
  }, []);

  return (
    <section  id="departments" className="bg-[#f2f9ff] py-20 px-6 md:px-12 text-center">
      {/* Section Heading */}
      <h2 className="text-5xl font-semibold text-[#003B79] mb-10">
        We Have The Best Specialist
      </h2>
      <p className="text-gray-600 text-[18px] max-w-xl mx-auto mb-12">
        We have a wide experience in experience design and strategy,
        with locally-rooted knowledge.
      </p>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {doctorData.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-md overflow-hidden flex flex-col items-center"
          >
            {/* Doctor Image */}
            <div className="w-full h-[300px] bg-[#AED3E2]">
              {images[index] && (
                <img
                  src={images[index]}
                  alt={doc.name}
                  className="w-full h-full object-cover rounded-t-[20px]"
                />
              )}
            </div>

            {/* Info */}
            <div className="py-6 w-full text-center">
              <h3 className="text-lg font-bold text-[#003B79]">
                {doc.name}
              </h3>
              <p className="text-gray-600 mt-1">{doc.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;

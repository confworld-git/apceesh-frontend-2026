import React from "react";

export default function AcademicPartnerCard() {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-bl from gray-50 to gray-100   rounded-xl shadow-md overflow-hidden my-8">
      <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 text-center">
                  Academic Partner
          </h2>
      {/* Logo Section */}
      <div className="flex justify-center items-center p-8">
        <img
          src="./images/edu.jpeg"
          alt="Edulogic Research Foundation"
          className="max-h-40 object-contain"
        />
      </div>

      {/* Bottom Title Bar */}
      <div className="bg-blue-800 text-white text-center py-3">
        <p className="font-semibold text-base">
          Edulogic International Academic Research Education, India
        </p>
      </div>

    </div>
  );
}

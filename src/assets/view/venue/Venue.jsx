import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../commonhero/common-hero";

const Venue = () => {
  // Placeholder images for Kuala Lumpur
  // You can replace these with your actual image paths later
  const klImages = [
    {
      src: "/images/venue/bangkok 1.webp",
      alt: "",
    },
    { src: "/images/venue/bangkok 2.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 3.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 4.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 5.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 6.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 7.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 8.webp", alt: "", title: "" },
    { src: "/images/venue/bangkok 9.webp", alt: "", title: "" },
  ];

  return (
    <section className="">
      <Hero
              title="Our Venue"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/17.webp"
            />
            <section className="relative py-4 px-4 w-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      

      {/* Decorative shapes/blobs for background flair */}
      

      <div className="w-full relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          
          
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 pt-2">
                  Bangkok, Thailand
                </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in">
            Experience the vibrant culture, modern marvels, and natural beauty
            of Thailand's capital city.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {klImages.map((image, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" // Fixed height for uniformity
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                {/* <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Kuala Lumpur Insight {index + 1}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default Venue;

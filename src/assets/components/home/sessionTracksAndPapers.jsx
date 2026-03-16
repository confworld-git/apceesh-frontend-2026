import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

export default function SessionAndPapers() {
  const conferenceSessions = [
  {
    id: "emerging",
    title: "Session 1: Emerging Trends in Engineering",
    cover: "/images/session/session 1.webp",
    
  },
  {
    id: "educational",
    title: "Session 2: Current Educational Research",
    cover: "/images/session/session 2.webp",
    
  },
  {
    id: "social",
    title:
      "Session 3: Social Science",
    cover: "/images/session/session 3.webp",
    
  },
  {
    id: "humanities",
    title:
      "Session 4: Humanities",
    cover: "/images/session/session 4.webp",
    
  },
  {
    id: "economics",
    title: "Session 5: Economics, Finance, HRM and Marketing",
    cover: "/images/session/session 5.webp",
    
  },
  
];
  return (
    <div className="flex justify-center py-8">
      <div className="w-full mx-4 ">
        
        <h2 className="text-3xl md:text-5xl text-center font-black text-blue-900 mb-6">
                  Session Tracks / Call for Papers
        </h2>
        <h4 className="text-center text-[var(--color-primary)]">
          <b>Call for Submissions:</b> Topics of interest include, but are not
          limited to:
        </h4>
        <p className="text-center my-5 ">
          Explore the diverse and dynamic session tracks at APCEESH-2026! We
          have curated a rich blend of educational and interdisciplinary
          presentations designed to inspire innovation and foster collaboration.
          Join us to engage with cutting-edge research and vibrant discussions
          spanning a wide spectrum of life sciences and healthcare topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conferenceSessions.map(({ id, cover,title }, index) => (
            <a
              key={index}
              href={`/session-tracks-call-for-papers`}
              className="block"
            >
              <img
                className="rounded-xl hover:scale-110 duration-500 w-full h-auto object-cover"
                src={cover}
                alt={title}
                title={title}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Target,
  Zap,
  Globe2,
  Sparkles,
  CircuitBoard,
  BookOpen,
  Network,
  Leaf,
  Users2,
} from "lucide-react";
import Hero from "../commonhero/common-hero.jsx";

// Hero Component
// export function Hero() {
//   return (
//     <div className="bg-blue-800 text-white py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center space-y-8">
//           <div className="inline-block px-6 py-2 bg-amber-400 text-blue-900 rounded-full mb-4">
//             <span className="font-bold text-sm tracking-wide">ASIA PACIFIC CONFERENCE 2025</span>
//           </div>

//           <h1 className="text-7xl md:text-8xl font-black tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
//             APCEESH
//           </h1>

//           <p className="text-xl md:text-2xl font-medium text-amber-400 max-w-3xl mx-auto">
//             Engineering · Education · Social Science · Humanities
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// About Component
export function About() {
  return (
    <div className="py-6 px-4 bg-white">
      <div className="w-full">
        <div className="mb-">
          <p className="text-lg text-gray-700 leading-relaxed w-full">
            A premier interdisciplinary platform bringing together global
            scholars, researchers, and policymakers to explore innovative ideas
            and foster collaboration for unprecedented challenges. APCEESH
            serves as a dynamic forum for exploring innovative ideas and
            fostering collaboration to address global challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

// Conference Theme Component
export function ConferenceTheme() {
  return (
    <div className="pb-4 px-4 bg-white">
      <div className="w-full">
        <div className="">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-amber-400" />
            <span className="text-sm font-bold text-amber-400 tracking-widest uppercase">
              Conference Theme
            </span>
          </div>

          <p className="text-2xl  font-bold text-blue-800 mb-6">
            Redefining Futures Through Education, Technology and Social Progress
            for Global Sustainability
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            APCEESH emphasizes the critical need to innovate and collaborate
            across disciplines to address pressing global challenges. By
            integrating advancements with insights from social sciences and
            humanities, we inspire solutions that promote sustainability, equity
            and progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="bg-blue-800 p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Empowering individuals with knowledge and skills to drive
              innovation and inclusivity
            </p>
          </div>
          <div className="bg-amber-400 p-8 text-blue-900">
            <h3 className="text-2xl font-bold mb-4">Technology</h3>
            <p className="text-sm leading-relaxed">
              Harnessing advancements to create solutions for sustainability and
              efficiency
            </p>
          </div>
          <div className="bg-blue-800 p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Social Progress</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Cultivating equity, cultural understanding and resilience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// What Sets Apart Component
export function WhatSetsApart() {
  return (
    <div className="py-8 px-4 mt-4 bg-amber-400">
      <div className="w-full mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl font-black text-blue-900 mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          What Sets APCEESH Apart?
        </h2>

        <p className="text-2xl md:text-3xl font-medium text-blue-900 leading-relaxed mb-8">
          APCEESH creates a collaborative and inclusive environment where ideas
          flourish, partnerships are built and actionable strategies for a
          sustainable future emerge. Together, we can redefine futures!
        </p>
      </div>
    </div>
  );
}

// Objectives Component
export function Objectives() {
  const [activeObjective, setActiveObjective] = useState(null);

  const objectives = [
    {
      icon: Network,
      title: "Promote Interdisciplinary Collaboration",
      description:
        "Bridge gaps between diverse disciplines to develop integrated approaches for complex global issues.",
    },
    {
      icon: Zap,
      title: "Encourage Innovation and Research",
      description:
        "Showcase groundbreaking studies and practices that contribute to education, technology and social progress.",
    },
    {
      icon: Leaf,
      title: "Foster Sustainable Development",
      description:
        "Align discussions and initiatives with the United Nations Sustainable Development Goals (SDGs).",
    },
    {
      icon: Globe2,
      title: "Engage Global Audiences",
      description:
        "Provide an inclusive platform for sharing diverse perspectives from across the Asia-Pacific region and beyond.",
    },
  ];

  return (
    <div className="py-8 px-4 bg-white">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2
            className="text-4xl md:text-5xl font-black text-blue-800 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Driving change through focused action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => {
            const Icon = obj.icon;
            const isActive = activeObjective === i;

            return (
              <div
                key={i}
                className={`p-8 border-4 transition-all cursor-pointer ${
                  isActive
                    ? "bg-white border-gray-200 hover:border-blue-800"
                    : "bg-amber-400 border-blue-800"
                }`}
                onClick={() => setActiveObjective(isActive ? null : i)}
                onMouseEnter={() => setActiveObjective(i)}
                onMouseLeave={() => setActiveObjective(null)}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 ${
                      isActive ? "bg-blue-800" : "bg-amber-400"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        isActive ? "text-white" : "text-blue-900"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        isActive ? "text-blue-900" : "text-blue-800"
                      }`}
                    >
                      {obj.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        isActive ? "text-blue-900" : "text-gray-700"
                      }`}
                    >
                      {obj.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Focus Areas Component
export function FocusAreas() {
  const [hoveredFocus, setHoveredFocus] = useState(null);

  const focusAreas = [
    { title: "Engineering and Technological Innovations", icon: CircuitBoard },
    { title: "Education for Sustainable Development", icon: BookOpen },
    { title: "Social Sciences and Humanities", icon: Users2 },
    { title: "Sustainability and Environmental Stewardship", icon: Leaf },
    { title: "Interdisciplinary Research and Collaboration", icon: Network },
  ];

  return (
    <div className="py-8 px-4 ">
      <div className="w-full">
        <div className="mb-8">
          <h2
            className="text-4xl md:text-5xl font-black text-blue-800 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Key Focus Areas
          </h2>
          <p className="text-lg text-gray-600">
            Interdisciplinary topics aligned with sustainability and progress
          </p>
        </div>

        <div className="space-y-4">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            const isHovered = hoveredFocus === i;

            return (
              <div
                key={i}
                className={`p-8 border-4 transition-all cursor-pointer ${
                  isHovered
                    ? "bg-white border-gray-200 hover:border-blue-800"
                    : "bg-blue-800 border-amber-400"
                }`}
                onMouseEnter={() => setHoveredFocus(i)}
                onMouseLeave={() => setHoveredFocus(null)}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`p-4 ${
                      isHovered ? "bg-amber-400" : "bg-blue-800"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        isHovered ? "text-blue-900" : "text-white"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-bold ${
                      isHovered ? "text-blue-800" : "text-white"
                    }`}
                  >
                    {area.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Call to Action Component

// Main Component - Use any combination of components you want
export default function APCEESHConference() {
  return (
    <div className=" bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
      `}</style>
      <Hero
        title="About APCEESH"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/1.webp"
      />
      <About />
      <ConferenceTheme />
      <WhatSetsApart />
      <Objectives />
      <FocusAreas />
    </div>
  );
}

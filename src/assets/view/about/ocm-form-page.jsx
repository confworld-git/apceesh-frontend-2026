import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaCog,
  FaUserTie,
  FaFlask,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import OCMform from "./OCMForm";
import AOS from "aos";
import Hero from "../commonhero/common-hero";
import "aos/dist/aos.css";

const OCMFormPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCommittee, setSelectedCommittee] = useState("organizing");
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const target = document.getElementById("OCMform");
    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(!entry.isIntersecting),
        { threshold: 0.3 }
      );
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const roles = [
    { name: "Strategic Guidance", desc: "Offering expert advice to guide CERADA's direction." },
    { name: "Conference Planning", desc: "Assisting in the development of conference themes and selection of speakers." },
    { name: "Review and Feedback", desc: "Reviewing research submissions and providing constructive feedback." },
    { name: "Abstract/Full Paper Review", desc: "Evaluating submissions and ensuring alignment with the conference theme." },
    { name: "Networking", desc: "Facilitating connections with other researchers and professionals." },
    { name: "Outreach", desc: "Promoting CERADA's initiatives and recruiting new members and participants." },
    { name: "Mentorship", desc: "Supporting young researchers and professionals in their academic growth." },
    { name: "Planning and Coordination", desc: "Assisting with the overall event organization, including venue logistics, agenda setting and speaker arrangements." },
    { name: "Promotion", desc: "Engaging in marketing and outreach to attract participants and speakers." },
    { name: "Onsite Management", desc: "Facilitating sessions, guiding attendees and managing any technical issues during the hybrid event." },
    { name: "Post-Conference Tasks", desc: "Ensuring the publication of proceedings and addressing feedback." },
  ];

  const qualifications = [
    {
      id: "organizing",
      title: "Organizing Committee",
      icon: <FaCog className="w-8 h-8" />,
      color: "blue",
      list: ["Doctorates with over 10 years of professional experience", "Keynote speakers in at least 5 international conferences", "CEOs/Managing Directors/Deans/Principals", "Research Experts"],
      description: "Their responsibilities include selecting the conference venue, deciding on institutional and media partners and identifying potential co-hosts. They also have the authority to choose keynote speakers, appoint program chairs and determine session topics.",
    },
    {
      id: "advisory",
      title: "Advisory Committee",
      icon: <FaUserTie className="w-8 h-8" />,
      color: "amber",
      list: ["Dean/Director/Principal with a doctorate", "Professors/HODs with 10+ years of experience", "Associate Professors/Assistant Professor/Senior Lecturers with 5+ years of experience", "Industrial Professionals with 8+ years of experience", "Professionals from the host country"],
      description: "The committee works closely with other teams to maintain the event schedule, assist with hospitality and registration and coordinate venue setup. They also ensure that the conference environment is well-prepared and runs smoothly.",
    },
    {
      id: "scientific",
      title: "Scientific Committee",
      icon: <FaFlask className="w-8 h-8" />,
      color: "blue",
      list: ["Dean/Director/Principal with a Doctorate", "Should be an Editorial Board Member of a Prestigious Journal", "Must be an experienced Reviewer", "Should have served on a review committee for 10+ international conferences"],
      description: "The Scientific Committee consists of three subcommittees: the Review Committee, Technical Committee and Editorial Committee. It plays a key role in setting important dates for the upcoming 2025 educational conference, managing paper submissions, developing the final program and evaluating abstracts for acceptance.",
    },
    {
      id: "hospitality",
      title: "Hospitality Committee",
      icon: <FaHandsHelping className="w-8 h-8" />,
      color: "amber",
      list: ["Dean/Director/Principal with a Doctorate", "Professor/HODs with 10+ years of Experience", "Associate Professor/Assistant Professor/Senior Lecturer with 5+ years of Experience", "Industrial Professionals with 8+ years of Experience", "Professionals from the host country"],
      description: "They provide conference venue details, share the organization's background and address specific participant inquiries. Volunteers are allocated with assisting in hospitality, registration, venue setup and conference activities on a rotating schedule.",
    },
  ];

  const selectedQual = qualifications.find(q => q.id === selectedCommittee);

  return (
    <div className="min-h-screen bg-white">
      
      <Hero
        title="OCM Form "
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/5.webp"
      />
     
      {/* Key Responsibilities Section - SIMPLE LIST */}
      <section className="py-8 px-4 ">
        <div className="">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  Key Responsibilities
                </h2>
            <p className="text-lg text-gray-600">Essential duties of our organizing committee members</p>
          </div>

          <div className="bg-blue-100 rounded-2xl shadow-xl border-2 border-blue-800/20 p-8 md:p-12">
            <ul className="space-y-5">
              {roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <BsCheckCircleFill className="text-amber-400 w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-1">{role.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{role.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Committee Qualifications - SIDEBAR (Desktop) / ACCORDION (Mobile) */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="">
          <div className="text-center mb-">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Committee Qualifications
            </h1>
            <p className="text-lg text-amber-100">Explore requirements for each committee</p>
          </div>

          {/* Desktop Layout - Sidebar */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Left sidebar - Committee selector */}
            <div className="lg:col-span-1 space-y-3">
              {qualifications.map((qual) => (
                <button
                  key={qual.id}
                  onClick={() => setSelectedCommittee(qual.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedCommittee === qual.id
                      ? qual.color === 'blue'
                        ? 'bg-amber-400 text-blue-900 shadow-xl scale-105'
                        : 'bg-white text-blue-900 shadow-xl scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedCommittee === qual.id
                        ? 'bg-blue-900/10'
                        : 'bg-white/10'
                    }`}>
                      {qual.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">{qual.title}</h3>
                    </div>
                    {selectedCommittee === qual.id && (
                      <FaArrowRight className="text-sm" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right content area - Details */}
            <div className="lg:col-span-3">
              {selectedQual && (
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
                    <div className={`p-4 rounded-xl ${
                      selectedQual.color === 'blue'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-600'
                    }`}>
                      {selectedQual.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">{selectedQual.title}</h2>
                      <p className="text-gray-600 mt-1">Requirements and responsibilities</p>
                    </div>
                  </div>

                  {/* Two column layout */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                        <div className={`w-1.5 h-8 rounded-full ${
                          selectedQual.color === 'blue' ? 'bg-blue-800' : 'bg-amber-400'
                        }`}></div>
                        Requirements
                      </h3>
                      <div className="space-y-4">
                        {selectedQual.list.map((item, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-md ${
                              selectedQual.color === 'blue'
                                ? 'bg-blue-800'
                                : 'bg-amber-400'
                            } text-white flex items-center justify-center text-xs font-bold mt-0.5`}>
                              {i + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                        <div className={`w-1.5 h-8 rounded-full ${
                          selectedQual.color === 'blue' ? 'bg-blue-800' : 'bg-amber-400'
                        }`}></div>
                        Responsibilities
                      </h3>
                      <div className={`p-6 rounded-xl ${
                        selectedQual.color === 'blue'
                          ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
                          : 'bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200'
                      }`}>
                        <p className="text-gray-700 leading-relaxed">{selectedQual.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout - Accordions */}
          <div className="lg:hidden space-y-4">
            {qualifications.map((qual) => (
              <div key={qual.id} className="relative">
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveAccordion(activeAccordion === qual.id ? null : qual.id)}
                  className={`w-full flex items-center justify-between p-6 rounded-t-2xl transition-all duration-300 ${
                    activeAccordion === qual.id
                      ? qual.color === 'blue'
                        ? 'bg-amber-400 text-blue-900 shadow-xl'
                        : 'bg-white text-blue-900 shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20 shadow-md'
                  } ${activeAccordion !== qual.id ? 'rounded-b-2xl' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      activeAccordion === qual.id
                        ? 'bg-blue-900/10'
                        : 'bg-white/10'
                    }`}>
                      {qual.icon}
                    </div>
                    <h3 className="text-xl font-bold text-left">{qual.title}</h3>
                  </div>
                  <FaChevronDown
                    className={`text-xl transition-transform duration-300 ${
                      activeAccordion === qual.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {activeAccordion === qual.id && (
                  <div className="bg-white rounded-b-2xl p-6 shadow-xl">
                    <div className="space-y-6">
                      {/* Requirements */}
                      <div>
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                          <div className={`w-1.5 h-6 rounded-full ${
                            qual.color === 'blue' ? 'bg-blue-800' : 'bg-amber-400'
                          }`}></div>
                          Requirements
                        </h3>
                        <div className="space-y-3">
                          {qual.list.map((item, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <div className={`flex-shrink-0 w-6 h-6 rounded-md ${
                                qual.color === 'blue'
                                  ? 'bg-blue-800'
                                  : 'bg-amber-400'
                              } text-white flex items-center justify-center text-xs font-bold mt-0.5`}>
                                {i + 1}
                              </div>
                              <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                          <div className={`w-1.5 h-6 rounded-full ${
                            qual.color === 'blue' ? 'bg-blue-800' : 'bg-amber-400'
                          }`}></div>
                          Responsibilities
                        </h3>
                        <div className={`p-4 rounded-xl ${
                          qual.color === 'blue'
                            ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
                            : 'bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200'
                        }`}>
                          <p className="text-gray-700 leading-relaxed text-sm">{qual.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="OCMform" className="py-4 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  Ready to Join?
                </h2>
            <p className="text-xl text-gray-600">Submit your application to become a committee member</p>
          </div>

          <OCMform />
        </div>
      </section>

      {/* Floating Apply Button */}
      {isVisible && (
        <a
          href="#OCMform"
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
        >
          <span>APPLY NOW</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      )}
    </div>
  );
};

export default OCMFormPage;
import React, { useEffect } from "react";
import Proceedings from "../../components/home/proceedingsPublications";
import Hero from "../commonhero/common-hero";


import { Helmet } from "react-helmet";

export default function Publication() {
  

  const plagiarism_policy_ethics = [
    {
      title: "Plagiarism Check",
      image: "/images/publication/pag_check.webp",
      list: [
        "Every submission undergoes a plagiarism check using Crossref Similarity Check, which is powered by iThenticate.",
        "This ensures that all articles submitted to the conference are original and free from plagiarism.",
      ],
    },
    {
      title: "Review Process",
      image: "/images/publication/review.webp",
      list: [
        "Submissions that pass the plagiarism check are sent to the scientific committee for review.",
        "Any submission found to be plagiarized at any stage will be automatically rejected.",
      ],
    },
  ];

  return (
    <section>
      <Hero
                    title="Publication"
                    breadcrumbs={[{ label: "Home", link: "#" }]}
                    backgroundImage="/images/commonhero/10.webp"
      />
      <section>
      

      {/* Hero Header Section - Light and Clean */}
      <div className="relative bg-white py-8 ">
        <div className="w-full px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            

            
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
                  Publication of Presented Research
          </h2>
            
            
           
            <p className="text-lg text-gray-600 ">
              Multiple avenues to share your groundbreaking research with the global academic community
            </p>
          </div>
        </div>
      </div>

      {/* Publication Options - Modernized Cards */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-4 px-4">
        <div className="">
          

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Conference Proceedings Card */}
            <div
              
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-800 to-amber-400"></div>
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-amber-50">
                <img
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                  src="/images/publication/book.webp"
                  alt="Conference Proceedings"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ISBN Included
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">
                    Conference Proceedings
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  All accepted and registered abstracts will be published in the
                  Conference Proceedings with an <span className="font-semibold text-blue-800">ISBN Number</span>, 
                  ensuring your work is properly catalogued and accessible.
                </p>

                {/* Feature List */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Fast publication timeline
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Permanent archival
                  </div>
                </div>
              </div>
            </div>

            {/* Journal Publication Card */}
            <div
              
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-blue-800"></div>
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-50 to-blue-50">
                <img
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  src="/images/publication/journal1.png"
                  alt="Journal Publication"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  High Impact
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">
                    Journal Publication
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Publish your high-quality paper in various <span className="font-semibold text-blue-800">Web of Science, Scopus</span>,
                  and other internationally indexed journals, maximizing the
                  visibility and impact of your research worldwide.
                </p>

                {/* Feature List */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    International indexing
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Peer-reviewed excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Journals Component */}
      <Proceedings />

      {/* Plagiarism & Publication Ethics - Light Background */}
      <div className="relative">
        <div className="w-full px-4 pb-8">
          <div className="text-center mb-8" >
            

            
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
                  Plagiarism Policy & Publication Ethics
          </h2>
            
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-blue-800">
                2<sup>nd</sup> Asia Pacific Conference on Engineering, Education, Social Science and Humanities (APCEESH-2026)
              </span>{" "}
              maintains the highest standards of academic integrity with stringent anti-plagiarism policies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plagiarism_policy_ethics.map(
              ({ title, list, image }, main_index) => (
                <div
                  key={main_index}
                  
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Decorative Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
                  
                  {/* Header with Image */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 border-b-2 border-amber-400">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <img
                          className="relative w-40 h-40 object-cover rounded-2xl bg-white  shadow-lg border-2 border-blue-800"
                          src={image}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-800 text-center mt-6">
                        {title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-white">
                    <ul className="space-y-4">
                      {list.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center shadow-md">
                              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>

          
        </div>
      </div>
    </section>
    </section>
    
  );
}
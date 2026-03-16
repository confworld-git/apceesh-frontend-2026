import React, { useState, useEffect } from 'react';

export default function WhyJoinUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reasons = [
    {
      title: "Make a Global Impact",
      description: "Contribute to critical discussions on education, technology and social progress, shaping solutions for global sustainability.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
      color: "from-blue-800 to-blue-900"
    },
    {
      title: "Share Your Expertise",
      description: "Present your research to an international audience and receive valuable feedback from experts across diverse fields.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="16" r="2" fill="currentColor" />
        </svg>
      ),
      color: "from-amber-400 to-amber-500"
    },
    {
      title: "Learn from Visionaries",
      description: "Gain insights from keynote speeches, workshops and discussions led by renowned leaders and innovators.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      color: "from-blue-800 to-blue-900"
    },
    {
      title: "Build Interdisciplinary Networks",
      description: "Connect with academics, practitioners and industry leaders to create cross-sector collaborations that drive impactful change.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <path d="M8.5 7.5l7 0M15.5 8.5l-3 8M9.5 8.5l3 8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      color: "from-amber-400 to-amber-500"
    },
    {
      title: "Discover New Ideas",
      description: "Explore the latest trends, groundbreaking research and innovative practices shaping the future of sustainability and global progress.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      color: "from-blue-800 to-blue-900"
    },
    {
      title: "Advance Your Career",
      description: "Enhance your knowledge, gain recognition for your work and open doors to new opportunities in academia, industry and policymaking.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M3 20l4-4m0 0l4 4m-4-4V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 4l-4 4m0 0l-4-4m4 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
      color: "from-amber-400 to-amber-500"
    },
    {
      title: "Be Part of a Sustainability Movement",
      description: "Align your work with the Sustainable Development Goals (SDGs) and contribute to building a more equitable and sustainable future.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" fillOpacity="0.1" />
          <path d="M7 12l3-3 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: "from-blue-800 to-blue-900"
    },
    {
      title: "Cultural Exchange",
      description: "Experience the diversity of the Asia-Pacific region, fostering a deeper understanding of global perspectives and cultures.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" />
          <circle cx="7" cy="17" r="1.5" fill="currentColor" />
          <circle cx="17" cy="17" r="1.5" fill="currentColor" />
        </svg>
      ),
      color: "from-amber-400 to-amber-500"
    }
  ];

  return (
    <section className="relative bg-white pb-8 px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      
      <div className="relative z-10 ">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block ">
            <div className="relative">
              
              <h2 className="text-3xl md:text-5xl text-center font-black text-blue-900 mb-6">
                  Why Join Us?
              </h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Join APCEESH to <span className="font-semibold text-blue-800">collaborate</span>, <span className="font-semibold text-amber-500">innovate</span> and <span className="font-semibold text-blue-800">redefine futures</span> for a better tomorrow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur group-hover:blur-md"
                style={{
                  background: `linear-gradient(135deg, ${reason.color.includes('blue') ? '#1e40af' : '#fbbf24'}, ${reason.color.includes('blue') ? '#1e3a8a' : '#f59e0b'})`
                }}
              ></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 h-full transition-all duration-500 group-hover:transform group-hover:-translate-y-2 border-2 border-transparent group-hover:border-blue-800/20 shadow-lg group-hover:shadow-2xl">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} p-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <div className="text-white">
                      {reason.icon}
                    </div>
                  </div>
                  
                  
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-black text-blue-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">
                    {reason.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
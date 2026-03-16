import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Mail, Clock, Users, Briefcase, MessageCircle, Globe } from "lucide-react";

import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    AOS.refresh();
  }, []);

  const contactCards = [
    {
      icon: Briefcase,
      title: "Academic Partnership, Sponsorship & Promotion",
      name: "Ms. Suhana S",
      mobile: "+91 8610656424",
      email: "collaboration@confworld.org",
      gradient: "from-blue-800 to-blue-900",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Users,
      title: "APCEESH Queries - Contact Person 1",
      name: "Ms. Aishwarya S",
      mobile: "+91 8072381719",
      email: "info@cerada.in",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
    },
    {
      icon: MessageCircle,
      title: "APCEESH Queries - Contact Person 2",
      name: "Ms. Malathy G",
      mobile: "+91 6383055014",
      email: "info@cerada.in",
      gradient: "from-blue-700 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
    },
  ];

  const infoCards = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Available during business hours",
      detail: "+91 8610656424",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Quick response guaranteed",
      detail: "info@confworld.org",
    },
    {
      icon: Globe,
      title: "Visit Website",
      description: "Explore our services and offerings",
      detail: "www.confworld.org",
    },
    
  ];

  return (
    <section className="bg-white">
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        
        <div className="relative  mx-auto px-4 md:px-6 py-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-aos="fade-right" className="text-white">
              <div className="inline-flex items-center gap-2 bg-amber-400 px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-5 h-5 text-blue-900" />
                <span className="text-blue-900 font-semibold">Let's Connect</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Partner with <span className="text-amber-400">CERADA</span> Today
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover how CERADA sponsorship can benefit your organization. We look forward to partnering with you and creating a memorable and impactful experience at the CERADA International Conference.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-400 rounded-lg mt-1">
                    <Briefcase className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400 mb-1">Explore Opportunities</h3>
                    <p className="text-blue-100">Customized sponsorship and exhibition packages tailored to your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-400 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-amber-400 mb-1">Get in Touch</h3>
                    <p className="text-blue-100">
                      Reach out at{" "}
                      <a
                        href="mailto:collaboration@confworld.org"
                        className="text-amber-400 hover:text-amber-300 underline font-semibold transition"
                      >
                        collaboration@confworld.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPopup(true)}
                className="group relative bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Ask Enquiries
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Image Section */}
            <div data-aos="fade-left" className="relative">
              <div className="absolute -inset-4 bg-amber-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20">
                <img
                  src="/images/contactus/support.webp"
                  alt="Connect with our international conference team"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-amber-500 p-6 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <p className="text-blue-900 font-bold text-3xl">24/7</p>
                    <p className="text-blue-900 font-semibold text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className=" mx-auto px-4 -mt-12 relative z-10 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-amber-400 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                      <p className="text-blue-800 font-semibold text-sm">{card.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className=" mx-auto px-4 py-8 pt-10 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-up">
          
          
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  Get in Touch with Our Team
                </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Reach out to our dedicated team members for specific inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 transition-all duration-500 h-full">
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${card.gradient}`}></div>
                  
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-br ${card.bgGradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative flex justify-center">
                      <div className={`p-6 bg-gradient-to-br ${card.gradient} rounded-2xl shadow-2xl`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-blue-900 text-center mb-6 min-h-[3rem] flex items-center justify-center">
                      {card.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <Users className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Name</p>
                          <p className="text-base font-bold text-blue-900">{card.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                        <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Mobile</p>
                          <a href={`tel:${card.mobile}`} className="text-base font-bold text-blue-900 hover:text-amber-600 transition">
                            {card.mobile}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <Mail className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Email</p>
                          <a
                            href={`mailto:${card.email}`}
                            className="text-base font-bold text-blue-900 hover:text-amber-600 transition break-all"
                          >
                            {card.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${card.gradient}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className=" ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <Contactform />
          </div>
        </div>
      </div>

      
      {/* Enquiry Popup */}
      {popup && <Enquiry setPopup={setPopup} />}
    </section>
  );
};

export default Contactus;
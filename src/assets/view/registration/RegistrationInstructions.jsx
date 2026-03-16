import React from 'react';
import { Mail, FileText, Edit, Send, AlertCircle, Clock, Users, Upload } from 'lucide-react';
import Hero from '../commonhero/common-hero';

export default function ConferenceRegistration() {
  const steps = [
    {
      title: "Payment",
      description: "Complete your payment for the conference",
      icon: "💳",
      image: "/images/registration-instructions/payment.webp"
    },
    {
      title: "Download Registration Form",
      description: "After making your payment, download the Registration Form",
      icon: "📥",
      image: "/images/registration-instructions/download-form.webp"
    },
    {
      title: "Fill Out the Form",
      description: "Complete all required fields in the Registration Form",
      icon: "✍️",
      image: "/images/registration-instructions/fill-form.webp"
    },
    {
      title: "Submit Registration",
      description: "Email the filled-out Registration Form along with your payment information to info@cerada.in",
      icon: "📧",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop"
    }
  ];

  const guidelines = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Payment Notification",
      description: "Registered members must inform us about their payments immediately via E-mail."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Proof of Payment",
      description: "After completing registration, every participant is required to email a scanned copy of the registration fee receipt or transaction proof to us immediately."
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Paper Submission",
      description: "No modifications to the paper will be accepted after the final submission date."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Author Limit",
      description: "Only one author and one co-author are allowed per registration."
    },  
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Late Registration",
      description: "If you need to register after the deadlines, please contact the coordinator as soon as possible."
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Form Submission",
      description: "After making your payment, download the Registration Form, fill it out and email it to us at info@cerada.in along with your payment information."
    }
  ];

  return (
    <section className="">
       <Hero
                                title="Registration Instructions"
                                breadcrumbs={[{ label: "Home", link: "#" }]}
                                backgroundImage="/images/commonhero/13.webp"
                  />
                  <div className="min-h-screen bg-white">
      
      {/* Simple Steps Section */}
      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  Simple Steps to Register
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-amber-400 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative border */}
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-800 mb-2">Important:</h4>
              <p className="text-gray-700">
                Please be aware that the payee is solely responsible for all associated bank charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Essential Guidelines Section */}
      <div className=" pb-8">
        <div className=" px-4">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                   Essential Registration Guidelines
                </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-800 hover:border-amber-400"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-amber-400 text-blue-800 p-3 rounded-lg">
                    {guideline.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-12 bg-blue-800 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-amber-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Note:</h4>
                <p className="text-blue-100">
                  The payee remains responsible for all bank charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
    </section>
    
  );
}
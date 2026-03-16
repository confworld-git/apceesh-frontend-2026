import React from 'react';
import { CheckCircle, FileText, CreditCard, Mail, ArrowRight } from 'lucide-react';

export default function RegistrationSteps() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Preferred Admittance Category",
      description: "Select the registration type that best suits your participation needs",
      icon: CheckCircle,
      image: "/images/reg-steps/admittance.webp"
    },
    {
      number: 2,
      title: "Enter Your Details in the Form",
      description: "Fill out your personal and professional information accurately",
      icon: FileText,
      image: "/images/reg-steps/enter.webp"
    },
    {
      number: 3,
      title: "Proceed to Payment Gateway",
      description: "Complete your registration fee through our secure payment system",
      icon: CreditCard,
      image: "/images/reg-steps/payment.webp"
    },
    {
      number: 4,
      title: "Get Your Conference Invitation",
      description: "Receive your official conference invitation and confirmation",
      icon: Mail,
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 px-4">
      <div className="px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 mb-4">
            Registration Steps
          </h1>
          <p className="text-xl text-blue-100">
            Follow these simple steps to complete your conference registration
          </p>
        </div>

        {/* Steps with Arrows */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-4">
           {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="w-full lg:w-72 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={step.image}   
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-amber-400 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-900" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-amber-400 font-bold text-sm">STEP {step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow between cards (not after last card) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-shrink-0">
                    <ArrowRight className="w-8 h-8 text-amber-400" strokeWidth={3} />
                  </div>
                )}

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden my-4">
                    <ArrowRight className="w-8 h-8 text-amber-400 rotate-90" strokeWidth={3} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        
      </div>
    </div>
  );
}
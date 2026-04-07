import React from 'react';
import { Calendar, FileText, CheckCircle, Send } from 'lucide-react';

export default function SubmissionDeadlines() {
  const deadlines = [
    {
      title: 'Early Bird Registration',
      date: '31',
      suffix: 'st',
      month: 'May 2026',
      icon: Calendar,
    },
    {
      title: 'Abstract Submission',
      date: '14',
      suffix: 'th',
      month: 'Sep 2026',
      icon: Send,
    },
    {
      title: 'Full Paper Submission',
      date: '20',
      suffix: 'th',
      month: 'Sep 2026',
      icon: FileText,
    },
    {
      title: 'Final Registration',
      date: '20',
      suffix: 'th',
      month: 'Sep 2026',
      icon: CheckCircle,
    },
  ];

  return (
    <div className=" bg-white py-6 px-4 pb-12">
      <div className="">
        {/* Header */}
        <div className="text-center ">
          
           <h2 className="text-3xl md:text-5xl text-center font-black text-blue-900 mb-6">
                  Submission Deadlines
        </h2>
          <p className="text-xl text-gray-600 pb-4">
            Secure your spot – Mark your calendar!
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-blue-800/20" 
               style={{ top: '4rem' }}></div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {deadlines.map((deadline, index) => {
              const Icon = deadline.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 rounded-full border-4 border-white z-10"></div>

                  {/* Card */}
                  <div className="bg-white border-4 border-blue-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="bg-blue-800 text-white p-6 text-center">
                      <h3 className="text-lg font-bold mb-3 min-h-[3.5rem] flex items-center justify-center">
                        {deadline.title}
                      </h3>
                      <div className="flex justify-center">
                        <Icon className="w-12 h-12" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Date Section */}
                    <div className="bg-white p-8 text-center">
                      <div className="mb-2">
                        <span className="text-7xl font-bold text-amber-500">
                          {deadline.date}
                        </span>
                        <span className="text-3xl font-bold text-amber-400 align-top">
                          {deadline.suffix}
                        </span>
                      </div>
                      <p className="text-xl font-semibold text-blue-800">
                        {deadline.month}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline Indicator */}
        <div className="md:hidden flex justify-center mt-12 space-x-2">
          {deadlines.map((_, index) => (
            <div key={index} className="w-3 h-3 bg-blue-800 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="bg-white  p-6 max-w-md w-full mx-auto mt-2">
        {/* Title */}
        {/* <h2 className="text-xl font-semibold mb-2">{title}</h2> */}

        {/* Description */}
        {/* <p className="text-gray-600 mb-6">{description}</p> */}

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/abstract-full-paper-submission"
            className="flex-1 text-center !text-white py-2 rounded-lg bg-blue-800 hover:opacity-90 transition"
          >
            Submit Paper
          </a>

          <a
            href="/registration-fees"
            className="flex-1 text-center !text-blue-800 py-2 rounded-lg bg-amber-400 hover:opacity-90 transition"
          >
            Register Now
          </a>
        </div>
        
      </div>
    </div>
  );
}
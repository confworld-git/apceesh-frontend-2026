import React, { useRef, useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toaster } from "evergreen-ui";
import axios from "axios";
import { User, Mail, Phone, Clock, FileText, MessageSquare, HelpCircle, Send } from "lucide-react";

const Enquiry = ({ setPopup }) => {
  const EnquiryRef = useRef();

  // Prevent body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const HandleEnquiryData = async (e) => {
    e.preventDefault();
    const formData = new FormData(EnquiryRef.current);
    const EnquiryData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/enquiry`,
        EnquiryData
      );
      if (response) {
        EnquiryRef.current.reset();
        setPopup(false);
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toaster.danger("Something's Wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={() => setPopup(false)}
      ></div>

      {/* Slide Panel */}
      <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl animate-slideInRight overflow-hidden flex flex-col">
        {/* Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 p-6">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-2 bg-amber-400 px-4 py-1 rounded-full">
                <FileText className="w-4 h-4 text-blue-900" />
                <span className="text-blue-900 font-semibold text-sm">Quick Enquiry</span>
              </div>
              <button
                onClick={() => setPopup(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <HiMiniXMark className="text-white w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Send Us an Enquiry
            </h1>
            <p className="text-blue-200">Fill out the form and we'll get back to you soon</p>
          </div>
        </div>

        {/* Form Container - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-white">
          <form
            ref={EnquiryRef}
            onSubmit={HandleEnquiryData}
            className="space-y-5"
          >
            {/* User Name */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                  <User className="w-4 h-4 text-amber-400" />
                </div>
                <input
                  type="text"
                  required
                  name="User_Name"
                  placeholder="Enter your full name"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <input
                  type="email"
                  required
                  name="Email"
                  placeholder="your.email@example.com"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <input
                  type="tel"
                  name="Contact_Number"
                  required
                  placeholder="With country code (e.g., +14155552671)"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                />
              </div>
            </div>

            {/* Preferred Contact Time */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Preferred Contact Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <input
                  type="text"
                  required
                  name="Preferred_Contact_Time"
                  placeholder="Morning, Afternoon or Evening"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Subject of Enquiry
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                  <FileText className="w-4 h-4 text-amber-400" />
                </div>
                <input
                  type="text"
                  name="Subject"
                  placeholder="What is this regarding?"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Message
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                </div>
                <textarea
                  rows={3}
                  name="Message"
                  placeholder="Your message here..."
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 resize-y transition-all duration-300 hover:border-blue-300"
                ></textarea>
              </div>
            </div>

            {/* Help Description */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                How Can We Help You?
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                </div>
                <textarea
                  rows={3}
                  name="Help_Description"
                  placeholder="Tell us how we can assist you..."
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 resize-y transition-all duration-300 hover:border-blue-300"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group/btn relative w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-900 hover:to-blue-800 transition-all duration-300 shadow-xl transform hover:scale-[1.02] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Send Enquiry
                <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-amber-400/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-center text-gray-500 text-sm">
              We typically respond within 24-48 hours
            </p>
          </form>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Enquiry;
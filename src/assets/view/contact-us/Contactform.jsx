import React, { useRef, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone, MessageSquare, User, Send } from "lucide-react";

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);

  const validateForm = (data) => {
    for (const key in data) {
      if (!data[key] || String(data[key]).trim() === "") {
        toaster.warning(`Please fill out the ${key.replace(/_/g, " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const HandleContactData = async (e) => {
    e.preventDefault();
    const formData = new FormData(ContactRef.current);
    const ContactData = Object.fromEntries(formData.entries());
    ContactData.Contact_Number = MobileNumber;

    const isValid = validateForm(ContactData);
    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toaster.danger("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="  flex justify-center items-center py-8 px-4">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          
          
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                 Have a Question?
                </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We're here to help! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 transition-all duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-800/5 to-transparent rounded-full -ml-24 -mb-24"></div>
            
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
            
            {/* Form Content */}
            <div className="relative p-8 md:p-12">
              <form
                ref={ContactRef}
                onSubmit={HandleContactData}
                className="space-y-6"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative group/input">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                        <User className="w-5 h-5 text-amber-400" />
                      </div>
                      <input
                        type="text"
                        name="First_Name"
                        placeholder="Enter your first name"
                        required
                        className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 text-lg transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="relative group/input">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                        <User className="w-5 h-5 text-amber-400" />
                      </div>
                      <input
                        type="text"
                        name="Last_Name"
                        placeholder="Enter your last name"
                        required
                        className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 text-lg transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group/input">
                  <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <input
                      type="email"
                      name="Email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 text-lg transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="relative group/input">
                  <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                    WhatsApp / Viber Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 z-10 p-2 bg-blue-800 rounded-lg">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="pl-14">
                      <PhoneInput
                        onChange={setMobileNumber}
                        value={MobileNumber}
                        defaultCountry="IN"
                        id="Mobile_Number"
                        placeholder="Enter with country code"
                        className="w-full border-2 border-gray-200 rounded-xl focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all duration-300 hover:border-blue-300 [&>input]:py-4 [&>input]:pl-4 [&>input]:text-lg [&>input]:text-gray-700 [&>input]:focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group/input">
                  <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 p-2 bg-blue-800 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-amber-400" />
                    </div>
                    <textarea
                      rows={6}
                      name="Message"
                      placeholder="Tell us how we can help you..."
                      required
                      className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 text-lg resize-y transition-all duration-300 hover:border-blue-300"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group/btn relative w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-5 rounded-2xl font-bold text-xl hover:from-blue-900 hover:to-blue-800 transition-all duration-300 shadow-2xl transform hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-amber-400/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Info Text */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contactform;
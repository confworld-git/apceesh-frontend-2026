import React, { useRef, useState } from "react";
import countries from "./countries";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { toaster } from "evergreen-ui";

const OCMform = () => {
  const OCMRef = useRef();
  const [value, setValue] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const HandleOCM = async (e) => {
    e.preventDefault();

    const formData = new FormData(OCMRef.current);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const requiredFields = [
      "Title",
      "First_Name",
      "Email",
      "Country",
      "Number",
      "Member_Category",
      "Organization",
      "Qualification",
      "Professional_Experience",
      "Industry_Experience",
      "Department",
      "Specialization",
      "h_index",
      "Associated_Cerada",
      "Publication",
      "SCI_Published",
      "Journals",
      "Conference_Info",
      "file",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }

        if (value instanceof File) {
          if (value.size > 300 * 1024) {
            toaster.warning("File size must be less than 300KB.");
            return;
          }
        } else if (Array.isArray(value)) {
          for (const file of value) {
            if (file.size > 300 * 1024) {
              toaster.warning("Each file size must be less than 300KB.");
              return;
            }
          }
        }
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/committeeMember`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setValue("");
      OCMRef.current.reset();
      toaster.success(response.data.message || "Form submitted successfully!");
    } catch (error) {
      console.error("❌ Error:", error);
      toaster.danger(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8  rounded-2xl shadow-2xl border-2 border-blue-800/20">
      <form ref={OCMRef} onSubmit={HandleOCM} className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">TITLE*</label>
          <select 
            id="title"
            name="Title" 
            defaultValue="" 
            className="w-full p-4 rounded-lg border-2 border-blue-800/30 focus:border-blue-800 bg-white text-black outline-none transition-all shadow-sm hover:shadow-md"
          >
            <option disabled value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">FULL NAME*</label>
          <input 
            type="text" 
            id="first-name"
            name="First_Name" 
            placeholder="Full Name" 
            required
            className="w-full p-4 rounded-lg border-2 border-blue-800/30 text-black focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">EMAIL*</label>
          <input 
            type="email" 
            id="email"
            name="Email" 
            placeholder="Email" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm  mb-2 text-blue-900">WHATSAPP/VIBER CONTACT NUMBER*</label>
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="US"
            name="Number"
            value={value}
            onChange={setValue}
            className="phone-input-custom text-black"
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900" htmlFor="country">COUNTRY*</label>
          <select 
            id="country"
            name="Country" 
            defaultValue="" 
            className="w-full p-4 rounded-lg border-2 border-blue-800/30 focus:border-blue-800 text-black bg-white outline-none transition-all shadow-sm hover:shadow-md"
          >
            <option disabled value="" className="text-gray-500">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.emoji} {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">MEMBER CATEGORY*</label>
          <select 
            id="member-category"
            name="Member_Category" 
            defaultValue="" 
            className="w-full p-4 rounded-lg border-2 text-black border-amber-400/50 focus:border-amber-400 bg-white outline-none transition-all shadow-sm hover:shadow-md"
          >
            <option disabled value="">Select Member Category</option>
            <option value="Advisory">Advisory</option>
            <option value="Scientific">Scientific</option>
            <option value="Hospitality">Hospitality</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block font-bold text-sm mb-2 text-blue-900">NAME OF THE UNIVERSITY/INSTITUTE/COLLEGE/ORGANIZATION*</label>
          <input 
            type="text" 
            id="organization"
            name="Organization" 
            placeholder="Name of the Organization" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">DEPARTMENT*</label>
          <input 
            type="text" 
            id="department"
            name="Department" 
            placeholder="Department" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">QUALIFICATION*</label>
          <input 
            type="text" 
            id="qualification"
            name="Qualification" 
            placeholder="Qualification" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">PROFESSIONAL BACKGROUND*</label>
          <input 
            type="text" 
            id="professional-experience"
            name="Professional_Experience" 
            placeholder="Professional Experience" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">INDUSTRY BACKGROUND*</label>
          <input 
            type="text" 
            id="industry-experience"
            name="Industry_Experience" 
            placeholder="Industry Experience" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">AREA OF SPECIALIZATION*</label>
          <input 
            type="text" 
            id="specialization"
            name="Specialization" 
            placeholder="Specialization" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-amber-400/50 focus:border-amber-400 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">ASSOCIATED WITH CERADA*</label>
          <input 
            type="text" 
            id="associated-cerada"
            name="Associated_Cerada" 
            placeholder="Yes/No" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-amber-400/50 focus:border-amber-400 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">H-INDEX*</label>
          <input 
            type="number" 
            id="h_index"
            name="h_index" 
            placeholder="h-index" 
            required
            className="w-full p-4 rounded-lg text-black border-2 border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">NO. OF SCOPUS PUBLICATIONS*</label>
          <input 
            type="text" 
            id="publications"
            name="Publication" 
            placeholder="No. of Publications" 
            required
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">NO. OF SCI/WOS PUBLICATIONS*</label>
          <input 
            type="text" 
            id="SCI-published"
            name="SCI_Published" 
            placeholder="Books Published" 
            required
            className="w-full p-4 rounded-lg text-black border-2 border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">EDITOR/REVIEWER IN JOURNALS*</label>
          <input 
            type="text" 
            id="journals"
            name="Journals" 
            placeholder="Editor/Reviewer in Journals" 
            required
            className="w-full p-4 rounded-lg text-black border-2 border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md" 
          />
        </div>

        <div>
          <label className="block font-bold text-sm mb-2 text-blue-900">UPLOAD CV* (DOCX, DOC, PDF)</label>
          <input 
            type="file" 
            id="upload-cv"
            name="file" 
            accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            className="w-full p-4 rounded-lg border-2 border-amber-400/50 focus:border-amber-400 bg-white outline-none transition-all shadow-sm hover:shadow-md file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-400 file:text-blue-900 file:font-bold file:cursor-pointer hover:file:bg-amber-500 file:transition-colors" 
          />
          <span className="text-xs text-gray-600 mt-1 block">Less than 300KB</span>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="conference-info" className="block font-bold text-sm mb-2 text-blue-900">HOW DID YOU FIND OUT ABOUT THE EVENT?*</label>
          <textarea 
            id="conference-info"
            name="Conference_Info" 
            rows="4" 
            required
            placeholder="Tell us how you found out about this opportunity..." 
            className="w-full p-4 rounded-lg border-2 text-black border-blue-800/30 focus:border-blue-800 bg-white outline-none transition-all shadow-sm hover:shadow-md"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900 font-bold text-lg py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group border-2 border-blue-800/20"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </form>

      <style>{`
        .phone-input-custom .PhoneInputInput {
          padding: 1rem;
          border: 2px solid rgba(30, 64, 175, 0.3);
          border-radius: 0.5rem;
          outline: none;
          transition: all 0.3s;
          width: 100%;
          background: white;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .phone-input-custom .PhoneInputInput:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .phone-input-custom .PhoneInputInput:focus {
          border-color: #1e40af;
        }
        .phone-input-custom .PhoneInputCountrySelect {
          border-radius: 0.5rem 0 0 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default OCMform;
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { 
  FileText, 
  User, 
  Users, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  Upload, 
  MessageSquare,
  Send,
  CheckCircle,
  Link as LinkIcon,
  Facebook,
  Linkedin
} from "lucide-react";
import Hero from "../commonhero/common-hero";

const AbstractFullPaperSubmission = () => {
  

  const SubmissionRef = useRef();
  const [mobile, setMobile] = useState("");

  const generateSubmissionID = () => {
    const Random = Math.floor(Math.random() * 900) + 100;
    return `APCEESH2026_TH_${Random}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const maxFileSize = 3 * 1024 * 1024;

      const allowedFileTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedFileTypes.includes(file.type)) {
        toaster.warning(
          "Invalid file type. Please upload a .doc or .docx file."
        );
        event.target.value = "";
        return;
      }

      if (file.size > maxFileSize) {
        toaster.warning(
          "File size exceeds the 300KB limit. Please upload a smaller file."
        );
        event.target.value = "";
        return;
      }
    }
  };

  const HandleSubmission = async (e) => {
    e.preventDefault();
    const newSubmissionID = generateSubmissionID();

    const formData = new FormData(SubmissionRef.current);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues["SubmissionID"] = newSubmissionID;
    formValues["mobileNumber"] = mobile;

    const requiredFields = [
      "Submission_type",
      "paper_title",
      "authorName",
      "CoAuthorName",
      "correspondingEmail",
      "whatsappNumber",
      "presentationCategory",
      "presentationType",
      "Institution_Name",
      "Department",
      "designation",
      "Publication_Required",
      "file",
      "conferenceSource",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }
      } else if (!mobile || mobile.trim() === "") {
        toaster.warning("Mobile number is required.");
        return;
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("SubmissionID", newSubmissionID);
    formDataToSend.append("mobileNumber", mobile);
    formData.forEach((value, key) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/paperSubmission`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SubmissionRef.current.reset();
      setMobile("");
      toaster.success(response.data.message);
    } catch (error) {
      toaster.danger("Something's wrong");
    }
  };

  return (
    <div className="">
      <Hero
                          title="Abstract / Full Paper Submission"
                          breadcrumbs={[{ label: "Home", link: "#" }]}
                          backgroundImage="/images/commonhero/8.webp"
                        />
                        <section>
      <section className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            
            
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  Abstract/Full Paper Submission
                </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Submit your research paper for consideration at APCEESH-2026
            </p>
          </div>

          {/* Form Container */}
          <div className="relative group" >
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
                  ref={SubmissionRef}
                  onSubmit={HandleSubmission}
                  className="space-y-6"
                >
                  {/* Submission Type */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-3 ml-1">
                      Submission Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="Submission_type" value="Abstract" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Abstract</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="Submission_type" value="Full paper" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Full Paper</span>
                      </label>
                    </div>
                  </div>

                  {/* Paper Title and Author Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        Title of the Paper <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <FileText className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="text"
                          name="paper_title"
                          required
                          placeholder="Enter paper title"
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        Author Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <User className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="text"
                          name="authorName"
                          required
                          placeholder="Enter author name"
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Co-author Names */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      Co-author Names <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                        <Users className="w-4 h-4 text-amber-400" />
                      </div>
                      <input
                        type="text"
                        name="CoAuthorName"
                        placeholder="Enter co-author names (comma separated)"
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Corresponding Author Email */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      Corresponding Author Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                        <Mail className="w-4 h-4 text-amber-400" />
                      </div>
                      <input
                        type="email"
                        name="correspondingEmail"
                        required
                        placeholder="author.email@example.com"
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      Mobile Number (With Country Code) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 z-10 p-2 bg-blue-800 rounded-lg">
                        <Phone className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="pl-14">
                        <PhoneInput
                          defaultCountry="US"
                          value={mobile}
                          onChange={setMobile}
                          placeholder="Enter with country code"
                          className="w-full border-2 border-gray-200 rounded-xl focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all duration-300 hover:border-blue-300 [&>input]:py-3 [&>input]:pl-4 [&>input]:text-gray-700 [&>input]:focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      WhatsApp/Viber Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                        <Phone className="w-4 h-4 text-amber-400" />
                      </div>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        placeholder="Enter WhatsApp/Viber number"
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Social Media URLs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        LinkedIn URL
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <Linkedin className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="url"
                          name="linkedinURL"
                          placeholder="https://linkedin.com/in/..."
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        Facebook URL
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <Facebook className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="url"
                          name="facebookURL"
                          placeholder="https://facebook.com/..."
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Presentation Category */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-3 ml-1">
                      Presentation Category <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="presentationCategory" value="oral" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Oral</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="presentationCategory" value="poster" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Poster</span>
                      </label>
                    </div>
                  </div>

                  {/* Presentation Type */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-3 ml-1">
                      Presentation Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="presentationType" value="Virtual" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Virtual</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="presentationType" value="Physical" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Physical</span>
                      </label>
                    </div>
                  </div>

                  {/* Institution Name */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      University/Institution Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                        <Building2 className="w-4 h-4 text-amber-400" />
                      </div>
                      <input
                        type="text"
                        name="Institution_Name"
                        required
                        placeholder="Enter institution name"
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Department and Designation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        Department <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <Building2 className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="text"
                          name="Department"
                          required
                          placeholder="Enter department"
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-800 rounded-lg">
                          <Briefcase className="w-4 h-4 text-amber-400" />
                        </div>
                        <input
                          type="text"
                          name="designation"
                          required
                          placeholder="Enter designation"
                          className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Publication Required */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-3 ml-1">
                      Publication Required <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="Publication_Required" value="yes" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex-1">
                        <input type="radio" name="Publication_Required" value="no" className="w-5 h-5 text-blue-800 focus:ring-amber-400" />
                        <span className="text-gray-700 font-medium">No</span>
                      </label>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      File Upload (.doc, .docx - Max 3MB) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg z-10">
                        <Upload className="w-4 h-4 text-amber-400" />
                      </div>
                      <input
                        type="file"
                        accept=".doc,.docx"
                        name="file"
                        onChange={handleFileChange}
                        required
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 transition-all duration-300 hover:border-blue-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-amber-400 hover:file:bg-blue-900"
                      />
                    </div>
                  </div>

                  {/* Conference Source */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      How did you know about the conference? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-amber-400" />
                      </div>
                      <textarea
                        name="conferenceSource"
                        rows={3}
                        placeholder="Tell us how you found out about this conference..."
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 resize-y transition-all duration-300 hover:border-blue-300"
                      ></textarea>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                      Additional Message
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 p-2 bg-blue-800 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-amber-400" />
                      </div>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Any additional information you'd like to share..."
                        className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-gray-700 resize-y transition-all duration-300 hover:border-blue-300"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group/btn relative w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-5 rounded-2xl font-bold text-xl hover:from-blue-900 hover:to-blue-800 transition-all duration-300 shadow-2xl transform hover:scale-[1.02] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Submit Your Paper
                      <Send className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-amber-400/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    Your submission will be reviewed by our academic committee
                  </p>
                </form>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
    
  );
};

export default AbstractFullPaperSubmission;
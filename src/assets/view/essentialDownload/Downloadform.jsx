import React, { useState } from "react";
import { SectionIcon, X } from "lucide-react";

const DownloadForm = ({ setPopup }) => {
  const [DownloadForm, setDownloadForm] = useState({
    Name: "",
    Email: "",
    Number: "",
    Link: "",
    Info: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const HandleDownload = (e) => {
    const { name, value } = e.target;
    setDownloadForm((prev) => ({ ...prev, [name]: value }));
  };

  const handledNumber = (e) => {
    setDownloadForm((prev) => ({ ...prev, Number: e.target.value }));
  };

  const handleSubmitDownload = async (e) => {
    e.preventDefault();

    const { Name, Email, Number, Link, Info } = DownloadForm;
    if (
      !Name?.trim() ||
      !Email?.trim() ||
      !Number?.trim() ||
      !Link?.trim() ||
      !Info?.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // THE FIX: Actually send data to your backend API
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/download`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(DownloadForm),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      // Start the download after successful API submission
      const link = document.createElement("a");
      link.href = "/files/APCEESH%20Brochure.pdf";
      link.setAttribute("download", "APCEESH_Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setPopup(false);
      alert("Download started successfully!");

      // Reset form
      setDownloadForm({
        Name: "",
        Email: "",
        Number: "",
        Link: "",
        Info: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
        {/* Close button - clearly visible */}
        <button
          onClick={() => setPopup(false)}
          className="absolute -top-3 -right-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full p-2 shadow-lg transition-colors z-10"
          disabled={isSubmitting}
        >
          <X size={20} strokeWidth={3} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-1">
              Download APCEESH Brochure
            </h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="Name"
                value={DownloadForm.Name}
                placeholder="Enter Your Name"
                onChange={HandleDownload}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <input
                type="email"
                name="Email"
                value={DownloadForm.Email}
                placeholder="Enter Your Email"
                onChange={HandleDownload}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <input
                type="tel"
                name="Number"
                value={DownloadForm.Number}
                placeholder="Mobile Number"
                onChange={handledNumber}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <input
                type="url"
                name="Link"
                value={DownloadForm.Link}
                placeholder="Social Media Profile Link"
                onChange={HandleDownload}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <input
                type="text"
                name="Info"
                value={DownloadForm.Info}
                placeholder="How did you hear about the conference?"
                onChange={HandleDownload}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              onClick={handleSubmitDownload}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Download"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DownloadForm;

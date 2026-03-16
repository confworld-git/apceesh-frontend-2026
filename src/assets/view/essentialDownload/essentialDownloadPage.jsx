import React, { useEffect, useState } from "react";
import image from "/images/downloadbanner.webp";
import download_svg from "../../images/icons/download.svg";
import Downloadform from "./Downloadform.jsx";
import Hero from "../commonhero/common-hero.jsx";

import { Helmet } from "react-helmet";

const EssentialDownload = () => {
  const [popup, setPopup] = useState(false);



  const downloadList = [
    { title: "Conference Poster", file: "APCEESH Poster.jpg" },
    { title: "Conference Brochure", file: null },
    { title: "Abstract Template", file: "abstract temp.docx" },
    { title: "Full Paper Template", file: "full paper.doc" },
    { title: "Presentation Template", file: "PPT Model.ppt" },
    { title: "Registration Form", file: "Registration form.pdf" },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col ">
      <Hero
              title="Essential Downloads"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/7.webp"
            />
      

      
     

      {/* Cards */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16 px-4">
        {downloadList.map((item, i) => (
          <div
            key={i}
            
            className="flex flex-col justify-between items-center bg-blue-50 rounded-xl border border-gray-200 shadow hover:shadow-xl transition-shadow p-6"
          >
            <h2 className="font-semibold text-center text-lg text-blue-900 min-h-[44px] flex items-center break-words">
              {item.title}
            </h2>
            {item.file ? (
              <a
                href={`/files/${item.file}`}
                download
                className="mt-6 flex items-center gap-2 hover:bg-white bg-blue-700  duration-500 text-white hover:text-blue-600 text-base font-semibold px-5 py-2 rounded-md shadow-sm transition"
              >
                <img src={download_svg} alt="" className="w-5 h-5" />
                Download
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setPopup(true)}
                className="mt-6 flex items-center gap-2 bg-blue-700 hover:bg-white text-white hover:text-blue-600 duration-500 text-base font-semibold px-5 py-2 rounded-md shadow-sm transition"
              >
                <img src={download_svg} alt="" className="w-5 h-5" />
                Download
              </button>
            )}
          </div>
        ))}
      </div>

      {popup && <Downloadform setPopup={setPopup} />}
    </section>
  );
};

export default EssentialDownload;

import React, { useState } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
} from "react-icons/fa";
import Hero from "../commonhero/common-hero.jsx";
import { Link } from "react-router-dom";

export default function SubmissionGuidelines() {
  const [expandedAbstract, setExpandedAbstract] = useState(false);
  const [expandedFullPaper, setExpandedFullPaper] = useState(false);

  const INITIAL_SHOW = 5;

  const abstractGuidelines = [
    "The original work should be described in the abstract.",
    "Abstract should be written in English.",
    "It should be one paragraph with a word limit of 150.",
    "Please provide a slight biography with your abstract (An example is given in the template).",
    "The abstract should be submitted in the format of an MS Word (.doc or .docx) document.",
    "After you've finished preparing your abstract according to the above instructions, submit your abstract here.",
    "After submission, you will be acknowledged of the receipt of the abstract via email within three working days.",
    "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
  ];

  const fullPaperGuidelines = [
    "Total number of pages must be 6-8 in double-column format.",
    "The manuscript should be in English and checked for grammar and language errors.",
    "Tables, figures and images should be properly named with good quality.",
    "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
    "Abstract not more than 150 words",
    "Minimum 5 Keywords should be written in lowercase letters and italics (Not applicable to names/scientific names) and should be separated with commas.",
    "Names of affiliations should be given including the country.",
    "Background/Introduction, Motivation and Objectives.",
    "Statement of Contribution/Methods.",
    "Results, Discussion and Conclusion.",
    "Funding statement.",
    "Acknowledgements.",
    'References minimum 35 (30% of which must be within the last 2 years) should be there. Authors may submit their references in Chicago style. Authors are responsible for ensuring that the information in each reference is complete and accurate. All references should be numbered consecutively in the order of their first citation. Citations of references in the text should be identified using numbers in square brackets e.g., "as discussed by Smith [9]"; "as discussed elsewhere [9, 10]". All references should be cited within the text and uncited references will be removed.',
    "The paper should be submitted in the format of an MS Word (.doc or .docx) document.",
    "After you've finished preparing your full paper according to the above instructions, submit your full paper here.",
  ];

  const displayedAbstractGuidelines = expandedAbstract
    ? abstractGuidelines
    : abstractGuidelines.slice(0, INITIAL_SHOW);

  const displayedFullPaperGuidelines = expandedFullPaper
    ? fullPaperGuidelines
    : fullPaperGuidelines.slice(0, INITIAL_SHOW);

  return (
    <section>
      <Hero
        title="Submission Guidelines"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/9.webp"
      />
      <section className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 py-16 px-4">
        <div className="">
          {/* Stacked Cards */}
          <div className="space-y-8">
            {/* Abstract Submission Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-800/20">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaFileAlt className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Abstract Submission
                      </h2>
                      <p className="text-amber-200 text-sm mt-1">
                        Quick submission process
                      </p>
                    </div>
                  </div> 
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-8 rounded-full bg-amber-400"></div>
                  Submission Guidelines
                </h3>

                <ul className="space-y-4 mb-6">
                  {displayedAbstractGuidelines.map((guideline, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="w-5 h-5 text-blue-800 group-hover:text-amber-400 transition-colors" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {guideline}
                      </span>
                    </li>
                  ))}
                </ul>

                

                {/* Show More/Less Button */}
                {abstractGuidelines.length > INITIAL_SHOW && (
                  <button
                    onClick={() => setExpandedAbstract(!expandedAbstract)}
                    className="mb-6 flex items-center gap-2 text-blue-800 font-semibold hover:text-amber-400 transition-colors"
                  >
                    {expandedAbstract ? (
                      <>
                        Show Less <FaChevronUp />
                      </>
                    ) : (
                      <>
                        Show {abstractGuidelines.length - INITIAL_SHOW} More
                        Guidelines <FaChevronDown />
                      </>
                    )}
                  </button>
                )}

                {/* Submit Button */}
                <div className="pt-6 border-t-2 border-gray-100">
                  <a
                    href="/abstract-full-paper-submission"  
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaFileAlt className="w-5 h-5" />
                    Submit Abstract
                  </a>
                </div>
              </div>
            </div> 

            {/* Full Paper Submission Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-400/20">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaFileAlt className="w-8 h-8 text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                        Full Paper Submission
                      </h2>
                      <p className="text-blue-800 text-sm mt-1">
                        Comprehensive submission
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-8 rounded-full bg-blue-800"></div>
                  Submission Guidelines
                </h3>

                <ul className="space-y-4 mb-6">
                  {displayedFullPaperGuidelines.map((guideline, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="w-5 h-5 text-amber-500 group-hover:text-blue-800 transition-colors" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {guideline}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Show More/Less Button */}
                {fullPaperGuidelines.length > INITIAL_SHOW && (
                  <button
                    onClick={() => setExpandedFullPaper(!expandedFullPaper)}
                    className="mb-6 flex items-center gap-2 text-amber-500 font-semibold hover:text-blue-800 transition-colors"
                  >
                    {expandedFullPaper ? (
                      <>
                        Show Less <FaChevronUp />
                      </>
                    ) : (
                      <>
                        Show {fullPaperGuidelines.length - INITIAL_SHOW} More
                        Guidelines <FaChevronDown />
                      </>
                    )}
                  </button>
                )}

                {/* Submit Button */}
                <div className="pt-6 border-t-2 border-gray-100">
                  <a
                    href="/abstract-full-paper-submission"
                    className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaFileAlt className="w-5 h-5" />
                    Submit Full Paper
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}


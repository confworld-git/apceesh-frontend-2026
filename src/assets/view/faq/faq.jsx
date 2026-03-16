import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';
import Hero from '../commonhero/common-hero';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      question: "What is APCEESH-2026?",
      answer:
        "The Asia-Pacific Conference on Engineering, Environment, Science and Health (APCEESH-2026) is a premier event designed to bring together researchers, professionals, students and scholars from diverse fields.",
    },
    {
      question: "Who can attend the conference?",
      answer:
        "The conference is open to faculty members, academic scholars, students, industry professionals, and anyone interested in the fields of science, technology, engineering, education and social sciences.",
    },
    {
      question: "How do I register for the conference?",
      answer:
        "You can register for APCEESH-2026 through our online registration portal. Choose your category, fill out the registration form, select your sessions and complete the payment process.",
    },
    {
      question: "What are the registration fees?",
      answer:
        "The registration fees vary based on the category and registration period. Detailed fee information is available on the Registration Page.",
    },
    {
      question: "Can I submit my paper for presentation?",
      answer:
        "Yes, you can submit your abstract or full paper through our submission portal. All submissions will be reviewed, and accepted papers will be presented at the conference.",
    },
    {
      question: "Will my paper be published?",
      answer:
        "High-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals. Submit now",
    },
    {
      question: "What is the review process for submitted papers?",
      answer:
        "All submitted papers will undergo a rigorous peer-review process conducted by experts in the respective fields. Reviewers will assess the originality, significance, and technical quality of the papers. Authors will be notified of the review results and any required revisions.",
    },
    {
      question: "What is included in the registration fee?",
      answer:
        "The registration fee includes access to all sessions and workshops, conference materials, refreshments and lunch during conference days, a certificate of participation and networking opportunities.",
    },
    {
      question: "Is there a cancellation policy?",
      answer:
        "Yes, cancellations made 50 Days Before Conference: 40% refundable. 30-40 Days Before Conference: 35% refundable. Less Than 30 Days Before Conference: No refunds will be issued.",
    },
    {
      question: "How do I contact the conference organizers?",
      answer: (
        <>
          For general inquiries, please email{" "}
          <a
            href="mailto:info@confworld.org"
            className="text-amber-500 hover:text-amber-600 underline font-semibold"
          >
            info@confworld.org
          </a>
          .
          <br />
          For registration-related queries contact{" "}
          <a
            href="mailto:info@cerada.in"
            className="text-amber-500 hover:text-amber-600 underline font-semibold"
          >
            info@cerada.in
          </a>
          .
          <br />
          For sponsorship opportunities, reach out to{" "}
          <a
            href="mailto:collaboration@confworld.org"
            className="text-amber-500 hover:text-amber-600 underline font-semibold"
          >
            collaboration@confworld.org
          </a>
          .
        </>
      ),
    },
    {
      question: "Will my presented paper be published?",
      answer:
        "Yes, high-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
    },
    {
      question: "How do I submit my paper for publication?",
      answer:
        "After presenting at the conference, you will receive detailed instructions on how to submit your paper for publication consideration in the indexed journals.",
    },
    {
      question: "What is the review process for publication?",
      answer:
        "All submitted papers undergo a rigorous peer-review process by experts in the relevant field to ensure the quality and relevance of the research.",
    },
    {
      question: "Are there any additional fees for publication?",
      answer:
        "There may be additional fees for publication in certain journals. Detailed information will be provided after your paper is accepted for presentation at the conference.",
    },
    {
      question: "When will I know if my paper is accepted for publication?",
      answer:
        "You will be notified about the acceptance of your paper for publication after the review process is complete, typically within 5 months post-conference.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(searchLower) ||
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchLower))
    );
  });

  return (
    <section className="">
      <Hero
              title="Frequently Asked Questions"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/16.webp"
            />
            <div className="min-h-screen bg-white py-16 px-4">
      <div className="">
       

        {/* Search Bar */}
        <div className="mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 group-hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center px-6 py-4">
              <div className="p-3 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl mr-4">
                <Search className="w-6 h-6 text-amber-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-blue-400 transition-all duration-300">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-start justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                          <MessageCircle className="w-5 h-5 text-amber-400" />
                        </div>
                      </div>
                      <span className="text-lg font-bold text-blue-900 pr-4 leading-relaxed">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-amber-400' 
                          : 'bg-blue-100 group-hover:bg-blue-200'
                      }`}>
                        {openIndex === index ? (
                          <ChevronUp className="w-6 h-6 text-blue-900" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-blue-800" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <div className="ml-14 border-l-4 border-amber-400 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-transparent rounded-r-lg">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom accent bar */}
                  {openIndex === index && (
                    <div className="h-1 bg-gradient-to-r from-blue-800 via-amber-400 to-blue-800"></div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-gray-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  No FAQs found matching "<span className="text-blue-800 font-bold">{searchQuery}</span>"
                </p>
                <p className="text-gray-500 mt-2">Try a different search term or browse all questions</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl transition-colors duration-300"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative text-center">
              <div className="inline-flex p-4 bg-amber-400 rounded-2xl mb-6 shadow-lg">
                <HelpCircle className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any inquiries.
              </p>
              <a
  href="/contact-us"
  className="group/btn relative inline-block bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
>
  Contact Our Team
  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
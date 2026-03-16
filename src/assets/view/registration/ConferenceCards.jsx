import React from 'react';
import { Users, FileText, Award, Calendar, DollarSign, AlertCircle, Sparkles, CheckCircle } from 'lucide-react';

export default function ConferenceRegistration() {
  return (
    <div className=" bg-white p-4">
      <div className=" space-y-12">
        

        {/* Group Discount Component */}
        <div className="relative group">
          {/* Decorative background elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-800/5 to-transparent rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-400 rounded-2xl shadow-lg">
                    <Users className="w-10 h-10 text-blue-900" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">Group Discount</h2>
                    <p className="text-blue-200 mt-1">Save more when you register together</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-amber-400 text-blue-900 font-bold px-6 py-3 rounded-xl text-lg shadow-lg">
                    Save Up To 30%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative p-10">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-7 h-7 text-amber-400" />
                  <h3 className="text-2xl font-bold text-blue-900">Qualification Criteria</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Group Registration</p>
                      <p className="text-blue-800 font-bold text-xl mt-1">5+ Members</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Paper Co-authors</p>
                      <p className="text-blue-800 font-bold text-xl mt-1">All Eligible</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-white/90 rounded-xl shadow-lg">
                    <Sparkles className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Premium Offer for Large Groups</h3>
                    <p className="text-blue-900 text-lg leading-relaxed font-medium">
                      Groups with <span className="font-extrabold text-white text-xl">10+ members</span> qualify for enhanced discounts! Contact our <span className="font-bold text-white">Academic Partnership Team</span> to unlock exclusive pricing benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Paper Presentations Component */}
        <div className="relative group">
          {/* Decorative background elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-400 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-800/10 to-transparent rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/10 to-transparent rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-400 rounded-2xl shadow-lg">
                  <FileText className="w-10 h-10 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Multiple Paper Presentations</h2>
                  <p className="text-blue-200 mt-1">Guidelines for presenting multiple research papers</p>
                </div>
              </div>
            </div>
            
            <div className="relative p-10">
              <div className="grid gap-5 mb-8">
                {[
                  { num: 1, text: "An author may submit and present a", highlight: "maximum of 3 papers ", rest: "at the conference." },
                  { num: 2, text: "If you are presenting more than one paper,", highlight: "full payment is required for the first paper", rest: "." },
                  { num: 3, text: "Additional oral or poster presentations incur an additional fee of", highlight: "$150 USD ", rest: "each." },
                  { num: 4, text: "Papers requiring", highlight: "Scopus publication ", rest: "require publication fees for each paper." },
                  { num: 5, text: "For more than 3 papers, additional papers can be presented by a", highlight: "co-author on full registration", rest: "." }
                ].map((item) => (
                  <div key={item.num} className="group/item flex items-start gap-5 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-400 rounded-2xl blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 text-amber-400 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                        {item.num}
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg pt-2 leading-relaxed">
                      {item.text} <span className="font-bold text-blue-800 text-xl">{item.highlight}</span>{item.rest}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/30 rounded-full -mr-20 -mt-20"></div>
                
                <div className="relative flex items-start gap-5">
                  <div className="p-3 bg-red-500 rounded-xl shadow-lg">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 flex items-center gap-2">
                      Critical Deadline Notice
                    </h3>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Paper count confirmation must be submitted to the Conference Coordinator <span className="font-extrabold text-red-700 text-xl">3 weeks before</span> the final payment deadline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
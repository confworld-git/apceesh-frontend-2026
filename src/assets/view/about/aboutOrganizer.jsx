import React, { useState } from 'react';
import { Users, Target, Briefcase, GraduationCap, Globe, BookOpen, Award, Lightbulb, Sparkles, Network, Rocket, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import Hero from '../commonhero/common-hero.jsx';
// Hero Component

// Main About Page
export default function AboutPage() {
  return (
    <div className=" bg-white">
      <Hero
              title="About CERADA "
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/2.webp"
      />

      {/* Introduction with Asymmetric Layout */}
      <section className="py-8 px-4">
      <div className="grid lg:grid-cols-5 gap-12 items-stretch">
        <div className="lg:col-span-3 flex flex-col justify-between space-y-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-blue-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Breaking Boundaries in <span className="text-amber-400">Global Research</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-blue-800">
                The Confworld Educational Research And Development Association (CERADA) is an internationally recognized, globally operating multidisciplinary professional research and development association.
              </p>
              <p>
                We integrate researchers and academicians working in the micro disciplines of science and technology, fostering collaboration and innovation across a broad spectrum of fields. Our platform transcends geographical boundaries, connecting minds that shape the future.
              </p>
            </div>
          </div>

          {/* Additional content box to balance height */}
          <div className="hidden lg:block bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-2xl border-2 border-blue-800/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-800 rounded-xl">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Why Choose CERADA?</h4>
                <p className="text-gray-700">
                  Join a global network of researchers, access premium publication support, and present at prestigious international conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-8 rounded-3xl text-white shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
            <Rocket className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Top-Tier Conferences</h3>
            <p className="text-blue-100">
              We organize international conferences offering platforms for researchers to present work, share ideas, and build lasting professional networks.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-8 rounded-3xl text-blue-900 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300">
            <BookOpen className="w-10 h-10 text-blue-900 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Publication Excellence</h3>
            <p className="text-blue-800">
              Supporting research paper submissions to reputable, double-blind peer-reviewed journals with editing and review assistance.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Mission & Vision - Blue-800 & Amber-400 Theme */}
      <section className="relative pb-10 pt-2 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10  px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-black text-blue-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our Purpose & Direction
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-amber-400/30 hover:border-amber-400/60 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-amber-400 rounded-xl shadow-lg">
                  <Target className="w-7 h-7 text-blue-900" />
                </div>
                <div className="flex-1">
                  <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider block mb-1">
                    Our Mission
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Driving Excellence
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-6"></div>

              {/* Content */}
              <p className="text-blue-100 text-base lg:text-lg leading-relaxed">
                CERADA advances global education and research through international conferences, research assistance and collaborative publications, fostering an inclusive environment for knowledge sharing and innovation.
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden rounded-br-2xl opacity-10">
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
            <div className="relative bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-blue-800/30 hover:border-blue-800/60 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-800 rounded-xl shadow-lg">
                  <Lightbulb className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider block mb-1">
                    Our Vision
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                    Shaping Tomorrow
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent mb-6"></div>

              {/* Content */}
              <p className="text-blue-900 text-base lg:text-lg leading-relaxed">
                CERADA envisions a borderless educational research community committed to lifelong learning and excellence, being a catalyst for transformational advancements through cutting-edge research and international partnerships.
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden rounded-br-2xl opacity-10">
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>

      {/* What We Do - Card Masonry Style */}
      <section className="pb-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-blue-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            What We Do
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a dynamic community of professionals, educators, researchers and innovators across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          <div className="bg-white border-4 border-blue-900 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 row-span-2">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-amber-400" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-blue-900 mb-4">Educational Initiatives</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              CERADA organizes a comprehensive range of educational initiatives focused on Engineering, Science & Technology.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                <span>Conferences & Workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                <span>Webinars & Guest Lectures</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                <span>Training & Development Programs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                <span>Faculty Development Initiatives</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-8 text-blue-900 hover:shadow-2xl transition-all hover:-translate-y-2">
            <Sparkles className="w-10 h-10 mb-4" />
            <h4 className="text-2xl font-bold mb-3">Innovation & Trends</h4>
            <p className="text-blue-800 leading-relaxed">
              Devoted to advancing knowledge with a focus on curiosity, innovation and the latest trends in Engineering and Technology.
            </p>
          </div>

          <div className="bg-blue-900 rounded-3xl p-8 text-white hover:shadow-2xl transition-all hover:-translate-y-2">
            <Users className="w-10 h-10 text-amber-400 mb-4" />
            <h4 className="text-2xl font-bold mb-3">Inclusive Access</h4>
            <p className="text-blue-100 leading-relaxed">
              Providing easy access to academic resources and support for students and scholars from urban and rural areas alike.
            </p>
          </div>

          <div className="bg-white border-4 border-amber-400 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 lg:col-span-2">
            <Award className="w-10 h-10 text-amber-400 mb-4" />
            <h4 className="text-2xl font-bold text-blue-900 mb-3">Strategic Partnerships</h4>
            <p className="text-gray-700 leading-relaxed">
              Committed to fostering partnerships with universities, organizations and associations worldwide to promote knowledge sharing and collaborative efforts toward building a better future through research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Global Network Section - Unique Split Design */}
      <section className="relative overflow-hidden">
        {/* Left Side - Dark with Content */}
        <div className="grid lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-20 px-6 md:px-12 lg:px-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-xl">
              <div className="inline-block p-3 bg-amber-400/20 rounded-2xl mb-6">
                <Network className="w-8 h-8 text-amber-400" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Join Our Global Network
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Become part of a transformative community shaping the future of research and education across continents
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4 text-blue-50">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Global Collaboration</div>
                    <div className="text-sm text-blue-200">Connect with researchers from 50+ countries</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-blue-50">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Exclusive Resources</div>
                    <div className="text-sm text-blue-200">Access cutting-edge research and publications</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-blue-50">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Career Growth</div>
                    <div className="text-sm text-blue-200">Enhance your professional network and opportunities</div>
                  </div>
                </div>
              </div>

              <a href="https://confworld.org/" target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-full transition-all shadow-2xl hover:shadow-amber-400/50 hover:scale-105 text-lg group">
                <Globe className="w-6 h-6" />
                <span>Explore CERADA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side - Light with Membership Options */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-12 lg:px-16">
            <div className="max-w-xl">
              <div className="mb-10">
                <div className="text-amber-600 font-bold text-sm tracking-wider mb-2">MEMBERSHIP OPTIONS</div>
                <h2 className="text-4xl md:text-5xl font-black text-blue-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose Your Path
          </h2>
                <p className="text-gray-600">Select the membership that aligns with your goals</p>
              </div>

              <div className="space-y-5">
                {/* Student */}
                <a href="https://confworld.org/student" target='_blank' className="group block relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300"></div>
                  <div className="relative bg-white border-l-8 border-amber-500 p-6 transform group-hover:translate-x-2 transition-transform duration-300 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-100 rounded-xl">
                          <GraduationCap className="w-7 h-7 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-blue-900 mb-1">Student Membership</h4>
                          <p className="text-gray-600 text-sm">Special benefits for academic excellence</p>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-amber-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>

                {/* Institutional */}
                <a href="https://confworld.org/institutional" target='_blank' className="group block relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300"></div>
                  <div className="relative bg-white border-l-8 border-blue-600 p-6 transform group-hover:translate-x-2 transition-transform duration-300 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                          <Briefcase className="w-7 h-7 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-blue-900 mb-1">Institutional Membership</h4>
                          <p className="text-gray-600 text-sm">Partnership for universities & institutions</p>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>

                {/* Professional */}
                <a href="https://confworld.org/professional" target='_blank' className="group block relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300"></div>
                  <div className="relative bg-white border-l-8 border-cyan-600 p-6 transform group-hover:translate-x-2 transition-transform duration-300 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-100 rounded-xl">
                          <Award className="w-7 h-7 text-cyan-600" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-blue-900 mb-1">Professional Membership</h4>
                          <p className="text-gray-600 text-sm">For researchers, faculty & industry pros</p>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-cyan-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
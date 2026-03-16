import React, { useState, useEffect } from 'react';
import { Globe, Users, Lightbulb, Sparkles, Zap, Rocket } from 'lucide-react';

export default function APCEESH2025() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" style={parallaxStyle}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      </div>
      

      {/* About Section with Split Design */}
      <section className="relative py-8 px-4">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800 to-amber-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-4 border-blue-800">
                <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
                  WELCOME TO APCEESH!
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    A <span className="font-bold text-blue-800">premier platform</span> uniting academics, researchers, policymakers and professionals from diverse fields to explore innovative solutions for global challenges.
                  </p>
                  <p className="leading-relaxed">
                    This hybrid conference offers the flexibility to join either <span className="font-bold text-amber-600">in person</span> in the vibrant city of Bangkok, Thailand or <span className="font-bold text-amber-600">virtually</span> from anywhere in the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Users, title: "DIVERSE NETWORK", desc: "Connect with global leaders across disciplines", color: "from-blue-800 to-blue-900" },
                { icon: Globe, title: "GLOBAL REACH", desc: "Hybrid format for worldwide accessibility", color: "from-amber-500 to-amber-600" },
                { icon: Lightbulb, title: "INNOVATION", desc: "Cutting-edge solutions for tomorrow's challenges", color: "from-blue-700 to-blue-800" }
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative p-8 text-white flex items-start gap-4">
                    <item.icon className="w-12 h-12 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                    <div>
                      <h3 className="font-black text-xl mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section - Bold & Impactful */}
      <section className="relative py-6 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.1) 35px, rgba(251, 191, 36, 0.1) 70px)`
          }}></div>
        </div>

        <div className="relative  text-center">
          <div className="inline-block mb-8">
            <div className="text-amber-400 text-sm font-black tracking-widest mb-4">CONFERENCE THEME</div>
            <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 p-1 rounded-3xl">
              <div className="bg-blue-900 px-0 md:px-12 py-8 rounded-3xl">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white leading-tight">
                  "Redefining Futures through<br/>
                  <span className="text-amber-400">Education, Technology</span><br/>
                  and Social Progress for<br/>
                  <span className="text-amber-400">Global Sustainability"</span>
                </h2>
              </div>
            </div>
          </div>

          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-16 leading-relaxed">
            Explore transformative strategies that harness the power of knowledge, creativity and human ingenuity to shape a better, more sustainable future for all.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "EDUCATION", subtitle: "Innovation", emoji: "🎓" },
              { title: "TECHNOLOGY", subtitle: "Advancement", emoji: "🚀" },
              { title: "SOCIAL", subtitle: "Progress", emoji: "🤝" },
              { title: "GLOBAL", subtitle: "Sustainability", emoji: "🌍" }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-amber-400 rounded-2xl transform group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white rounded-2xl p-8 transform group-hover:-translate-y-2 transition-all duration-300 border-4 border-blue-900">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-black text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-lg font-bold text-amber-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
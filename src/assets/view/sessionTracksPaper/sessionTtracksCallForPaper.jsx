import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import conferenceSessions from "./sessionTracksPaperJons";
import Hero from "../commonhero/common-hero";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Deadline from "../../components/home/submissiondeadlines";

export default function SessionTracks() {
  const location = useLocation();
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const INITIAL_TOPICS_COUNT = 5;

  // Toggle show more/less for a specific section
  const toggleExpanded = (sessionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sessionId]: !prev[sessionId]
    }));
  };

  // Scroll to section if hash in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          if (id === conferenceSessions[0].id) {
            const headerOffset = 150;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [location]);

  // Track which session section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      conferenceSessions.forEach((session) => {
        const el = document.getElementById(session.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset && rect.bottom > offset) {
            current = session.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <Hero
        title="Session Tracks / Call for Papers"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/6.webp"
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="px-4 py-8 ">
          <div className="text-center space-y-4">
            
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500">
              Call for Submissions
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              APCEESH-2026 offers a diverse array of session tracks designed to provide 
              comprehensive insights and foster discussions across various disciplines. We invite 
              researchers, academicians and professionals to submit their papers.
            </p>
          </div>
        </header>

        <div className="flex flex-1 w-full relative max-w-[1920px] mx-auto">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex flex-col sticky top-24 left-0 w-80 h-[calc(100vh-6rem)] bg-gradient-to-b from-blue-900 to-blue-800 p-6 overflow-y-auto shadow-2xl z-30">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Session Navigation
              </h2>
              <div className="w-full h-1 bg-amber-400"></div>
            </div>
            <nav className="flex flex-col space-y-2">
              {conferenceSessions.map((session, index) => (
                <a
                  key={session.id}
                  href={`#${session.id}`}
                  className={`group relative block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeId === session.id
                      ? "bg-amber-400 text-blue-900 shadow-lg scale-105"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      activeId === session.id
                        ? "bg-blue-900 text-amber-400"
                        : "bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-blue-900"
                    } transition-colors`}>
                      {index + 1}
                    </span>
                    <span className="flex-1 leading-tight">{session.title}</span>
                  </div>
                </a>
              ))}
            </nav>
          </aside>

          {/* Mobile sidebar toggle button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-28 left-4 z-40 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-3 rounded-full shadow-2xl hover:shadow-blue-800/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Sidebar Drawer */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
              <aside className="fixed top-0 left-0 bottom-0 w-80 bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl p-6 overflow-y-auto z-50">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Session Tracks</h2>
                    <div className="w-full h-1 bg-amber-400 mt-2"></div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-white hover:text-amber-400 text-3xl font-bold focus:outline-none transition-colors"
                    aria-label="Close sidebar"
                  >
                    ×
                  </button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {conferenceSessions.map((session, index) => (
                    <a
                      key={session.id}
                      href={`#${session.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`group block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        activeId === session.id
                          ? "bg-amber-400 text-blue-900 shadow-lg"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          activeId === session.id
                            ? "bg-blue-900 text-amber-400"
                            : "bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-blue-900"
                        } transition-colors`}>
                          {index + 1}
                        </span>
                        <span className="flex-1 leading-tight">{session.title}</span>
                      </div>
                    </a>
                  ))}
                </nav>
              </aside>
            </>
          )}

          {/* Main Content */}
          <main className="flex-1 py-8 px-6 lg:px-12 space-y-12 overflow-y-auto">
            {conferenceSessions.map((session, index) => {
              const isExpanded = expandedSections[session.id];
              const hasMoreTopics = session.topics.length > INITIAL_TOPICS_COUNT;
              const displayedTopics = isExpanded ? session.topics : session.topics.slice(0, INITIAL_TOPICS_COUNT);

              return (
                <section
                  key={session.id}
                  id={session.id}
                  className="scroll-mt-32 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-800/10 hover:border-blue-800/30 transition-all duration-300"
                >
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6 md:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-blue-900">{index + 1}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white flex-1">
                        {session.title}
                      </h2>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-100">
                    <img
                      src={session.cover}
                      alt={session.title}
                      title={session.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Topics List */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      Topics of Interest
                    </h3>
                    <ul className="space-y-3">
                      {displayedTopics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 group"
                        >
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-800 mt-2 group-hover:bg-amber-400 transition-colors"></div>
                          <span className="text-gray-700 leading-relaxed group-hover:text-blue-900 transition-colors">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Show More/Less Button */}
                    {hasMoreTopics && (
                      <button
                        onClick={() => toggleExpanded(session.id)}
                        className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>{isExpanded ? 'Show Less' : `Show ${session.topics.length - INITIAL_TOPICS_COUNT} More`}</span>
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    )}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>
      <Deadline />
    </section>
  );
}
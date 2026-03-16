import React, { useState } from 'react';
import { 
  Mic, Users, Lightbulb, MessageSquare, Wrench, 
  Network, Award, BookOpen, Target, Palette, 
  Globe, Trophy
} from 'lucide-react';

export default function APCEESHKeyHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const highlights = [
    {
      icon: Mic,
      title: "Inspirational Keynote Speeches",
      description: "Hear from visionary leaders and global experts sharing insights on the intersection of education, technology and social progress for sustainability.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Users,
      title: "Interdisciplinary Collaboration",
      description: "Engage with professionals and academics from diverse fields, fostering cross-sector partnerships to address global challenges effectively.",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: Lightbulb,
      title: "Innovative Research Presentations",
      description: "Witness groundbreaking studies and practical applications through oral, poster and interactive sessions.",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      icon: MessageSquare,
      title: "Thematic Panel Discussions",
      description: "Participate in thought-provoking dialogues on topics like sustainable technology, future education systems and societal resilience.",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: Wrench,
      title: "Workshops & Skill-Building",
      description: "Enhance your expertise with hands-on workshops led by subject matter experts.",
      gradient: "from-amber-500 to-amber-700"
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with peers, industry leaders and policymakers to exchange ideas and forge lasting collaborations.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Award,
      title: "Global Recognition & Awards",
      description: "Celebrate excellence in research and innovation with accolades for outstanding contributions.",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: BookOpen,
      title: "Publication Opportunities",
      description: "Selected papers will be published in reputed Scopus-indexed journals, amplifying their global reach and impact.",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      icon: Target,
      title: "Sustainability & Equity Focus",
      description: "Discussions and initiatives aligned with the Sustainable Development Goals (SDGs), promoting inclusive growth and responsible innovation.",
      gradient: "from-blue-800 to-blue-950"
    },
    {
      icon: Palette,
      title: "Cultural Engagement",
      description: "Experience diverse cultural expressions and traditions, celebrating the richness of the Asia-Pacific region.",
      gradient: "from-amber-500 to-amber-700"
    },
    {
      icon: Globe,
      title: "Hybrid Flexibility",
      description: "Choose to attend in person or virtually, with full access to all conference sessions, materials and networking opportunities.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Trophy,
      title: "CERADA Awards",
      description: "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.",
      gradient: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <div className="">
      <div className=" px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
                  Key Highlights
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl">
            Experience a world-class conference designed to inspire innovation and foster meaningful connections
          </p>
        </div>

        {/* Highlights - Masonry style with varied heights */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`bg-gradient-to-br ${item.gradient} p-8 text-white transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}>
                <item.icon className="w-10 h-10 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
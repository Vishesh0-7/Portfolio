"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: {
    title: string;
    description: string;
  };
}

const tabs: Tab[] = [
  {
    id: "overview",
    label: "Overview",
    content: {
      title: "Engineer by Training, Problem-Solver by Nature",
      description: "I build software, train models, and wrestle data until it behaves. I enjoy working across the stack from designing clean APIs to experimenting with ML models and deploying everything to the cloud. If there’s a complex problem, I’m probably trying to simplify it (and enjoying the process). ",
    },
  },
  {
    id: "software",
    label: "Software",
    content: {
      title: "Full-Stack Sorcerer 🧙‍♂️",
      description: "I write software that’s fast, clean, and built to scale not “works on my machine” code. From backend services to full-stack applications, I care about structure, performance, and maintainability. I enjoy designing systems that don’t just run, but keep running as they grow.",
    },
  },
  {
    id: "aiml",
    label: "AI/ML",
    content: {
      title: "ML Engineer (I Teach Machines New Tricks)",
      description: "I work on teaching machines to find patterns, make predictions, and occasionally surprise me. From data preprocessing to model training and evaluation, I enjoy experimenting, iterating, and squeezing performance out of both supervised and unsupervised approaches. When models fail, I debug them like software because they are.",
    },
  },
  {
    id: "data",
    label: "Data & Cloud",
    content: {
      title: "Data Engineer in Disguise",
      description: "I build data pipelines and cloud systems that move fast, scale well, and don’t fall over under load. From big data workflows to cloud deployments, I focus on reliability and efficiency. If data needs to flow, process, or power ML I make sure it gets there.",
    },
  },
];

/**
 * Tab navigation component for hero section
 * Allows switching between different role-focused content
 */
export function TabHero() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0">
      <div className="max-w-4xl w-full">
        {/* Tab Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 text-sm sm:text-base font-normal tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  : "text-gray-500/50 opacity-50 hover:text-white hover:opacity-80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div
          className={`text-center transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            {activeContent?.title}
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-[#aaa] font-normal leading-relaxed max-w-3xl mx-auto">
            {activeContent?.description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#444] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#444] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

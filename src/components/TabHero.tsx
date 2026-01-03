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
      title: "Software Engineer & AI/ML Specialist",
      description: "Building scalable systems and intelligent solutions across the full stack, from cloud infrastructure to machine learning pipelines.",
    },
  },
  {
    id: "software",
    label: "Software",
    content: {
      title: "Full-Stack Software Engineer",
      description: "Designing and implementing robust, scalable applications with modern frameworks, clean architecture, and best practices.",
    },
  },
  {
    id: "aiml",
    label: "AI/ML",
    content: {
      title: "AI/ML Engineer",
      description: "Developing intelligent systems using deep learning, NLP, and computer vision to solve complex real-world problems.",
    },
  },
  {
    id: "data",
    label: "Data & Cloud",
    content: {
      title: "Data & Cloud Engineer",
      description: "Building data pipelines, analytics platforms, and cloud-native solutions for large-scale distributed systems.",
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
              className={`px-4 py-2 text-sm sm:text-base font-normal tracking-wide transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-[#888] hover:text-white"
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

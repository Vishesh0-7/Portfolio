"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { DownloadButton } from "./DownloadButton";
import { SkillBadge } from "./SkillBadge";
import { EducationCard } from "./EducationCard";
import { skillsData, educationData } from "@/data/resume";

type TabType = "skills" | "education";

/**
 * Resume section component
 * Interactive tabbed interface for skills and education
 */
export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabType>("skills");

  const tabs: { id: TabType; label: string }[] = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ];

  return (
    <SectionWrapper id="resume" className="bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Header with Download Button */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore my professional background, technical skills, and academic achievements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Vishesh_Raju_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Resume
            </a>
            <DownloadButton />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-base font-normal tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  : "text-gray-500/50 opacity-50 hover:text-white hover:opacity-80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8">
              {skillsData.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-6">
              {educationData.map((education) => (
                <EducationCard key={education.id} education={education} />
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

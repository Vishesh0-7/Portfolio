"use client";

import { useState } from "react";
import { BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { DownloadButton } from "./DownloadButton";
import { EducationCard } from "./EducationCard";
import { educationData, skillGroups } from "@/data/resume";

type TabType = "skills" | "education";

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabType>("skills");

  const tabs: { id: TabType; label: string }[] = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ];

  return (
    <SectionWrapper id="resume" className="bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
            Resume
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore my technical skills and academic background in a cleaner, more visual format.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Vishesh_Raju_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-900 hover:shadow-xl"
            >
              <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Resume
            </a>
            <DownloadButton />
          </div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-lg shadow-black/10 dark:bg-gray-100"
                  : "border border-gray-200/80 bg-white/70 text-gray-600 hover:border-blue-400 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-950/70 dark:text-gray-400"
              }`}
            >
              {tab.id === "skills" ? <Sparkles className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "skills" && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 animate-fade-in">
            {skillGroups.map((group, index) => (
              <div
                key={group.category}
                className="group rounded-3xl border border-gray-200/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950/90"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {group.category}
                  </h3>
                  <BadgeCheck className="h-5 w-5 text-blue-600 opacity-70 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6 animate-fade-in">
            {educationData.map((education, index) => (
              <div
                key={education.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <EducationCard education={education} />
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

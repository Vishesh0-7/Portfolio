"use client";

import { useState } from "react";
import { Experience } from "@/data/resume";
import { ChevronDown, ChevronUp, Briefcase, MapPin } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * Experience card component with expandable highlights
 * Shows company, role, duration, achievements, and tech stack
 */
export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {experience.role}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-500" />
            <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
              {experience.company}
            </span>
          </div>
        </div>
      </div>

      {/* Duration and Location */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium">{experience.duration}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {experience.location}
        </span>
      </div>

      {/* Achievements */}
      <ul className="space-y-2 mb-4">
        {experience.achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable Highlights */}
      {experience.highlights && experience.highlights.length > 0 && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide Highlights
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show More Highlights
              </>
            )}
          </button>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Additional Highlights
              </h4>
              <ul className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start"
                  >
                    <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

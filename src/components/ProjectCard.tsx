"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

/**
 * Project card component
 * Displays individual project with thumbnail, details, and hover effects
 * Autoplay video on hover, click to open modal
 */
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Truncate description to 100 characters
  const truncatedDescription =
    project.description.length > 100
      ? project.description.substring(0, 100) + "..."
      : project.description;

  return (
    <div
      className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Video/Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
        {project.videoUrl ? (
          <video
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay={isHovered}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : project.imageUrls && project.imageUrls.length > 0 ? (
          <img
            src={project.imageUrls[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`text-gray-500 dark:text-gray-400 text-sm transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            No Media
          </div>
        )}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center animate-fade-in">
            <span className="text-white text-sm font-medium">Click to view details</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
          {project.category} • {new Date(project.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </p>

        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {isExpanded ? project.description : truncatedDescription}
          </p>
          {project.description.length > 100 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mt-1"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}


"use client";

import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Project detail modal component
 * Full-screen overlay with extended project information
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Video/Image */}
          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
            {project.videoUrl ? (
              <video
                className="w-full h-full object-cover"
                controls
                muted
                autoPlay
                loop
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : project.imageUrls && project.imageUrls.length > 0 ? (
              <img
                src={project.imageUrls[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                No Media Available
              </div>
            )}
          </div>

          {/* Category and Date */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <span className="font-medium">Category:</span>
              {project.category}
            </span>
            <span className="flex items-center gap-2">
              <span className="font-medium">Date:</span>
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              About This Project
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex flex-wrap gap-3 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-sm font-medium transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

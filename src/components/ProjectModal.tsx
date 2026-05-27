"use client";

import { AnimatePresence } from "framer-motion";
import { CalendarDays, ExternalLink, Github, Star, X } from "lucide-react";
import { useEffect } from "react";
import { GitHubProject } from "@/types/github";

interface ProjectModalProps {
  project: GitHubProject;
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
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-gray-200/70 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-200/70 bg-white/95 px-6 py-5 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
            <div>
              {project.pinned && (
                <span className="mb-3 inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Featured
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.displayName}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {project.category}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-gray-200 p-2.5 text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6 p-6">
            <div className="grid gap-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 p-5 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-4 dark:border-gray-800 dark:bg-gray-950/70">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Star className="h-4 w-4 text-amber-400" />
                  Stars
                </div>
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {project.stars.toLocaleString()}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-4 dark:border-gray-800 dark:bg-gray-950/70">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarDays className="h-4 w-4" />
                  Updated
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {new Date(project.updatedAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-4 dark:border-gray-800 dark:bg-gray-950/70">
                <div className="text-sm text-gray-500 dark:text-gray-400">Primary Language</div>
                <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {project.primaryLanguage ?? "Not detected"}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                About This Repository
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.length > 0 ? (
                  project.languages.map((language) => (
                    <span
                      key={language.name}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: language.color || "#64748b" }}
                      />
                      {language.name}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400">No language data available.</span>
                )}
              </div>
            </div>

            {project.topics.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

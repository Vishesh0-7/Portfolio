"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, Filter, Loader2 } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { GitHubProject, GitHubProjectsResponse } from "@/types/github";

/**
 * Projects section component
 * Interactive grid with filtering, sorting, search, and modal details
 */
export function ProjectsSection() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<GitHubProject | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch("/api/projects", {
          cache: "no-store",
        });

        const payload = (await response.json()) as GitHubProjectsResponse;

        if (isMounted) {
          setProjects(payload.projects ?? []);
          setErrors(payload.errors ?? []);
        }
      } catch {
        if (isMounted) {
          setProjects([]);
          setErrors(["Unable to load projects right now."]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.topics.forEach((topic) => tagSet.add(topic));
      if (project.primaryLanguage) {
        tagSet.add(project.primaryLanguage);
      }
    });
    return Array.from(tagSet).sort();
  }, [projects]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    let filtered = [...projects];

    if (normalizedQuery) {
      filtered = filtered.filter(
        (project) =>
          project.displayName.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery) ||
          project.topics.some((topic) => topic.toLowerCase().includes(normalizedQuery)) ||
          project.languages.some((language) => language.name.toLowerCase().includes(normalizedQuery))
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) => {
        const projectTags = new Set([
          ...project.topics,
          project.primaryLanguage ?? "",
          ...project.languages.map((language) => language.name),
        ]);

        return selectedTags.every((tag) => projectTags.has(tag));
      });
    }

    filtered.sort((left, right) => {
      if (left.pinned !== right.pinned) {
        return Number(right.pinned) - Number(left.pinned);
      }

      const starDiff = right.stars - left.stars;
      if (starDiff !== 0) {
        return starDiff;
      }

      return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
    });

    return filtered;
  }, [projects, searchQuery, selectedTags]);

  return (
    <>
      <SectionWrapper id="projects" className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Projects
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Selected repositories synced directly from GitHub. Only featured repos are shown, and each card stays up to date with stars, languages, and the latest activity.
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search repos, topics, or languages"
                className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/80 px-12 py-4 text-gray-900 dark:text-white shadow-sm outline-none transition focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>

            {availableTags.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mr-2">
                  <Filter className="h-4 w-4" />
                  Filter by tag:
                </div>
                {availableTags.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : "bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/70 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {isLoading && (
            <div className="flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400 py-10">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading selected GitHub repositories...
            </div>
          )}

          {!isLoading && errors.length > 0 && (
            <div className="mb-6 rounded-2xl border border-amber-300/50 bg-amber-50/80 dark:bg-amber-950/30 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
              {errors[0]}
            </div>
          )}

          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400 text-center">
            Showing {filteredProjects.length} of {projects.length} selected repositories
          </div>

          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div key={project.name} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                  No repositories match your current filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTags([]);
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}


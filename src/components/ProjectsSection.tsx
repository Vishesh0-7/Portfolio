"use client";

import { useState, useMemo } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { FilterBar } from "./FilterBar";
import { projects, Project } from "@/data/projects";

/**
 * Projects section component
 * Interactive grid with filtering, sorting, search, and modal details
 */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("date");

  // Get all unique technologies for filter
  const availableTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Toggle technology filter
  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      );
    }

    // Technology filter
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechnologies.every((tech) => project.technologies.includes(tech))
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedTechnologies, sortBy]);

  return (
    <>
      <SectionWrapper id="projects" className="bg-black">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore my portfolio of {projects.length} projects across web development, AI/ML, data
            engineering, and more.
          </p>

          {/* Filter Bar */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTechnologies={selectedTechnologies}
            onTechnologyToggle={handleTechnologyToggle}
            sortBy={sortBy}
            onSortChange={setSortBy}
            availableTechnologies={availableTechnologies}
          />

          {/* Results Count */}
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTechnologies([]);
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Project Modal */}
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


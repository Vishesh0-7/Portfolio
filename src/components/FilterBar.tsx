"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTechnologies: string[];
  onTechnologyToggle: (tech: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  availableTechnologies: string[];
}

/**
 * Filter and search bar component for projects
 * Includes search input, technology filters, and sort options
 */
export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedTechnologies,
  onTechnologyToggle,
  sortBy,
  onSortChange,
  availableTechnologies,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-4 mb-8">
      {/* Search and Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="category">Sort by Category</option>
        </select>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
        >
          Filters {selectedTechnologies.length > 0 && `(${selectedTechnologies.length})`}
        </button>
      </div>

      {/* Technology Filters */}
      {showFilters && (
        <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Filter by Technology
            </h3>
            {selectedTechnologies.length > 0 && (
              <button
                onClick={() => selectedTechnologies.forEach((tech) => onTechnologyToggle(tech))}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechnologyToggle(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTechnologies.includes(tech)
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {selectedTechnologies.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
          {selectedTechnologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm"
            >
              {tech}
              <button
                onClick={() => onTechnologyToggle(tech)}
                className="hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { createElement, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { GitHubProject } from "@/types/github";

interface ProjectCardProps {
  project: GitHubProject;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const MotionCard = motion.div;

  return createElement(
    MotionCard,
    {
      whileHover: { y: -6, scale: 1.01 },
      transition: { duration: 0.25 },
      className:
        "group relative h-full overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/95 dark:bg-gray-950/90 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick,
    },
    createElement("div", {
      className:
        "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
    }),
    createElement(
      "div",
      {
        className:
          "relative border-b border-gray-200/70 dark:border-gray-800 px-6 py-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950",
      },
      createElement(
        "div",
        { className: "flex items-start justify-between gap-4 mb-4" },
        createElement(
          "div",
          null,
          project.pinned
            ? createElement(
                "span",
                {
                  className:
                    "mb-3 inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300",
                },
                "Pinned"
              )
            : null,
          createElement(
            "h3",
            {
              className:
                "text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
            },
            project.displayName
          )
        ),
        createElement(
          "div",
          {
            className:
              "rounded-full border border-gray-200 dark:border-gray-800 p-3 text-gray-500 dark:text-gray-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400",
          },
          createElement(Github, { className: "h-5 w-5" })
        )
      ),
      createElement(
        "p",
        { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[3.5rem]" },
        project.description
      )
    ),
    createElement(
      "div",
      { className: "relative px-6 py-5 space-y-5" },
      createElement(
        "div",
        { className: "flex items-center justify-between text-sm text-gray-500 dark:text-gray-400" },
        createElement("span", null, project.category),
        createElement(
          "span",
          null,
          new Date(project.updatedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })
        )
      ),
      createElement(
        "div",
        { className: "flex flex-wrap gap-2" },
        ...project.languages.slice(0, 3).map((language) =>
          createElement(
            "span",
            {
              key: language.name,
              className:
                "inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300",
            },
            createElement("span", {
              className: "h-2.5 w-2.5 rounded-full",
              style: { backgroundColor: language.color || "#64748b" },
            }),
            language.name
          )
        ),
        ...project.topics.slice(0, 2).map((topic) =>
          createElement(
            "span",
            {
              key: topic,
              className:
                "rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 text-xs font-medium text-blue-700 dark:text-blue-300",
            },
            `#${topic}`
          )
        )
      ),
      createElement(
        "div",
        { className: "flex items-center justify-between pt-2" },
        createElement(
          "div",
          { className: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" },
          createElement(Star, { className: "h-4 w-4 text-amber-400" }),
          createElement("span", null, `${project.stars.toLocaleString()} stars`)
        ),
        createElement(
          "div",
          { className: "flex items-center gap-2" },
          project.demoUrl
            ? createElement(
                "span",
                {
                  className:
                    "inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300",
                },
                createElement(ExternalLink, { className: "h-3.5 w-3.5" }),
                "Demo"
              )
            : null,
          createElement(
            "span",
            {
              className:
                "text-xs font-medium text-gray-400 transition-colors group-hover:text-blue-500",
            },
            isHovered ? "Open details" : "Open details"
          )
        )
      )
    )
  );
}

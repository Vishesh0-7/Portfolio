import { ResumeProject } from "@/data/resume";
import { Lightbulb } from "lucide-react";

interface ResumeProjectCardProps {
  project: ResumeProject;
}

/**
 * Resume project card component
 * Mini card for additional projects/research highlights
 */
export function ResumeProjectCard({ project }: ResumeProjectCardProps) {
  return (
    <div className="group p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
          <Lightbulb className="h-4 w-4" />
        </div>
        <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h4>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

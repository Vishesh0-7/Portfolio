import { Education } from "@/data/resume";
import { GraduationCap, MapPin, Award } from "lucide-react";

interface EducationCardProps {
  education: Education;
}

/**
 * Education card component
 * Displays degree, institution, year, and achievements
 */
export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {education.degree}
          </h3>
          <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-1">
            {education.institution}
          </p>
        </div>
      </div>

      {/* Year, Location, and GPA */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium">{education.year}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {education.location}
        </span>
        {education.gpa && (
          <span className="flex items-center gap-1">
            <Award className="h-3 w-3" />
            GPA: {education.gpa}
          </span>
        )}
      </div>

      {/* Relevant Coursework */}
      {education.achievements && education.achievements.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Relevant Coursework
          </h4>
          <ul className="space-y-2">
            {education.achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start"
              >
                <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

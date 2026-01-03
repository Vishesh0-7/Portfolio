import { Skill } from "@/data/resume";

interface SkillBadgeProps {
  skill: Skill;
  showProgress?: boolean;
}

/**
 * Skill badge component with optional progress bar
 * Displays skill name and proficiency level
 */
export function SkillBadge({ skill, showProgress = true }: SkillBadgeProps) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        {showProgress && (
          <span className="text-xs text-gray-500 dark:text-gray-500">
            {skill.proficiency}%
          </span>
        )}
      </div>
      {showProgress && (
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out group-hover:from-blue-600 group-hover:to-purple-700"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      )}
    </div>
  );
}

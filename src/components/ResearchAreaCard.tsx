import { ResearchArea } from "@/data/research";

interface ResearchAreaCardProps {
  area: ResearchArea;
}

/**
 * Research area card component
 * Displays individual research focus area with methods
 */
export function ResearchAreaCard({ area }: ResearchAreaCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {area.title}
      </h3>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {area.description}
      </p>
      
      {/* Methods/Tools */}
      <div className="flex flex-wrap gap-2">
        {area.methods.map((method, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
          >
            {method}
          </span>
        ))}
      </div>
    </div>
  );
}

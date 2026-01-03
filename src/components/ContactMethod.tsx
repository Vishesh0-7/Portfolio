import { LucideIcon } from "lucide-react";

interface ContactMethodProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  color?: string;
}

/**
 * Contact method component
 * Displays clickable contact info with icon and hover effects
 */
export function ContactMethod({ icon: Icon, label, value, href, color = "blue" }: ContactMethodProps) {
  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 hover:text-purple-700 dark:hover:text-purple-300",
    gray: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
  };

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`p-4 rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} transition-all duration-300 group-hover:scale-110 mb-4`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
        {label}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {value}
      </p>
    </a>
  );
}

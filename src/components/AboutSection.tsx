import { SectionWrapper } from "./SectionWrapper";
import { Code, Database, Palette, Zap } from "lucide-react";

/**
 * About section component
 * Brief introduction and key interests/skills
 */
export function AboutSection() {
  const interests = [
    { icon: Code, label: "Full-Stack Development" },
    { icon: Database, label: "Data Engineering" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Zap, label: "Performance Optimization" },
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          I&apos;m a software developer with a passion for building innovative solutions 
          that make a difference. With a strong foundation in computer science and 
          hands-on experience in various technologies, I specialize in creating 
          scalable and efficient applications. I&apos;m always eager to learn new 
          technologies and take on challenging projects.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {interest.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

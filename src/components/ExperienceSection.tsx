import { SectionWrapper } from "./SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";

/**
 * Experience section component
 * Timeline/list view of work experience
 */
export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Research Assistant",
      organization: "New Jersey Institute of Technology",
      duration: " May 2025 - Present",
      points: [
        "Engineered scalable Python-based services for automated 3D microscopy data processing, reducing manual effort by 80% through robust pipeline automation.",
        "Re-architected the VAMPIRE microglial analysis pipeline into modular, production-ready components, improving system reliability and classification performance by 15%.",
        "Designed and optimized distributed batch-processing workflows for datasets 200+ GB, achieving a 2.3x improvement in throughput using parallelization and efficient memory management.",
        "Implemented CI/CD-friendly code structure, version control best practices, and reproducible environments to support collaborative development and scalable deployment."
    ],
    },
    {
      id: 2,
      role: "Student Intern",
      organization: "22by7 Technologies Ltd.",
      duration: "Oct 2023 - Dec 2023",
      points: [
        "Facilitated development of a predictive maintenance project during a 2-month internship.",
        "Demonstrated skills in data analysis and project management, gaining practical insights into tech applications.",
        "Executed project tasks contributing to a model with 97% accuracy."
      ],
    },
  ];

  return (
    <SectionWrapper id="experience" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Experience
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My professional journey and key accomplishments
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950" />
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {exp.organization}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

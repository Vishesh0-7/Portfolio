"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { ResearchAreaCard } from "./ResearchAreaCard";
import { WorkModal } from "./WorkModal";
import { researchAreas, researchWork, ResearchWork } from "@/data/research";
import { Beaker, FileCode } from "lucide-react";

/**
 * Research section component
 * Displays research statement, areas, ongoing/past work, and skills
 */
export function ResearchSection() {
  const [selectedWork, setSelectedWork] = useState<ResearchWork | null>(null);

  const ongoingWork = researchWork.filter((work) => work.type === "ongoing");
  const pastWork = researchWork.filter((work) => work.type === "past");

  return (
    <>
      <SectionWrapper id="research" className="bg-black">
        <div className="max-w-5xl mx-auto">
          {/* Hero Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Research
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Advancing machine learning through interdisciplinary research at the intersection of 
              natural language processing, computer vision, and efficient model architectures. 
              Focused on building robust, interpretable, and scalable AI systems.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded"></span>
              Research Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area) => (
                <ResearchAreaCard key={area.id} area={area} />
              ))}
            </div>
          </div>

          {/* Ongoing Work */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Beaker className="h-7 w-7 text-green-600 dark:text-green-400" />
              Ongoing Research
            </h3>
            <div className="space-y-4">
              {ongoingWork.map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-green-500 dark:hover:border-green-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {work.title}
                    </h4>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex-shrink-0">
                      In Progress
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-semibold">Problem:</span> {work.problemStatement}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.methods.slice(0, 4).map((method, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                    {work.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Past Work */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <FileCode className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              Published Work & Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastWork.map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-purple-500 dark:hover:border-purple-500"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {work.title}
                  </h4>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {work.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.methods.slice(0, 3).map((method, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {work.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Work Detail Modal */}
      <WorkModal
        work={selectedWork}
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </>
  );
}

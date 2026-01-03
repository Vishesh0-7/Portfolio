"use client";

import { X, Github, FileText, Calendar, Database } from "lucide-react";
import { ResearchWork } from "@/data/research";
import { useEffect } from "react";

interface WorkModalProps {
  work: ResearchWork | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Research work detail modal component
 * Full-screen overlay with extended research information
 */
export function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !work) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  work.type === "ongoing"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {work.type === "ongoing" ? "Ongoing" : "Completed"}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {work.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem Statement */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Problem Statement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {work.problemStatement}
            </p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Detailed Description
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {work.fullDescription}
            </p>
          </div>

          {/* Dataset */}
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Database className="h-4 w-4" />
              Dataset
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {work.dataset}
            </p>
          </div>

          {/* Approach */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Approach & Methods
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {work.approach}
            </p>
            <div className="flex flex-wrap gap-2">
              {work.methods.map((method, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30">
            <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Current Status
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-400">
              {work.status}
            </p>
          </div>

          {/* Links */}
          {(work.githubUrl || work.pdfUrl) && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-sm font-medium transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Code
                </a>
              )}
              {work.pdfUrl && (
                <a
                  href={work.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                  onClick={(e) => {
                    // For local PDFs, open directly instead of using target="_blank"
                    if (work.pdfUrl?.startsWith('/')) {
                      e.preventDefault();
                      window.open(work.pdfUrl, '_blank');
                    }
                  }}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Read Paper
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

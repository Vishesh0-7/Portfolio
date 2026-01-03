import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable section wrapper component
 * Provides consistent spacing and layout for main sections
 * Full viewport height with snap scrolling
 */
export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-screen snap-start flex items-center py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

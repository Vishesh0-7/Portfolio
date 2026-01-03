"use client";

import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

/**
 * Intro screen component
 * Displays name animation before fading to main content
 */
export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Call onComplete after fade animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-normal tracking-wider text-white animate-fade-in">
        {`Vishesh Raju`}
      </h1>
    </div>
  );
}

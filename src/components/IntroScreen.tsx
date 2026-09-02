"use client";

import { useCallback, useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

/**
 * Intro screen component
 * Displays name animation before fading to main content
 */
export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const skipIntro = useCallback(() => {
    setFadeOut(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Call onComplete after fade animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    window.addEventListener("keydown", skipIntro);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      window.removeEventListener("keydown", skipIntro);
    };
  }, [onComplete, skipIntro]);

  return (
    <button
      type="button"
      onClick={skipIntro}
      aria-label="Skip intro animation"
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 cursor-pointer ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-normal tracking-wider text-white animate-fade-in">
        {`Vishesh Raju`}
      </h1>
      <span className="absolute bottom-8 text-xs tracking-widest text-gray-500">
        Click or press any key to skip
      </span>
    </button>
  );
}

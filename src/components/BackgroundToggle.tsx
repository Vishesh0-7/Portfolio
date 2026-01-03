"use client";

import { useState, useEffect } from "react";
import { Grid3x3, Square } from "lucide-react";

/**
 * Background Style Toggle Button
 * Switches between plain solid background and grid pattern
 */
export function BackgroundToggle() {
  const [backgroundStyle, setBackgroundStyle] = useState<'plain' | 'grid'>('plain');

  // Load saved preference on mount
  useEffect(() => {
    const savedBgStyle = localStorage.getItem('backgroundStyle');
    if (savedBgStyle === 'grid' || savedBgStyle === 'plain') {
      setBackgroundStyle(savedBgStyle);
    }
  }, []);

  // Toggle background style and trigger re-render of theme
  const toggleBackgroundStyle = () => {
    const newStyle = backgroundStyle === 'plain' ? 'grid' : 'plain';
    setBackgroundStyle(newStyle);
    localStorage.setItem('backgroundStyle', newStyle);
    
    // Trigger a custom event to notify ThemeSlider
    window.dispatchEvent(new CustomEvent('backgroundStyleChange', { detail: { style: newStyle } }));
  };

  return (
    <button
      onClick={toggleBackgroundStyle}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm hover:scale-105"
      aria-label={`Switch to ${backgroundStyle === 'plain' ? 'grid' : 'plain'} background`}
      title={backgroundStyle === 'plain' ? 'Switch to Grid' : 'Switch to Plain'}
    >
      {backgroundStyle === 'plain' ? (
        <Grid3x3 className="w-5 h-5 text-gray-400 transition-colors duration-300" />
      ) : (
        <Square className="w-5 h-5 text-gray-400 transition-colors duration-300" />
      )}
    </button>
  );
}

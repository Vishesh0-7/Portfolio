"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Discrete Theme Dots Slider
 * Click dots to snap between theme values (0-100)
 * Each dot represents a specific theme brightness
 */
export function ThemeSlider() {
  const [selectedDot, setSelectedDot] = useState(0); // 0 = dark, 100 = light
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Discrete dot positions (0 to 100 in steps of 10)
  const dotValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // Load saved theme preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('themeSliderValue');
    if (saved) {
      const value = Number(saved);
      // Snap to nearest dot
      const nearest = dotValues.reduce((prev, curr) => 
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
      );
      setSelectedDot(nearest);
    }
  }, []);

  // Convert HSL to RGB for smooth interpolation
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
      Math.round(255 * f(0)),
      Math.round(255 * f(8)),
      Math.round(255 * f(4)),
    ];
  };

  // Interpolate between two HSL colors
  const interpolateHSL = (
    h1: number,
    s1: number,
    l1: number,
    h2: number,
    s2: number,
    l2: number,
    factor: number
  ) => {
    const h = h1 + (h2 - h1) * factor;
    const s = s1 + (s2 - s1) * factor;
    const l = l1 + (l2 - l1) * factor;
    return { h, s, l };
  };

  // Update theme colors based on selected dot
  useEffect(() => {
    const applyTheme = () => {
      const factor = selectedDot / 100;
      const backgroundStyle = localStorage.getItem('backgroundStyle') || 'plain';

      // Background: Black (0,0,0) → White (0,0,98)
      const bgHSL = interpolateHSL(0, 0, 0, 0, 0, 98, factor);
      const bgRGB = hslToRgb(bgHSL.h, bgHSL.s, bgHSL.l);

      // Text: White (0,0,100) → Black (0,0,5)
      const textHSL = interpolateHSL(0, 0, 100, 0, 0, 5, factor);
      const textRGB = hslToRgb(textHSL.h, textHSL.s, textHSL.l);

      // Accent: Blue for dark → Amber for light
      const accentHSL = interpolateHSL(220, 80, 60, 40, 90, 50, factor);
      const accentRGB = hslToRgb(accentHSL.h, accentHSL.s, accentHSL.l);

    const bgColor = `rgb(${bgRGB[0]}, ${bgRGB[1]}, ${bgRGB[2]})`;
    const textColor = `rgb(${textRGB[0]}, ${textRGB[1]}, ${textRGB[2]})`;
    const accentColor = `rgb(${accentRGB[0]}, ${accentRGB[1]}, ${accentRGB[2]})`;
    const gridColor = 'rgba(128, 128, 128, 0.25)'; // Fixed gray that works on all themes

    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty('--bg-color', bgColor);
    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--accent-color', accentColor);
    root.style.setProperty('--grid-color', gridColor);
    root.style.setProperty('--grid-opacity', '0.12');

      // Apply background based on style
      const backgroundValue = backgroundStyle === 'grid'
        ? bgColor
        : bgColor;

      // Force background and text colors on all elements
      document.documentElement.style.setProperty('background', backgroundValue, 'important');
      document.documentElement.style.setProperty('color', textColor, 'important');
      document.body.style.setProperty('background', backgroundValue, 'important');
      document.body.style.setProperty('color', textColor, 'important');
      
      // Add or remove grid animation class
      if (backgroundStyle === 'grid') {
        document.body.classList.add('grid-animated');
      } else {
        document.body.classList.remove('grid-animated');
      }
      
      // Apply to main element (no background, only color)
      const mainElement = document.querySelector('main');
      if (mainElement) {
        (mainElement as HTMLElement).style.setProperty('background', 'transparent', 'important');
        (mainElement as HTMLElement).style.setProperty('color', textColor, 'important');
      }

      // Apply to all sections (no background, only color)
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        (section as HTMLElement).style.setProperty('background', 'transparent', 'important');
        (section as HTMLElement).style.setProperty('color', textColor, 'important');
      });

      // Apply to all text elements (headings, paragraphs, spans, etc.)
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, div');
      textElements.forEach(el => {
        (el as HTMLElement).style.setProperty('color', textColor, 'important');
      });

      // Apply to all cards and containers with bg-white/dark:bg classes
      const cards = document.querySelectorAll('[class*="bg-white"], [class*="bg-gray"]');
      cards.forEach(card => {
        (card as HTMLElement).style.setProperty('background-color', bgColor, 'important');
        (card as HTMLElement).style.setProperty('color', textColor, 'important');
      });
      
      // Save to localStorage
      localStorage.setItem('themeSliderValue', selectedDot.toString());
    };

    applyTheme();

    // Listen for background style changes (when BackgroundToggle is clicked)
    window.addEventListener('backgroundStyleChange', applyTheme);
    
    return () => {
      window.removeEventListener('backgroundStyleChange', applyTheme);
    };
  }, [selectedDot]);

  // Handle dot click - snap thumb to dot and change theme
  const handleDotClick = (value: number) => {
    setSelectedDot(value);
  };

  // Handle thumb drag
  const handleThumbDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = Math.max(0, Math.min(100, 100 - (y / rect.height) * 100));
    
    // Snap to nearest dot
    const nearest = dotValues.reduce((prev, curr) => 
      Math.abs(curr - percentage) < Math.abs(prev - percentage) ? curr : prev
    );
    setSelectedDot(nearest);
  };

  // Handle mouse move globally when dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(100, 100 - (y / rect.height) * 100));
      
      // Snap to nearest dot
      const nearest = dotValues.reduce((prev, curr) => 
        Math.abs(curr - percentage) < Math.abs(prev - percentage) ? curr : prev
      );
      setSelectedDot(nearest);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dotValues]);

  // Calculate icon properties
  const iconOpacity = 0.4 + (selectedDot / 100) * 0.6;
  const iconColor = `hsl(${45 - selectedDot * 0.2}, ${70 + selectedDot * 0.3}%, ${40 + selectedDot * 0.5}%)`;

  return (
    <div 
      className="flex flex-col items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Compact Button State (default) */}
      {!isHovered && (
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm">
          {selectedDot < 50 ? (
            <Moon className="w-5 h-5 transition-colors duration-300" style={{ color: iconColor, opacity: iconOpacity }} />
          ) : (
            <Sun className="w-5 h-5 transition-colors duration-300" style={{ color: iconColor, opacity: iconOpacity }} />
          )}
        </button>
      )}

      {/* Expanded Dots State (on hover) */}
      {isHovered && (
        <div className="flex flex-col items-center gap-3 p-4 rounded-3xl animate-fade-in bg-gray-900/30 backdrop-blur-md border border-gray-700/30">
          {/* Title */}
          <div className="text-xs font-medium text-gray-400 mb-1">Theme</div>
          
          {/* Dots Container */}
          <div 
            ref={sliderRef}
            className="relative flex flex-col items-center gap-2 py-2"
          >
            {/* Sliding Moon/Sun Icon Thumb */}
            <div
              className="absolute pointer-events-auto transition-all duration-300 ease-out z-10 cursor-grab active:cursor-grabbing"
              style={{
                top: `calc(${((100 - selectedDot) / 100) * 100}% - 20px)`,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${iconColor}, ${iconColor}88)`,
                  boxShadow: selectedDot > 70 
                    ? `0 0 20px ${iconColor}, 0 0 10px ${iconColor}` 
                    : `0 0 10px ${iconColor}`,
                  transform: isDragging ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {selectedDot < 50 ? (
                  <Moon 
                    className="w-5 h-5 transition-all duration-300" 
                    style={{ 
                      color: 'white',
                      opacity: iconOpacity,
                      filter: selectedDot < 30 ? 'brightness(1.2)' : 'none'
                    }} 
                  />
                ) : (
                  <Sun 
                    className="w-5 h-5 transition-all duration-300" 
                    style={{ 
                      color: 'white',
                      opacity: iconOpacity,
                      filter: selectedDot > 70 ? 'brightness(1.3)' : 'none'
                    }} 
                  />
                )}
              </div>
            </div>

            {dotValues.slice().reverse().map((value) => {
              const isSelected = selectedDot === value;
              const dotFactor = value / 100;
              
              // Calculate dot color based on its value
              const dotBgHSL = interpolateHSL(240, 60, 40, 45, 90, 60, dotFactor);
              const dotBgRGB = hslToRgb(dotBgHSL.h, dotBgHSL.s, dotBgHSL.l);
              const dotColor = `rgb(${dotBgRGB[0]}, ${dotBgRGB[1]}, ${dotBgRGB[2]})`;

              return (
                <button
                  key={value}
                  onClick={() => handleDotClick(value)}
                  className="group relative flex items-center justify-center transition-all duration-300 hover:scale-125"
                  style={{
                    width: isSelected ? '16px' : '10px',
                    height: isSelected ? '16px' : '10px',
                  }}
                  aria-label={`Set theme to ${value}%`}
                >
                  {/* Dot */}
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: dotColor,
                      opacity: isSelected ? 0.8 : 0.6,
                      boxShadow: isSelected 
                        ? `0 0 12px ${dotColor}, 0 0 4px ${dotColor}` 
                        : `0 0 6px ${dotColor}`,
                      border: isSelected ? `2px solid ${dotColor}` : 'none',
                    }}
                  />
                  
                  {/* Value label on hover */}
                  <div className="absolute left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium whitespace-nowrap px-2 py-1 rounded bg-gray-800/90 text-white">
                    {value}%
                  </div>
                </button>
              );
            })}
          </div>

          {/* Icon at bottom */}
          <div className="mt-2 flex items-center gap-2">
            {selectedDot < 50 ? (
              <Moon className="w-4 h-4" style={{ color: iconColor, opacity: iconOpacity }} />
            ) : (
              <Sun className="w-4 h-4" style={{ color: iconColor, opacity: iconOpacity }} />
            )}
            <span className="text-xs font-medium" style={{ color: iconColor, opacity: iconOpacity }}>
              {selectedDot}%
            </span>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --bg-color: #000000;
          --text-color: #ffffff;
          --accent-color: #6b9bd1;
          --grid-color: rgba(255, 255, 255, 0.12);
          --grid-opacity: 0.12;
        }

        body, html {
          transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      color 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative;
        }

        body.grid-animated::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 27px,
              var(--grid-color) 27px,
              var(--grid-color) 28px
            );
          pointer-events: none;
          z-index: 1;
          animation: gridFlowVertical 2s ease-out forwards, gridFallVertical 20s linear 2s infinite;
        }

        body.grid-animated::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent 27px,
              var(--grid-color) 27px,
              var(--grid-color) 28px
            );
          pointer-events: none;
          z-index: 1;
          animation: gridFlowHorizontal 2s ease-out forwards, gridSlideHorizontal 15s linear 2s infinite;
        }

        @keyframes gridFlowVertical {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gridFlowHorizontal {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes gridFallVertical {
          0% {
            transform: translateY(-28px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes gridSlideHorizontal {
          0% {
            transform: translateX(-28px);
          }
          100% {
            transform: translateX(0);
          }
        }

        main, section {
          transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      color 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative;
          z-index: 2;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
 
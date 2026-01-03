"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeSlider } from "./ThemeSlider";
import { BackgroundToggle } from "./BackgroundToggle";

/**
 * Sidebar navigation component
 * Minimal, editorial design with cinematic aesthetic
 * Clean text-only navigation with smooth transitions
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },    
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#research", label: "Research", id: "research" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#resume", label: "Resume", id: "resume" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col z-50">
        <div className="px-8 pt-12 pb-16">
          {/* Logo / Name */}
          <Link
            href="#home"
            className="group relative text-2xl font-medium tracking-wide inline-block"
          >
            <span className="text-[#aaa] group-hover:opacity-0 transition-opacity duration-300">
              V
            </span>
            <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 text-white transition-all duration-500 ease-out whitespace-nowrap">
              Vishesh Raju
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-8">
          <ul className="space-y-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      : "text-gray-500/50 opacity-50 hover:text-white hover:opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Slider - Integrated within navigation */}
          <div className="mt-12 flex justify-center">
            <ThemeSlider />
          </div>

          {/* Background Style Toggle */}
          <div className="mt-4 flex justify-center">
            <BackgroundToggle />
          </div>
        </nav>

        {/* Footer in sidebar */}
        <div className="px-8 pb-12 pt-6 text-xs font-medium text-[#888]">
          <p></p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-900">
        <div className="flex justify-between items-center h-16 px-6">
          <Link
            href="#home"
            className="text-sm font-normal tracking-wide text-gray-400"
          >
            VISHESH RAJU
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span className="text-xs font-normal tracking-widest">
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="space-y-8 text-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-2xl font-normal tracking-wide transition-all duration-300 ${
                        activeSection === link.id
                          ? "text-white opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                          : "text-gray-500/50 opacity-50 hover:text-white hover:opacity-80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

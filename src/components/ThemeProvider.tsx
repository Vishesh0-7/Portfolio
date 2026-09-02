"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

/**
 * Theme provider component that wraps the application
 * Enables light/dark mode switching with next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

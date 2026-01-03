import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishesh Raju - Software Developer",
  description: "Personal portfolio website showcasing projects and experience",
  icons: {
    icon: "/web_logo.png",
    shortcut: "/web_logo.png",
    apple: "/web_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme={undefined}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

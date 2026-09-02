import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Vishesh Raju - Software Developer";
const description = "Personal portfolio website showcasing projects and experience";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/web_logo.png",
    shortcut: "/web_logo.png",
    apple: "/web_logo.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: ["/web_logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/web_logo.png"],
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
        <Analytics />
      </body>
    </html>
  );
}

import { Download } from "lucide-react";

interface DownloadButtonProps {
  href?: string;
  className?: string;
}

/**
 * Download resume button component
 * Prominent call-to-action for downloading PDF resume
 */
export function DownloadButton({ href = "/Vishesh_Raju_Resume.pdf", className = "" }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <Download className="h-5 w-5 mr-3" />
      Download PDF Resume
    </a>
  );
}

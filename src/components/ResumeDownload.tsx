'use client'

export default function ResumeDownload({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition ${className}`}
    >
      Contact for Resume
    </a>
  );
}

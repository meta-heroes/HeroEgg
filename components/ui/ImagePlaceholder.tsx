type ImagePlaceholderProps = {
  className?: string;
  aspectRatio?: string;
};

export function ImagePlaceholder({ className = "", aspectRatio }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-400"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
        <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

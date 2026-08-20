import React from 'react';

interface SeekhoLogoProps {
  className?: string;
  size?: number | string;
  showRings?: boolean;
}

/**
 * Seekho Modern App Icon
 * Represents: Knowledge (Open base) → Growth (Ascending sprout & path) → Action (Dynamic forward spark/star)
 * Clean, modern, trustworthy, educational, globally accessible, and recognizable at small sizes.
 */
export const SeekhoLogo: React.FC<SeekhoLogoProps> = ({ 
  className = 'w-10 h-10', 
  size,
  showRings = false 
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={style}
      aria-label="Seekho Logo (Knowledge, Growth, Action)"
    >
      <defs>
        {/* Background Gradient */}
        <linearGradient id="seekho-bg-grad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Knowledge Base Wing Gradient */}
        <linearGradient id="seekho-wing-left" x1="20" y1="40" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="seekho-wing-right" x1="80" y1="40" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>

        {/* Growth Sprout Gradient */}
        <linearGradient id="seekho-growth-grad" x1="50" y1="75" x2="50" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="60%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        {/* Spark of Action Gradient */}
        <linearGradient id="seekho-spark-grad" x1="50" y1="16" x2="50" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Subtle Glow Filter */}
        <filter id="seekho-glow" x="30" y="8" width="40" height="40" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Rounded squircle tile */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="26"
        fill="url(#seekho-bg-grad)"
      />

      {/* Subtle Inner Border */}
      <rect
        x="2.5"
        y="2.5"
        width="95"
        height="95"
        rx="25.5"
        stroke="#ffffff"
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />

      {showRings && (
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#34d399"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      )}

      {/* 1. KNOWLEDGE: Open Twin Foundation Wings / Book of Wisdom */}
      {/* Left Wing */}
      <path
        d="M 50 74 C 42 70 30 63 22 51 C 21.5 50 22.5 49 23.8 49.3 C 32 51.5 42 56.5 50 63 Z"
        fill="url(#seekho-wing-left)"
        fillOpacity="0.9"
      />
      {/* Right Wing */}
      <path
        d="M 50 74 C 58 70 70 63 78 51 C 78.5 50 77.5 49 76.2 49.3 C 68 51.5 58 56.5 50 63 Z"
        fill="url(#seekho-wing-right)"
        fillOpacity="0.95"
      />

      {/* 2. GROWTH: Ascending Growth Leaf & Pathway Pillar */}
      {/* Center Pathway */}
      <path
        d="M 46 76 C 47.5 62 48 48 50 36 C 52 48 52.5 62 54 76 C 52 77 48 77 46 76 Z"
        fill="url(#seekho-growth-grad)"
      />
      {/* Ascending Leaf / Wave */}
      <path
        d="M 50 56 C 41 46 44 36 50 34 C 56 36 59 46 50 56 Z"
        fill="#a7f3d0"
        fillOpacity="0.95"
      />

      {/* 3. ACTION: Dynamic Spark / Star of Impact */}
      {/* Radiant Glow Behind Spark */}
      <circle cx="50" cy="25" r="7" fill="#fbbf24" fillOpacity="0.28" filter="url(#seekho-glow)" />

      {/* 4-Point Precision Diamond Spark */}
      <path
        d="M 50 16 C 50.8 21.5 53.5 24.2 59 25 C 53.5 25.8 50.8 28.5 50 34 C 49.2 28.5 46.5 25.8 41 25 C 46.5 24.2 49.2 21.5 50 16 Z"
        fill="url(#seekho-spark-grad)"
      />

      {/* Center Core Spark Highlight */}
      <circle cx="50" cy="25" r="1.8" fill="#ffffff" />
    </svg>
  );
};

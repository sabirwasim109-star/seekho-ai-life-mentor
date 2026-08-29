import React from 'react';

interface SeekhoLogoProps {
  className?: string;
  size?: number | string;
  showRings?: boolean;
}

/**
 * Seekho Modern Play Store & Brand Icon (Cyber-Lab 3D Glassmorphism Theme)
 * Central Symbol: An open digital book/screen seamlessly merging into a microchip/circuit board (Computer Literacy, AI, Lab & Future Skills),
 * with an upward vector arrow passing through an expanding Impact Circle.
 * Palette: Deep Royal Navy (#0F172A), Electric Neon Cyan (#06B6D4), and Warm Gold (#F59E0B).
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
      aria-label="Seekho Logo (Digital Lab, Microchip, Upward Impact Arrow)"
    >
      <defs>
        {/* Deep Royal Navy to Tech Indigo Background Gradient */}
        <linearGradient id="seekho-cyber-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#0b233a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* 3D Glassmorphism Highlight / Specular Overlay */}
        <linearGradient id="seekho-glass-sheen" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>

        {/* Electric Neon Cyan Circuit Gradient */}
        <linearGradient id="seekho-neon-cyan" x1="15" y1="65" x2="85" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Warm Gold Vector Arrow & Core Spark Gradient */}
        <linearGradient id="seekho-warm-gold" x1="50" y1="12" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Digital Screen/Book Wing Left */}
        <linearGradient id="seekho-screen-left" x1="20" y1="45" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </linearGradient>

        {/* Digital Screen/Book Wing Right */}
        <linearGradient id="seekho-screen-right" x1="80" y1="45" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </linearGradient>

        {/* Soft Futuristic Neon Glow */}
        <filter id="seekho-neon-glow" x="20" y="5" width="60" height="60" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Glass Edge Shadow Filter */}
        <filter id="seekho-inner-depth" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#06b6d4" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. Deep Royal Navy 3D Squircle Base */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="26"
        fill="url(#seekho-cyber-bg)"
      />

      {/* 2. Glassmorphism Specular Sheen & Neon Rim Border */}
      <rect
        x="2.5"
        y="2.5"
        width="95"
        height="95"
        rx="25.5"
        stroke="url(#seekho-glass-sheen)"
        strokeWidth="1.5"
      />

      {/* Ambient Neon Cyan Core Flare */}
      <circle cx="50" cy="52" r="32" fill="#06b6d4" fillOpacity="0.08" filter="url(#seekho-neon-glow)" />

      {/* 3. EXPANDING IMPACT CIRCLES (Concentric Growth Waves) */}
      <circle
        cx="50"
        cy="48"
        r="38"
        stroke="#06b6d4"
        strokeOpacity="0.16"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle
        cx="50"
        cy="48"
        r="28"
        stroke="#22d3ee"
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeDasharray="5 3"
      />
      {(showRings || true) && (
        <circle
          cx="50"
          cy="48"
          r="19"
          stroke="#f59e0b"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      )}

      {/* 4. DIGITAL LAB / MICROCHIP CIRCUIT TRACES & BUS NODES */}
      {/* Circuit Trace Left */}
      <path
        d="M 24 68 L 34 68 L 42 60"
        stroke="#06b6d4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <circle cx="24" cy="68" r="2" fill="#06b6d4" />
      <circle cx="34" cy="68" r="1.5" fill="#22d3ee" />

      {/* Circuit Trace Right */}
      <path
        d="M 76 68 L 66 68 L 58 60"
        stroke="#22d3ee"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <circle cx="76" cy="68" r="2" fill="#22d3ee" />
      <circle cx="66" cy="68" r="1.5" fill="#06b6d4" />

      {/* Microchip Bus Center Core */}
      <path
        d="M 44 76 L 50 72 L 56 76"
        stroke="#06b6d4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* 5. OPEN DIGITAL BOOK / SCREEN FOUNDATION (Digital Wisdom & Literacy) */}
      {/* Left Wing / Screen Panel */}
      <path
        d="M 50 72 C 40 68 28 61 22 49 C 21.5 48 22.8 47 24.2 47.5 C 33 50 42 55.5 50 62.5 Z"
        fill="url(#seekho-screen-left)"
        stroke="#38bdf8"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      {/* Right Wing / Screen Panel */}
      <path
        d="M 50 72 C 60 68 72 61 78 49 C 78.5 48 77.2 47 75.8 47.5 C 67 50 58 55.5 50 62.5 Z"
        fill="url(#seekho-screen-right)"
        stroke="#22d3ee"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />

      {/* Microchip Grid Core Panel */}
      <rect
        x="42"
        y="46"
        width="16"
        height="16"
        rx="4"
        fill="#0f172a"
        fillOpacity="0.9"
        stroke="#06b6d4"
        strokeWidth="1.2"
      />
      {/* Microchip Grid Lines */}
      <line x1="46" y1="46" x2="46" y2="62" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="54" y1="46" x2="54" y2="62" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="42" y1="51" x2="58" y2="51" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="42" y1="57" x2="58" y2="57" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" />

      {/* 6. UPWARD VECTOR ARROW PASSING THROUGH EXPANDING IMPACT CIRCLE */}
      {/* Upward Glow Behind Arrow */}
      <path
        d="M 50 14 L 62 34 L 54 34 L 54 62 L 46 62 L 46 34 L 38 34 Z"
        fill="#f59e0b"
        fillOpacity="0.25"
        filter="url(#seekho-neon-glow)"
      />

      {/* Main Sharp 3D Upward Arrow (Warm Gold) */}
      <path
        d="M 50 15 L 62 34 L 54 34 L 54 58 L 46 58 L 46 34 L 38 34 Z"
        fill="url(#seekho-warm-gold)"
        stroke="#fef08a"
        strokeWidth="0.9"
        filter="url(#seekho-inner-depth)"
      />

      {/* Arrow Center Ridge Highlight */}
      <path
        d="M 50 15 L 50 58"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* Arrow Top Apex Core Spark */}
      <circle cx="50" cy="15" r="2.2" fill="#ffffff" />
      <circle cx="50" cy="15" r="4.5" fill="#fef08a" fillOpacity="0.4" />
    </svg>
  );
};


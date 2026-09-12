import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Smoothly animate progress to 100 over ~1.8s
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => setIsHidden(true), 600);
        }, 300);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-600 ease-in-out ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Center content */}
      <div className="flex flex-col items-center w-full max-w-xs px-6">

        {/* Truck scene */}
        <div className="relative w-full flex flex-col items-center mb-10">

          {/* Truck SVG — bigger, better proportioned */}
          <div className="animate-truck-bounce mb-1">
            <svg
              viewBox="0 0 160 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-52 h-auto drop-shadow-md"
            >
              {/* === TRAILER === */}
              {/* Outer shell */}
              <rect x="2" y="8" width="90" height="46" rx="4" fill="#1e3a8a" />
              {/* Inner panel */}
              <rect x="4" y="10" width="86" height="42" rx="3" fill="#1e3a8a" />

              {/* White logo panel */}
              <rect x="8" y="13" width="78" height="36" rx="3" fill="#ffffff" opacity="0.96" />

              {/* Logo image inside white panel */}
              <image
                href="/assets/images/logo.png"
                x="12"
                y="15"
                width="70"
                height="32"
                preserveAspectRatio="xMidYMid meet"
              />

              {/* === CABIN === */}
              <path
                d="M93 22H116C120 22 124 25 126 30L134 44C135.5 47 136 50 136 53V58H93V22Z"
                fill="#2563eb"
              />
              {/* Cabin window */}
              <path d="M98 27H114L122 40H98V27Z" fill="#bfdbfe" opacity="0.9" />
              {/* Cabin detail line */}
              <line x1="93" y1="22" x2="93" y2="58" stroke="#1d4ed8" strokeWidth="1.5" />

              {/* Headlight glow */}
              <ellipse cx="134" cy="53" rx="3" ry="2.5" fill="#fef08a" opacity="0.9" />
              <polygon points="136,50 155,47 155,59 136,56" fill="#fef08a" opacity="0.25" />

              {/* === WHEEL ARCHES === */}
              <path d="M14 58 A11 11 0 0 1 36 58" fill="#f1f5f9" />
              <path d="M56 58 A11 11 0 0 1 78 58" fill="#f1f5f9" />
              <path d="M108 58 A11 11 0 0 1 130 58" fill="#f1f5f9" />

              {/* === WHEELS === */}
              <g className="animate-spin-wheel" style={{ transformOrigin: '25px 58px' }}>
                <circle cx="25" cy="58" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="25" cy="58" r="3.5" fill="#475569" />
                <line x1="25" y1="50" x2="25" y2="66" stroke="#94a3b8" strokeWidth="1" />
                <line x1="17" y1="58" x2="33" y2="58" stroke="#94a3b8" strokeWidth="1" />
              </g>

              <g className="animate-spin-wheel" style={{ transformOrigin: '67px 58px' }}>
                <circle cx="67" cy="58" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="67" cy="58" r="3.5" fill="#475569" />
                <line x1="67" y1="50" x2="67" y2="66" stroke="#94a3b8" strokeWidth="1" />
                <line x1="59" y1="58" x2="75" y2="58" stroke="#94a3b8" strokeWidth="1" />
              </g>

              <g className="animate-spin-wheel" style={{ transformOrigin: '119px 58px' }}>
                <circle cx="119" cy="58" r="9" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="119" cy="58" r="3.5" fill="#475569" />
                <line x1="119" y1="50" x2="119" y2="66" stroke="#94a3b8" strokeWidth="1" />
                <line x1="111" y1="58" x2="127" y2="58" stroke="#94a3b8" strokeWidth="1" />
              </g>
            </svg>
          </div>

          {/* Road with moving dashes */}
          <div className="w-64 h-[3px] bg-slate-200 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 flex gap-3 animate-road-track" style={{ width: '200%' }}>
              {[...Array(12)].map((_, i) => (
                <span key={i} className="w-8 h-full bg-slate-400/50 rounded-full flex-shrink-0 inline-block" />
              ))}
            </div>
          </div>
        </div>

        {/* Company name */}
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
          {siteConfig.company.name}
        </p>

        {/* Thin progress bar */}
        <div className="w-full h-[3px] bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-700 to-blue-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}

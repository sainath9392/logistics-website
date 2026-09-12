import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsHidden(true);
      }, 600);
    }, 2000);

    return () => clearTimeout(completeTimer);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8">

        {/* Truck Animation */}
        <div className="relative">
          {/* Road */}
          <div className="w-56 h-1 bg-slate-200 rounded-full relative overflow-hidden mt-2">
            <div className="absolute inset-0 flex space-x-4 animate-road-track w-[200%]">
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
              <span className="w-6 h-full bg-slate-400/60 rounded-full inline-block flex-shrink-0"></span>
            </div>
          </div>

          {/* Truck SVG */}
          <div className="animate-truck-bounce absolute -top-14 left-1/2 -translate-x-1/2">
            <svg
              className="w-32 h-16"
              viewBox="0 0 120 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trailer body */}
              <rect x="4" y="8" width="66" height="36" rx="3" fill="#1e40af" />
              <rect x="6" y="10" width="62" height="32" rx="2" fill="#1d3a8a" />

              {/* Trailer text */}
              <text x="37" y="30" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
                {siteConfig.company.logo?.textPrimary || 'LOGISTICS'}
              </text>

              {/* Cabin */}
              <path
                d="M71 18H88C91 18 94 20 96 24L102 36C103 38 103.5 40 103.5 42V48H71V18Z"
                fill="#2563eb"
              />

              {/* Windshield */}
              <path d="M75 22H87L93 33H75V22Z" fill="#bfdbfe" opacity="0.9" />

              {/* Headlight */}
              <circle cx="102" cy="43" r="1.8" fill="#fef08a" />
              <polygon points="103,41 114,39 114,47 103,45" fill="#fef08a" opacity="0.4" />

              {/* Wheel arches */}
              <path d="M12 48 A8 8 0 0 1 28 48" fill="#f8fafc" />
              <path d="M44 48 A8 8 0 0 1 60 48" fill="#f8fafc" />
              <path d="M80 48 A8 8 0 0 1 96 48" fill="#f8fafc" />

              {/* Wheels */}
              <g className="animate-spin-wheel" style={{ transformOrigin: '20px 48px' }}>
                <circle cx="20" cy="48" r="7" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="20" cy="48" r="2.5" fill="#64748b" />
                <line x1="20" y1="42" x2="20" y2="54" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="14" y1="48" x2="26" y2="48" stroke="#94a3b8" strokeWidth="0.8" />
              </g>

              <g className="animate-spin-wheel" style={{ transformOrigin: '52px 48px' }}>
                <circle cx="52" cy="48" r="7" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="52" cy="48" r="2.5" fill="#64748b" />
                <line x1="52" y1="42" x2="52" y2="54" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="46" y1="48" x2="58" y2="48" stroke="#94a3b8" strokeWidth="0.8" />
              </g>

              <g className="animate-spin-wheel" style={{ transformOrigin: '88px 48px' }}>
                <circle cx="88" cy="48" r="7" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="88" cy="48" r="2.5" fill="#64748b" />
                <line x1="88" y1="42" x2="88" y2="54" stroke="#94a3b8" strokeWidth="0.8" />
                <line x1="82" y1="48" x2="94" y2="48" stroke="#94a3b8" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center mt-2">
          <p className="text-sm font-semibold text-slate-400 tracking-widest uppercase">
            {siteConfig.company.name}
          </p>
        </div>

        {/* Simple loading dots */}
        <div className="flex space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>

      </div>
    </div>
  );
}

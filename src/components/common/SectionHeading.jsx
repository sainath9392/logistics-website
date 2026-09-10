import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}) {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 transition-all duration-300 ${
          light 
            ? 'bg-white/10 text-brand-200 border border-white/15' 
            : 'bg-brand-50 text-brand-700 border border-brand-100'
        }`}>
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

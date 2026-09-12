import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Truck } from 'lucide-react';

export default function BrandLogo({ className = "h-14", lightMode = false }) {
  const { logo, name, shortName } = siteConfig.company;

  if (logo.type === 'image' && logo.imageSrc) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <img
          src={logo.imageSrc}
          alt={logo.alt || name}
          className="h-full w-auto object-contain mix-blend-multiply"
        />
        <div className="flex flex-col leading-tight">
          <span className={`text-[15px] font-extrabold tracking-wide ${lightMode ? 'text-white' : 'text-slate-900'}`}>
            Chrome Sai
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-widest ${lightMode ? 'text-slate-300' : 'text-brand-600'}`}>
            Express Service
          </span>
        </div>
      </div>
    );
  }

  // Fallback text logo
  return (
    <div className={`flex items-center space-x-2.5 group cursor-pointer select-none ${className}`}>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105 ${
        lightMode
          ? 'bg-white text-navy-900 shadow-slate-900/10'
          : 'bg-gradient-to-tr from-brand-700 to-brand-500 shadow-brand-500/20'
      }`}>
        <Truck className={`w-5 h-5 ${lightMode ? 'text-brand-700' : 'text-white'}`} />
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-extrabold tracking-wider leading-none transition-colors ${
          lightMode ? 'text-white' : 'text-slate-900'
        }`}>
          {logo.textPrimary || name.split(' ')[0]}
        </span>
        <span className={`text-[10px] font-semibold tracking-widest uppercase leading-tight ${
          lightMode ? 'text-slate-300' : 'text-brand-600'
        }`}>
          {logo.textSecondary || "LOGISTICS"}
        </span>
      </div>
    </div>
  );
}

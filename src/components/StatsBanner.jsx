import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Rocket, Handshake, MapPin, PhoneCall, Headphones, Infinity, Users, Phone, Globe } from 'lucide-react';

const iconMap = {
  Rocket,
  Handshake,
  MapPin,
  PhoneCall,
  Headphones,
  Infinity,
  Users,
  Phone,
  Globe,
};

export default function StatsBanner() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 sm:divide-x sm:divide-slate-100">
          {siteConfig.metrics.map((metric, index) => {
            const IconComp = iconMap[metric.icon];
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 sm:bg-transparent sm:border-0 group transition-all duration-300 hover:bg-slate-50/90"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  {IconComp ? (
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span className="text-xl sm:text-2xl select-none leading-none">
                      {metric.icon}
                    </span>
                  )}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5 sm:mt-2">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                    {metric.subtext}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

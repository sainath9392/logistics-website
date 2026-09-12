import React from 'react';
import { siteConfig } from '../config/siteConfig';
import SectionHeading from './common/SectionHeading';
import { Factory, ShoppingBag, Box, Layers, FlaskConical, HeartPulse, ShieldAlert, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Factory,
  ShoppingBag,
  Box,
  Layers,
  FlaskConical,
  HeartPulse,
  ShieldAlert,
};

export default function IndustriesSection({ onOpenEnquire }) {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Sector Specialization"
          title="Industries We Serve"
          subtitle="Tailored logistics solutions designed to meet the unique demands of each industry vertical."
        />

        {/*
          5-card layout using 6-col grid:
          Row 1: items 0,1,2 → each span 2 cols
          Row 2: items 3,4 → span 2 cols each, starting at col 2 & 4 (centered)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {siteConfig.industries.map((ind, index) => {
            const IconComp = iconMap[ind.icon] || Box;

            let lgColClass = 'lg:col-span-2';
            if (index === 3) lgColClass = 'lg:col-span-2 lg:col-start-2';
            if (index === 4) lgColClass = 'lg:col-span-2 lg:col-start-4';

            return (
              <div
                key={ind.id}
                onClick={onOpenEnquire}
                className={`group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-slate-200/80 transition-all duration-400 sm:col-span-1 ${lgColClass}`}
              >
                {/* Background Image */}
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10 transition-colors duration-300"></div>

                {/* Top Corner Action Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center mb-3.5 group-hover:bg-brand-500 transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed transition-opacity duration-300">
                    {ind.desc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Enquire for {ind.title}</span>
                    <span className="text-white">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

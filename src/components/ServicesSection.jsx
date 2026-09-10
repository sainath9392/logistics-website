import React from 'react';
import { siteConfig } from '../config/siteConfig';
import SectionHeading from './common/SectionHeading';
import { 
  Truck, 
  Package, 
  Warehouse, 
  Route, 
  RotateCcw, 
  ThermometerSnowflake, 
  Snowflake, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const iconMap = {
  Truck,
  Package,
  Warehouse,
  Route,
  RotateCcw,
  ThermometerSnowflake,
  Snowflake,
  ShieldAlert,
};

export default function ServicesSection({ onSelectService, onOpenEnquire }) {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#fafbfc]">
      {/* Expanded wide container for large and wide screens */}
      <div className="max-w-[1680px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        <SectionHeading
          badge="Our Core Offerings"
          title="Logistics & Transport Services"
          subtitle="Simple, fast, and dependable freight solutions tailored for your business needs across India."
        />

        {/* 8-Card Grid: Perfectly proportioned 4-columns x 2-rows on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {siteConfig.services.map((service) => {
            const IconComp = iconMap[service.icon] || Truck;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl xl:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
                    
                    {/* Badge Icon */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 p-2 rounded-xl bg-white/95 backdrop-blur-md text-brand-700 shadow-sm">
                      <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* Title on Image overlay */}
                    <div className="absolute bottom-2 left-3 right-3 sm:bottom-2.5 sm:left-3.5 sm:right-3.5">
                      <h3 className="text-sm sm:text-base xl:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-4 xl:p-5">
                    <p className="text-slate-600 text-xs xl:text-sm leading-relaxed mb-2.5 line-clamp-2 min-h-[34px] xl:min-h-[38px]">
                      {service.shortDesc}
                    </p>

                    {/* Top 2 Key Bullet Points */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start text-xs font-medium text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-600 mr-1.5 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-3.5 sm:px-4 xl:px-5 py-2.5 sm:py-3 flex items-center justify-between border-t border-slate-50 bg-slate-50/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors group/btn py-0.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => onOpenEnquire(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all shadow-xs active:scale-95"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

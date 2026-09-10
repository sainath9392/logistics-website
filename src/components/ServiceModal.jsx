import React from 'react';
import { X, CheckCircle, ArrowRight, Truck } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBookService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog with strict max-width and max-height bounds */}
      <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl max-h-[88vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-slide-up">
        
        {/* Header Image with close button (compact & fully visible) */}
        <div className="relative h-36 sm:h-44 md:h-48 flex-shrink-0 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/20"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge */}
          <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 right-16">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              Logistics Specification
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 leading-tight line-clamp-1">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body (Scrollable interior) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 overscroll-contain">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">
              Executive Overview
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.fullDesc || service.shortDesc}
            </p>
          </div>

          {/* Key Inclusions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Standard Service Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Operational Workflow */}
          {service.workflow && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Operational Workflow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.workflow.map((w, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-brand-50/60 border border-brand-100">
                    <div className="flex items-center space-x-2 text-brand-700 font-extrabold text-xs sm:text-sm mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-brand-200/60 text-[10px] sm:text-xs">{w.step}</span>
                      <span>{w.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions (Always visible at bottom) */}
        <div className="p-3.5 sm:p-4 md:p-5 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5 sm:gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            Close Details
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-700/20 transition-all"
          >
            <Truck className="w-4 h-4 mr-2" />
            <span>Book {service.title}</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Truck, ArrowRight, Phone } from 'lucide-react';

export default function CtaBanner({ onOpenEnquire }) {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-navy-900 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm border border-white/15">
          <Truck className="w-3.5 h-3.5 mr-2 text-accent-orange" />
          <span>High-Capacity Fleet Ready to Deploy</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
          Ready to Transform Your Supply Chain?
        </h2>

        <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with {siteConfig.company.name} to optimize your freight transit, reduce handling costs, and guarantee continuous supply chain visibility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquire}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-brand-900 bg-white hover:bg-slate-100 shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <span>Request Instant Quote</span>
            <ArrowRight className="w-5 h-5 ml-2 text-brand-700 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Speak to Dispatcher</span>
          </a>
        </div>
      </div>
    </section>
  );
}

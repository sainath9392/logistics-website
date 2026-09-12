import React from 'react';
import { siteConfig } from '../config/siteConfig';
import SectionHeading from './common/SectionHeading';
import { Navigation, CheckCircle2, ShieldCheck, FileCheck, Award, Zap } from 'lucide-react';

const iconMap = {
  Navigation,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
};

export default function WhyChooseUs({ onOpenEnquire }) {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="The Operational Edge"
          title="Why Leading Brands Choose Us"
          subtitle="Combining advanced transport intelligence, disciplined operations, and institutional reliability."
        />

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-600">
                  <Zap className="w-3.5 h-3.5 mr-1 text-brand-500" />
                  <span>Enterprise Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Us Spotlight Card */}
        <div id="about" className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
              About Our Organization
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              {siteConfig.company.title}
            </h3>
            <div className="mb-3">
              <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Our Mission</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {siteConfig.company.mission}
              </p>
            </div>
            <div className="mb-6">
              <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Our Vision</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {siteConfig.company.vision}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-t border-white/10 text-slate-300">
              <div>
                <div className="text-2xl font-black text-white">Pan India</div>
                <div className="text-xs text-slate-400 mt-0.5">Network Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">500+</div>
                <div className="text-xs text-slate-400 mt-0.5">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Safe Delivery</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenEnquire}
                className="px-6 py-3 rounded-xl bg-white text-navy-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
              >
                Partner With Us
              </button>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors inline-flex items-center"
              >
                <span>Call Operations Desk</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

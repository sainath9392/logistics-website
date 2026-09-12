import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Clock, Navigation } from 'lucide-react';

export default function HeroSlider({ onOpenEnquire, onSelectService }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = siteConfig.heroSlides;
  const timerRef = useRef(null);

  // Auto-slide function that restarts the timer on demand
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3500); // Transitions every 3.5 seconds
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const handleSelectDot = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const activeSlide = slides[currentSlide];

  // Find the matching full service object if available
  const activeFullService = siteConfig.services.find(s => s.id === activeSlide.id) || siteConfig.services[0];

  return (
    <section 
      id="home"
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white"
    >
      {/* Subtle ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
              <span>{siteConfig.company.badgeText}</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {siteConfig.company.tagline}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {siteConfig.company.slogan}
            </p>

            {/* Trust Micro-Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <Navigation className="w-4 h-4 text-brand-400" />
                <span>Live GPS Tracking</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Safe & Insured Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>24/7 Dispatch Support</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquire(activeSlide.title)}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-accent-orange hover:bg-orange-700 shadow-lg shadow-orange-600/30 hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 hover:text-white backdrop-blur-md transition-all duration-200"
              >
                <span>View All Services</span>
              </a>
            </div>

          </div>

          {/* Right Visual Carousel Card (8 Services with Auto-Slide & Manual Controls) */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl group">
              
              {/* Slide Image Container */}
              <div 
                className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => onSelectService ? onSelectService(activeFullService) : onOpenEnquire(activeSlide.title)}
              >
                <img 
                  key={activeSlide.id}
                  src={activeSlide.image} 
                  alt={activeSlide.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent"></div>

                {/* Service Tag & Slide Count Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-300">
                    {activeSlide.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-black/50 backdrop-blur-md text-[11px] font-mono font-bold text-white/80">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>

                {/* Slide Text Content Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {activeSlide.title}
                    </h3>
                    <span className="text-xs text-brand-400 font-semibold hidden sm:inline-block">Click to view →</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {activeSlide.subtitle}
                  </p>
                </div>
              </div>

              {/* Slider Controls Bar (Manual buttons + 8 auto-slide dots) */}
              <div className="p-3 sm:p-4 flex items-center justify-between border-t border-white/10 bg-slate-950/90">
                
                {/* Slide Dot Indicators */}
                <div className="flex items-center space-x-1 sm:space-x-1.5 flex-wrap py-1">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id || idx}
                      onClick={() => handleSelectDot(idx)}
                      aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? 'w-5 sm:w-6 bg-brand-400 shadow-sm shadow-brand-400/50' 
                          : 'w-2 bg-white/25 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Manual Left/Right Arrows */}
                <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                  <button 
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white active:scale-95 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white active:scale-95 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

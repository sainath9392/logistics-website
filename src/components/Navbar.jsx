import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import BrandLogo from './common/BrandLogo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Truck, 
  Package,
  Warehouse,
  Route,
  RotateCcw,
  ThermometerSnowflake,
  Snowflake,
  ArrowRight,
  Shield,
  Layers,
  Repeat,
  PackageCheck,
  Factory,
  ShoppingBag,
  Box,
  HeartPulse,
  FlaskConical,
  ShieldAlert
} from 'lucide-react';

const iconMap = {
  Truck,
  Package,
  Warehouse,
  Route,
  RotateCcw,
  ThermometerSnowflake,
  Snowflake,
  Repeat,
  PackageCheck,
  Layers,
  Factory,
  ShoppingBag,
  Box,
  FlaskConical,
  HeartPulse,
  ShieldAlert,
  Shield
};

export default function Navbar({ onOpenEnquire, onSelectService }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordions, setMobileAccordions] = useState({
    services: false,
    industries: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileAccordion = (key) => {
    setMobileAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  const headerRef = React.useRef(null);
  const [navbarHeight, setNavbarHeight] = React.useState(88);

  React.useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setNavbarHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [scrolled]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm py-3 border-b border-slate-200/80' 
          : 'bg-white py-4 sm:py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0">
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={(e) => handleNavClick(e, '#services')}
                className="flex items-center px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-brand-700' : 'text-slate-400'
                }`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                activeDropdown === 'services' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50">
                    Logistics Capabilities
                  </div>
                  <div className="py-1 space-y-0.5 max-h-80 overflow-y-auto">
                    {siteConfig.services.map((service) => {
                      const IconComp = iconMap[service.icon] || Truck;
                      return (
                        <button
                          key={service.id}
                          onClick={() => {
                            onSelectService(service);
                            setActiveDropdown(null);
                          }}
                          className="w-full flex items-start p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="p-2 rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-colors mt-0.5 flex-shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors">
                              {service.title}
                            </p>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {service.shortDesc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={(e) => handleNavClick(e, '#industries')}
                className="flex items-center px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors group"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-brand-700' : 'text-slate-400'
                }`} />
              </button>

              <div className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                activeDropdown === 'industries' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50">
                    Sectors We Power
                  </div>
                  <div className="py-1 space-y-0.5 max-h-72 overflow-y-auto">
                    {siteConfig.industries.map((ind) => {
                      const IconComp = iconMap[ind.icon] || Box;
                      return (
                        <a
                          key={ind.id}
                          href="#industries"
                          onClick={(e) => {
                            handleNavClick(e, '#industries');
                            setActiveDropdown(null);
                          }}
                          className="flex items-center p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors flex-shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
                            {ind.title}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="#why-us" 
              onClick={(e) => handleNavClick(e, '#why-us')}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors"
            >
              Why Us
            </a>

            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors"
            >
              About
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-lg transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-600" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <button 
              onClick={onOpenEnquire}
              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 shadow-sm shadow-brand-700/20 active:scale-95 transition-all duration-200 group"
            >
              <Truck className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
              <span>{siteConfig.actions.primaryCTA}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button 
              onClick={onOpenEnquire}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-700"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay — starts exactly below navbar */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-x-0 bottom-0 bg-black/20 z-30 lg:hidden"
          style={{ top: `${navbarHeight}px` }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden relative z-40 ${
        mobileMenuOpen ? 'max-h-[85vh] opacity-100 border-b border-slate-200 bg-white shadow-xl' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="block px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Home
          </a>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => toggleMobileAccordion('services')}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordions.services ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordions.services && (
              <div className="pl-3 pr-2 py-1 space-y-0 bg-slate-50/50 rounded-xl my-0.5">
                {siteConfig.services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSelectService(s);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-brand-700 block font-medium"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Industries Accordion */}
          <div>
            <button
              onClick={() => toggleMobileAccordion('industries')}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordions.industries ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordions.industries && (
              <div className="pl-3 pr-2 py-1 space-y-0 bg-slate-50/50 rounded-xl my-0.5">
                {siteConfig.industries.map((ind) => (
                  <a
                    key={ind.id}
                    href="#industries"
                    onClick={(e) => handleNavClick(e, '#industries')}
                    className="py-1.5 px-2 text-xs text-slate-600 hover:text-brand-700 block font-medium"
                  >
                    {ind.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#why-us"
            onClick={(e) => handleNavClick(e, '#why-us')}
            className="block px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Why Us
          </a>

          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="block px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block px-3 py-1.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Contact
          </a>

          <div className="pt-3 space-y-2 border-t border-slate-100">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-600" />
              Call {siteConfig.contact.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquire();
              }}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-700 text-white text-sm font-semibold hover:bg-brand-800"
            >
              <Truck className="w-4 h-4 mr-2" />
              {siteConfig.actions.primaryCTA}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

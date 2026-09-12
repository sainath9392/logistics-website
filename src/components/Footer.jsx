import React from 'react';
import { siteConfig } from '../config/siteConfig';
import BrandLogo from './common/BrandLogo';
import { Phone, Mail, MapPin, ArrowRight, Truck } from 'lucide-react';

export default function Footer({ onOpenEnquire, onSelectService }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-slate-600 text-sm leading-relaxed">
              {siteConfig.footer.aboutText}
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-sm font-semibold">
              <a 
                href="#about" 
                className="text-brand-700 hover:text-brand-900 transition-colors inline-flex items-center"
              >
                <span>About Our Network</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <button 
                onClick={onOpenEnquire} 
                className="text-accent-orange hover:text-orange-700 transition-colors inline-flex items-center text-left"
              >
                <span>Instant Truck Booking</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services Portfolio
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-sm text-slate-600 hover:text-brand-700 transition-colors text-left flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-600 mr-2.5 transition-colors"></span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.industries.map((ind) => (
                <li key={ind.id}>
                  <a
                    href="#industries"
                    className="text-sm text-slate-600 hover:text-brand-700 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-600 mr-2.5 transition-colors"></span>
                    <span>{ind.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Corporate Desk
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-brand-700 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${siteConfig.contact.phoneRaw}`} 
                    className="hover:text-brand-700 font-semibold text-slate-800 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <div className="text-xs text-slate-400">{siteConfig.contact.workingHours}</div>
                </div>
              </li>

              <li className="flex items-start">
                <Mail className="w-4 h-4 text-brand-700 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`} 
                    className="hover:text-brand-700 font-medium transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-700 mr-3 mt-0.5 flex-shrink-0" />
                <a 
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-700 leading-relaxed text-xs sm:text-sm text-slate-600 transition-colors"
                >
                  {siteConfig.contact.address}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-center text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.company.legalName}. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

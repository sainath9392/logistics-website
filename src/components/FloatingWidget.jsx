import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Truck, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function FloatingWidget({ onOpenEnquire }) {
  const { phoneRaw, whatsappLink, googleMapsUrl, phone } = siteConfig.contact;

  return (
    <>
      {/* 1. Mobile Quick-Access Floating Dock (< sm) */}
      <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
        <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 p-2 flex items-center justify-between gap-2">
          
          {/* Quick Call */}
          <a
            href={`tel:${phoneRaw}`}
            aria-label="Call Now"
            className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-400" />
            <span>Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold active:scale-95 transition-all border border-[#25D366]/30"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Book Action */}
          <button
            onClick={onOpenEnquire}
            className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-accent-orange hover:bg-orange-700 text-white text-xs font-bold shadow-md shadow-orange-600/30 active:scale-95 transition-all"
          >
            <Truck className="w-3.5 h-3.5 mr-1.5" />
            <span>Book</span>
          </button>

        </div>
      </div>

      {/* 2. Desktop Floating Widget (sm and up) */}
      <aside aria-label="Quick actions" className="hidden sm:flex fixed bottom-5 right-5 z-40 flex-col items-end space-y-2.5">
        
        {/* Book Truck Action */}
        <button
          onClick={onOpenEnquire}
          aria-label="Book Truck / Request Instant Freight Quote"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-accent-orange hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Truck className="w-5 h-5 animate-pulse-subtle" />
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Book Truck / Quote
          </span>
        </button>

        {/* Call Action */}
        <a
          href={`tel:${phoneRaw}`}
          aria-label={`Call directly at ${phone}`}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-700 hover:bg-brand-50 border border-slate-200/80 shadow-lg shadow-slate-300/40 hover:shadow-slate-400/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Call Now
          </span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            WhatsApp Chat
          </span>
        </a>

        {/* Directions Action */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Directions on Google Maps"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-900 text-white shadow-lg shadow-slate-900/30 hover:shadow-slate-900/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <MapPin className="w-5 h-5" />
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Directions
          </span>
        </a>

      </aside>
    </>
  );
}

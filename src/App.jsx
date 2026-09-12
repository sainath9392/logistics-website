import React, { useState, useEffect } from 'react';
import { siteConfig } from './config/siteConfig';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StatsBanner from './components/StatsBanner';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import ServiceModal from './components/ServiceModal';
import EnquireModal from './components/EnquireModal';
import Preloader from './components/Preloader';

export default function App() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [enquireServicePreselect, setEnquireServicePreselect] = useState('');
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  // Sync document title dynamically with single-source-of-truth config
  useEffect(() => {
    document.title = `${siteConfig.company.name} | Logistics & Supply Chain Management`;
  }, []);

  // Prevent background scroll on mobile and desktop when any modal is open
  useEffect(() => {
    if (isEnquireOpen || activeServiceModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isEnquireOpen, activeServiceModal]);

  const handleOpenEnquire = (serviceName = '') => {
    setEnquireServicePreselect(typeof serviceName === 'string' ? serviceName : '');
    setIsEnquireOpen(true);
  };

  const handleSelectService = (service) => {
    setActiveServiceModal(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 selection:bg-brand-500 selection:text-white">
      
      {/* Animated Truck Preloader */}
      <Preloader />

      {/* Top Navigation */}
      <Navbar 
        onOpenEnquire={() => handleOpenEnquire('')}
        onSelectService={handleSelectService}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero with interactive Slider */}
        <HeroSlider 
          onOpenEnquire={(service) => handleOpenEnquire(service)}
          onSelectService={handleSelectService}
        />

        {/* 2. Key Metrics Strip */}
        <StatsBanner />

        {/* 3. Core Logistics Services */}
        <ServicesSection 
          onSelectService={handleSelectService}
          onOpenEnquire={() => handleOpenEnquire('')}
        />

        {/* 4. Industry Verticals */}
        <IndustriesSection 
          onOpenEnquire={() => handleOpenEnquire('')}
        />

        {/* 5. Why Choose Us & About Organization */}
        <WhyChooseUs 
          onOpenEnquire={() => handleOpenEnquire('')}
        />

        {/* 6. Lead Conversion Banner */}
        <CtaBanner 
          onOpenEnquire={() => handleOpenEnquire('')}
        />
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenEnquire={() => handleOpenEnquire('')}
        onSelectService={handleSelectService}
      />

      {/* Sticky Bottom-Right Floating Quick Action Widget */}
      <FloatingWidget 
        onOpenEnquire={() => handleOpenEnquire('')}
      />

      {/* Interactive Service Detail Specification Modal */}
      {activeServiceModal && (
        <ServiceModal
          service={activeServiceModal}
          onClose={() => setActiveServiceModal(null)}
          onBookService={(serviceTitle) => handleOpenEnquire(serviceTitle)}
        />
      )}

      {/* Quick Quote & Truck Booking Modal */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        preselectedService={enquireServicePreselect}
      />

    </div>
  );
}

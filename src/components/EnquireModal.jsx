import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { X, Truck, CheckCircle2, Send, MapPin, Calendar, Building, Phone, Mail, User, AlertCircle, MessageSquare } from 'lucide-react';

export default function EnquireModal({ isOpen, onClose, preselectedService = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    serviceType: preselectedService || 'Full Truck Load (FTL)',
    origin: '',
    destination: '',
    cargoDetails: '',
    expectedDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const accessKey = siteConfig.form?.web3formsAccessKey || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Graceful fallback for local development if access key isn't provided yet
    if (!accessKey) {
      console.info("Web3Forms access key not configured yet. Set VITE_WEB3FORMS_ACCESS_KEY in .env. Running demo submission.");
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 700);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Freight Booking: ${formData.serviceType} (${formData.origin} to ${formData.destination})`,
          from_name: "Chrome Sai Express Web Inquiry",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company || "Not provided",
          service_required: formData.serviceType,
          pickup_origin: formData.origin,
          drop_destination: formData.destination,
          cargo_details: formData.cargoDetails || "Not provided",
        }),
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to dispatch email. Please call us directly.");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setError(err.message || "Failed to submit form. Please check your connection or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Chrome Sai Express,\nI want to book a truck or get a freight quote.\n\n*Service:* ${formData.serviceType}\n*Route:* ${formData.origin || 'N/A'} -> ${formData.destination || 'N/A'}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Cargo:* ${formData.cargoDetails || 'N/A'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog with strict bounds */}
      <div className="relative w-full max-w-xl sm:max-w-2xl max-h-[88vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-slide-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 to-brand-900 px-5 sm:px-7 py-4 sm:py-5 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <Truck className="w-5 h-5 text-accent-orange" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Book a Truck / Request Freight Quote</h3>
              <p className="text-xs text-slate-300 mt-0.5">Quick response guaranteed within 30 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close form modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form or Success State */}
        <div className="p-5 sm:p-7 flex-1 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Inquiry Dispatched Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our fleet dispatcher has received your request for <strong>{formData.serviceType}</strong> and will contact you at <strong>{formData.phone}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/${siteConfig.contact.phoneRaw.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Also Confirm on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">{error}</p>
                    <p className="mt-1 text-xs text-red-600">
                      You can also reach our dispatch desk directly via <a href={`tel:${siteConfig.contact.phoneRaw}`} className="underline font-bold">Call</a> or <a href={`https://wa.me/${siteConfig.contact.phoneRaw.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">WhatsApp</a>.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Required Service
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  {siteConfig.services.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Transit Route Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-brand-600" />
                    <span>Origin City / Pincode</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="e.g. Coimbatore, TN"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-brand-600" />
                    <span>Destination City / Pincode</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Pune, MH / Mumbai"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>Your Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. S. Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>Contact Phone</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>Work Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center">
                    <Building className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>Company Name</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Manufacturing Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Cargo Weight & Specifications */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Cargo Description & Estimated Weight (MT)
                </label>
                <textarea
                  rows="2"
                  name="cargoDetails"
                  value={formData.cargoDetails}
                  onChange={handleChange}
                  placeholder="e.g. 15 MT auto components, required 32ft MX container truck..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-accent-orange hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 flex items-center justify-center transition-all disabled:opacity-75"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Submit Freight Booking Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

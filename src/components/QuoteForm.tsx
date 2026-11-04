'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle2, Shield, Sparkles, Send, Clock, Calendar } from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST } from '@/data/siteData';

interface QuoteFormProps {
  initialService?: string;
  initialLocation?: string;
  compact?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService = 'dryer-vent-cleaning',
  initialLocation = 'midlothian-tx',
  compact = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '76065',
    service: initialService,
    propertyType: 'single-family',
    dryerLocation: 'first-floor',
    preferredTime: 'morning',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous dispatch request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Quote Request Received!
        </h3>
        <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
          Thank you, <strong className="text-slate-900">{formData.name || 'valued customer'}</strong>. A certified Midlothian technician is reviewing your project details. We will call you within 15 minutes at <strong className="text-sky-700">{formData.phone}</strong>.
        </p>

        <div className="mt-6 pt-6 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs text-slate-500 font-semibold">Need immediate same-day service?</span>
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-amber-400 font-bold text-sm hover:bg-slate-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {SITE_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden ${compact ? 'p-6' : 'p-6 sm:p-8'}`}>
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Instant Free Estimate
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Get Your Free Dryer Vent Quote
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Fast, zero-obligation pricing from Midlothian certified technicians.
          </p>
        </div>

        <div className="hidden sm:block text-right">
          <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">Or Call Direct</span>
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="text-amber-600 font-black text-base hover:text-amber-700 transition-colors"
          >
            {SITE_INFO.phoneFormatted}
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Johnson"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(469) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Requested *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.slug}>
                  {srv.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Zip Code *
            </label>
            <input
              type="text"
              required
              placeholder="76065 (Midlothian)"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Property Type
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            >
              <option value="single-family">Single Family Home</option>
              <option value="townhouse-condo">Townhouse / Condo</option>
              <option value="apartment-complex">Apartment Complex / Multi-Family</option>
              <option value="commercial-laundromat">Commercial / Laundromat / Business</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Vent Exit Location
            </label>
            <select
              value={formData.dryerLocation}
              onChange={(e) => setFormData({ ...formData, dryerLocation: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
            >
              <option value="ground-wall">First Floor Exterior Wall</option>
              <option value="second-floor-wall">Second Floor Exterior Wall</option>
              <option value="roof-exit">Rooftop Exhaust Cap</option>
              <option value="unsure">Not Sure / Needs Inspection</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Describe Any Issues (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Clothes taking 2 cycles to dry, burning smell, bird nest suspected..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm transition-all text-slate-900 bg-slate-50/50"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-white font-extrabold text-base shadow-lg shadow-sky-600/30 hover:shadow-xl hover:from-sky-700 hover:to-sky-900 transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          {loading ? (
            <span>Processing your request...</span>
          ) : (
            <>
              <span>Get Free Estimate & Schedule</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            100% Privacy Guaranteed
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            Avg. 15-Min Response
          </span>
          <span>•</span>
          <span>No Obligation</span>
        </div>
      </form>
    </div>
  );
};

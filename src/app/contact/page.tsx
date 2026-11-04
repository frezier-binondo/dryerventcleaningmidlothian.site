import React from 'react';
import { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink as ExtIcon,
  Wind,
  Flame,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST, EXTERNAL_AUTHORITIES } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuoteForm } from '@/components/QuoteForm';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Contact Dryer Vent Cleaning Midlothian TX | Free Quote & Scheduling',
  description:
    'Contact Dryer Vent Cleaning Midlothian, TX for same-day dryer vent cleaning, lint extraction, and duct repair. Call (469) 336-3767 or request a free quote online.',
  alternates: {
    canonical: `${SITE_INFO.domain}/contact`,
  },
};

export default function ContactPage() {
  const authority = EXTERNAL_AUTHORITIES[4]; // City of Midlothian

  return (
    <div className="bg-slate-50 text-slate-800">
      <Breadcrumbs items={[{ label: 'Contact Us & Free Quote' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Fast Local Dispatch Across Ellis County
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Contact Dryer Vent Cleaning Midlothian
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about your dryer exhaust system or need emergency service for an overheated appliance? Call us directly or submit your details for an immediate quote.
          </p>

          <div className="pt-2">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/25 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {SITE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Direct Contact Information
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                We Are Here to Help Keep Your Home Safe
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our central dispatch facility is conveniently located near Midlothian Parkway and US-287, enabling rapid 20-minute response times for single-family residences, townhomes, and commercial facilities throughout Midlothian and neighboring communities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Phone Support</h4>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="block text-base font-black text-sky-700 hover:text-amber-600 transition-colors"
                >
                  {SITE_INFO.phoneFormatted}
                </a>
                <p className="text-[11px] text-slate-500">Same-day dispatch & 24/7 emergency calls</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Email Inquiries</h4>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="block text-xs font-bold text-slate-800 hover:text-sky-600 transition-colors truncate"
                >
                  {SITE_INFO.email}
                </a>
                <p className="text-[11px] text-slate-500">Fast response for bids & HOA inquiries</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Operating Hours</h4>
                <p className="text-xs font-semibold text-slate-800">
                  {SITE_INFO.hours}
                </p>
                <p className="text-[11px] text-slate-500">Flexible weekend appointments</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Service Headquarters</h4>
                <p className="text-xs font-semibold text-slate-800">
                  {SITE_INFO.address.full}
                </p>
                <p className="text-[11px] text-slate-500">Staged in Midlothian, TX 76065</p>
              </div>
            </div>

            {/* Embedded Interactive Map Card in Contact Page */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Midlothian Dispatch Headquarters Map
                  </h4>
                  <p className="text-xs text-slate-500">
                    Centrally located to serve Ellis County and South DFW.
                  </p>
                </div>
                <a
                  href={SITE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-amber-600 underline"
                >
                  <span>Open Directions</span>
                  <ExtIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  src={SITE_INFO.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Midlothian Dispatch Location Map"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* 5 In-body Internal Links & 1 External Authority Requirement */}
            <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Helpful Links & Municipal Safety</h4>
              <p>
                For official municipal and building code resources, visit the{' '}
                <ExternalLink href={authority.url}>
                  {authority.anchor}
                </ExternalLink>.
              </p>
              <p className="pt-1">
                You can also learn about our{' '}
                <InternalLink href="/services/dryer-vent-cleaning">
                  dryer vent cleaning
                </InternalLink>
                , read our{' '}
                <InternalLink href="/services/dryer-vent-inspection">
                  camera inspection details
                </InternalLink>
                , review our{' '}
                <InternalLink href="/services/dryer-vent-repair">
                  repair services
                </InternalLink>
                , or check out our local hubs in{' '}
                <InternalLink href="/locations/midlothian-tx">Midlothian</InternalLink> and{' '}
                <InternalLink href="/locations/ovilla-tx">Ovilla</InternalLink>.
              </p>
            </div>
          </div>

          {/* Right Column: Instant Quote Form */}
          <div className="lg:col-span-6 sticky top-24">
            <QuoteForm initialService="dryer-vent-cleaning" initialLocation="midlothian-tx" />
          </div>
        </div>
      </section>
    </div>
  );
}

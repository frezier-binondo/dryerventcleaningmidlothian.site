import React from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import {
  SITE_INFO,
  SERVICES_LIST,
  LOCATIONS_LIST,
  EXTERNAL_AUTHORITIES,
} from '@/data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Visual Google Map Section as explicitly requested in prompt */}
      <section className="bg-slate-900 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Local Service Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Midlothian Service Hub & Ellis County Coverage
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Centrally staged in Midlothian, TX to dispatch equipped service vans across Lawson Farms, Brandi Ridge, Mountain Peak, Waxahachie, Red Oak, Ovilla, and Cedar Hill.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all group"
              >
                <span>Open in Google Maps</span>
                <ExtIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Embedded Visible Map Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-950">
            <iframe
              src={SITE_INFO.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dryer Vent Cleaning Midlothian Service Map"
              className="w-full h-full filter saturate-105 contrast-105"
            />
            {/* Map Overlay Badge Card */}
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl shadow-xl max-w-xs hidden sm:block text-slate-100">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <Wind className="w-4 h-4 text-sky-400" />
                <span>Dryer Vent Cleaning Midlothian</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Midlothian Pkwy & US-287, Midlothian, TX 76065
              </p>
              <div className="mt-2 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                <Clock className="w-3 h-3" /> Mon - Sat: 7AM - 7PM (Emergency Available)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info & Callout */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-amber-500 flex items-center justify-center text-white font-black shadow-md">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  Dryer Vent Cleaning
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest text-amber-400">
                  Midlothian, Texas
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted local specialists for residential and commercial dryer vent cleaning, lint extraction, duct repairs, airflow diagnostic testing, and wildlife-proof exterior vent cover installations throughout Ellis County and southern DFW.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Direct Scheduling & Emergency:</span>
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="font-bold text-white hover:text-amber-400 transition-colors text-base"
                  >
                    {SITE_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Headquarters Address:</span>
                  <span className="text-slate-300 font-medium">
                    {SITE_INFO.address.full}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Operating Hours:</span>
                  <span className="text-slate-300 font-medium">
                    {SITE_INFO.hours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                NFPA 211 Compliant
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Fire Hazard Specialists
              </span>
            </div>
          </div>

          {/* Col 2: The 9 Core Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Our 9 Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-amber-400 hover:underline transition-colors block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Locations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Service Locations
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {LOCATIONS_LIST.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-amber-400 hover:underline transition-colors block py-0.5"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link
                  href="/locations"
                  className="text-sky-400 hover:text-sky-300 font-semibold block"
                >
                  View All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Industry Safety Authorities & Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Safety Authorities
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              {EXTERNAL_AUTHORITIES.map((auth, idx) => (
                <li key={idx}>
                  <a
                    href={auth.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 underline decoration-teal-500/40 underline-offset-2 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{auth.name}</span>
                    <ExtIcon className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-6 mb-3 border-b border-slate-800 pb-2">
              Explore
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Lint & Safety Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Request Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Dryer Vent Cleaning Midlothian. All rights reserved. Locally operated lead referral & professional ventilation maintenance service.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Referral Disclosure
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

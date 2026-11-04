import React from 'react';
import Link from 'next/link';
import { Phone, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface CTAProps {
  title?: string;
  subtitle?: string;
  cityName?: string;
}

export const CallToActionBanner: React.FC<CTAProps> = ({
  title = "Protect Your Home From Preventable Dryer Fires",
  subtitle = "Over 15,000 dryer fires occur every year due to lint buildup. Restore full airflow, cut drying times in half, and protect your loved ones today.",
  cityName = "Midlothian",
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 my-16 shadow-2xl border border-sky-900/40">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Local {cityName} Emergency & Routine Service</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            Same-Day Dispatch Available
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            100% Satisfaction Guaranteed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            Licensed & Fully Insured
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Call {SITE_INFO.phoneFormatted}</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all"
          >
            <span>Request Free Online Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

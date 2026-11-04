import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Wind,
  Wrench,
  Compass,
  Search,
  Building2,
  Flame,
  ShieldAlert,
  Activity,
  Layers,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST, EXTERNAL_AUTHORITIES } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuoteForm } from '@/components/QuoteForm';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Dryer Vent Services Midlothian TX | Cleaning, Repair, Installation & Testing',
  description:
    'Comprehensive dryer vent services in Midlothian, TX: cleaning, duct repair, new installation, rerouting, camera inspection, and commercial laundry maintenance. Call (469) 336-3767.',
  alternates: {
    canonical: `${SITE_INFO.domain}/services`,
  },
};

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Complete Ventilation Silo & Safety Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Professional Dryer Vent Services in Midlothian, TX
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From heavy-duty rotary lint extraction and damaged pipe resealing to video camera inspections and custom rooftop rerouting, our Ellis County technicians deliver certified solutions for optimal airflow, home fire protection, and appliance longevity.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Advice: {SITE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro In-Depth Text (800+ Words Silo Plan Target) */}
        <div className="prose prose-slate max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Engineering Safer, More Efficient Dryer Exhaust Systems in North Texas
          </h2>
          <p>
            A clothes dryer is an indispensable household appliance, yet its hidden exhaust duct is frequently the most neglected mechanical component in modern homes. According to federal fire prevention data from the{' '}
            <ExternalLink href="https://www.cpsc.gov/">
              CPSC clothes dryer safety guidelines
            </ExternalLink>
            , thousands of catastrophic residential blazes are sparked annually when flammable lint deposits restrict exhaust airflow and overheat internal elements.
          </p>
          <p>
            In Midlothian and surrounding Ellis County communities, modern home designs regularly feature interior laundry rooms, second-floor utility closets, and long exhaust paths that travel through attic trusses or terminate on two-story roofs. Standard DIY cleaning brushes or superficial vacuum sweeps simply cannot handle these intricate runs. Our specialized silo approach addresses every phase of dryer exhaust health—from preventative lint clearing and diagnostic testing to emergency repairs and code-compliant installations.
          </p>

          <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Need Help Deciding Which Service You Need?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Take a look at the symptom checklist below or speak directly with our local Midlothian technicians.
              </p>
            </div>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="px-4 py-2 rounded-lg bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors shrink-0"
            >
              Call (469) 336-3767
            </a>
          </div>
        </div>

        {/* The 9 Dedicated Sub-Pages Grid */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore Our 9 Specialized Service Offerings
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select any service below to view detailed process outlines, equipment used, and local pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Midlothian Silo
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.keyPoints.slice(0, 3).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <InternalLink href={`/services/${service.slug}`}>
                    View Service Guide
                  </InternalLink>
                  <span className="text-xs text-slate-400">Ellis County</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Which Service Do I Need Guide (Decision Matrix) */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Diagnostic Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Which Dryer Vent Service Does Your Home Need?
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Match your symptoms with the appropriate technical solution to save time and ensure safety:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Wind className="w-4 h-4 text-sky-600" />
                Clothes Taking 2+ Cycles?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You need standard{' '}
                <InternalLink href="/services/dryer-vent-cleaning">
                  dryer vent cleaning
                </InternalLink>{' '}
                or deep{' '}
                <InternalLink href="/services/dryer-vent-lint-removal">
                  lint removal
                </InternalLink>{' '}
                to restore full exhaust velocity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-600" />
                Hose Crushed Behind Dryer?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose our{' '}
                <InternalLink href="/services/dryer-vent-repair">
                  dryer vent repair and resealing
                </InternalLink>{' '}
                to replace damaged foil with semi-rigid aluminum.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Birds or Pest Odors Outside?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Book our{' '}
                <InternalLink href="/services/bird-nest-pest-removal">
                  bird nest removal and pest guard
                </InternalLink>{' '}
                service for humane extraction and sanitization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                Remodeling or Moving Dryer?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technicians handle custom{' '}
                <InternalLink href="/services/dryer-vent-installation-rerouting">
                  dryer vent installation & rerouting
                </InternalLink>{' '}
                through exterior walls or roofs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Search className="w-4 h-4 text-purple-600" />
                Buying or Selling a Home?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule an HD{' '}
                <InternalLink href="/services/dryer-vent-inspection">
                  video camera dryer vent inspection
                </InternalLink>{' '}
                to document duct condition for real estate inspections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                Managing Apartments or Business?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inquire about our{' '}
                <InternalLink href="/services/commercial-dryer-vent-cleaning">
                  commercial dryer vent cleaning
                </InternalLink>{' '}
                programs and bulk HOA compliance pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Service Locations Cross-Link Section */}
        <div className="p-8 rounded-3xl bg-slate-100/80 border border-slate-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Available Throughout All Midlothian & Surrounding Communities
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Our service vehicles are dispatched daily across Midlothian, Waxahachie, Red Oak, Ovilla, and Cedar Hill. View our complete geographic service map:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            {LOCATIONS_LIST.map((loc) => (
              <InternalLink key={loc.id} href={`/locations/${loc.slug}`}>
                {loc.name}
              </InternalLink>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <CallToActionBanner
          title="Schedule Your Professional Dryer Vent Service Today"
          subtitle="Clear trapped lint, lower energy bills, and keep your home safe from fire hazards with Midlothian's trusted ventilation experts."
          cityName="Midlothian"
        />
      </section>
    </div>
  );
}

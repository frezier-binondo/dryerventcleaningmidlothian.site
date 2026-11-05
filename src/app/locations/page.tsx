import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building,
  Home as HomeIcon,
  Navigation,
  Wind,
  Compass,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SITE_INFO, LOCATIONS_LIST, SERVICES_LIST, EXTERNAL_AUTHORITIES } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuoteForm } from '@/components/QuoteForm';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning Service Areas Midlothian TX',
  description:
    'Professional dryer vent cleaning and lint removal across Midlothian, Waxahachie, Red Oak, Ovilla, and Cedar Hill, TX. Certified technicians, fast dispatch, free quotes.',
  alternates: {
    canonical: `${SITE_INFO.domain}/locations`,
  },
};

export default function LocationsHubPage() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Breadcrumbs items={[{ label: 'Locations & Service Areas' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <MapPin className="w-4 h-4 text-amber-400" />
            Ellis & Dallas County Coverage Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Dryer Vent Cleaning Service Areas
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Headquartered in Midlothian, TX, our fleet of fully equipped mobile service vans provides same-day and scheduled dryer vent cleaning, duct repairs, bird proofing, and airflow certification across 5 core nearby market hubs.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Local Dispatch: {SITE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content (2000-word target in-depth localized analysis) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Comprehensive Regional Introduction */}
        <div className="prose prose-slate max-w-4xl mx-auto text-slate-700 space-y-6 text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Dryer Exhaust Safety for North Texas Homeowners
          </h2>
          <p>
            The suburban corridors of Ellis County and southern Dallas County are among the fastest growing residential regions in the state of Texas. Communities like Midlothian, Waxahachie, Red Oak, Ovilla, and Cedar Hill share a common demographic vitality: expansive family homes, busy households running countless laundry loads, and distinct regional architectural characteristics that require vigilant attention to dryer exhaust maintenance.
          </p>
          <p>
            When homes are constructed with laundry facilities positioned in interior utility hallways or on upper living floors, exhaust ducts can rarely vent through a simple 4-foot straight wall pipe. Instead, the ducts must wind upward through interior wall framing, navigate attic ceiling joists, and exhaust through roof caps 20 to 35 feet away. According to fire prevention engineering research from the{' '}
            <ExternalLink href="https://www.nfpa.org/">
              NFPA clothes dryer safety research &amp; guidelines
            </ExternalLink>
            , every 90-degree bend in a dryer vent pipe adds the equivalent air resistance of 5 additional linear feet of ductwork. Without regular rotary brush maintenance, lint rapidly settles into these low-velocity turns, creating hazardous combustible pockets.
          </p>
          <p>
            Our service network operates from a central staging location in Midlothian at US-287 and Midlothian Parkway. From this strategic crossroads, our certified technicians can reach residences across all five key regional markets in under 25 minutes, providing reliable emergency response for burning smells, smoking appliances, and clogged exhaust dampers.
          </p>
        </div>

        {/* 5 Primary Nearby Market Sub-Pages Grid */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our 5 Dedicated Market Service Hubs
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select your specific city below to explore unique neighborhood profiles, zip codes, and localized service specials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS_LIST.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={loc.heroImage}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-bold text-base">{loc.city}, TX</span>
                    <span className="text-[11px] bg-sky-500/80 px-2 py-0.5 rounded-full font-medium">
                      {loc.county}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-amber-600 font-bold">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{loc.distanceFromMidlothian}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {loc.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {loc.overview}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Neighborhoods Served:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {loc.neighborhoods.slice(0, 4).map((nh, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                          >
                            {nh}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <InternalLink href={`/locations/${loc.slug}`}>
                      View Local Page
                    </InternalLink>
                    <span className="text-xs text-slate-400">{loc.zipCodes.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Regional Analysis Matrix */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Regional Duct Profiles
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              How Architecture Dictates Dryer Vent Risk in Nearby Texas Markets
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Every city in our service footprint features different housing ages, building techniques, and wildlife pressures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                1. Midlothian, TX (76065) - Master-Planned & Custom Ranches
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Newer master-planned developments like Lawson Farms, Brandi Ridge, and Sentara Ranch incorporate high ceilings and upstairs laundry rooms. These vertical runs accumulate heavy lint quickly because moist lint drops backward whenever the dryer shuts off. Routine cleaning using our{' '}
                <InternalLink href="/services/dryer-vent-cleaning">
                  residential dryer vent cleaning
                </InternalLink>{' '}
                and{' '}
                <InternalLink href="/services/dryer-vent-airflow-testing">
                  airflow velocity testing
                </InternalLink>{' '}
                restores full velocity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                2. Waxahachie, TX (75165, 75167) - Historic & Modern Blend
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Waxahachie features stunning historic Victorian homes along the Gingerbread Trail where older crawlspace vent pipes have sagged or separated over decades. In contrast, new construction in North Grove requires steep rooftop maintenance. Our technicians provide specialized{' '}
                <InternalLink href="/services/dryer-vent-repair">
                  dryer vent repair and duct resealing
                </InternalLink>{' '}
                to ensure older lines do not leak moisture into crawlspaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                3. Red Oak, TX (75154) - High-Volume Suburban Neighborhoods
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Red Oak homes in Fox Hollow and along the Ovilla Road corridor run heavy laundry schedules. During the blistering Texas summer, moisture trapped in long attic pipes creates humid conditions that foster mold and mildew inside attic insulation. We perform deep{' '}
                <InternalLink href="/services/dryer-vent-lint-removal">
                  dryer vent lint extraction
                </InternalLink>{' '}
                to eradicate dense lint plugs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                4. Ovilla & Cedar Hill, TX (75154, 75104) - Wooded Acreage & Hills
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                The mature oak trees of Ovilla and the scenic ridge topography of Cedar Hill create unique wildlife challenges. Starlings, sparrows, and rodents frequently force their way through standard plastic vent hoods to nest in warm exhaust lines. We specialize in humane{' '}
                <InternalLink href="/services/bird-nest-pest-removal">
                  bird nest removal and heavy-duty wildlife guards
                </InternalLink>{' '}
                to keep animals out permanently.
              </p>
            </div>
          </div>
        </div>

        {/* Dispatch & Booking Banner */}
        <CallToActionBanner
          title="Looking for a Certified Dryer Vent Technician in Your Area?"
          subtitle="Our service vans are already operating in your neighborhood. Call now for priority dispatch or get a free instant online quote."
          cityName="Midlothian & Surrounding Cities"
        />
      </section>
    </div>
  );
}

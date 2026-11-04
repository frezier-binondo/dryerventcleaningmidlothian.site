import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Navigation,
  Wind,
  Wrench,
  AlertTriangle,
  Building,
  Home as HomeIcon,
  Star,
} from 'lucide-react';
import {
  SITE_INFO,
  LOCATIONS_LIST,
  SERVICES_LIST,
  EXTERNAL_AUTHORITIES,
  LocationItem,
} from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuoteForm } from '@/components/QuoteForm';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS_LIST.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = LOCATIONS_LIST.find((l) => l.slug === params.slug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${SITE_INFO.domain}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_INFO.domain}/locations/${location.slug}`,
      images: [
        {
          url: location.heroImage,
          width: 1200,
          height: 630,
          alt: `Dryer Vent Cleaning in ${location.city} TX`,
        },
      ],
    },
  };
}

export default function LocationDetailPage({ params }: Props) {
  const location = LOCATIONS_LIST.find((l) => l.slug === params.slug);
  if (!location) notFound();

  // Related sibling locations for internal linking
  const siblingLocations = LOCATIONS_LIST.filter((l) => l.id !== location.id).slice(0, 4);

  // Authority link
  const authority = EXTERNAL_AUTHORITIES[1]; // CPSC

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Dryer Vent Cleaning in ${location.city}, TX`,
    serviceType: 'Dryer Vent Cleaning and Fire Prevention',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_INFO.name,
      telephone: SITE_INFO.phone,
      url: SITE_INFO.domain,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      addressRegion: 'TX',
      postalCode: location.zipCodes.join(', '),
    },
    description: location.metaDescription,
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Locations', href: '/locations' },
          { label: `${location.city}, TX` },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                <MapPin className="w-4 h-4 text-amber-400" />
                Local Service Hub: {location.city}, TX
              </span>
              <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                Zip Codes: {location.zipCodes.join(', ')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Dryer Vent Cleaning in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
                {location.city}, TX
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Fast, professional dryer vent lint removal, duct repair, bird nest extraction, and airflow certification for homeowners and businesses in {location.city} and surrounding {location.county} neighborhoods.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_INFO.phoneFormatted}</span>
              </a>
              <a
                href="#local-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>Request Free {location.city} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* In-body internal links 1 & 2 */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2">
              <span>Explore our primary</span>
              <InternalLink href="/services/dryer-vent-cleaning">
                dryer vent cleaning services
              </InternalLink>
              <span>or view all</span>
              <InternalLink href="/locations">
                North Texas service locations
              </InternalLink>.
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
              <Image
                src={location.heroImage}
                alt={`Dryer vent cleaning in ${location.city} TX`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content (1200 - 2000 words target per location page) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Localized Copy */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why {location.city} Homeowners Choose Us for Dryer Vent Cleaning
              </h2>
              <p>
                {location.overview}
              </p>
              <p>
                Throughout {location.city} and {location.county}, residential properties feature a diverse array of venting configurations. Many modern residences are constructed on thick concrete slab foundations with central laundry rooms, forcing exhaust pipes to travel upward through interior walls, traverse unconditioned attic spaces, and terminate high on second-story rooflines.
              </p>
              <p>
                During humid Texas summers and chilly winter evenings, the temperature differential inside long attic pipes causes condensation to form on duct walls. Escaping lint fibers stick to this moisture, rapidly creating a felted buildup that chokes exhaust velocity. According to federal product warnings from the{' '}
                <ExternalLink href={authority.url}>
                  {authority.anchor}
                </ExternalLink>
                , operating a dryer with restricted exhaust airflow forces heating elements to run hotter and longer, drastically increasing the likelihood of an appliance fire while doubling monthly electric utility bills.
              </p>
            </div>

            {/* Local Housing & Neighborhood Highlights */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HomeIcon className="w-5 h-5 text-sky-600" />
                Neighborhood Coverage in {location.city}, TX
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our technicians are stationed locally to provide fast, reliable dispatch to all {location.city} subdivisions, including:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {location.neighborhoods.map((nh, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{nh}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                <strong>Housing Characteristics:</strong> {location.housingStats}
              </div>
            </div>

            {/* Why Our Process Works in this Market */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Proven Cleaning Process for {location.city} Homes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We never use cheap handheld blower tools that push lint further into your walls. Every appointment in {location.city} follows a rigorous multi-stage cleaning and diagnostic protocol:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Pre-Service Airflow & Static Backpressure Test</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We connect a digital anemometer to measure initial exhaust velocity in feet-per-minute (FPM) to document restriction levels before any work begins.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Full-Length Rotary Brush Scouring</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Professional rotary mechanical whips scrub the entire circumference of the 4-inch rigid metal pipe, breaking loose hardened lint clumps and fabric softener build-up.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">High-CFM Negative Air Vacuum Containment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Industrial vacuums pull dislodged lint directly into sealed HEPA containment bags, guaranteeing zero dust, lint, or allergens escape into your laundry room.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Damper Verification & Airflow Certification</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We clean the exterior hood damper, ensure it seals against pests, and measure post-cleaning airflow velocity to verify 100% unrestricted exhaust performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services Internal Links (Requirements 3, 4, 5) */}
            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <h4 className="font-bold text-slate-900 text-base">
                Additional Services Available in {location.city}, TX
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Beyond standard lint removal, our certified crew provides specialized{' '}
                <InternalLink href="/services/dryer-vent-repair">
                  dryer vent repair and duct resealing
                </InternalLink>
                , precision{' '}
                <InternalLink href="/services/dryer-vent-installation-rerouting">
                  dryer vent installation and rerouting
                </InternalLink>
                , and humane{' '}
                <InternalLink href="/services/bird-nest-pest-removal">
                  bird nest removal and pest guard installations
                </InternalLink>{' '}
                to keep your {location.city} home safe.
              </p>
            </div>
          </div>

          {/* Right Column: Quote Form & Sibling Cities */}
          <div className="lg:col-span-5 space-y-8">
            <div id="local-quote" className="scroll-mt-24 sticky top-24">
              <QuoteForm initialService="dryer-vent-cleaning" initialLocation={location.slug} compact />

              {/* Sibling Cities Cross-Links */}
              <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Nearby Market Coverage
                </h4>
                <div className="space-y-2">
                  {siblingLocations.map((sib) => (
                    <Link
                      key={sib.id}
                      href={`/locations/${sib.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-700 text-xs font-semibold text-slate-700 transition-colors border border-slate-100 flex items-center justify-between"
                    >
                      <span>{sib.name}</span>
                      <span className="text-slate-400 text-[11px]">{sib.distanceFromMidlothian.split(' ')[0]}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call for {location.city} Dispatch: (469) 336-3767</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <CallToActionBanner
          title={`Schedule Your Dryer Vent Cleaning in ${location.city}, TX`}
          subtitle="Don't let lint buildup double your energy bills or risk a devastating dryer fire. Contact our certified local technicians today."
          cityName={location.city}
        />
      </section>
    </div>
  );
}

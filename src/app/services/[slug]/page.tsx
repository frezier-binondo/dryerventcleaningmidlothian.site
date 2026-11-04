import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowRight,
  MapPin,
  Wind,
  Wrench,
  Compass,
  Search,
  Building2,
  Flame,
  ShieldAlert,
  Activity,
  Layers,
  ChevronRight,
} from 'lucide-react';
import {
  SITE_INFO,
  SERVICES_LIST,
  LOCATIONS_LIST,
  EXTERNAL_AUTHORITIES,
  ServiceItem,
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
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_INFO.domain}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_INFO.domain}/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Pick other services for internal linking
  const relatedServices = SERVICES_LIST.filter((s) => s.id !== service.id).slice(0, 4);
  const primaryLocations = LOCATIONS_LIST.slice(0, 4);

  // Authority link
  const authority = EXTERNAL_AUTHORITIES[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_INFO.name,
      telephone: SITE_INFO.phone,
      url: SITE_INFO.domain,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Midlothian',
        addressRegion: 'TX',
        postalCode: '76065',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Midlothian',
    },
    description: service.shortDescription,
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Certified Midlothian Ventilation Silo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {service.name} in Midlothian, TX
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {service.shortDescription}
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
                href="#service-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* In-body internal link 1 & 2 */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2">
              <span>Return to our</span>
              <InternalLink href="/services">dryer vent services hub</InternalLink>
              <span>or view local work in</span>
              <InternalLink href="/locations/midlothian-tx">
                Midlothian, TX service area
              </InternalLink>.
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
              <Image
                src={service.heroImage}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Deep Content (800+ Words Silo Target) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Detailed Overview */}
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive Technical Overview: {service.name}
              </h2>
              <p>
                In the hot, humid climate of North Texas, clothes dryers run nearly continuous cycles for busy families. Behind the laundry room wall, the dryer exhaust line expels gallons of evaporated water mixed with millions of tiny synthetic and cotton textile fibers every single week. When that moisture-rich airflow encounters resistance—such as lint accumulation, crushed transition flex hose, or bird nesting materials—the static pressure skyrockets.
              </p>
              <p>
                According to the{' '}
                <ExternalLink href={authority.url}>
                  {authority.anchor}
                </ExternalLink>
                , unmaintained dryer vents are the primary catalyst for thousands of residential fires and millions of dollars in structural damage every year. By ensuring your exhaust line is clean, unobstructed, and constructed from code-approved rigid metal materials, you dramatically reduce fire liability while cutting drying times down to 35-45 minutes per cycle.
              </p>
              <p>
                Our Midlothian service protocol addresses the specific architectural nuances of Ellis County properties, including Lawson Farms, Brandi Ridge, Mountain Peak, and McAlpin Manor, where high-pitch roofs and interior second-story laundry rooms require commercial-grade equipment and specialized fall-protection safety training.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                What Is Included in Our {service.name}
              </h3>
              <ul className="space-y-3 pt-2">
                {service.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic Signs & Warnings */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Signs Your Midlothian Home Requires Immediate Service
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you observe any of the following symptoms during standard laundry cycles, your dryer exhaust is operating under dangerous backpressure:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Double Drying Cycles
                  </h4>
                  <p className="text-xs text-slate-600">
                    Towels and bedding remain damp after a full 50-minute cycle, requiring repeated heating.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-500" />
                    Scorching Cabinet Heat
                  </h4>
                  <p className="text-xs text-slate-600">
                    The top of the dryer or surrounding laundry room feels intensely hot or smells of hot lint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Wind className="w-4 h-4 text-sky-500" />
                    Exterior Damper Stays Shut
                  </h4>
                  <p className="text-xs text-slate-600">
                    The outside vent hood flap barely flutters or fails to open when the dryer is blowing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-purple-500" />
                    Over 1 Year Since Clean
                  </h4>
                  <p className="text-xs text-slate-600">
                    NFPA and appliance manufacturers advise annual inspection to prevent lint ignition.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Context & Internal Links (Requirement 3, 4, 5) */}
            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <h4 className="font-bold text-slate-900 text-base">
                Local Service Availability Across Ellis & Dallas Counties
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In addition to our central Midlothian coverage, our mobile service units regularly provide this service to homeowners in nearby cities. Check out our localized guides for{' '}
                <InternalLink href="/locations/waxahachie-tx">
                  dryer vent cleaning in Waxahachie
                </InternalLink>
                , explore our work in{' '}
                <InternalLink href="/locations/red-oak-tx">
                  Red Oak, TX
                </InternalLink>
                , or view our{' '}
                <InternalLink href="/locations/ovilla-tx">
                  Ovilla acreage dryer vent protection
                </InternalLink>.
              </p>
            </div>
          </div>

          {/* Right Column: Quote Form & Related Services */}
          <div className="lg:col-span-5 space-y-8">
            <div id="service-quote" className="scroll-mt-24 sticky top-24">
              <QuoteForm initialService={service.slug} initialLocation="midlothian-tx" compact />

              {/* Related Services Links */}
              <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Related Ventilation Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-700 text-xs font-semibold text-slate-700 transition-colors border border-slate-100 flex items-center justify-between"
                    >
                      <span>{rel.name}</span>
                      <span className="text-slate-400">→</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Questions? Call (469) 336-3767</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <CallToActionBanner
          title={`Book Your ${service.name} in Midlothian Today`}
          subtitle="Don't let restricted airflow risk a house fire or drive up your utility bills. Schedule with certified local technicians."
          cityName="Midlothian"
        />
      </section>
    </div>
  );
}

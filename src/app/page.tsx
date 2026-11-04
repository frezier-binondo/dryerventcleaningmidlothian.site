import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Phone,
  ShieldCheck,
  Flame,
  Wind,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowRight,
  Zap,
  DollarSign,
  Compass,
  Building,
  Home as HomeIcon,
  Layers,
  MapPin,
  ChevronRight,
  Star,
  Activity,
  Wrench,
} from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST, FAQS_LIST, EXTERNAL_AUTHORITIES } from '@/data/siteData';
import { QuoteForm } from '@/components/QuoteForm';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning Midlothian TX | Professional Lint Removal & Fire Safety',
  description:
    'Top-rated dryer vent cleaning in Midlothian, TX. Prevent house fires, eliminate dangerous lint buildup, and cut drying time in half. Local Ellis County pros. Call (469) 336-3767 for a free quote.',
  alternates: {
    canonical: SITE_INFO.domain,
  },
};

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-sky-900/30">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-12 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Midlothian&apos;s #1 Dryer Fire Prevention & Airflow Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Dryer Vent Cleaning Near You in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-400">
                  Midlothian, TX
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Is your dryer taking two or more cycles to dry a single load of towels? Trapped combustible lint in your exhaust duct poses a serious fire hazard and drives up Texas energy bills. Connect with certified local technicians offering complete rotary mechanical brush cleaning, video camera inspection, and digital airflow testing across Midlothian and Ellis County.
              </p>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">NFPA 211 Code Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Same-Day Rapid Dispatch</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 col-span-2 sm:col-span-1">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">4.9/5 Star Local Rating</span>
                </div>
              </div>

              {/* Immediate Phone CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {SITE_INFO.phoneFormatted}</span>
                </a>

                <a
                  href="#quote-form"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sky-900/60 hover:bg-sky-800/80 border border-sky-400/30 text-white font-bold text-base transition-all"
                >
                  <span>Request Online Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Internal Anchor Link Requirement 1 */}
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Looking for specific local service? Explore our</span>
                <InternalLink href="/services/dryer-vent-cleaning">
                  residential dryer vent cleaning
                </InternalLink>
                <span>or view</span>
                <InternalLink href="/locations/midlothian-tx">
                  dryer vent cleaning in Midlothian, TX
                </InternalLink>
                <span>neighborhood service.</span>
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div id="quote-form" className="lg:col-span-5 scroll-mt-24">
              <QuoteForm initialService="dryer-vent-cleaning" initialLocation="midlothian-tx" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS & IMPACT BAR */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
              <div className="text-3xl sm:text-4xl font-black text-sky-700 tracking-tight">15,000+</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">U.S. Dryer Fires Yearly (FEMA)</p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">92%</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Airflow Velocity Restored</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight">50% Cut</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">In Clothes Drying Time</p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <div className="text-3xl sm:text-4xl font-black text-indigo-700 tracking-tight">$280/yr</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Average Electricity & Gas Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE OVERVIEW SECTION (Word Count & Depth) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80"
                alt="Professional laundry room dryer vent cleaning in Midlothian Texas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">Certified Midlothian Technicians</h4>
                    <p className="text-xs text-slate-600">Thorough full-length duct scouring and digital airflow verification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
              <Wind className="w-3.5 h-3.5 text-sky-600" />
              Comprehensive Lint Scouring & Airflow Restoration
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Midlothian Homeowners Cannot Afford to Ignore Their Dryer Vent
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              In modern Midlothian homes—whether located in the established rolling acreage of Mountain Peak or newer master-planned developments like Lawson Farms and Brandi Ridge—laundry rooms are frequently positioned inside central hallways or second-floor floor plans. While convenient for family laundry routines, these architectural layouts necessitate exhaust duct runs extending 20 to 35 feet through attic spaces or vertically penetrating roof eaves.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              When hot, humid air carrying tiny clothing lint fibers travels across this distance, friction and thermal cooling cause heavy lint to deposit along the interior walls of the pipe. Over 12 to 18 months, this accumulation forms an impenetrable combustible blanket. The appliance must push against extreme static backpressure, which strains internal blower motors, burns out thermal heating elements, and causes internal temperatures to spike to dangerous levels.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
              <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Federal Fire Safety Warning
              </h4>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                According to the{' '}
                <ExternalLink href="https://www.usfa.fema.gov/">
                  U.S. Fire Administration clothes dryer fire safety reports
                </ExternalLink>
                , clothes dryer fires account for thousands of home blazes annually, with failure to clean lint out of the exhaust duct representing the leading cause of ignition (over 34%).
              </p>
            </div>

            {/* Internal Link Requirement 2 */}
            <p className="text-sm text-slate-600">
              Need immediate assistance with a damaged or leaking duct pipe? Learn more about our{' '}
              <InternalLink href="/services/dryer-vent-repair">
                dryer vent repair and resealing services
              </InternalLink>{' '}
              or check our full list of{' '}
              <InternalLink href="/services">dryer vent services in Ellis County</InternalLink>.
            </p>
          </div>
        </div>
      </section>

      {/* OUR 6-9 CORE SERVICE SILOS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Targeted Ventilation Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Professional Dryer Vent Services in Midlothian, TX
            </h2>
            <p className="text-slate-600 text-base">
              Every home and commercial facility has unique ducting dynamics. We provide end-to-end solutions starting from high-velocity rotary cleaning to code-compliant rigid duct installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="group rounded-3xl bg-slate-50 border border-slate-200/80 p-7 hover:bg-white hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-700 text-white flex items-center justify-center shadow-md shadow-sky-600/20 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                    <Wind className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {srv.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200/60">
                    {srv.keyPoints.slice(0, 3).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <InternalLink href={`/services/${srv.slug}`}>
                    Learn More & Book
                  </InternalLink>
                  <span className="text-xs font-semibold text-slate-400">Midlothian Pro</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Link Requirement 3 */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-sky-50/60 border border-sky-100 max-w-2xl mx-auto">
            <p className="text-sm text-slate-700">
              Have concerns about wildlife blocking your exterior exhaust cap? Read our guide on{' '}
              <InternalLink href="/services/bird-nest-pest-removal">
                bird nest and pest guard removal
              </InternalLink>{' '}
              or schedule a complete{' '}
              <InternalLink href="/services/dryer-vent-inspection">
                dryer vent video inspection
              </InternalLink>.
            </p>
          </div>
        </div>
      </section>

      {/* 7 DANGER SIGNS SECTION */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Warning Signs & Diagnostics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              7 Warning Signs Your Midlothian Dryer Vent Is Clogged
            </h2>
            <p className="text-slate-300 text-base">
              Dryers rarely break down without warning. If you notice any of these red flags, shut off the appliance and schedule an immediate safety inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Clothes Take Multiple Cycles to Dry",
                desc: "When vent ducts are obstructed with dense lint plugs, moist exhaust air cannot escape outside. Water condenses back into the drum, leaving heavy denim and towels damp after 60 minutes.",
              },
              {
                num: "02",
                title: "Dryer Cabinet Is Scorching Hot",
                desc: "Touch the top of your dryer mid-cycle. If it feels burning hot to the touch or heats your entire laundry room like an oven, heat is backing up inside the internal chassis.",
              },
              {
                num: "03",
                title: "Musty or Burning Odor During Use",
                desc: "Trapped lint fibers ignite easily near the electric heating coils or gas burner assembly. A burning smell indicates smoldering lint that could trigger an attic fire at any second.",
              },
              {
                num: "04",
                title: "Outdoor Vent Flap Does Not Open",
                desc: "Step outside while your dryer runs. The exterior damper louvers should push open briskly with warm exhaust airflow. If they stay shut or flutter weakly, airflow is heavily restricted.",
              },
              {
                num: "05",
                title: "Lint Accumulates Behind the Dryer",
                desc: "Severe backpressure inside a choked duct forces fine lint particles to leak past transition seams, leaving heavy fuzzy blankets on laundry room baseboards and floors.",
              },
              {
                num: "06",
                title: "Sudden Spike in Monthly Energy Bills",
                desc: "Running your dryer for 2 to 3 consecutive cycles consumes double the electricity or gas, adding $20 to $40 unnecessary dollars to monthly Texas utility expenses.",
              },
            ].map((sign, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <span className="text-2xl font-black text-amber-400">{sign.num}</span>
                <h3 className="text-lg font-bold text-white">{sign.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{sign.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Informational Link */}
          <div className="mt-12 text-center">
            <Link
              href="/blog/7-warning-signs-dryer-vent-clogged"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Read the complete 7-step homeowner warning signs breakdown on our blog →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW OUR MIDLOTHIAN PROCESS WORKS (Step-by-Step) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              The Professional Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 4-Step Precision Cleaning & Airflow Certification Process
            </h2>
            <p className="text-slate-600 text-base">
              We never perform superficial short-brush sweeps. Our technicians utilize professional rotary whip agitation and negative-air HEPA containment systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Baseline Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure baseline exhaust velocity (CFM) at the exterior termination and inspect the transition hose for kinks, crushed foil, or code violations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Full Rotary Brushing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Motorized rotary mechanical brushes traverse the entire duct run, dislodging baked-on lint, bird debris, and sticky fabric softener wax layers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">HEPA Vacuum Extraction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-power negative pressure vacuum collectors extract dislodged debris into specialized sealed containment, preventing dust from entering your living areas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">Airflow Certification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We re-test exterior airflow with digital anemometers, verify damper flap operation, and hand you documented before-and-after performance proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL MIDLOTHIAN SUBDIVISIONS & NEIGHBORHOOD ARCHITECTURE */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                Local Ellis County Knowledge
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tailored for Midlothian Homes & Architectural Layouts
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Midlothian is famous for its picturesque hill-country terrain, custom acreage homesteads, and premier master-planned subdivisions. However, the diverse housing styles in 76065 present distinct dryer venting challenges:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    Lawson Farms & Brandi Ridge
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Modern two-story floor plans often place laundry rooms upstairs. These vertical vent ducts must travel straight up through attics to steep second-story roof flashings, where thermal cooling accelerates heavy lint drops.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    Mountain Peak & McAlpin Manor Acreage
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Custom sprawling single-story ranch homes frequently feature extended horizontal attic ducting exceeding 25 to 35 feet, requiring high-power rotary sweeps to overcome duct sagging.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    Heritage High Area & Hawkins Run
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Homes adjacent to open fields frequently experience starlings, sparrows, and wasps building nests inside uncaged exhaust hoods, requiring wildlife extraction and stainless steel guard installations.
                  </p>
                </div>
              </div>

              {/* Internal Link Requirement 4 & 5 */}
              <div className="pt-2 text-xs text-slate-600 space-y-1">
                <p>
                  Also serving nearby Ellis and Dallas County markets! Visit our dedicated guides for{' '}
                  <InternalLink href="/locations/waxahachie-tx">Waxahachie dryer vent cleaning</InternalLink>,{' '}
                  <InternalLink href="/locations/red-oak-tx">Red Oak vent cleaning</InternalLink>, and{' '}
                  <InternalLink href="/locations/cedar-hill-tx">Cedar Hill dryer vent service</InternalLink>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-xl space-y-6">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Comparing Dryer Vent Maintenance Methods
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="flex items-center justify-between font-bold text-emerald-950 mb-1">
                      <span>Our Professional Rotary Cleaning</span>
                      <span className="text-[10px] uppercase bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p className="text-emerald-900/80 leading-relaxed">
                      Full-length mechanical brush agitation + negative-air HEPA suction + video inspection + before/after airflow anemometer documentation. 100% clean guarantee.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                    <div className="flex items-center justify-between font-bold text-amber-950 mb-1">
                      <span>DIY Drill Attachment Kit</span>
                      <span className="text-[10px] uppercase bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Risky</span>
                    </div>
                    <p className="text-amber-900/80 leading-relaxed">
                      Limited reach; plastic rods frequently snap inside walls; can puncture foil ducts or detach attic elbow seams, blowing toxic exhaust fumes into drywall cavities.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                    <div className="flex items-center justify-between font-bold text-rose-950 mb-1">
                      <span>Neglected Vent (No Cleaning)</span>
                      <span className="text-[10px] uppercase bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full">Extreme Hazard</span>
                    </div>
                    <p className="text-rose-900/80 leading-relaxed">
                      Severe fire risk; 2-3 hour drying cycles; burned heating elements; appliance thermal fuse failure; and hundreds of wasted dollars on electric bills.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Fast local response in 76065</span>
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="text-sm font-bold text-sky-600 hover:text-amber-600 transition-colors"
                  >
                    Call {SITE_INFO.phoneFormatted} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL HOMEOWNER REVIEWS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              Verified Ellis County Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Midlothian Residents Say About Our Service
            </h2>
            <p className="text-slate-600 text-base">
              Over 140+ five-star verified homeowner reviews across Midlothian, Waxahachie, and Ovilla.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &quot;Our dryer in Brandi Ridge was taking two full hours to dry bedding. The technician showed up on time, scoped the line with a camera, and pulled out an astonishing amount of compacted lint from the roof exhaust. Our clothes now dry in 35 minutes flat!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200/60">
                <div className="font-bold text-sm text-slate-900">David & Amanda M.</div>
                <div className="text-xs text-slate-500">Brandi Ridge, Midlothian TX</div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &quot;We had a bird nest completely jamming our exterior vent flap after springtime. The team cleared the debris safely, sanitized the entire duct, and installed a durable metal bird guard. Professional, courteous, and very fairly priced!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200/60">
                <div className="font-bold text-sm text-slate-900">Robert K.</div>
                <div className="text-xs text-slate-500">Mountain Peak, Midlothian TX</div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &quot;As a landlord managing duplexes near US-287, dryer fire safety is my top priority. They gave me a fair multi-unit rate, cleaned all vents from the roof down, and sent digital airflow verification receipts for my records. Outstanding service.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200/60">
                <div className="font-bold text-sm text-slate-900">Marcus T.</div>
                <div className="text-xs text-slate-500">Property Manager, Ellis County TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Quick Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Dryer Vent Cleaning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear, transparent answers to help you maintain a safe, energy-efficient home in Midlothian.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_LIST.slice(0, 5).map((faq) => (
              <div key={faq.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-sky-600 shrink-0 font-black">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-amber-600 underline underline-offset-4"
            >
              View all 10+ detailed dryer vent FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION CALL TO ACTION BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallToActionBanner
          title="Restore Unrestricted Airflow in Your Midlothian Home Today"
          subtitle="Don't wait for a burning smell or overheated dryer. Call now for friendly same-day service or request your instant free estimate online."
          cityName="Midlothian"
        />
      </div>
    </div>
  );
}

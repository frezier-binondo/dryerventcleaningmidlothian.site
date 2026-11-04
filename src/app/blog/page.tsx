import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { SITE_INFO, BLOG_POSTS, SERVICES_LIST, LOCATIONS_LIST, EXTERNAL_AUTHORITIES } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Dryer Vent Safety & Efficiency Blog | Midlothian TX Homeowner Guides',
  description:
    'Expert dryer vent cleaning tips, fire prevention advice, code regulations, and energy-saving guides from certified Midlothian, TX ventilation professionals.',
  alternates: {
    canonical: `${SITE_INFO.domain}/blog`,
  },
};

export default function BlogHubPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);
  const authority = EXTERNAL_AUTHORITIES[0];

  return (
    <div className="bg-slate-50 text-slate-800">
      <Breadcrumbs items={[{ label: 'Blog & Safety Guides' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Homeowner Fire Safety & Efficiency Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Dryer Vent Cleaning & Safety Blog
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical advice, warning signs, building codes, and maintenance schedules written by Midlothian&apos;s leading dryer vent specialists to keep your home safe and energy-efficient.
          </p>
        </div>
      </section>

      {/* Main Content & Articles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Text (Meeting 500+ Word Target) */}
        <div className="prose prose-slate max-w-4xl mx-auto text-slate-700 space-y-4 text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Protecting North Texas Families Through Proactive Ventilation Education
          </h2>
          <p>
            Welcome to the official education and fire safety resource center of{' '}
            <strong>Dryer Vent Cleaning Midlothian</strong>. While most homeowners understand the importance of routine HVAC filter replacements or plumbing inspections, the dryer exhaust system remains one of the most overlooked components of residential maintenance.
          </p>
          <p>
            The consequences of neglecting dryer ductwork extend far beyond slow laundry cycles. Clothes dryer fires are among the top causes of residential structural blazes across the United States. According to official fire investigation statistics published by the{' '}
            <ExternalLink href={authority.url}>
              {authority.anchor}
            </ExternalLink>
            , failure to clean lint from the exhaust duct is responsible for more than one-third of all dryer fires. Furthermore, operating an appliance against restricted static backpressure forces heating elements to run double time, driving up electricity usage and causing premature mechanical breakdowns.
          </p>
          <p>
            Our library of articles is crafted specifically for Midlothian, Waxahachie, Red Oak, Ovilla, and Cedar Hill homeowners. Whether you want to know how often your specific household size requires service, how to diagnose whether your exterior damper is stuck, or what Texas building codes dictate for rigid duct materials, our guides provide actionable, expert advice.
          </p>

          {/* In-body internal links */}
          <div className="pt-2 text-xs text-slate-600 flex flex-wrap items-center gap-2">
            <span>Explore our</span>
            <InternalLink href="/services/dryer-vent-cleaning">
              residential dryer vent cleaning
            </InternalLink>
            <span>or learn more about</span>
            <InternalLink href="/services/dryer-vent-lint-removal">
              deep lint extraction
            </InternalLink>
            <span>and</span>
            <InternalLink href="/locations/midlothian-tx">
              Midlothian local service
            </InternalLink>.
          </div>
        </div>

        {/* Featured Article Card */}
        {featuredPost && (
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                    Featured Guide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight hover:text-sky-600 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <InternalLink href={`/blog/${featuredPost.slug}`}>
                    Read Complete Article
                  </InternalLink>
                  <span className="text-xs text-slate-400 font-semibold">{featuredPost.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
            Latest Ventilation & Fire Safety Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-600" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <InternalLink href={`/blog/${post.slug}`}>
                      Read Article
                    </InternalLink>
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Cross-Links Section */}
        <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Need Expert Diagnostic Help for Your Home?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Schedule an inspection with our certified technicians or read our answers on our{' '}
            <InternalLink href="/faq">frequently asked questions page</InternalLink>. You can also explore our dedicated{' '}
            <InternalLink href="/locations/waxahachie-tx">Waxahachie</InternalLink> and{' '}
            <InternalLink href="/locations/cedar-hill-tx">Cedar Hill</InternalLink> guides.
          </p>
        </div>

        {/* Bottom Banner */}
        <CallToActionBanner
          title="Have Concerns About Your Dryer Exhaust Airflow?"
          subtitle="Don't guess when it comes to fire safety. Speak directly with a Midlothian certified technician today."
          cityName="Midlothian"
        />
      </section>
    </div>
  );
}

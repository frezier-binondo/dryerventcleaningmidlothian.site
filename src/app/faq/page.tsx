import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  HelpCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  SITE_INFO,
  FAQS_LIST,
  SERVICES_LIST,
  LOCATIONS_LIST,
  EXTERNAL_AUTHORITIES,
} from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning FAQs Midlothian TX | Costs, Safety & Frequency',
  description:
    'Answers to the top 10+ questions about dryer vent cleaning in Midlothian, TX: cost factors, fire risks, cleaning frequency, DIY warnings, and commercial services.',
  alternates: {
    canonical: `${SITE_INFO.domain}/faq`,
  },
};

export default function FAQPage() {
  const authority = EXTERNAL_AUTHORITIES[0]; // FEMA

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_LIST.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Homeowner Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about dryer vent cleaning costs, fire prevention, warning signs, and local code requirements in Midlothian, TX.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Have a Specific Question? Call (469) 336-3767</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro In-Depth Text */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Clear, Honest Answers from Certified Midlothian Technicians
          </h2>
          <p>
            Whether you have noticed your laundry taking two full cycles to dry, smelled burning lint while doing laundry, or simply moved into a new home in Lawson Farms, Brandi Ridge, or Mountain Peak, knowing how your dryer vent works is essential to safeguarding your property.
          </p>
          <p>
            According to the{' '}
            <ExternalLink href={authority.url}>
              {authority.anchor}
            </ExternalLink>
            , regular vent maintenance is the single most effective way to eliminate residential dryer fires. Below are thorough answers to the 10 most common questions we receive from Midlothian and Ellis County residents.
          </p>

          {/* In-body internal links */}
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-slate-600 flex flex-wrap items-center gap-2">
            <span>Explore our full list of</span>
            <InternalLink href="/services">dryer vent services</InternalLink>
            <span>or view our</span>
            <InternalLink href="/services/dryer-vent-cleaning">
              residential cleaning
            </InternalLink>
            <span>and</span>
            <InternalLink href="/services/dryer-vent-repair">
              duct repair solutions
            </InternalLink>.
          </div>
        </div>

        {/* The 10 FAQ Items */}
        <div className="space-y-6">
          {FAQS_LIST.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <div className="space-y-2 flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional 5 Internal Links Section */}
        <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Still Have Questions About Your Specific Home?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our certified team is happy to help diagnose issues over the phone. You can also view our localized guides for{' '}
            <InternalLink href="/locations/midlothian-tx">Midlothian</InternalLink>,{' '}
            <InternalLink href="/locations/waxahachie-tx">Waxahachie</InternalLink>, and{' '}
            <InternalLink href="/locations/red-oak-tx">Red Oak</InternalLink>, or read our safety article on{' '}
            <InternalLink href="/blog/why-dryer-lint-is-a-fire-hazard">
              why dryer lint is a dangerous fire hazard
            </InternalLink>.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow transition-colors"
            >
              <span>Contact Us For Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Banner */}
        <CallToActionBanner
          title="Restore Fast, Safe Drying in Your Midlothian Home"
          subtitle="Call our local technicians today for friendly same-day service or schedule online in under 60 seconds."
          cityName="Midlothian"
        />
      </section>
    </div>
  );
}

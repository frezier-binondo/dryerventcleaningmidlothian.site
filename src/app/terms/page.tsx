import React from 'react';
import { Metadata } from 'next';
import { SITE_INFO } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Terms of Service & Referral Disclosure | Dryer Vent Cleaning Midlothian',
  description: 'Terms of Service and Lead Generation Referral Disclosure for Dryer Vent Cleaning Midlothian.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 text-slate-800 py-12">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Terms of Service &amp; Referral Disclosure</h1>
        <p className="text-xs text-slate-500">Effective Date: November 2026</p>

        <p>
          Welcome to the website of <strong>{SITE_INFO.name}</strong>. By accessing this website, requesting a free quote, or contacting our service dispatch numbers, you agree to comply with and be bound by the following Terms of Service.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">1. Nature of the Service (Referral Disclosure)</h2>
        <p>
          {SITE_INFO.name} is a consumer service portal that connects consumers with local, independent dryer vent cleaning, repair, and ventilation maintenance service providers. We act as a referral connection platform. While we strive to match consumers with reputable, experienced professionals, all work, quotes, warranties, and service agreements are made directly between the customer and the dispatched independent contractor.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">2. Accuracy of Estimates &amp; On-Site Inspections</h2>
        <p>
          Preliminary phone or online quotes represent estimates based on the information provided by the customer (such as duct length, floor location, and visible symptoms). Final pricing is determined on-site following a visual and mechanical inspection by the certified technician prior to commencing any physical labor.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">3. Limitation of Liability</h2>
        <p>
          In no event shall {SITE_INFO.name}, its affiliates, or operators be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of this website or the performance of services performed by independent third-party service providers.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">4. TCPA Consent and Contact Authorization</h2>
        <p>
          By submitting a quote form or providing your phone number on this website, you grant express consent to receive telephone calls, SMS text messages, and automated communications regarding your dryer vent project at the telephone number provided. Consent is not a condition of purchase.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">5. Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles.
        </p>

        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <InternalLink href="/">Return to Home</InternalLink>
          <InternalLink href="/contact">Contact Our Office</InternalLink>
        </div>
      </div>
    </div>
  );
}

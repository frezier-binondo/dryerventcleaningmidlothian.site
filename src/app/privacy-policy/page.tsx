import React from 'react';
import { Metadata } from 'next';
import { SITE_INFO } from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InternalLink } from '@/components/Links';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dryer Vent Cleaning Midlothian',
  description: 'Privacy Policy for Dryer Vent Cleaning Midlothian. Information regarding data collection, cookies, and quote processing.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 text-slate-800 py-12">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: November 2026</p>

        <p>
          At <strong>{SITE_INFO.name}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we value the privacy of our visitors and customers. This Privacy Policy details the types of information we collect when you visit our website, submit a free quote request form, or contact our customer support phone lines.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">1. Information We Collect</h2>
        <p>
          When you request a service quote or schedule an appointment on our website, we may collect personal contact information such as your full name, telephone number, email address, postal code, property type, and details regarding your clothes dryer ventilation issues.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
        <p>
          We use the information you submit strictly for the following operational purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To match you with certified local dryer vent professionals in Midlothian and surrounding Ellis County areas.</li>
          <li>To provide accurate cost estimates and schedule cleaning, inspection, or repair appointments.</li>
          <li>To respond to your inquiries, questions, and customer service requests.</li>
          <li>To maintain compliance records and verify service completion.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 pt-2">3. Referral &amp; Lead Generation Disclosure</h2>
        <p>
          {SITE_INFO.name} operates as a consumer referral and lead generation portal designed to connect homeowners and commercial property managers with certified, independent dryer vent cleaning and HVAC ventilation contractors. We do not sell, rent, or distribute your private personal information to third-party marketing companies.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">4. Cookies and Web Analytics</h2>
        <p>
          Our website may use standard cookies and analytics tools to track website usage, visitor traffic, and optimize user experience. You can choose to disable cookies through your web browser preferences at any time.
        </p>

        <h2 className="text-xl font-bold text-slate-900 pt-2">5. Contact Information</h2>
        <p>
          If you have questions regarding this Privacy Policy or wish to modify any information previously submitted, please contact us at:
        </p>
        <p className="font-semibold text-slate-900">
          {SITE_INFO.name}<br />
          Phone: {SITE_INFO.phoneFormatted}<br />
          Email: {SITE_INFO.email}<br />
          Location: {SITE_INFO.address.full}
        </p>

        <div className="pt-6 border-t border-slate-200">
          <InternalLink href="/">Return to Home</InternalLink>
        </div>
      </div>
    </div>
  );
}

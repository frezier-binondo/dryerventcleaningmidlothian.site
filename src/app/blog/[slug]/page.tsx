import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Flame,
} from 'lucide-react';
import {
  SITE_INFO,
  BLOG_POSTS,
  SERVICES_LIST,
  LOCATIONS_LIST,
  EXTERNAL_AUTHORITIES,
  BlogPostItem,
} from '@/data/siteData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { InternalLink, ExternalLink } from '@/components/Links';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_INFO.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_INFO.domain}/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const authority = EXTERNAL_AUTHORITIES[2]; // NFPA

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.image],
    datePublished: '2026-10-15T08:00:00+08:00',
    dateModified: '2026-11-02T08:00:00+08:00',
    author: [
      {
        '@type': 'Organization',
        name: SITE_INFO.name,
        url: SITE_INFO.domain,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_INFO.domain}/images/logo.png`,
      },
    },
    description: post.excerpt,
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Article In-Body Copy */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-base sm:text-lg leading-relaxed pt-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* In-content Authority Citation */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 my-8 space-y-2">
              <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Industry Fire Safety Benchmark
              </h4>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                For detailed scientific guidelines and fire prevention best practices, refer to the{' '}
                <ExternalLink href={authority.url}>
                  {authority.anchor}
                </ExternalLink>
                , which establishes strict standards for residential exhaust duct maintenance.
              </p>
            </div>

            {/* In-body 5 Internal Links Requirement */}
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100 my-8 space-y-3 text-sm">
              <h4 className="font-bold text-slate-900">
                Related Services & Local Midlothian Resources
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If your laundry room is exhibiting symptoms of restricted airflow, schedule a complete{' '}
                <InternalLink href="/services/dryer-vent-cleaning">
                  dryer vent cleaning
                </InternalLink>{' '}
                or diagnostic{' '}
                <InternalLink href="/services/dryer-vent-inspection">
                  video camera inspection
                </InternalLink>
                . We also offer specialized{' '}
                <InternalLink href="/services/dryer-vent-repair">
                  dryer vent repair
                </InternalLink>{' '}
                and serve homeowners throughout{' '}
                <InternalLink href="/locations/midlothian-tx">
                  Midlothian, TX
                </InternalLink>{' '}
                and neighboring{' '}
                <InternalLink href="/locations/waxahachie-tx">
                  Waxahachie, TX
                </InternalLink>.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author & Action Box */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
              <Flame className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">
                Dryer Vent Cleaning Midlothian Safety Team
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Certified dryer exhaust technicians serving Ellis & Dallas Counties.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow text-center"
          >
            Call {SITE_INFO.phoneFormatted}
          </a>
        </div>

        {/* Read Next Section */}
        {otherPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
              Read Next
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((op) => (
                <div
                  key={op.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
                >
                  <h4 className="font-bold text-sm text-slate-900 hover:text-sky-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${op.slug}`}>{op.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{op.excerpt}</p>
                  <InternalLink href={`/blog/${op.slug}`} className="text-xs">
                    Read Post
                  </InternalLink>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <CallToActionBanner
          title="Protect Your Family from Dangerous Dryer Vent Fires"
          subtitle="Annual professional cleaning eliminates 100% of combustible lint and lowers your monthly electric bill."
          cityName="Midlothian"
        />
      </article>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Flame, Wind, Menu, X, ShieldCheck, Clock, MapPin, ChevronDown } from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST } from '@/data/siteData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse" />
              Certified Ellis County Dryer Vent Pros
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Same-Day Service Available
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Serving Midlothian, Waxahachie & Surrounding
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <span className="text-slate-300 hidden sm:inline">Questions or Emergency?</span>
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors bg-white/10 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <Wind className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  Dryer Vent
                </span>
                <span className="text-xl sm:text-2xl font-black text-sky-600 tracking-tight leading-tight">
                  Cleaning
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
                  Midlothian
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                  Ellis County, TX
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') && pathname === '/'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  isActive('/services')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                <span>Services (9)</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 grid gap-1 z-50">
                  <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Our Cleaning Silos
                  </div>
                  {SERVICES_LIST.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors flex items-center justify-between"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>{srv.name}</span>
                      <span className="text-slate-300 text-xs">→</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href="/services"
                      className="block px-3 py-1.5 text-xs font-bold text-sky-600 hover:text-sky-800"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All 9 Services Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <Link
                href="/locations"
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  isActive('/locations')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 grid gap-1 z-50">
                  <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Service Areas
                  </div>
                  {LOCATIONS_LIST.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors flex items-center justify-between"
                      onClick={() => setLocationsDropdownOpen(false)}
                    >
                      <span>{loc.name}</span>
                      <span className="text-slate-400 text-[11px]">{loc.distanceFromMidlothian.split(' ')[0]}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href="/locations"
                      className="block px-3 py-1.5 text-xs font-bold text-sky-600 hover:text-sky-800"
                      onClick={() => setLocationsDropdownOpen(false)}
                    >
                      Browse All Local Markets →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/blog')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/faq')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sky-200 bg-sky-50/70 text-sky-900 font-bold hover:bg-sky-100 transition-all text-sm group"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-semibold text-sky-600 leading-none">
                  Call Free Quote
                </span>
                <span className="text-sm font-black text-slate-900 leading-tight">
                  {SITE_INFO.phoneFormatted}
                </span>
              </div>
            </a>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/25 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg transition-all"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="p-2.5 rounded-xl bg-amber-500 text-white shadow-sm"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname === '/' ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname.startsWith('/services') ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            All Services (9 Sub-Pages)
          </Link>
          <div className="pl-4 space-y-1 pb-2">
            {SERVICES_LIST.slice(0, 5).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-slate-600 hover:text-sky-600"
              >
                • {s.name}
              </Link>
            ))}
          </div>

          <Link
            href="/locations"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname.startsWith('/locations') ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            Service Locations (Midlothian & 5 Markets)
          </Link>
          <div className="pl-4 space-y-1 pb-2">
            {LOCATIONS_LIST.map((l) => (
              <Link
                key={l.id}
                href={`/locations/${l.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-slate-600 hover:text-sky-600"
              >
                • {l.name}
              </Link>
            ))}
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname.startsWith('/blog') ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            Blog & Safety Guides
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname === '/faq' ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
              pathname === '/contact' ? 'text-sky-600 bg-sky-50' : 'text-slate-800'
            }`}
          >
            Contact & Quote Request
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 text-white font-bold text-base shadow"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {SITE_INFO.phoneFormatted}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-base shadow"
            >
              Get Free Instant Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

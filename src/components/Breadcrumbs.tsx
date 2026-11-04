import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/70 border-b border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-slate-600">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-sky-600 font-medium">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 truncate max-w-xs sm:max-w-md">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-sky-600 font-medium">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

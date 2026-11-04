import React from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  children,
  className = '',
  title,
}) => {
  return (
    <Link
      href={href}
      title={title}
      className={`body-link font-semibold text-sky-600 underline decoration-sky-400 underline-offset-4 hover:text-amber-600 hover:decoration-amber-500 transition-all duration-200 inline-flex items-center group ${className}`}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 text-xs opacity-75">
        →
      </span>
    </Link>
  );
};

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = '',
  title,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`ext-link font-semibold text-teal-700 underline decoration-teal-400 underline-offset-4 hover:text-amber-600 hover:decoration-amber-500 transition-all duration-200 inline-flex items-center gap-1 ${className}`}
    >
      <span>{children}</span>
      <svg
        className="w-3.5 h-3.5 opacity-70 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
};

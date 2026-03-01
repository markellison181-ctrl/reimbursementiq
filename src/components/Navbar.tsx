'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center font-bold text-navy text-sm">RQ</div>
            <span className="text-xl font-bold text-white">Reimbursement<span className="text-teal">IQ</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-gray-light hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-light hover:text-white transition-colors">Blog</Link>
            <Link href="/archive" className="text-gray-light hover:text-white transition-colors">Archive</Link>
            <Link href="/#subscribe" className="bg-teal hover:bg-teal-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors">Subscribe Free</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-teal/10 px-4 py-4 space-y-3">
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-gray-light hover:text-white">Pricing</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block text-gray-light hover:text-white">Blog</Link>
          <Link href="/archive" onClick={() => setOpen(false)} className="block text-gray-light hover:text-white">Archive</Link>
          <Link href="/#subscribe" onClick={() => setOpen(false)} className="block bg-teal text-white px-4 py-2 rounded-lg font-semibold text-center">Subscribe Free</Link>
        </div>
      )}
    </nav>
  );
}

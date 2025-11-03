'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

type MenuItem = { label: string; href: string };

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // NEW: auto-hide on scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);

      if (y < 10) {
        setIsVisible(true);
      } else if (y > lastScrollY && y > 100) {
        // scrolling down
        setIsVisible(false);
      } else if (y < lastScrollY) {
        // scrolling up
        setIsVisible(true);
      }
      setLastScrollY(y);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Container auto-hide */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav
          className={`transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
          }`}
          aria-label="Primary"
        >
          <div className="container-custom">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                aria-label="Go to homepage"
              >
                <div className="relative h-12 w-12 md:h-16 md:w-16 transform group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/logo-dz.png" // pastikan file ada di /public/images/logo-dz.png
                    alt="DigiLibZ Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-2xl md:text-3xl font-bold bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent tracking-tight">
                  DigiLibZ
                </span>
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop auth actions */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/login" className="px-5 py-2.5 text-primary-600 font-semibold">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-linear-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="md:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile overlay menu + backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 space-y-3 border border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-5 py-3 rounded-xl font-semibold text-gray-700 hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t flex gap-3">
              <Link
                href="/login"
                className="flex-1 px-5 py-3 text-primary-600 font-semibold text-center rounded-xl hover:bg-primary-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="flex-1 px-5 py-3 bg-linear-to-r from-primary-600 to-primary-700 text-white font-semibold text-center rounded-xl shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

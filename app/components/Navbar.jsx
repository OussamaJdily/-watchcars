'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from './ThemeProvider';
import { cn } from '../utils';

// ============================================================================
// Navigation Configuration
// ============================================================================

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#processus', label: 'Processus' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#temoignages', label: 'Avis' },
  { href: '#contact', label: 'Contact' }
];

const PHONE_NUMBER = '+212 522 00 00 00';
const PHONE_HREF = 'tel:+212522000000';

// ============================================================================
// Main Navbar Component
// ============================================================================

export function Navbar() {
  const { theme, toggle, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-700',
          scrolled ? 'pt-3' : 'pt-5'
        )}
      >
        <div className="container-px">
          <nav
            className={cn(
              'mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500',
              scrolled
                ? 'glass-strong max-w-5xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]'
                : 'max-w-6xl'
            )}
          >
            {/* Left: Logo */}
            <BrandLogo />

            {/* Center: Desktop Navigation */}
            <DesktopNavigation />

            {/* Right: Actions */}
            <NavActions 
              theme={theme} 
              mounted={mounted} 
              toggle={toggle} 
              onMenuOpen={() => setOpen(true)} 
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-all"
            >
              <Menu size={18} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

// ============================================================================
// Navbar Sub-Components
// ============================================================================

function BrandLogo() {
  return (
    <a href="#top" aria-label="WatchCars" className="flex-shrink-0 hidden sm:block">
      <Logo size={32} />
    </a>
  );
}

function DesktopNavigation() {
  return (
    <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-bronze-500 to-transparent group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </div>
  );
}

function NavActions({ theme, mounted, toggle, onMenuOpen }) {
  return (
    <div className="hidden md:flex items-center gap-3">
      {/* Phone Link */}
      <a
        href={PHONE_HREF}
        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[var(--text-secondary)] hover:text-teal-300 transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
      >
        <Phone size={14} />
        <span className="hidden lg:inline">{PHONE_NUMBER}</span>
      </a>

      {/* Divider */}
      <div className="w-px h-5 bg-[var(--border)]" />

      {/* Theme Toggle */}
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="h-10 w-10 grid place-items-center rounded-lg border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-all"
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && theme === 'dark' ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={16} className="text-amber-500" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={16} className="text-teal-500" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Booking Button */}
      <a
        href="#reservation"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
      >
        Réserver
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const { theme, toggle, mounted } = useTheme();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-graphite-900/85 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 240 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-[var(--bg-secondary)] border-l border-[var(--border-strong)] shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
                <Logo size={28} />
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="h-10 w-10 grid place-items-center rounded-lg border border-[var(--border)]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block px-4 py-3 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-primary)] rounded-lg transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-[var(--border)] p-6 space-y-3">
                <a
                  href="#reservation"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Réserver un créneau
                  <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={PHONE_HREF}
                    className="flex-1 text-center px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-teal-300 transition-colors rounded-lg hover:bg-[var(--bg-primary)]"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <button
                    onClick={toggle}
                    aria-label="Toggle theme"
                    className="h-10 w-10 grid place-items-center rounded-lg border border-[var(--border)] hover:bg-[var(--bg-primary)] transition-all"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {mounted && theme === 'dark' ? (
                        <motion.span
                          key="sun-mobile"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Sun size={16} className="text-amber-500" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="moon-mobile"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Moon size={16} className="text-teal-500" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;

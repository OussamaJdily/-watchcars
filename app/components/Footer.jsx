'use client';

import { Logo } from './Logo';
import { Instagram, Facebook, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const cols = [
  {
    title: 'Calibres',
    links: [
      { label: 'Lavage Extérieur', href: '#services' },
      { label: 'Intérieur Signature', href: '#services' },
      { label: 'Rituel Complet', href: '#services' },
      { label: 'Detailing Pro', href: '#services' },
      { label: 'Céramique 9H', href: '#services' },
      { label: 'Abonnement', href: '#tarifs' }
    ]
  },
  {
    title: 'Atelier',
    links: [
      { label: 'Notre histoire', href: '#apropos' },
      { label: 'Processus', href: '#processus' },
      { label: 'Galerie', href: '#galerie' },
      { label: 'Témoignages', href: '#temoignages' },
      { label: 'Réservation', href: '#reservation' }
    ]
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Confidentialité', href: '#' },
      { label: 'Cookies', href: '#' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden border-t border-[var(--border-strong)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,111,71,0.05),transparent_70%)]" />

      <div className="relative container-px">
        {/* Big closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 divider-x" />
            <div className="caliber-num text-[10px] tracking-[0.5em] uppercase text-teal-300">
              Casablanca · Calibre 001
            </div>
            <span className="h-px w-12 divider-x" />
          </div>
          <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-light leading-[0.95] tracking-[-0.03em] text-balance">
            Le temps d'un
            <br />
            <span className="italic bronze-text">lavage d'exception.</span>
          </h2>
          <a
            href="#reservation"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-electric-300 via-teal-500 to-teal-600 px-9 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase text-ink-950 shadow-[0_10px_40px_-10px_rgba(0,217,255,0.5)] hover:shadow-[0_20px_60px_-12px_rgba(0,217,255,0.7)] transition-all shine"
          >
            Réserver maintenant
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Footer columns */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-t border-[var(--border)] pt-12">
          {/* Brand col */}
          <div className="md:col-span-5">
            <Logo size={40} animate={false} />
            <p className="mt-6 text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
              WatchCars Casablanca — Atelier de maître automobile où chaque véhicule
              reçoit le soin d'un garde-temps d'exception. Depuis 2018 en quartier Maarif.
            </p>

            <div className="mt-8 flex items-start gap-3">
              <MapPin size={14} className="text-teal-300 mt-1 shrink-0" />
              <div className="text-sm text-[var(--text-secondary)]">
                Boulevard Zerktouni, Maarif<br />
                Casablanca 20100, Maroc<br />
                +212 522 00 00 00
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[
                { icon: Instagram, href: 'https://instagram.com/watchcars.casa', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/watchcars.casa', label: 'Facebook' },
                { icon: MessageCircle, href: 'https://wa.me/212522000000', label: 'WhatsApp' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-teal-300 hover:border-bronze-500/40 transition-all"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col, i) => (
            <div key={i} className="md:col-span-2">
              <div className="caliber-num text-[10px] tracking-[0.3em] uppercase text-teal-300 mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href={l.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-teal-300 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col */}
          <div className="md:col-span-3">
            <div className="caliber-num text-[10px] tracking-[0.3em] uppercase text-teal-300 mb-5">
              Newsletter
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Recevez nos offres exclusives et conseils d'entretien.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-full px-5 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-bronze-500/60 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-electric-300 via-teal-500 to-teal-600 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-950 hover:shadow-[0_8px_24px_-8px_rgba(0,217,255,0.6)] transition-all"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="caliber-num text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)]">
            © 2025 WatchCars Casablanca · Tous droits réservés
          </div>
          <div className="flex items-center gap-6">
            <span className="caliber-num text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              Fait avec précision · Casa
            </span>
            <a
              href="#top"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] hover:border-bronze-500/40 hover:text-teal-300 transition-all"
              aria-label="Retour en haut"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

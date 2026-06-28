'use client';

import { motion } from 'framer-motion';
import { 
  Droplets, Sparkles, Shield, Crown, Sun, Wind, 
  Gauge, Layers
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    code: 'S/01',
    title: 'Lavage Extérieur',
    desc: 'Prélavage haute pression, mousse active, séchage microfibre. Carrosserie éclatante en 25 minutes.',
    features: ['Mousse active PH neutre', 'Séchage sans traces', 'Brillance longue durée'],
    price: '120 MAD'
  },
  {
    icon: Wind,
    code: 'S/02',
    title: 'Intérieur Signature',
    desc: "Aspiration complète, nettoyage des surfaces, vitres intérieures, parfum d'ambiance sur-mesure.",
    features: ['Cuir & tissu traités', 'Vitres sans traces', 'Parfum boisé signature'],
    price: '180 MAD'
  },
  {
    icon: Crown,
    code: 'S/03',
    title: 'Le Rituel Complet',
    desc: "L'expérience WatchCars intégrale. Extérieur + intérieur + finition céramique express. Le standard de la maison.",
    features: ['Extérieur + intérieur', 'Finition express', 'Cadeau de bienvenue'],
    price: '290 MAD',
    featured: true
  },
  {
    icon: Sparkles,
    code: 'S/04',
    title: 'Detailing Pro',
    desc: 'Polissage machine multi-étapes, correction de peinture, lustrage à la main. Pour les puristes.',
    features: ['Polissage 3 passes', 'Correction peinture', 'Finition miroir'],
    price: '1 490 MAD'
  },
  {
    icon: Shield,
    code: 'S/05',
    title: 'Protection Céramique',
    desc: "Revêtement céramique 9H longue durée. Protection jusqu'à 5 ans contre UV, sel et micro-rayures.",
    features: ['Céramique 9H premium', 'Effet hydrophobe', 'Garantie 5 ans'],
    price: '4 900 MAD'
  },
  {
    icon: Layers,
    code: 'S/06',
    title: 'Rénovation Cuir',
    desc: 'Nettoyage en profondeur, hydratation, recoloration des cuirs fatigués. Vos sièges retrouvent leur éclat.',
    features: ['Nettoyage en profondeur', 'Hydratation', 'Protection UV'],
    price: '890 MAD'
  },
  {
    icon: Sun,
    code: 'S/07',
    title: 'Conciergerie',
    desc: 'Collecte & livraison à domicile ou bureau dans tout Casablanca. Service blanc-gant pour VIP.',
    features: ['Collecte à domicile', 'Livraison propre', 'Suivi temps réel'],
    price: '99 MAD'
  },
  {
    icon: Gauge,
    code: 'S/08',
    title: 'Abonnement',
    desc: "4 lavages / mois à tarif préférentiel. Votre véhicule toujours impeccable, sans y penser.",
    features: ['4 lavages complets', 'Priorité réservation', '-25% sur options'],
    price: '990 MAD / mois'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-25" />

      <div className="relative container-px">
        {/* Section header */}
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-12 bg-teal-500" />
            <span className="caliber-num text-[10px] tracking-[0.5em] uppercase text-teal-300">
              01 · Calibres
            </span>
          </motion.div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-[-0.02em] text-balance"
            >
              Huit signatures.
              <br />
              <span className="italic bronze-text">Une obsession.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed"
            >
              Du lavage express à la protection céramique longue durée, chaque service
              est pensé comme un rituel. Choisissez votre tempo.
            </motion.p>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        {/* Services grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {services.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative bg-[var(--bg-primary)] p-7 hover:bg-[var(--bg-secondary)] transition-all duration-500 overflow-hidden corner-frame ${
                s.featured ? 'bg-[var(--bg-secondary)]' : ''
              }`}
            >
              {s.featured && (
                <div className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-teal-500 px-2.5 py-1 caliber-num text-[9px] font-bold tracking-[0.2em] uppercase text-ink-950">
                  ★ Signature
                </div>
              )}

              <div className="flex items-start justify-between mb-8">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-500/10 border border-bronze-500/20 group-hover:bg-teal-500/15 group-hover:border-bronze-500/40 transition-all">
                  <s.icon size={22} className="text-teal-300" strokeWidth={1.4} />
                </div>
                <span className="caliber-num text-[9px] tracking-[0.3em] text-[var(--text-muted)] mt-2">
                  {s.code}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-normal leading-tight text-[var(--text-primary)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[13px] text-[var(--text-secondary)] leading-relaxed">
                {s.desc}
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-1.5">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                    <span className="h-px w-2 bg-teal-500/60" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-7 pt-5 border-t border-[var(--border)] flex items-center justify-between">
                <span className="caliber-num text-[9px] tracking-[0.25em] uppercase text-[var(--text-muted)]">
                  À partir de
                </span>
                <span className="font-display text-lg bronze-text font-normal">
                  {s.price}
                </span>
              </div>

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#reservation"
            className="group inline-flex items-center gap-3 rounded-full border border-bronze-500/30 bg-teal-500/5 px-7 py-4 text-[12px] font-medium tracking-[0.2em] uppercase text-teal-300 hover:bg-teal-500 hover:text-ink-950 transition-all duration-500"
          >
            Voir tous les forfaits
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

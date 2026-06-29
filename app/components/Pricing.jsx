'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Essentiel',
    code: 'T/01',
    desc: 'Le lavage extérieur premium, pour un usage régulier.',
    price: '120',
    unit: 'MAD',
    features: [
      'Lavage extérieur premium',
      'Séchage microfibres',
      'Parfum standard',
      'Prise en charge 25 min'
    ],
    cta: 'Réserver'
  },
  {
    name: 'Signature',
    code: 'T/02',
    desc: 'Le rituel complet, le standard de la maison.',
    price: '290',
    unit: 'MAD',
    features: [
      'Tout le forfait Essentiel',
      'Intérieur complet',
      'Finition céramique express',
      'Parfum signature boisé',
      'Garantie 7 jours',
      'Cadeau de bienvenue'
    ],
    cta: 'Réserver',
    featured: true
  },
  {
    name: 'Détailing',
    code: 'T/03',
    desc: 'Pour les puristes. Correction peinture complète.',
    price: '1490',
    unit: 'MAD',
    features: [
      'Polissage machine 3 passes',
      'Correction peinture 80%+',
      'Protection cire naturelle',
      'Lustrage main',
      'Garantie 30 jours',
      'Suivi photo avant/après'
    ],
    cta: 'Demander un devis'
  }
];

const addons = [
  { name: 'Protection céramique 9H', price: 'À partir de 4 900 MAD' },
  { name: 'Rénovation cuir complète', price: '890 MAD' },
  { name: 'Désinfection habitacle ozone', price: '290 MAD' },
  { name: 'Collecte & livraison (Casablanca)', price: '99 MAD' },
  { name: 'Polissage phares', price: '250 MAD' },
  { name: 'Nettoyage moteur', price: '180 MAD' }
];

export function Pricing() {
  return (
    <section id="tarifs" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg mask-radial opacity-15" />

      <div className="relative container-px">
        {/* Header */}
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
              03 · Catalogue
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
              Trois calibres.
              <br />
              <span className="italic bronze-text">Zéro compromis.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed"
            >
              Tarification transparente, sans surprise. Devis gratuit pour tout
              service detailing ou sur-mesure.
            </motion.p>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.code}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative bg-[var(--bg-primary)] p-8 transition-all duration-500 hover:bg-[var(--bg-secondary)] corner-frame overflow-hidden ${
                plan.featured ? 'bg-[var(--bg-secondary)] md:py-12' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
              )}

              {plan.featured && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-3 py-1 caliber-num text-[9px] font-bold tracking-[0.2em] uppercase text-ink-950">
                  <Crown size={10} />
                  Plus choisi
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <span className="caliber-num text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
                  {plan.code}
                </span>
              </div>

              <h3 className="font-display text-3xl font-light text-[var(--text-primary)]">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] min-h-[40px]">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-light bronze-text">
                  {plan.price}
                </span>
                <span className="caliber-num text-xs text-[var(--text-muted)]">{plan.unit}</span>
              </div>

              <div className="my-8 h-px divider-x" />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                      plan.featured ? 'bg-teal-500 text-ink-950' : 'bg-teal-500/15 text-teal-300'
                    }`}>
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#reservation"
                className={`mt-8 block text-center rounded-full px-6 py-3.5 text-[12px] font-semibold tracking-[0.2em] uppercase transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-ink-950 shadow-[0_8px_24px_-8px_rgba(0,217,255,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(0,217,255,0.8)]'
                    : 'border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-bronze-500 hover:text-teal-300'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={14} className="text-teal-300" />
            <span className="caliber-num text-[10px] tracking-[0.4em] uppercase text-teal-300">
              Options à la carte
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {addons.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center justify-between bg-[var(--bg-primary)] px-5 py-4 hover:bg-[var(--bg-secondary)] transition-colors group"
              >
                <span className="text-sm text-[var(--text-primary)]">{a.name}</span>
                <span className="caliber-num text-xs bronze-text">{a.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;

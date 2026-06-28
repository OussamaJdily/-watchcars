'use client';

import { motion } from 'framer-motion';
import { Search, Droplet, Sparkles, ShieldCheck, Key } from 'lucide-react';

const steps = [
  {
    code: '01',
    icon: Search,
    title: 'Diagnostic',
    desc: 'Inspection complète du véhicule. Identification des zones sensibles : jantes, optiques, cuirs.',
    time: '3 min'
  },
  {
    code: '02',
    icon: Droplet,
    title: 'Prélavage',
    desc: 'Mousse active biodégradable appliquée sur toute la carrosserie. Décontamination chimique douce.',
    time: '8 min'
  },
  {
    code: '03',
    icon: Sparkles,
    title: 'Lavage main',
    desc: 'Méthode des deux seaux. Lavage gant microfibres premium, panneau par panneau.',
    time: '20 min'
  },
  {
    code: '04',
    icon: ShieldCheck,
    title: 'Protection',
    desc: "Application de cires naturelles ou spray sealant selon votre formule. Brillance et hydrophobicité.",
    time: '7 min'
  },
  {
    code: '05',
    icon: Key,
    title: 'Livraison',
    desc: "Contrôle qualité 12 points. Parfum d'ambiance. Remise des clés avec fiche qualité.",
    time: '5 min'
  }
];

export function Process() {
  return (
    <section id="processus" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(139,111,71,0.04)_50%,transparent_100%)]" />

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
              02 · Le Rituel
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
              Cinq étapes.
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
              Notre méthode n'a pas changé depuis 2018. Elle n'a pas besoin de changer.
              Voici comment nous prenons soin de votre véhicule.
            </motion.p>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze-500/30 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-28">
            {steps.map((step, i) => (
              <motion.div
                key={step.code}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Number bubble */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 hidden md:grid h-14 w-14 place-items-center rounded-full bg-[var(--bg-secondary)] border-2 border-bronze-500 z-10">
                  <span className="font-display text-base font-normal text-teal-300">{step.code}</span>
                </div>

                {/* Card */}
                <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''} pl-16 md:pl-0`}>
                  <div className="group relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-secondary)]/60 backdrop-blur-sm p-8 hover:border-bronze-500/40 transition-all duration-500 overflow-hidden">
                    {/* Time badge */}
                    <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border)] px-3 py-1">
                      <span className="h-1 w-1 rounded-full bg-copper-500 animate-pulse" />
                      <span className="caliber-num text-[9px] tracking-widest text-[var(--text-secondary)]">
                        {step.time}
                      </span>
                    </div>

                    {/* Mobile step code */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <span className="h-px w-6 bg-teal-500" />
                      <span className="caliber-num text-[10px] text-teal-300">{step.code}</span>
                    </div>

                    <div className="mt-4 grid h-12 w-12 place-items-center rounded-lg bg-teal-500/10 border border-bronze-500/20">
                      <step.icon size={22} className="text-teal-300" strokeWidth={1.4} />
                    </div>

                    <h3 className="mt-5 font-display text-3xl md:text-4xl font-light text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-bronze-500 to-transparent group-hover:w-full transition-all duration-700" />
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} hidden md:flex items-center justify-center`}>
                  <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-tertiary)]">
                    <ProcessVisual index={i} />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="h-px w-6 bg-teal-500" />
                      <span className="caliber-num text-[9px] tracking-[0.3em] uppercase text-teal-300">
                        {step.code}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessVisual({ index }) {
  const visuals = [
    // Diagnostic - grid scan
    <div key="0" className="absolute inset-0 grid place-items-center">
      <div className="relative h-48 w-72 rounded-xl border border-bronze-500/30 bg-gradient-to-br from-bronze-500/5 to-transparent">
        <motion.div
          className="absolute left-0 right-0 h-px bg-bronze-300 shadow-[0_0_20px_rgba(139,111,71,0.6)]"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute top-2 right-2 caliber-num text-[9px] text-teal-300">SCAN...</div>
        <Car className="absolute inset-0 m-auto opacity-30" size={48} strokeWidth={1} />
      </div>
    </div>,
    // Prélavage - water drops
    <div key="1" className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-bronze-300/70"
          initial={{ y: -20, x: Math.random() * 100 + '%', opacity: 0 }}
          animate={{ y: '120%', opacity: [0, 1, 0] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
      <div className="absolute inset-0 grid place-items-center">
        <div className="font-display text-3xl italic bronze-text">Prélavage</div>
      </div>
    </div>,
    // Lavage main - foam circles
    <div key="2" className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-bronze-500/40"
          style={{
            width: 60 + i * 20,
            height: 60 + i * 20,
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%'
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>,
    // Protection
    <div key="3" className="absolute inset-0 grid place-items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-3xl" />
        <ShieldCheck size={80} strokeWidth={1} className="text-teal-300 relative" />
      </motion.div>
    </div>,
    // Livraison
    <div key="4" className="absolute inset-0 grid place-items-center">
      <motion.div
        animate={{ rotate: [0, -10, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Key size={80} strokeWidth={1.2} className="text-teal-300" />
      </motion.div>
      <div className="absolute bottom-6 caliber-num text-[9px] text-[var(--text-muted)]">Prêt à partir ✦</div>
    </div>
  ];
  return visuals[index];
}

function Car({ size = 24, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  );
}

export default Process;

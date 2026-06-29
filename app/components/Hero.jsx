'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Clock, Shield } from 'lucide-react';
import { VideoBackground } from './VideoBackground';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <VideoBackground />
      <div className="relative z-10 container-px">
        <div className="mx-auto max-w-6xl">
          {/* Top meta line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-between gap-4 mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-teal-500" />
              <span className="caliber-num text-[10px] tracking-[0.4em] uppercase text-teal-300">
                Calibre 001 · MMXXV
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-300 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-300" />
              </span>
              <span className="caliber-num text-[10px] tracking-[0.4em] uppercase text-[var(--text-muted)]">
                Ouvert · 08h → 22h
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="caliber-num text-[11px] tracking-[0.5em] uppercase text-teal-300 mb-6"
            >
              <span className="opacity-50">⌖</span> &nbsp; Atelier de Maître Automobile
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.5rem,11vw,9.5rem)] font-light leading-[0.92] tracking-[-0.03em] text-balance"
            >
              <span className="block text-[var(--text-primary)]">L'horlogerie</span>
              <span className="block italic bronze-text my-2">appliquée à</span>
              <span className="block text-[var(--text-primary)]">l'automobile.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="mx-auto mt-10 h-px w-32 industrial-line"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mx-auto mt-10 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance"
            >
              WatchCars est un atelier de précision à Casablanca où chaque véhicule reçoit
              le soin d'un garde-temps d'exception. Du diagnostic au contrôle qualité, nous
              traitons votre auto comme une pièce d'horlogerie.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#reservation"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase text-ink-950 shadow-[0_12px_40px_-12px_rgba(0,217,255,0.6)] hover:shadow-[0_20px_60px_-12px_rgba(0,217,255,0.8)] transition-all shine"
            >
              <Sparkles size={14} />
              Réserver un créneau
              <span className="text-base transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#processus"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--bg-secondary)]/40 backdrop-blur-md px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase text-[var(--text-primary)] hover:border-teal-500/40 transition-all"
            >
              Le Rituel
              <span className="text-teal-300 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Hero stats — caliber-style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="mt-24"
          >
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 divider-x" />
                <span className="caliber-num text-[10px] tracking-[0.4em] uppercase text-[var(--text-muted)]">
                  Spécifications
                </span>
                <span className="h-px flex-1 divider-x" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]">
                {[
                  { value: '12K+', label: 'Véhicules servis', code: '01' },
                  { value: '4.97', label: 'Note · 487 avis', code: '02' },
                  { value: '08min', label: 'Prise en charge', code: '03' },
                  { value: '7j/7', label: 'Conciergerie', code: '04' }
                ].map((s, i) => (
                  <div
                    key={i}
                    className="relative bg-[var(--bg-primary)] px-6 py-8 group hover:bg-[var(--bg-secondary)] transition-colors"
                  >
                    <div className="absolute top-3 right-3 caliber-num text-[9px] text-[var(--text-muted)] opacity-50">
                      {s.code}
                    </div>
                    <div className="font-display text-4xl md:text-5xl font-light bronze-text leading-none">
                      {s.value}
                    </div>
                    <div className="mt-3 caliber-num text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)]">
                      {s.label}
                    </div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-500/0 group-hover:bg-teal-500/40 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <a href="#services" className="group flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-teal-300 transition-colors">
              <span className="caliber-num text-[10px] tracking-[0.4em] uppercase">Défiler</span>
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <ArrowDown size={14} />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[var(--border)] bg-[var(--bg-secondary)]/50 backdrop-blur-md">
        <div className="container-px py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 caliber-num text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
            <span className="flex items-center gap-2"><Clock size={11} /> Atelier Maarif · Anfa</span>
            <span className="opacity-30">·</span>
            <span className="flex items-center gap-2"><Shield size={11} /> Garantie 7 jours</span>
            <span className="opacity-30">·</span>
            <span>Conciergerie Bourgogne</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

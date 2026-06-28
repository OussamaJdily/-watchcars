'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
  { title: 'Porsche 911 Turbo S', category: 'Detailing · Céramique', code: '01' },
  { title: 'Range Rover Autobiography', category: 'Rituel Signature', code: '02' },
  { title: 'Mercedes AMG GT 63', category: 'Rénovation complète', code: '03' },
  { title: 'BMW M4 Competition', category: 'Protection céramique 9H', code: '04' },
  { title: 'Audi RS6 Avant', category: 'Lavage Premium', code: '05' },
  { title: 'Tesla Model S Plaid', category: 'Conciergerie VIP', code: '06' }
];

const gradients = [
  'from-graphite-900 via-graphite-700 to-bronze-600',
  'from-graphite-800 via-graphite-900 to-bronze-500',
  'from-graphite-900 via-graphite-600 to-bronze-400',
  'from-graphite-900 via-graphite-700 to-copper-500',
  'from-graphite-800 via-graphite-900 to-bronze-500',
  'from-graphite-900 via-graphite-700 to-bronze-600'
];

export function Gallery() {
  return (
    <section id="galerie" className="relative py-32 overflow-hidden">
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
              04 · Archives
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
              Quelques œuvres
              <br />
              <span className="italic bronze-text">récemment signées.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed"
            >
              Chaque véhicule qui passe entre nos mains raconte une histoire.
              Voici quelques signatures récentes de notre atelier.
            </motion.p>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid md:grid-cols-12 gap-px bg-[var(--border)]">
          {galleryItems.map((item, i) => {
            const layouts = [
              'md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto',
              'md:col-span-5 aspect-[4/3]',
              'md:col-span-5 aspect-[4/3]',
              'md:col-span-4 aspect-square',
              'md:col-span-4 aspect-square',
              'md:col-span-4 aspect-square'
            ];
            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`group relative overflow-hidden bg-[var(--bg-primary)] ${layouts[i]} hover:bg-[var(--bg-secondary)] transition-all duration-500 corner-frame`}
              >
                {/* Visual placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-95`} />

                {/* Animated shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-champagne-300/10 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                />

                {/* Car silhouette */}
                <div className="absolute inset-0 grid place-items-center opacity-25 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 200 100" className="w-3/4" fill="none" stroke="#E8D4A8" strokeWidth="1.2">
                    <path d="M10 70 Q 20 50 40 45 L 60 30 Q 80 25 100 25 L 140 25 Q 160 25 175 35 L 190 50 Q 195 55 195 70 L 195 80 L 10 80 Z" />
                    <circle cx="50" cy="80" r="10" />
                    <circle cx="150" cy="80" r="10" />
                    <circle cx="50" cy="80" r="5" />
                    <circle cx="150" cy="80" r="5" />
                  </svg>
                </div>

                {/* Number */}
                <div className="absolute top-5 left-5 caliber-num text-[9px] tracking-[0.3em] text-champagne-300/70">
                  ARCH · {item.code}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-teal-500/10 backdrop-blur-md border border-bronze-500/30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={14} className="text-teal-300" />
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                  <div className="caliber-num text-[9px] tracking-[0.3em] text-champagne-300/80 mb-1.5">
                    {item.category}
                  </div>
                  <div className="font-display text-xl md:text-2xl text-bone-100 font-light leading-tight">
                    {item.title}
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/70 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/watchcars.casa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 caliber-num text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] hover:text-teal-300 transition-colors"
          >
            Suivez @watchcars.casa
            <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;

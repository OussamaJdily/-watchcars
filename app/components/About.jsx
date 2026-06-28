'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Précision horlogère',
    desc: 'Chaque geste est mesuré, chaque seconde compte. Notre protocole ne laisse rien au hasard.'
  },
  {
    icon: Heart,
    title: 'Passion du détail',
    desc: "Nous traitons votre véhicule comme le nôtre. C'est notre obsession quotidienne."
  },
  {
    icon: Leaf,
    title: 'Éco-responsable',
    desc: "Produits biodégradables, consommation d'eau optimisée de 60% vs. lavage traditionnel."
  },
  {
    icon: Users,
    title: "Équipe d'artisans",
    desc: '12 spécialistes formés aux techniques européennes les plus exigeantes.'
  }
];

const numbers = [
  { value: '2018', label: 'Année de fondation' },
  { value: '12', label: 'Spécialistes' },
  { value: '12K+', label: 'Véhicules soignés' },
  { value: '4.97', label: 'Note Google' }
];

export function About() {
  return (
    <section id="apropos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-20" />

      <div className="relative container-px">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-teal-500" />
              <span className="caliber-num text-[10px] tracking-[0.5em] uppercase text-teal-300">
                06 · Notre histoire
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 font-display text-5xl md:text-6xl font-light leading-[0.95] tracking-[-0.02em] text-balance"
            >
              Là où la précision
              <br />
              <span className="italic bronze-text">rencontre l'automobile.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 space-y-5 text-[var(--text-secondary)] leading-relaxed text-[15px]"
            >
              <p>
                <span className="font-display text-2xl bronze-text">WatchCars</span> est né en 2018 à Casablanca,
                d'un constat simple : le lavage automobile au Maroc méritait mieux.
                Beaucoup mieux.
              </p>
              <p>
                Notre fondateur, passionné d'horlogerie suisse et d'automobiles de collection,
                a voulu créer un lieu où chaque véhicule serait traité avec la même exigence
                qu'un garde-temps d'exception. Chaque seconde compte. Chaque détail compte.
              </p>
              <p>
                Aujourd'hui, notre atelier de Maarif accueille plus de 12 000 véhicules par an —
                de la citadine à la supercar — avec une promesse inchangée : la précision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 pt-8 border-t border-[var(--border)] flex items-center gap-4"
            >
              <div className="caliber-num text-[10px] tracking-[0.3em] uppercase text-teal-300">Signé</div>
              <div className="h-px w-12 bg-teal-500/50" />
              <div>
                <div className="font-display text-xl italic bronze-text">Anas El Khoury</div>
                <div className="caliber-num text-[9px] tracking-[0.2em] uppercase text-[var(--text-muted)] mt-1">
                  Fondateur · Maître détaillant
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Values */}
          <div className="space-y-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative bg-[var(--bg-secondary)]/50 backdrop-blur-sm p-6 hover:bg-[var(--bg-tertiary)] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-teal-500/10 border border-bronze-500/20 group-hover:bg-teal-500/20 transition-colors">
                    <v.icon size={22} className="text-teal-300" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-light text-[var(--text-primary)]">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Numbers strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]"
        >
          {numbers.map((n, i) => (
            <div
              key={i}
              className="relative bg-[var(--bg-primary)] px-6 py-8 text-center group hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <div className="absolute top-3 right-3 caliber-num text-[9px] text-[var(--text-muted)] opacity-50">
                0{i + 1}
              </div>
              <div className="font-display text-5xl md:text-6xl font-light bronze-text leading-none">
                {n.value}
              </div>
              <div className="mt-3 caliber-num text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)]">
                {n.label}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;

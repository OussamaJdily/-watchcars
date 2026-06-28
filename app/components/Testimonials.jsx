'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Yassine El Mansouri',
    role: 'CEO, Mansouri Holding',
    car: 'Porsche 911 Turbo S',
    text: "J'ai découvert WatchCars sur recommandation d'un ami. Aujourd'hui, je ne confie plus mon véhicule à personne d'autre. La précision du travail est proprement hallucinante.",
    rating: 5
  },
  {
    name: 'Salma Benjelloun',
    role: "Architecte d'intérieur",
    car: 'Range Rover Autobiography',
    text: "Un service qui vaut chaque dirham. La réservation est fluide, la prise en charge impeccable, et le résultat est toujours au-delà de mes attentes. Bravo à toute l'équipe.",
    rating: 5
  },
  {
    name: 'Karim Tazi',
    role: 'Investisseur',
    car: 'Mercedes AMG GT',
    text: "La conciergerie est un game changer. Ils viennent chercher ma voiture au bureau à 9h et me la rendent impeccable à 14h. Je recommande sans hésiter.",
    rating: 5
  },
  {
    name: 'Lina Cherkaoui',
    role: 'Médecin',
    car: 'Tesla Model S',
    text: "Le detailing est absolument remarquable. Mon Tesla avait des micro-rayures qu'on ne voit plus du tout. Le rendu céramique est magnifique et dure dans le temps.",
    rating: 5
  },
  {
    name: 'Mehdi Ouazzani',
    role: 'Sportif professionnel',
    car: 'Audi RS6',
    text: "Le rapport qualité-prix est imbattable à Casa. Service haut de gamme sans l'arrogance. L'équipe est passionnée et ça se sent à chaque détail.",
    rating: 5
  },
  {
    name: 'Nadia Berrada',
    role: 'Directrice marketing',
    car: 'BMW M4',
    text: "Trois ans que je suis fidèle. Le programme abonnement vaut vraiment le coup — je n'ai plus jamais à penser à l'entretien de ma voiture.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="temoignages" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,111,71,0.06),transparent_70%)]" />

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
              05 · Témoignages
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
              Ce qu'ils en
              <br />
              <span className="italic bronze-text">disent.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C9A876" strokeWidth={0} className="text-teal-300" />
                  ))}
                </div>
                <span className="font-display text-3xl bronze-text">4.97</span>
                <span className="caliber-num text-xs text-[var(--text-muted)]">/ 5</span>
              </div>
              <p className="caliber-num text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                487 avis Google vérifiés
              </p>
            </motion.div>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative bg-[var(--bg-primary)] p-7 hover:bg-[var(--bg-secondary)] transition-all duration-500 corner-frame overflow-hidden"
            >
              <Quote className="absolute top-5 right-5 text-teal-500/15 group-hover:text-teal-500/30 transition-colors" size={40} strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={11} fill="#C9A876" strokeWidth={0} />
                ))}
              </div>

              <p className="mt-5 text-[var(--text-secondary)] leading-relaxed text-[14px]">
                "{t.text}"
              </p>

              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-600 text-ink-950 font-display font-normal text-sm">
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm text-[var(--text-primary)] truncate">
                      {t.name}
                    </div>
                    <div className="caliber-num text-[9px] tracking-[0.15em] uppercase text-[var(--text-muted)] truncate">
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="mt-3 caliber-num text-[9px] tracking-[0.2em] uppercase text-teal-300/80">
                  ✦ {t.car}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

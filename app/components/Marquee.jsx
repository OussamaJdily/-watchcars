'use client';

import { motion } from 'framer-motion';

const items = [
  'BMW Série 7',
  'Mercedes AMG GT',
  'Porsche 911',
  'Range Rover',
  'Audi RS6',
  'Tesla Model S',
  'Lamborghini Huracán',
  'Ferrari Roma',
  'Bentley Continental',
  'Maserati Levante',
  'Rolls-Royce Ghost',
  'Aston Martin DB11'
];

export function Marquee() {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border-strong)] bg-[var(--bg-secondary)]/30 py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl md:text-3xl font-light text-[var(--text-muted)] hover:text-teal-300 transition-colors"
          >
            {item}
            <span className="text-teal-500 text-2xl">⊕</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;

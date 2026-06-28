'use client';

import { motion } from 'framer-motion';
import { cn } from '../utils';

/**
 * WatchCars Logo — Monogramme hybride montre / jante automobile.
 * Calibre de précision · Bronze patiné · Cuivre
 */
export function Logo({ size = 40, className, animate = true, showText = true }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={animate ? { rotate: -90, opacity: 0 } : false}
        animate={animate ? { rotate: 0, opacity: 1 } : false}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D4A8" />
            <stop offset="35%" stopColor="#C9A876" />
            <stop offset="65%" stopColor="#8B6F47" />
            <stop offset="100%" stopColor="#6E5638" />
          </linearGradient>
          <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8945A" />
            <stop offset="100%" stopColor="#945E2F" />
          </linearGradient>
        </defs>

        {/* Outer ring — watch case / wheel rim */}
        <circle cx="32" cy="32" r="29" stroke="url(#bronzeGrad)" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="26" stroke="url(#bronzeGrad)" strokeWidth="0.6" opacity="0.4" />

        {/* Tick marks — 12 hour indices */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 32 + Math.cos(angle) * 24;
          const y1 = 32 + Math.sin(angle) * 24;
          const x2 = 32 + Math.cos(angle) * (i % 3 === 0 ? 21 : 23);
          const y2 = 32 + Math.sin(angle) * (i % 3 === 0 ? 21 : 23);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#bronzeGrad)"
              strokeWidth={i % 3 === 0 ? 1.4 : 0.7}
              strokeLinecap="round"
              opacity={i % 3 === 0 ? 1 : 0.5}
            />
          );
        })}

        {/* Inner bezel */}
        <circle cx="32" cy="32" r="14" stroke="url(#bronzeGrad)" strokeWidth="0.8" fill="none" opacity="0.6" />

        {/* Watch hands — copper */}
        <motion.line
          x1="32" y1="32" x2="32" y2="20"
          stroke="url(#copperGrad)" strokeWidth="2" strokeLinecap="round"
          initial={animate ? { rotate: -120 } : false}
          animate={animate ? { rotate: 0 } : false}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{ transformOrigin: '32px 32px' }}
        />
        <motion.line
          x1="32" y1="32" x2="42" y2="32"
          stroke="url(#copperGrad)" strokeWidth="1.5" strokeLinecap="round"
          initial={animate ? { rotate: -90 } : false}
          animate={animate ? { rotate: 0 } : false}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          style={{ transformOrigin: '32px 32px' }}
        />

        {/* Center pivot */}
        <circle cx="32" cy="32" r="2" fill="url(#bronzeGrad)" />
        <circle cx="32" cy="32" r="0.8" fill="#0A0A0B" />

        {/* Crown */}
        <rect x="61" y="30" width="2.5" height="4" rx="0.5" fill="url(#bronzeGrad)" />
      </motion.svg>

      {showText && (
        <motion.div
          initial={animate ? { opacity: 0, x: -10 } : false}
          animate={animate ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="leading-none"
        >
          <div className="font-display text-[22px] font-medium tracking-[0.18em] text-[var(--text-primary)]">
            WATCH<span className="text-stroke-champagne">CARS</span>
          </div>
          <div className="mt-1.5 font-mono text-[8px] tracking-[0.4em] text-[var(--text-muted)] uppercase">
            Casablanca · Calibre 001
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Logo;

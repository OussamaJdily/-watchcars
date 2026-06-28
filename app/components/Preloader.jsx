'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 500);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg-primary)]"
        >
          <div className="text-center">
            {/* Watch face loader */}
            <div className="relative h-32 w-32 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full border border-bronze-500/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * (Math.PI / 180);
                  return (
                    <div
                      key={i}
                      className="absolute h-2 w-px bg-bronze-300"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top',
                        transform: `rotate(${i * 30}deg) translateX(-50%)`
                      }}
                    />
                  );
                })}
              </motion.div>

              {/* Hands — bronze/copper */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-12 w-1 origin-bottom -translate-x-1/2 bg-gradient-to-t from-bronze-300 to-bronze-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-0.5 origin-bottom -translate-x-1/2 bg-gradient-to-t from-copper-500 to-bronze-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center dot */}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-300" />
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <div className="font-display text-2xl tracking-[0.3em] bronze-text">
                WATCHCARS
              </div>
              <div className="mt-2 caliber-num text-[10px] tracking-[0.5em] uppercase text-[var(--text-muted)]">
                Calibre 001 · Atelier · Casa
              </div>
            </motion.div>

            {/* Progress */}
            <div className="mt-12 w-56 mx-auto">
              <div className="h-px bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-bronze-300 via-bronze-500 to-bronze-600"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between caliber-num text-[10px] tracking-widest text-[var(--text-muted)]">
                <span>Initialisation</span>
                <span>{Math.floor(progress).toString().padStart(3, '0')}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;

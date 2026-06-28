'use client';

import { useEffect, useRef } from 'react';

/**
 * Canvas particle backdrop — Bronze patiné dust
 * Reacts subtly to mouse parallax.
 */
export function CanvasBackdrop({ density = 60, className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const particles = [];

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height - 0.5;
    };

    class P {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.size = Math.random() * 1.8 + 0.3;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.45 + 0.08;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update(t) {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(t * 0.001 + this.pulse) * 0.2;
        this.pulse += 0.02;
        if (this.y < -10) this.reset();
      }
      draw() {
        const mx = mouseRef.current.x * 30;
        const my = mouseRef.current.y * 30;
        ctx.beginPath();
        ctx.arc(this.x + mx, this.y + my, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 118, ${this.opacity})`;
        ctx.shadowColor = 'rgba(139, 111, 71, 0.5)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < density; i++) particles.push(new P());
    };

    const render = (t) => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(t); p.draw(); });
      rafRef.current = requestAnimationFrame(render);
    };

    onResize();
    init();
    render(0);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [density]);

  return (
    <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />
  );
}

export default CanvasBackdrop;

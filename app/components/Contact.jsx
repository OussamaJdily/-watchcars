'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, CheckCircle2
} from 'lucide-react';

const services = [
  'Lavage Extérieur Premium',
  'Intérieur Signature',
  'Rituel Complet',
  'Detailing Pro',
  'Protection Céramique',
  'Abonnement Mensuel'
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[2],
    date: '',
    message: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', service: services[2], date: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
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
              07 · Réservation
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
              Réservez votre
              <br />
              <span className="italic bronze-text">créneau.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg leading-relaxed"
            >
              Confirmation sous 30 minutes par WhatsApp. Notre équipe vous rappelle
              pour valider votre rendez-vous.
            </motion.p>
          </div>

          <div className="mt-8 h-px divider-x" />
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-px bg-[var(--border)]">
          {/* Form */}
          <motion.div
            id="reservation"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative bg-[var(--bg-primary)] p-8 md:p-10 corner-frame"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid place-items-center min-h-[480px] text-center"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-600 text-ink-950"
                  >
                    <CheckCircle2 size={40} strokeWidth={2} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl bronze-text">Demande reçue.</h3>
                  <p className="mt-3 text-[var(--text-secondary)] max-w-md">
                    Merci {form.name || 'à vous'} ! Notre équipe vous recontacte dans les 30 minutes.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="caliber-num text-[10px] tracking-[0.3em] uppercase text-teal-300">
                    Formulaire
                  </span>
                  <span className="h-px flex-1 divider-x" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Nom complet"
                    value={form.name}
                    onChange={v => setForm({ ...form, name: v })}
                    placeholder="Anas El Khoury"
                    required
                  />
                  <Field
                    label="Téléphone"
                    type="tel"
                    value={form.phone}
                    onChange={v => setForm({ ...form, phone: v })}
                    placeholder="+212 6 12 34 56 78"
                    required
                  />
                </div>

                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={v => setForm({ ...form, email: v })}
                  placeholder="vous@email.com"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Service souhaité</Label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full mt-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] focus:border-bronze-500/60 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all"
                    >
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <Field
                    label="Date souhaitée"
                    type="date"
                    value={form.date}
                    onChange={v => setForm({ ...form, date: v })}
                  />
                </div>

                <div>
                  <Label>Message (optionnel)</Label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Modèle du véhicule, demandes spécifiques..."
                    className="w-full mt-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-bronze-500/60 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-electric-300 via-teal-500 to-teal-600 px-7 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase text-ink-950 shadow-[0_10px_40px_-10px_rgba(0,217,255,0.5)] hover:shadow-[0_20px_60px_-12px_rgba(0,217,255,0.7)] transition-all shine"
                >
                  <Send size={14} />
                  Confirmer ma réservation
                  <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                </button>

                <p className="text-center caliber-num text-[9px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                  Réponse garantie sous 30 min · Lun-Sam
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-px bg-[var(--border)]"
          >
            <InfoCard
              icon={MapPin}
              label="Atelier principal"
              value={[
                'Boulevard Zerktouni, Maarif',
                'Casablanca 20100 · Maroc'
              ]}
            />

            <InfoCard
              icon={Clock}
              label="Horaires d'ouverture"
              value={[
                'Lun – Sam · 8h00 – 22h00 (Casablanca)',
                'Dim · 10h00 – 20h00'
              ]}
            />

            <InfoCard
              icon={Phone}
              label="Téléphone"
              value={['+212 522 00 00 00', '+212 6 12 34 56 78']}
            />

            <InfoCard
              icon={Mail}
              label="Email"
              value={['contact@watchcars.ma', 'conciergerie@watchcars.ma']}
            />

            {/* Social */}
            <div className="bg-[var(--bg-primary)] p-6 corner-frame">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={14} className="text-teal-300" />
                <span className="caliber-num text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
                  Suivez-nous
                </span>
              </div>
              <div className="flex gap-2">
                <a href="https://wa.me/212522000000" target="_blank" rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-ink-950 transition-all" aria-label="WhatsApp">
                  <MessageCircle size={16} />
                </a>
                <a href="https://instagram.com/watchcars.casa" target="_blank" rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full bg-teal-500/10 border border-bronze-500/30 text-teal-300 hover:bg-teal-500 hover:text-ink-950 transition-all" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://facebook.com/watchcars.casa" target="_blank" rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full bg-teal-500/10 border border-bronze-500/30 text-teal-300 hover:bg-teal-500 hover:text-ink-950 transition-all" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              </div>
              <p className="mt-4 caliber-num text-[9px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                Réponse WhatsApp · 15 min
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <span className="caliber-num text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)]">
      {children}
    </span>
  );
}

function Field({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <Label>{label}{required && ' *'}</Label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full mt-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-bronze-500/60 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="group bg-[var(--bg-primary)] p-6 hover:bg-[var(--bg-secondary)] transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-500/15 border border-bronze-500/30">
          <Icon size={13} className="text-teal-300" />
        </div>
        <span className="caliber-num text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
          {label}
        </span>
      </div>
      <div className="space-y-1">
        {value.map((v, i) => (
          <div key={i} className="text-[14px] text-[var(--text-primary)] leading-relaxed">
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;

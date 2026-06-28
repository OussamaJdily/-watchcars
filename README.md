# WatchCars Casablanca — Site Officiel

> **Le lavage automobile de précision.** Là où chaque minute compte.

Site web premium pour **WatchCars**, atelier de lavage automobile haut de gamme à Casablanca. Conçu comme une pièce d'horlogerie : précision, élégance, performance.

---

## ✦ Stack technique

| Couche | Technologie |
|---|---|
| Framework | **Next.js 14** (App Router) |
| UI | **React 18** + **Tailwind CSS 3** |
| Animations | **Framer Motion 11** |
| 3D | **Three.js** + **React Three Fiber** + **Drei** |
| Icônes | **Lucide React** |
| Thème | **next-themes** (dark/light) |
| Fonts | **Inter** + **Cormorant Garamond** + **JetBrains Mono** |
| Canvas | API Canvas native (particules en arrière-plan) |

---

## ✦ Identité visuelle

**Palette principale :**
- `#06080F` · Encre profonde (fond dark)
- `#FAF7F2` · Crème (fond light)
- `#D4AF37` · Or signature
- `#6FE4F5` · Glace (accent secondaire)

**Typographie :**
- **Cormorant Garamond** — Titres display, italiques élégantes
- **Inter** — Corps de texte, lisibilité optimale
- **JetBrains Mono** — Labels techniques, codes, timestamps

**Concept logo :** Hybride montre / jante automobile — la précision horlogère au service du véhicule.

---

## ✦ Lancer le projet

```bash
# Installation
npm install

# Développement
npm run dev
# → http://localhost:3000

# Production
npm run build
npm start
```

---

## ✦ Structure du site

```
app/
├── components/
│   ├── Navbar.jsx          Navigation glassmorphique + thème toggle
│   ├── Preloader.jsx       Loader avec montre animée
│   ├── Hero.jsx            Hero 3D avec scène Three.js
│   ├── Scene3D.jsx         Hybrid watch + wheel 3D
│   ├── CanvasBackdrop.jsx  Particules canvas en arrière-plan
│   ├── Marquee.jsx         Bandeau marques défilant
│   ├── Services.jsx        8 services signature
│   ├── Process.jsx         5 étapes du rituel
│   ├── Pricing.jsx         3 forfaits + options à la carte
│   ├── Gallery.jsx         Réalisations récentes (grid mosaïque)
│   ├── Testimonials.jsx    6 témoignages clients
│   ├── About.jsx           Histoire + valeurs + chiffres
│   ├── Contact.jsx         Formulaire réservation + coordonnées
│   ├── Footer.jsx          Footer complet + newsletter
│   ├── Logo.jsx            Logotype animé SVG
│   ├── CursorGlow.jsx      Effet curseur lumineux
│   └── ThemeProvider.jsx   Gestion dark/light mode
├── layout.js               Layout racine + fonts Google
├── page.js                 Page principale
├── globals.css             Design system + utility classes
└── icon.svg                Favicon WatchCars
```

---

## ✦ Fonctionnalités phares

### 🎨 Design system legacy
- 2 modes complets (sombre + clair) avec transitions fluides
- Glassmorphisme, grain texture, gradient mesh
- Variables CSS custom pour adaptation instantanée au thème

### 🎬 Animations 2030
- **Framer Motion** sur chaque section (reveal, parallax, hover)
- **Scroll-linked animations** sur tous les titres
- **Shine effects** sur les CTA
- **Magnetic buttons** + hover transformations
- **Counter animations** pour les statistiques

### 🌐 3D + Canvas
- Scène **Three.js** temps réel : montre × jante × morphing core
- Particules canvas réactives au curseur (effet parallaxe)
- Particle field 3D ambient autour de la scène principale

### 📱 Responsive + performant
- 100% responsive (mobile, tablette, desktop)
- **First Load JS** : 151 kB seulement
- **Static generation** (SSG) — déploiement Vercel-ready
- Images optimisées, fonts swap, lazy-loading 3D

### 🇫🇷 100% Français
- Tout le contenu rédigé en français
- Tarifs en MAD (Dirhams marocains)
- Localisation Casablanca (Maarif, Anfa, Bourgogne)

---

## ✦ Identité & Branding

**WatchCars** joue sur la fusion entre :
- 🔍 **L'horlogerie suisse** — précision, mesure du temps
- 🚗 **L'automobile de luxe** — carrosserie, mécanique, soin du détail

**Promesse client :** *"Le temps d'un lavage d'exception."*

---

## ✦ Crédits

Conçu et développé pour WatchCars Casablanca.
© 2025 — Tous droits réservés.
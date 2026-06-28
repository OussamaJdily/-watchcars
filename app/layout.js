import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Inter, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata = {
  title: 'WatchCars — Atelier de Maître Automobile · Casablanca',
  description:
    "WatchCars Casablanca — Atelier de lavage automobile de maître. Chaque véhicule traité comme un garde-temps d'exception. Casablanca, Maroc.",
  keywords: [
    'lavage auto Casablanca',
    'WatchCars',
    'detailing Maroc',
    'protection céramique',
    'lavage premium',
    'atelier automobile'
  ],
  authors: [{ name: 'WatchCars Casablanca' }],
  openGraph: {
    title: 'WatchCars — Atelier de Maître Automobile',
    description:
      "L'horlogerie appliquée à l'automobile. Casablanca, Maroc.",
    locale: 'fr_FR',
    type: 'website'
  }
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0B' },
    { media: '(prefers-color-scheme: light)', color: '#F5F2EC' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
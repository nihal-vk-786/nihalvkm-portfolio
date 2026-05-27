import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne, DM_Mono } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-syne',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Nihal | Software Engineer',
  description: 'Portfolio of Nihal, Software Engineer & Architect',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${syne.variable} ${dmMono.variable} font-body text-ivory bg-obsidian selection:bg-gold selection:text-obsidian`}>
        {children}
      </body>
    </html>
  );
}
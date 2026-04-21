import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const felix = localFont({
  src: './fonts/felix.ttf',
  variable: '--font-felix',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jantar Vínico',
  description: 'Uma experiência guiada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${felix.variable}`} suppressHydrationWarning>
      <body className="bg-black text-light antialiased selection:bg-primary selection:text-light flex justify-center" suppressHydrationWarning>
        <div className="w-full max-w-[430px] min-h-screen bg-background relative shadow-[0_0_40px_rgba(0,0,0,0.8)] border-x border-light/5 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

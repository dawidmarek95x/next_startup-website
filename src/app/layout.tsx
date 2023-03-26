'use client';
import { ReactNode } from 'react';
import { workSans } from '@/helpers/fonts';
import Header from '@/components/Header/Header';
import './globals.scss';

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

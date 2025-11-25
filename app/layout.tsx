import React, { ReactNode } from 'react';
import RootHeader from './components/RootHeader';
import './globals.css';

export const metadata = {
  title: 'Michael Dave Plana Portfolio',
  description: 'Professional IT Portfolio',
};

// Type the children prop
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-600 text-white">
        <RootHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}

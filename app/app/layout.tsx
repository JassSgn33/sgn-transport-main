import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SGN Transport Inc.',
  description: 'Reliable dump-truck hauling across the GTA',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

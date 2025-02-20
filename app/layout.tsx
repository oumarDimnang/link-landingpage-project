import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Link - AI-Driven Threat Intelligence',
  description: 'Zero-Day Prediction and Zero-Trust Implementation for proactive cybersecurity defense',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
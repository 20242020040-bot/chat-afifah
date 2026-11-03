import type { Metadata } from 'next';
import { Nunito, Playfair_Display } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Princess AI Asisten',
  description:
    'Princess AI Asisten untuk melayani customer dengan gaya ramah dan elegan.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Princess AI Asisten',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-180x180.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f5b6c8" />
        <meta name="description" content={metadata.description as string} />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Princess AI Asisten" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${nunito.variable} ${playfair.variable} bg-rose-50 text-rose-950 dark:bg-[#241826] dark:text-rose-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}

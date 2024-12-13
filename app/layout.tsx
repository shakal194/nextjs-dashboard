import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

import { SessionProvider } from 'next-auth/react';
import Providers from '@/app/providers';
import { NextUIProvider } from '@nextui-org/react';
import Header from '@/app/ui/_components/Headers/Header';
import Footer from '@/app/ui/footer';

import { appWithTranslation } from 'next-i18next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*<body className={`${lusitana.className} antialiased`}>*/}
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <NextUIProvider>
            <SessionProvider>
              {/*<Header />*/}
              {children}
              {/*<Footer />*/}
            </SessionProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}

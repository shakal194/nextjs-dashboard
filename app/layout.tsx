import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { SessionProvider } from 'next-auth/react';
import Providers from '@/app/providers';
import { ModalProvider } from '@/app/ui/dashboard/merchants/context/ModalContext';
import { InputProvider } from '@/app/ui/dashboard/merchants/context/InputContext';
import { NextUIProvider } from '@nextui-org/react';
import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';

import { appWithTranslation } from 'next-i18next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <NextUIProvider>
            <InputProvider>
              <ModalProvider>
                <SessionProvider>
                  {/*<Header />*/}
                  {children}
                  {/*<Footer />*/}
                </SessionProvider>
              </ModalProvider>
            </InputProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}

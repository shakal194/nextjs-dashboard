import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { SessionProvider } from 'next-auth/react';
import Providers from '@/app/providers';
import { ModalProvider } from '@/app/ui/dashboard/merchants/context/ModalContext';
import { InputProvider } from '@/app/ui/dashboard/merchants/context/InputContext';

export default function RootLayout({
  children,
  //session,
}: {
  children: React.ReactNode;
  // session: SessionProviderProps;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <InputProvider>
            <ModalProvider>
              <SessionProvider>{children}</SessionProvider>
            </ModalProvider>
          </InputProvider>
        </Providers>
      </body>
    </html>
  );
}

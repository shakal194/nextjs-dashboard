import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { SessionProvider } from 'next-auth/react';
import Providers from '@/app/providers';

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
          <SessionProvider>{children}</SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

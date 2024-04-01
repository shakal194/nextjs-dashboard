import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { Session } from 'next-auth';

export default function RootLayout({
  children,
  //session,
}: {
  children: React.ReactNode;
  // session: SessionProviderProps;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/*<SessionProvider session={session}>{children}</SessionProvider>*/}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

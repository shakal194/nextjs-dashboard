import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'ua' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
import { Locale, getDictionary } from '../dictionaries';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function LoginPage({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <div className="text-white">
            <CoinsFishLogo />
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <LoginForm />
      </div>
      <Link href="/" className="text-center">
        <span className="text-center text-black">{intl.login_forgot}</span>
      </Link>
    </main>
  );
}

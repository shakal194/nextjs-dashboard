import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function LoginPage() {
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
        <span className="text-center text-black">Forgot your password?</span>
      </Link>
    </main>
  );
}

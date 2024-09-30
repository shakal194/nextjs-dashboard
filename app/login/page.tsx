import Header from '../ui/_components/Header';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex justify-center">
          <LoginForm />
        </div>
        <div className="mt-2 flex justify-center">
          <Link href="/recovery">
            <span className="text-center text-black dark:text-white">
              Forgot your password?
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}

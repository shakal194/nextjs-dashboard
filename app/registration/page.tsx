import RegistrationForm from '@/app/ui/register-form';
import Link from 'next/link';
import Header from '@/app/ui/_components/Header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex justify-center">
          <RegistrationForm />
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

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
        <Link href="/" className="text-center">
          <span className="text-center text-black">Forgot your password?</span>
        </Link>
      </main>
    </>
  );
}

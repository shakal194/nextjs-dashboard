import RecoveryForm from '@/app/ui/recovery-form';
import Link from 'next/link';
import Header from '@/app/ui/_components/Header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function RecoveryPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex justify-center">
          <RecoveryForm />
        </div>
      </main>
    </>
  );
}

import RecoveryForm from '@/app/ui/_components/Forms/recovery-form';
import Header from '@/app/ui/_components/Headers/Header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Recover Page',
  description: 'Recovery password to CoinsFish.',
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

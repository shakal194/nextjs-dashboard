import BalanceWrapper from '@/app/ui/dashboard/balance';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { auth } from '@/auth';
import ReceiveButton from '@/app/ui/_components/ReceiveButton';
import WithdrawalButton from '@/app/ui/_components/WithdrawalButton';

export default async function Page() {
  const session = await auth();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Welcome {session?.user?.name ?? ''} to your Dashboard
      </h1>
      <div className="bg-sky-100">
        <Suspense fallback={<CardsSkeleton />}>
          <BalanceWrapper />
        </Suspense>
        <div className="grid gap-2 md:grid-cols-2">
          <ReceiveButton />
          <WithdrawalButton />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div>
    </main>
  );
}

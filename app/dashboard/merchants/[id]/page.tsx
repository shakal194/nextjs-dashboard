import Breadcrumbs from '@/app/ui/dashboard/invoices/breadcrumbs';
import { fetchMerchantById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import BalanceWrapper from '@/app/ui/dashboard/balance';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import ReceiveButton from '@/app/ui/_components/ReceiveButton';
import WithdrawalButton from '@/app/ui/_components/WithdrawalButton';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [merchant] = await Promise.all([fetchMerchantById(id)]);

  if (!merchant) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[{ label: 'Merchants', href: '/dashboard/merchants' }]}
      />
      <div className="bg-sky-100 p-4">
        <Suspense fallback={<CardsSkeleton />}>
          <div>
            <h1 className="text-2xl font-bold">{merchant.merchant_name}</h1>
          </div>
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

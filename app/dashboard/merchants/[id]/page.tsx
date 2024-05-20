import Breadcrumbs from '@/app/ui/dashboard/invoices/breadcrumbs';
import { fetchMerchantById, fetchMerchantWalletById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import BalanceWrapper from '@/app/ui/dashboard/balance';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import ReceiveButton from '@/app/ui/_components/ReceiveButton';
import WithdrawalButton from '@/app/ui/_components/WithdrawalButton';
import MerchantMenuPage from '@/app/ui/dashboard/merchants/merchants-menu';
import { CreateWallet } from '@/app/ui/dashboard/merchants/wallet/buttons';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [merchant, wallet] = await Promise.all([
    fetchMerchantById(id),
    fetchMerchantWalletById(id),
  ]);
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
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{merchant.merchant_name}</h1>
            <CreateWallet id={id} />
          </div>
          <BalanceWrapper />
        </Suspense>
        <div className="grid gap-2 md:grid-cols-2">
          <ReceiveButton walletAddress={wallet.address} />
          <WithdrawalButton />
        </div>
      </div>
      <MerchantMenuPage id={id} />
    </main>
  );
}

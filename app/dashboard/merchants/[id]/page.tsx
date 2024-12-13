import Breadcrumbs from '@/app/ui/dashboard/merchants/breadcrumbs';
import { fetchMerchantById, fetchMerchantWallet } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import BalanceWrapper from '@/app/ui/dashboard/balance';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import ReceiveButton from '@/app/ui/_components/ReceiveButton';
import WithdrawalButton from '@/app/ui/_components/WithdrawalButton';
import MerchantMenuPage from '@/app/ui/dashboard/merchants/MerchantsMenu';
import { CreateWallet } from '@/app/ui/dashboard/merchants/wallet/buttons';
import { BanknotesIcon } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const merchant = await fetchMerchantById(id);

  //const merchant = await fetchMerchantById(id);
  const merchantName = merchant.nameWallet;
  const merchantBalance = merchant.Balance;

  const merchantWallet = await fetchMerchantWallet(merchantName);

  if (!merchant) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Merchants', href: '/dashboard/merchants' },
          {
            label: `${merchantName}`,
            href: `/dashboard/merchants/${id}`,
            active: true,
          },
        ]}
      />
      <div className="bg-sky-100 p-4 dark:bg-gray-800">
        <Suspense fallback={<CardsSkeleton />}>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{merchantName}</h1>
            <CreateWallet id={id} nameWallet={merchantName} />
            {/*<CreateWallet />*/}
          </div>
          {/*<BalanceWrapper />*/}
          <div className="rounded-xl bg-sky-100 dark:bg-gray-800">
            <div className="flex">
              <BanknotesIcon className="h-5 w-5 text-gray-700 dark:text-white" />
              <h3 className="ml-2 text-sm font-medium">
                Available {merchantBalance}
              </h3>
            </div>
            <p className="truncate rounded-xl py-8 text-2xl">
              {merchantBalance} USDT
            </p>
          </div>
        </Suspense>
        <div className="grid gap-2 md:grid-cols-2">
          <ReceiveButton walletAddress={merchantWallet} />
          {/*<ReceiveButton />*/}
          <WithdrawalButton />
        </div>
      </div>
      <MerchantMenuPage nameWallet={merchant.nameWallet} />
      {/*<MerchantMenuPage />*/}
    </main>
  );
}

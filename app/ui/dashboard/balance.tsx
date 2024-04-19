//'use client';

import { BanknotesIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchBtcBalance } from '@/app/lib/data';
//import { useState, useEffect } from 'react';

const iconMap = {
  balance: BanknotesIcon,
};

export default async function BalanceWrapper() {
  const { balanceInUsdBinance, balanceInUsdMinerstat } =
    await fetchBtcBalance();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Balance
        title="Balance"
        value={balanceInUsdBinance || balanceInUsdMinerstat}
        type="balance"
      />
    </>
  );
}

export function Balance({
  title,
  value,
  type,
}: {
  title: string;
  value: number;
  type: 'balance';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-sky-100 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">Available {title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl px-4 py-8 text-2xl`}
      >
        ${value}
      </p>
    </div>
  );
}

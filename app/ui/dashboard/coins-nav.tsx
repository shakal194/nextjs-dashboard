//'use client';

//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
//import { useState, useEffect } from 'react';
import { fetchBtcBalance } from '@/app/lib/data';

const coins = [
  {
    name: 'Bitcoin',
    image: '/svg/bitcoin_dashboard.svg',
    background: 'rgb(249 115 22)',
  },
  {
    name: 'Tether',
    image: '/svg/tether_dashboard.svg',
    background: 'rgb(80 175 149)',
  },
  {
    name: 'Tron',
    image: '/svg/trx_dashboard.svg',
    background: 'rgb(229, 9, 21)',
  },
];

export default async function CoinsNav() {
  const { balanceInUsd, balanceInCurrency } = await fetchBtcBalance();

  return (
    <div>
      <div className="hidden md:block">
        {coins.map((coin) => (
          <div key={coin.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl">
                <img className="h-11 w-11" src={coin.image} alt={coin.name} />
              </div>
              <div>{coin.name}</div>
            </div>
            <div className="flex flex-col">
              <div>{balanceInCurrency}</div>
              <div>{balanceInUsd}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

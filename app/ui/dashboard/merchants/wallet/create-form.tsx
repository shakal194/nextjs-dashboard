'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { WalletSkeleton } from '@/app/ui/skeletons';
import {
  createWallet,
  createWalletEth,
  createWalletUsdt,
} from '@/app/lib/actions';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import coins from '@/app/ui/_data/coin_slider-data.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const walletFunctions: { [key: string]: (sessionId: string) => Promise<any> } =
  {
    Bitcoin: createWallet,
    Etherium: createWalletEth,
    Tether: createWalletUsdt,
  };

export default function CreateWalletForm({ id }: { id: string }) {
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (session && session.user && selectedCoin) {
      const walletFunction =
        walletFunctions[selectedCoin as keyof typeof walletFunctions];

      if (walletFunction) {
        const result = await walletFunction(id);

        if (result.status === 400) {
          setErrorMessage(result.message);
          Notify.init({ distance: '30px' });
          Notify.failure(result.message);
        } else {
          console.error(result.message);
        }
      } else {
        console.error('No function found for the selected coin.');
      }
    } else {
      console.error('Session or user ID not found.');
    }
  };

  const handleCoinSelection = (coinTitle: string) => {
    setSelectedCoin(coinTitle);
    setErrorMessage(null); // Очищаем сообщение об ошибке при смене монеты
  };

  return status === 'loading' ? (
    <WalletSkeleton />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        {coins.map((coin) => (
          <div
            key={coin.title}
            className={`mr-4 flex cursor-pointer items-center justify-between rounded-lg border-2 last:mr-0 md:p-2 md:px-3 ${
              selectedCoin === coin.title
                ? 'bg-sky-100 text-blue-600'
                : 'hover:bg-sky-100 hover:text-blue-600'
            }`}
            onClick={() => handleCoinSelection(coin.title)}
          >
            <div className="flex items-center">
              <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl ">
                <Image
                  className="h-11 w-11"
                  width="44"
                  height="44"
                  src={coin.image_dashobard}
                  alt={coin.title}
                />
              </div>
              <div>{coin.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href={`/dashboard/merchants/${id}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {selectedCoin && <Button type="submit">Create Wallet</Button>}
      </div>
    </form>
  );
}

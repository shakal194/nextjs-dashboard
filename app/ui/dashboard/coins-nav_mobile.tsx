'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
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

interface BalanceData {
  balanceInCurrency: number;
  balanceInUsd: number;
}

const initialBalanceData: BalanceData = {
  balanceInCurrency: 0,
  balanceInUsd: 0,
};

export default function CoinsNavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [balanceData, setBalanceData] = useState<BalanceData>(initialBalanceData);

  useEffect(() => {
    if (isMenuOpen) {
      loadData();
    }
  }, [isMenuOpen]);

  const loadData = async () => {
    try {
      const { balanceInCurrency, balanceInUsd } = await fetchBtcBalance();
      setBalanceData((balanceData = { balanceInCurrency, balanceInUsd }));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center">
      <Bars3Icon
        className="h-6 w-6 cursor-pointer text-gray-700 md:hidden"
        onClick={handleToggleMenu}
      />
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-11/12 rounded-lg bg-white p-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Coins & Balances</h2>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer text-gray-700"
                onClick={handleCloseMenu}
              />
            </div>
            <div>
              {coins.map((coin) => (
                <div
                  key={coin.name}
                  className="my-2 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl">
                      <img
                        className="h-11 w-11"
                        src={coin.image}
                        alt={coin.name}
                      />
                    </div>
                    <div>{coin.name}</div>
                  </div>
                  <div className="flex flex-col">
                    <div>{balanceData.balanceInCurrency}</div>
                    <div>${balanceData.balanceInUsd}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

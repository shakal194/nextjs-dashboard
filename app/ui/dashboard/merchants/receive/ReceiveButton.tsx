'use client';

import { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import ReceiveForm from '@/app/ui/dashboard/ReceiveForm';
import Link from 'next/link';

export default function ReceiveButton({
  id,
  walletAddress,
}: {
  id: string;
  walletAddress: string[];
}) {
  const [showCoinForm, setShowCoinForm] = useState(false);

  const toggleCoinForm = () => {
    setShowCoinForm((prev) => !prev); // Инвертируем текущее значение
  };

  return (
    <div>
      <Link
        className="flex max-w-[200px] items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        href={`/dashboard/merchants/${id}/receive`}
      >
        <ArrowDownIcon className="w-5 md:w-6" />
        Receive
      </Link>

      {/* Если showCoinForm равно true, отображаем CoinForm */}
      {showCoinForm && <ReceiveForm walletAddress={walletAddress} />}
    </div>
  );
}

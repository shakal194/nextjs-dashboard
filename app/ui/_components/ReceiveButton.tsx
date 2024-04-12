'use client';

import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import ReceiveForm from '@/app/ui/dashboard/ReceiveForm';

export default function ReceiveButton() {
  const [showCoinForm, setShowCoinForm] = useState(false);

  const toggleCoinForm = () => {
    setShowCoinForm((prev) => !prev); // Инвертируем текущее значение
  };

  return (
    <div>
      <div className="grid gap-6 bg-sky-100 sm:grid-cols-2 lg:grid-cols-4">
        <button
          className="m-4 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          onClick={toggleCoinForm}
        >
          <ArrowDownIcon className="w-5 md:w-6" />
          Receive
        </button>
      </div>

      {/* Если showCoinForm равно true, отображаем CoinForm */}
      {showCoinForm && <ReceiveForm />}
    </div>
  );
}

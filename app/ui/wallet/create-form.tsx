'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { WalletSkeleton } from '@/app/ui/skeletons';
import { createWallet } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

export default function Form() {
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Состояние для хранения сообщения об ошибке

  // Функция для обработки отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Проверяем, что сессия существует и содержит ID пользователя
    if (session && session.user && session.user.id) {
      const result = await createWallet(session.user.id); // Вызываем функцию createWallet с ID пользователя
      console.log(result); // Выводим результат в консоль для отладки

      // Проверяем статус результата
      if (result.status === 400) {
        setErrorMessage(result.message); // Устанавливаем сообщение об ошибке
      } else {
        console.log(result.message); // Выводим сообщение об успехе или ошибке
      }
    } else {
      console.error('Session or user ID not found.'); // Выводим сообщение об ошибке, если сессия или ID пользователя отсутствуют
    }
  };

  return status === 'loading' ? (
    <WalletSkeleton />
  ) : (
    <form onSubmit={handleSubmit}>
      {' '}
      {/* 3. Обработка отправки формы */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/dashboard/wallet"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Wallet</Button>
      </div>
      {errorMessage && <p className="mt-10 text-red-500">{errorMessage}</p>}{' '}
      {/* Выводим сообщение об ошибке */}
    </form>
  );
}

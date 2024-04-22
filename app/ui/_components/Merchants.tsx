'use client';

import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/app/ui/button';
import { useSession } from 'next-auth/react';

export default function Merchants() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [merchantName, setMerchantName] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMerchantName(''); // Сбрасываем введенное значение при закрытии модального окна
  };

  const handleInputChange = (e: any) => {
    setMerchantName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Здесь можно добавить логику для создания мерчанта
    console.log('Creating merchant:', merchantName);
    closeModal();
  };
  const handleEscapeKeyPress = (e: any) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutsideModal = (e: any) => {
    if (e.target.classList.contains('bg-opacity-50')) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyPress);
    document.addEventListener('click', handleClickOutsideModal);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="z-10 border border-x-0 border-y-slate-300">
      <Link
        href="/dashboard/merchants"
        className={clsx(
          'mt-2 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-sky-100 text-blue-600': pathname === '/dashboard/merchants',
          },
        )}
      >
        Merchants
      </Link>
      <Button
        onClick={openModal}
        className="mb-4 flex items-center gap-5 self-start"
      >
        <PlusIcon className="w-9" />
        Create merchant
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative w-96 rounded-md bg-white p-8">
            <div className="mb-4 border border-x-0 border-t-0 border-b-slate-300">
              <XMarkIcon
                className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-700"
                onClick={closeModal}
              />
              <h2 className="mb-4 text-xl font-bold">Create new merchant</h2>
            </div>
            <form onSubmit={handleSubmit} name="merchantName">
              <div className="mb-4">
                <label htmlFor="merchantName" className="mb-2 block font-bold">
                  Enter a merchant name
                </label>
                <input
                  type="text"
                  id="merchantName"
                  name="merchantName"
                  className="w-full rounded-md border-gray-300 p-2"
                  placeholder="Merchant name"
                  value={merchantName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className={`${
                    !merchantName && 'cursor-not-allowed opacity-50'
                  }`}
                  disabled={!merchantName}
                >
                  Create merchant
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

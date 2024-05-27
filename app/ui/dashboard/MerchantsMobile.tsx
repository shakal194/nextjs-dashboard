'use client';

import { ReactNode, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MerchantsMobile({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="hidden flex-col px-3 py-4 md:block md:px-2">
        {children}
      </div>
      <div className="relative h-full flex-col px-3 py-4 md:hidden md:px-2">
        <Bars3Icon className="w-6 cursor-pointer" onClick={handleModalOpen} />
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex flex-col bg-white p-4"
            onClick={handleModalClose}
          >
            <div
              className="flex justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-bold">Menu</h2>
              <XMarkIcon
                className="w-6 cursor-pointer"
                onClick={handleModalClose}
              />
            </div>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { ReactNode, useState, useEffect } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import { useModal } from '@/app/ui/dashboard/merchants/context/ModalContext';
import { useInput } from '@/app/ui/dashboard/merchants/context/InputContext';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import SettingsButton from '@/app/ui/_components/SettingsButton';

export default function MerchantsMobileMenu({
  children,
}: {
  children: ReactNode;
}) {
  //const [isModalMainOpen, setIsModalMainOpen] = useState(false);
  const { openModal, closeModal, isModalOpen } = useModal();
  const { resetInput } = useInput();

  const blockBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unblockBodyScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isModalOpen('mobileMerchants')) {
      blockBodyScroll();
    } else {
      unblockBodyScroll();
    }

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal('mobileMerchants');
        resetInput();
        unblockBodyScroll();
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      unblockBodyScroll();
    };
  }, [closeModal, resetInput, isModalOpen]);

  return (
    <div>
      <div className="hidden">{children}</div>
      <div className="p-3 md:hidden">
        <Bars3Icon
          className="w-6 cursor-pointer"
          onClick={() => openModal('mobileMerchants')}
        />
        {isModalOpen('mobileMerchants') && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800"
            onClick={() => {
              closeModal('mobileMerchants');
              unblockBodyScroll();
            }}
          >
            <div
              className="relative mx-auto h-full w-full max-w-md bg-white p-4 dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex justify-between">
                <div className="flex">
                  <ThemeButton />
                  {/*<SettingsButton />*/}
                </div>
                <div className=" flex justify-end">
                  <XCircleIcon
                    className="w-6 cursor-pointer"
                    onClick={() => {
                      closeModal('mobileMerchants');
                      unblockBodyScroll();
                    }}
                  />
                </div>
              </div>
              <div className="h-full overflow-y-auto p-2">{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client'

import { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modals, setModals] = useState([]);
    const [merchantName, setMerchantName] = useState('');

  const openModal = (modalName) => {
    setModals((prev) => [...prev, modalName]);
  };

  const closeModal = (modalName) => {
      setModals((prev) => prev.filter((name) => name !== modalName));
      setMerchantName('');
  };

  const isModalOpen = (modalName) => modals.includes(modalName);

  const closeTopModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen, closeTopModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
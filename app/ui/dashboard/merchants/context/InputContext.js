'use client'

import { createContext, useContext, useState } from 'react';

const InputContext = createContext();

export function InputProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    
    const resetInput = () => {
    setInputValue('');
  };

  return (
    <InputContext.Provider value={{ inputValue, setInputValue, resetInput }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  return useContext(InputContext);
}
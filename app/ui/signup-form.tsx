'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { useState } from 'react';
//import pg from 'pg';
//import bcrypt from 'bcrypt';
//import { v4 as uuidv4 } from 'uuid';

export default function SignupForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    // Сброс ошибки, когда пользователь начинает вводить пароль заново
    setErrorMessage('');
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
    // Сброс ошибки, когда пользователь начинает вводить подтверждение пароля заново
    setErrorMessage('');
  };

  const checkPassword = () => {
    // Проверка на совпадение пароля и подтверждения пароля
    if (password !== confirmPassword) {
      setErrorMessage('Passwords and confirm password do not match');
      return false;
    }
    return true;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Вызов функции checkPassword перед отправкой данных
    if (!checkPassword()) {
      return;
    }

    /*const userData = {
      userName: e.currentTarget.elements.userName.value,
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };

    const { Pool } = pg;

    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + '?sslmode=require',
    });

    // Хеширование пароля перед вставкой
    bcrypt.hash(userData.password, 10, (hashError, hashedPassword) => {
      if (hashError) {
        console.error('Error hashing password:', hashError);
        pool.end();
        return;
      }

      // Пример выполнения INSERT запроса с использованием параметров
      const query = {
        text: 'INSERT INTO users(name, email, uuid, password) VALUES($1, $2, $3, $4) RETURNING *',
        values: [userData.userName, userData.email, uuidv4(), hashedPassword],
      };

      pool.query(query, (error, result) => {
        if (error) {
          console.error('Error executing query', error);
        } else {
          console.log('Inserted user:', result.rows[0]);
        }

        // Не забывайте закрыть пул соединений после завершения запроса
        pool.end();
      });
    });*/
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Join to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="userName"
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                value={password}
                onChange={handlePasswordChange}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              {passwordVisible ? (
                <EyeIcon
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900"
                />
              ) : (
                <EyeSlashIcon
                  onClick={togglePasswordVisibility}
                  className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900"
                />
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <KeyIcon className="peer-focus:text-gray-900cursor-pointer pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <SignupButton />
        <div
          className="flex h-8 items-center space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-xs text-red-500 md:text-sm">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

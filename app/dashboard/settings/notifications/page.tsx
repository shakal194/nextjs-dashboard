'use client';

import React, { useState } from 'react';
import {
  NotificationSettings,
  CategoryNotificationSettings,
  SettingsNotification,
} from '@/app/lib/definitions';

/*interface NotificationSettings {
  Email: boolean;
  Telegram: boolean;
  SMS: boolean;
}

interface CategorySettings {
  [option: string]: NotificationSettings;
}

interface Settings {
  [category: string]: CategorySettings;
}*/

const settingsOptions = [
  {
    category: 'Account notifications',
    options: [
      'Authorization',
      'Changing password',
      'Add and Changing Email',
      'Add and Changing phone',
    ],
  },
  {
    category: 'Personal wallet notifications',
    options: [
      'New payment received to personal wallet',
      'Success withdrawal',
      'Fail withdrawal',
      'New withdrawal',
      'Transfer from Personal to Business',
      'Transfer from Business to Personal',
    ],
  },
  {
    category: 'Business wallet notifications',
    options: [
      'Request merchant API-key',
      'Create merchant',
      'Paid invoices',
      'Payout API key',
      'Partially paid invoices',
    ],
  },
];

const initialSettings: SettingsNotification = {
  'Account notifications': {
    Authorization: { Email: false, Telegram: false, SMS: false },
    'Changing password': { Email: false, Telegram: false, SMS: false },
    'Add and Changing Email': { Email: false, Telegram: false, SMS: false },
    'Add and Changing phone': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
  },
  'Personal wallet notifications': {
    'New payment received to personal wallet': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Success withdrawal': { Email: false, Telegram: false, SMS: false },
    'Fail withdrawal': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'New withdrawal': { Email: false, Telegram: false, SMS: false },
    'Transfer from Personal to Business': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Transfer from Business to Personal': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
  },
  'Business wallet notifications': {
    'Request merchant API-key': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Create merchant': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Paid invoices': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Payout API key': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
    'Partially paid invoices': {
      Email: false,
      Telegram: false,
      SMS: false,
    },
  },
};

const columns: (keyof NotificationSettings)[] = ['Email', 'Telegram', 'SMS'];

const NotificationsPage: React.FC = () => {
  const [settings, setSettings] =
    useState<SettingsNotification>(initialSettings);

  const handleCheckboxChange = (
    category: string,
    option: string,
    column: keyof NotificationSettings,
  ) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [option]: {
          ...prevSettings[category][option],
          [column]: !prevSettings[category][option][column],
        },
      },
    }));
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6">
        <h1 className="mb-4 text-2xl font-bold">Notification Settings</h1>
        <div className="space-y-6">
          <table className="mb-6 min-w-full border border-gray-200 bg-white dark:bg-gray-800">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Notify me about
                </th>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="border-b border-gray-200 px-4 py-2 text-left"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {settingsOptions.map((section) => (
                <React.Fragment key={section.category}>
                  <tr>
                    <td
                      colSpan={columns.length + 1}
                      className="bg-gray-100 px-4 py-2 font-semibold dark:bg-gray-600"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.options.map((option) => (
                    <tr key={option}>
                      <td className="border-b border-gray-200 px-4 py-2">
                        {option}
                      </td>
                      {columns.map((column) => (
                        <td
                          key={column}
                          className="border-b border-gray-200 px-4 py-2"
                        >
                          <input
                            type="checkbox"
                            checked={settings[section.category][option][column]}
                            onChange={() =>
                              handleCheckboxChange(
                                section.category,
                                option,
                                column,
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;

'use client';

import React, { useState } from 'react';
import {
  OptionSettings,
  CategorySettings,
  Settings,
} from '@/app/lib/definitions';

const settingsOptions = [
  {
    category: 'Account Security',
    options: [
      'Authorization',
      'Change password',
      'Reset password',
      'Add, change or disable PIN code',
      'Change security settings',
      'Delete account',
    ],
  },
  {
    category: 'General Security',
    options: [
      'Withdraw from Personal',
      'Recurrence payment',
      'Transfer from Personal to Business',
      'Delete merchant',
      'Refund invoice',
      'Auto-Withdrawal',
      'Turn on/off whitelist management',
      'Add addresses to Addresses’s whitelist',
      'Add IP to API’s whitelist',
      'Payment API key',
      'Payout API key',
      'Unfreeze staked funds',
    ],
  },
];

const initialSettings: Settings = {
  'Account Security': {
    Authorization: { Email: false, Google2Fa: false, SMS: false },
    'Change password': { Email: false, Google2Fa: false, SMS: false },
    'Reset password': { Email: false, Google2Fa: false, SMS: false },
    'Add, change or disable PIN code': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Change security settings': { Email: false, Google2Fa: false, SMS: false },
    'Delete account': { Email: false, Google2Fa: false, SMS: false },
  },
  'General Security': {
    'Withdraw from Personal': { Email: false, Google2Fa: false, SMS: false },
    'Recurrence payment': { Email: false, Google2Fa: false, SMS: false },
    'Transfer from Personal to Business': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Delete merchant': { Email: false, Google2Fa: false, SMS: false },
    'Refund invoice': { Email: false, Google2Fa: false, SMS: false },
    'Auto-Withdrawal': { Email: false, Google2Fa: false, SMS: false },
    'Turn on/off whitelist management': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Add addresses to Addresses’s whitelist': {
      Email: false,
      Google2Fa: false,
      SMS: false,
    },
    'Add IP to API’s whitelist': { Email: false, Google2Fa: false, SMS: false },
    'Payment API key': { Email: false, Google2Fa: false, SMS: false },
    'Payout API key': { Email: false, Google2Fa: false, SMS: false },
    'Unfreeze staked funds': { Email: false, Google2Fa: false, SMS: false },
  },
};

const columns: (keyof OptionSettings)[] = ['Email', 'Google2Fa', 'SMS'];

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  const handleCheckboxChange = (
    category: string,
    option: string,
    column: keyof OptionSettings,
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
        <h1 className="mb-4 text-2xl font-bold">KYC Settings</h1>
        <div className="space-y-6">
          <table className="mb-6 min-w-full border border-gray-200 bg-white dark:bg-slate-700">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 text-left">
                  Category
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
                      className="bg-gray-100 px-4 py-2 font-semibold dark:bg-gray-800"
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

export default SettingsPage;

import Form from '@/app/ui/wallet/create-form';
import Breadcrumbs from '@/app/ui/wallet/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Wallet', href: '/dashboard/wallet' },
          {
            label: 'Create Wallet',
            href: '/dashboard/wallet/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

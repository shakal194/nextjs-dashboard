import CreateWalletForm from '@/app/ui/wallet/create-form';
import Breadcrumbs from '@/app/ui/wallet/breadcrumbs';

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
      <CreateWalletForm />
    </main>
  );
}

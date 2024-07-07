import SettingsSideNav from '@/app/ui/dashboard/SettingsSideNav';
import ThemeButton from '@/app/ui/_components/ThemeButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SettingsSideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex justify-end">
          <ThemeButton />
        </div>
        {children}
      </div>
    </div>
  );
}

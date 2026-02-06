import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem';
import { routes } from '../../routes';
import 'primeicons/primeicons.css';
import { Footer } from '../common/Footer';

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: MenuItem[] = routes.map((route) => ({
    icon: route.icon,
    command: () => navigate(route.path),
    className:
      location.pathname === route.path
        ? '[&_.p-menuitem-icon]:!text-violet-600 [&_.p-menuitem-icon]:!mr-0 [&_.p-menuitem-content]:!bg-violet-50'
        : '',
  }));

  const start = (
    <span onClick={() => navigate('/')} className="mr-6">
      Smart Cart
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header>
        <Menubar
          model={navItems}
          start={start}
          className="!px-6"
          pt={{
            icon: { className: '!mr-0' },
          }}
        />
      </header>

      <main className="flex-1 px-6 py-4 md:px-8 md:py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

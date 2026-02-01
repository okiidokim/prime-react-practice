import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Toolbar } from 'primereact/toolbar';
import type { MenuItem } from 'primereact/menuitem';
import { routes } from '../../routes';
import 'primeicons/primeicons.css';

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: MenuItem[] = routes.map((route) => ({
    label: route.label,
    icon: route.icon,
    command: () => navigate(route.path),
  }));

  const home: MenuItem = {
    icon: 'pi pi-home',
    command: () => navigate('/'),
  };

  const getBreadcrumbItems = (): MenuItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    return paths.map((path, index) => {
      const url = '/' + paths.slice(0, index + 1).join('/');
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1),
        command: () => navigate(url),
      };
    });
  };

  const start = (
    <span
      className="text-xl font-bold text-violet-600 cursor-pointer mr-4"
      onClick={() => navigate('/')}
    >
      Prime Practice Service
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <header className="px-6 py-4 bg-white shadow-sm border-b border-violet-100">
        <Menubar
          model={navItems}
          start={start}
          pt={{
            menu: { className: 'gap-6' },
            action: { className: 'gap-2' },
          }}
        />
      </header>

      {/* Breadcrumb */}
      <div className="px-8 py-3 bg-white border-b border-gray-100">
        <BreadCrumb
          model={getBreadcrumbItems()}
          home={home}
          className="border-none bg-transparent p-0"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        <div className="mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Toolbar
        className="!bg-violet-600 !border-none !rounded-none px-8 py-4"
        start={
          <div className="flex items-center gap-2 text-white">
            <i className="pi pi-prime text-2xl" />
            <span className="font-semibold">Prime Practice Service</span>
          </div>
        }
        center={
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <i className="pi pi-github text-xl !text-white" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <i className="pi pi-twitter text-xl !text-white" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <i className="pi pi-linkedin text-xl !text-white" />
            </a>
          </div>
        }
        end={
          <p className="text-sm text-violet-200">
            © 2025 Prime React Practice. All rights reserved.
          </p>
        }
      />
    </div>
  );
}

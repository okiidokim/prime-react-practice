import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: routes.map((route) => ({
      index: route.index,
      path: route.index ? undefined : route.path.slice(1), // '/' 제거
      Component: route.Component,
    })),
  },
]);

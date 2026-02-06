import type { ComponentType } from 'react';
import App from './App';
import { TmpPage } from './pages/TmpPage';

export interface RouteConfig {
  path: string;
  label: string;
  icon: string;
  Component: ComponentType;
  index?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    icon: 'pi pi-home',
    Component: App,
    index: true,
  },
  {
    path: '/like-list',
    label: '찜',
    icon: 'pi pi-heart-fill',
    Component: TmpPage,
  },
];

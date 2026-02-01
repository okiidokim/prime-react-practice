import type { ComponentType } from 'react';
import App from './App';

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
];

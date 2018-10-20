import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'WELCOME',
    group: true,
  },
  {
    title: 'Report Fire',
    icon: 'nb-flame-circled',
    link: '/pages/reportfire'
  },
  {
    title: 'Fire Alert Subscription',
    icon: 'nb-paper-plane',
    link: '/pages/firealert'
  },
  {
    title: 'Weather report',
    icon: 'nb-partlysunny',
    link: '/pages/weather'
  },
  {
    title: 'Traffic Update',
    icon: 'nb-location',
    link: '/pages/traffic'
  },
];

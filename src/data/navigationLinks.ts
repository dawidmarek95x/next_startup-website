interface NavigationLink {
  path: string;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
  },
  {
    path: '/services',
    label: 'Services',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];

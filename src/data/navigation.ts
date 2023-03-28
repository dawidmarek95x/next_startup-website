import hamburgerMenu from '../images/header/HamburgerMenu.svg?url';

interface ImageData {
  src: string;
  alt: string;
}

interface NavigationLink {
  path: string;
  label: string;
}

export const imageData: ImageData = {
  src: hamburgerMenu,
  alt: 'Open mobile menu button',
};

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

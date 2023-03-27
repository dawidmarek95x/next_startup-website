import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '../../data/navigationLinks';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {navigationLinks.map((nav, idx) => (
          <li className="mr-[30px] last:mr-0" key={idx}>
            <Link
              href={nav.path}
              className={`${
                pathname === nav.path ? 'text-black' : 'text-white'
              } hover:text-black`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;

import Link from 'next/link';
import React from 'react';
import { navigationData } from '../Navigation/navigationData';

const DesktopNav = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((nav, idx) => (
          <li className="mr-[30px] last:mr-0" key={idx}>
            <Link href={nav.path} className="hover:text-dark">
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;

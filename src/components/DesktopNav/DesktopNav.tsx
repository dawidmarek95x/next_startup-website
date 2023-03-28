import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { usePathname } from 'next/navigation';

interface DesktopNavProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  data: NavigationLink[];
}

const DesktopNav = ({ className, data, ...props }: DesktopNavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`hidden sm:block ${className ?? ''}`} {...props}>
      <ul className="flex">
        {data.map((nav, idx) => (
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

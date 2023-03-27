import React from 'react';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '../../data/navigationLinks';

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`mobile-menu sm:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end px-[22px] pt-[26px] pb-[37px]">
        <button className="text-2xl" onClick={onClose}>
          <GrClose />
        </button>
      </div>
      <nav className="px-[55px]">
        <ul>
          {navigationLinks.map((nav, idx) => (
            <li className="pb-5 last:mb-0" key={idx}>
              <Link
                href={nav.path}
                className={`${
                  pathname === nav.path
                    ? 'font-medium text-accent'
                    : 'text-black'
                } hover:font-medium hover:text-accent`}
                onClick={onClose}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

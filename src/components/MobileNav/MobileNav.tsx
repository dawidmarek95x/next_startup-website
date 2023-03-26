import React from 'react';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { navigationData } from '../Navigation/navigationData';

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full transform overflow-auto bg-white transition-all duration-300 ease-in-out ${
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
          {navigationData.map((nav, idx) => (
            <li className="pb-5 last:mb-0" key={idx}>
              <Link
                href={nav.path}
                className="text-dark hover:text-accent"
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

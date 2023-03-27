import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import hamburgerMenu from '../../images/header/HamburgerMenu.svg?url';
import DesktopNav from '../DesktopNav/DesktopNav';
import MobileNav from '../MobileNav/MobileNav';

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <button className="sm:hidden" type="button" onClick={openMobileMenu}>
        <Image src={hamburgerMenu} alt="Open mobile menu button" />
      </button>
      <MobileNav isOpen={showMobileMenu} onClose={closeMobileMenu} />
      <DesktopNav />
    </>
  );
};

export default Navigation;

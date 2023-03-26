import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import hamburgerMenu from '../../images/header/HamburgerMenu.svg?url';
import DesktopNav from '../DesktopNav/DesktopNav';
import MobileNav from '../MobileNav/MobileNav';

const MOBILE_BREAKPOINT = 576;

const Navigation = () => {
  const [width, setWidth] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const isMobile = width < MOBILE_BREAKPOINT;

  return (
    <>
      {isMobile ? (
        <>
          <button type="button" onClick={openMobileMenu}>
            <Image src={hamburgerMenu} alt="mobile menu" />
          </button>
          <MobileNav isOpen={showMobileMenu} onClose={closeMobileMenu} />
        </>
      ) : (
        <DesktopNav />
      )}
    </>
  );
};

export default Navigation;

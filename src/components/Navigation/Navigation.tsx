import { useState } from 'react';
import Image from 'next/image';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';

import { imageData, navigationLinks } from '@/data/navigation';

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
        <Image src={imageData.src} alt={imageData.alt} />
      </button>
      <MobileNav
        data={navigationLinks}
        isOpen={showMobileMenu}
        onClose={closeMobileMenu}
      />
      <DesktopNav data={navigationLinks} />
    </>
  );
};

export default Navigation;

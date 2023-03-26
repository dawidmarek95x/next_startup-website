import React from 'react';
import Container from '../Container/Container';
import LogoWithLabel from '../LogoWithLabel/LogoWithLabel';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="bg-accent pt-[17px] pb-8 xxl:pt-[35px] xxl:pb-10">
      <Container>
        <div className="flex items-center justify-between text-white">
          <LogoWithLabel label="Start" />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;

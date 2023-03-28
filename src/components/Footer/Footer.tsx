import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import SubHeading from '../SubHeading/SubHeading';
import { socialMediaDetails } from '@/data/socialMedia';
import Container from '../Container/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent py-[31px]">
      <Container className="md:flex md:items-center md:justify-between">
        <SocialMedia
          className="mb-5 justify-center md:mb-0"
          data={socialMediaDetails}
        />
        <SubHeading className="text-center text-white">
          © Start, {currentYear}. All rights reserved.
        </SubHeading>
      </Container>
    </footer>
  );
};

export default Footer;

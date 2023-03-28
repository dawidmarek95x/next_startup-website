import React from 'react';
import Container from '../Container/Container';

import Image from 'next/image';
import EntryHomeCard from '../EntryHomeCard/EntryHomeCard';
import { heroData } from '@/data/hero';

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <section
      className={`bg-accent pb-10 md:pb-[60px] lg:pb-[70px] xxl:pb-[89px] ${
        className ?? ''
      }`}
      {...props}
    >
      <Container className="grid grid-rows-hero-mobile items-center gap-y-[30px] grid-areas-hero-mobile md:grid-cols-2 md:grid-rows-1 md:items-center md:gap-y-0 md:gap-x-[60px] md:grid-areas-hero-tablet lg:gap-x-[90px] xl:flex xl:gap-x-[120px]">
        <EntryHomeCard
          className="grid-in-texts"
          label={heroData.card.label}
          header={heroData.card.header}
          description={heroData.card.description}
        />
        <Image
          className="h-auto w-full grid-in-image lg:h-full "
          src={heroData.image.src}
          alt={heroData.image.alt}
          priority
        />
      </Container>
    </section>
  );
};

export default Hero;

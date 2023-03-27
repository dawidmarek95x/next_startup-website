import React from 'react';
import Container from '../Container/Container';
import heroPicture from '../../images/hero/Hero.svg?url';
import Image from 'next/image';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import Button from '../Button/Button';

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <section className={`bg-accent pb-10 lg:pb-[89px] ${className}`} {...props}>
      <Container className="grid grid-rows-hero-mobile items-center gap-y-[30px] grid-areas-hero-mobile md:grid-cols-2 md:grid-rows-1 md:items-center md:gap-y-0 md:gap-x-[60px] md:grid-areas-hero-tablet lg:gap-x-[90px] xl:flex xl:gap-x-[120px]">
        <div className="text-white grid-in-texts">
          <Label>Welcome</Label>
          <Heading
            level={3}
            className="py-[15px] lg:text-[32px] xxl:text-[40px]"
          >
            Lorem ipsum dolor sit amet consectetur
          </Heading>
          <p className="pb-[25px] text-white/75">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <Button variant="primary">Explore</Button>
        </div>
        <Image
          className="h-auto w-full grid-in-image lg:h-full "
          src={heroPicture}
          alt="The team consisting of two girls and one boy creates the concept of the project by adding their own ideas like blocks"
        />
      </Container>
    </section>
  );
};

export default Hero;

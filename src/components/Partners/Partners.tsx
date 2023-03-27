import { partnerLogos } from '@/data/partners';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import SubHeading from '../SubHeading/SubHeading';

interface PartnersProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Partners = ({ className, ...props }: PartnersProps) => {
  return (
    <div
      className={`pt-[22px] pb-[60px] lg:pt-[60px] lg:pb-[73px] ${
        className ?? ''
      }`}
      {...props}
    >
      <Container>
        <div className="text-center">
          <div className="mx-auto max-w-[411px]">
            <Label className="text-accent">Partners</Label>
            <Heading className="my-4" level={4}>
              Lorem Ipsum Dolor
            </Heading>
            <SubHeading>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </SubHeading>
          </div>
          <ul className="sm: my-[55px] grid auto-rows-auto grid-cols-1 sm:grid-cols-2 sm:gap-y-[30px] lg:flex lg:flex-wrap lg:justify-center lg:gap-[30px] xl:gap-[40px] xxl:justify-between">
            {partnerLogos.map((p, idx) => (
              <li
                className="mb-10 justify-self-center last:mb-0 sm:mb-0 sm:last:col-span-2 sm:last:justify-self-center lg:last:col-span-1"
                key={idx}
              >
                <Image src={p.src} alt={p.alt} />
              </li>
            ))}
          </ul>
          <Button className="mx-auto" variant="secondary">
            Learn More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Partners;

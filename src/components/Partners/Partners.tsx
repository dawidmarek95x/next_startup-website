import { partnerLogos } from '@/data/partners';
import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import SubHeading from '../SubHeading/SubHeading';

const Partners = () => {
  return (
    <div className="pt-[22px] pb-[60px]">
      <Container>
        <div className="text-center">
          <div>
            <Label className="text-accent">Partners</Label>
            <Heading className="my-4" level={4}>
              Lorem Ipsum Dolor
            </Heading>
            <SubHeading>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </SubHeading>
          </div>
          <ul className="my-[55px] grid auto-rows-auto grid-cols-1">
            {partnerLogos.map((p, idx) => (
              <li className="mb-10 justify-self-center last:mb-0" key={idx}>
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

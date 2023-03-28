import { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import HeaderCard from '../HeaderCard/HeaderCard';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import PartnerList from '../PartnerList/PartnerList';
import SubHeading from '../SubHeading/SubHeading';

interface PartnersProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Partners = ({ className, ...props }: PartnersProps) => {
  return (
    <section
      className={`pt-[22px] pb-[60px] lg:pt-[60px] lg:pb-[73px] ${
        className ?? ''
      }`}
      {...props}
    >
      <Container>
        <div className="text-center">
          <HeaderCard
            className="max-w-[411px]"
            label="Partners"
            header="Lorem Ipsum Dolor"
            subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <PartnerList />
          <Button className="mx-auto" variant="secondary">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Partners;

import { cardData, logoList } from '@/data/partners';
import { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import HeaderCard from '../HeaderCard/HeaderCard';
import PartnerLogos from '../PartnerList/PartnerList';

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
            label={cardData.label}
            header={cardData.header}
            subHeading={cardData.subHeader}
          />
          <PartnerLogos data={logoList} />
          <Button className="mx-auto" variant="secondary">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Partners;

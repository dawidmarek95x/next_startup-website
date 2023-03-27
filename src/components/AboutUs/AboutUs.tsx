import React, { HTMLAttributes } from 'react';
import ResponsivePictureCard from '../ResponsivePictureCard/ResponsivePictureCard';
import Image from 'next/image';
import ExpandableArticle from '../ExpandableArticle/ExpandableArticle';
import { cardDetailsAboutUs } from '@/data/aboutUs';
import Container from '../Container/Container';

const AboutUs = ({ ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className="pb-10 lg:pb-[70px] xxl:pb-[102px]" {...props}>
      <Container>
        {cardDetailsAboutUs.map((d, idx) => (
          <ResponsivePictureCard
            className="mb-[60px] last:mb-0 lg:mb-[74px]"
            key={idx}
            variant={d.card.variant}
            image={<Image src={d.image.src} alt={d.image.alt} />}
            content={
              <ExpandableArticle
                title={d.article.title}
                content={d.article.content}
                hiddenContent={d.article.hiddenContent}
              />
            }
          />
        ))}
      </Container>
    </section>
  );
};

export default AboutUs;

import heroPicture from '../images/hero/Hero.svg?url';

interface HeroCardData {
  label: string;
  header: string;
  description: string;
}

interface HeroImage {
  src: string;
  alt: string;
}

export const cardData: HeroCardData = {
  label: 'Welcome',
  header: 'Lorem ipsum dolor sit amet consectetur',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?',
};

export const imageData: HeroImage = {
  src: heroPicture,
  alt: 'The team consisting of two girls and one boy creates the concept of the project by adding their own ideas like blocks',
};

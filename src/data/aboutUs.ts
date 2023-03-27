import sprintPicture from '../images/about-us/Sprint.svg?url';
import optimizationPicture from '../images/about-us/Optimization.svg?url';

interface CardDetails {
  card: {
    variant: 'left' | 'right';
  };
  image: {
    src: string;
    alt: string;
  };
  article: {
    title: string;
    content: string;
    hiddenContent: string;
  };
}

export const cardDetailsAboutUs: CardDetails[] = [
  {
    card: {
      variant: 'left',
    },
    image: {
      src: sprintPicture,
      alt: 'A team of girls in a single sprint cycle workflow',
    },
    article: {
      title: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?',
      hiddenContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorem nam? Eos laboriosam atque repudiandae cum ratione magni temporibus. Excepturi cumque necessitatibus eveniet hic sapiente!',
    },
  },
  {
    card: {
      variant: 'right',
    },
    image: {
      src: optimizationPicture,
      alt: 'The programmer optimizes the part of the application responsible for data security, which is presented in the form of tiles in the form of a circle next to him',
    },
    article: {
      title: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?',
      hiddenContent:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dicta. Sed, reiciendis libero quam ullam quod reprehenderit, est repellat impedit accusamus quidem quis, magni suscipit!',
    },
  },
];

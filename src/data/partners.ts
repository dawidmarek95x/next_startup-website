import googleLogo from '../images/partners/Google.svg?url';
import microsoftLogo from '../images/partners/Microsoft.svg?url';
import airbnbLogo from '../images/partners/Airbnb.svg?url';
import facebookLogo from '../images/partners/Facebook.svg?url';
import spotifyLogo from '../images/partners/Spotify.svg?url';

interface CardData {
  label: string;
  header: string;
  subHeader: string;
}

interface Logo {
  src: string;
  alt: string;
}

export const cardData: CardData = {
  label: 'Partners',
  header: 'Lorem Ipsum Dolor',
  subHeader: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

export const logoList: Logo[] = [
  {
    src: googleLogo,
    alt: 'Google Logo',
  },
  {
    src: microsoftLogo,
    alt: 'Microsoft Logo',
  },
  {
    src: airbnbLogo,
    alt: 'Airbnb Logo',
  },
  {
    src: facebookLogo,
    alt: 'Facebook Logo',
  },
  {
    src: spotifyLogo,
    alt: 'Spotify Logo',
  },
];

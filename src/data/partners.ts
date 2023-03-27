import googleLogo from '../images/partners/Google.svg?url';
import microsoftLogo from '../images/partners/Microsoft.svg?url';
import airbnbLogo from '../images/partners/Airbnb.svg?url';
import facebookLogo from '../images/partners/Facebook.svg?url';
import spotifyLogo from '../images/partners/Spotify.svg?url';

interface PartnerLogo {
  src: string;
  alt: string;
}

export const partnerLogos: PartnerLogo[] = [
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

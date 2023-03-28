import { SVGProps } from 'react';
import FacebookIcon from '@/components/Icons/FacebookIcon';
import InstagramIcon from '@/components/Icons/InstagramIcon';
import TwitterIcon from '@/components/Icons/TwitterIcon';
import PinterestIcon from '@/components/Icons/PinterestIcon';
import TikTokIcon from '@/components/Icons/TikTokIcon';
import WhatsAppIcon from '@/components/Icons/WhatsAppIcon';
import YouTubeIcon from '@/components/Icons/YouTubeIcon';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

interface SocialMediaDetails {
  Icon: ({ baseFill, onHoverFill, ...props }: IconProps) => JSX.Element;
  link: string;
}

export const socialMediaDetails: SocialMediaDetails[] = [
  {
    Icon: FacebookIcon,
    link: 'https://www.facebook.com/',
  },
  {
    Icon: InstagramIcon,
    link: 'https://www.instagram.com/',
  },
  {
    Icon: TwitterIcon,
    link: 'https://twitter.com/',
  },
  {
    Icon: PinterestIcon,
    link: 'https://pinterest.com',
  },
  {
    Icon: TikTokIcon,
    link: 'https://www.tiktok.com/',
  },
  {
    Icon: WhatsAppIcon,
    link: 'https://www.whatsapp.com/',
  },
  {
    Icon: YouTubeIcon,
    link: 'https://www.youtube.com/',
  },
];

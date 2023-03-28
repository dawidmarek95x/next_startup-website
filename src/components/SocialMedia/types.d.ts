import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

interface SocialMediaDetails {
  Icon: ({ baseFill, onHoverFill, ...props }: IconProps) => JSX.Element;
  link: string;
}

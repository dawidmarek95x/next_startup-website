'use client';
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const TikTokIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
  const [fill, setFill] = React.useState<string>(baseFill ?? '#fff');

  const mouseEnterHandler = () => {
    setFill(onHoverFill ?? '#fff');
  };

  const mouseLeaveHandler = () => {
    setFill(baseFill ?? '#fff');
  };

  return (
    <svg
      width={17}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      {...props}
    >
      <path
        d="M16.088 7.283a4.805 4.805 0 0 1-4.463-2.15v7.398a5.469 5.469 0 1 1-5.469-5.468c.114 0 .226.01.338.017v2.695c-.112-.014-.223-.034-.338-.034a2.791 2.791 0 1 0 0 5.582c1.542 0 2.903-1.215 2.903-2.756L9.087 0h2.578a4.802 4.802 0 0 0 4.426 4.288v2.995"
        fill={fill}
      />
    </svg>
  );
};

export default TikTokIcon;

'use client';
import * as React from 'react';
import { SVGProps, useState } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const FacebookIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
  const [fill, setFill] = useState<string>(baseFill ?? '#fff');

  const mouseEnterHandler = () => {
    setFill(onHoverFill ?? '#fff');
  };

  const mouseLeaveHandler = () => {
    setFill(baseFill ?? '#fff');
  };

  return (
    <svg
      width={10}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      {...props}
    >
      <path
        d="m9.249 10.125.5-3.257H6.621V4.753c0-.891.437-1.76 1.837-1.76h1.42V.22S8.592 0 7.358 0C4.783 0 3.101 1.56 3.101 4.384v2.484H.239v3.257h2.862V18h3.521v-7.875H9.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default FacebookIcon;

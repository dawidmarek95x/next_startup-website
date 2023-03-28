'use client';
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const InstagramIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
  const [fill, setFill] = React.useState<string>(baseFill ?? '#fff');

  const mouseEnterHandler = () => {
    setFill(onHoverFill ?? '#fff');
  };

  const mouseLeaveHandler = () => {
    setFill(baseFill ?? '#fff');
  };

  return (
    <svg
      width={19}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      {...props}
    >
      <path
        d="M14.645 3.214a1.056 1.056 0 1 0 0 2.11 1.056 1.056 0 0 0 0-2.11ZM9.953 11.84A2.843 2.843 0 0 1 7.113 9a2.843 2.843 0 0 1 2.84-2.84A2.843 2.843 0 0 1 12.793 9a2.843 2.843 0 0 1-2.84 2.84Zm0-7.273A4.438 4.438 0 0 0 5.52 9a4.438 4.438 0 0 0 4.433 4.433A4.438 4.438 0 0 0 14.386 9a4.438 4.438 0 0 0-4.433-4.433Z"
        fill={fill}
      />
      <path
        d="M6.286 1.694a3.717 3.717 0 0 0-3.713 3.713v7.186a3.717 3.717 0 0 0 3.713 3.713h7.187a3.718 3.718 0 0 0 3.713-3.713V5.407a3.718 3.718 0 0 0-3.713-3.713H6.285ZM13.473 18H6.285A5.412 5.412 0 0 1 .88 12.593V5.407A5.412 5.412 0 0 1 6.286 0h7.187a5.413 5.413 0 0 1 5.406 5.407v7.186A5.413 5.413 0 0 1 13.472 18Z"
        fill={fill}
      />
    </svg>
  );
};

export default InstagramIcon;

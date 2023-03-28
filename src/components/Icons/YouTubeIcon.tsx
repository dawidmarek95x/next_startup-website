'use client';
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const YouTubeIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
  const [fill, setFill] = React.useState<string>(baseFill ?? '#fff');

  const mouseEnterHandler = () => {
    setFill(onHoverFill ?? '#fff');
  };

  const mouseLeaveHandler = () => {
    setFill(baseFill ?? '#fff');
  };

  return (
    <svg
      width={26}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      {...props}
    >
      <path
        d="m17.276 9.504-6.47 3.201c-.255.137-1.117-.047-1.117-.335V5.799c0-.292.87-.476 1.123-.332l6.194 3.37c.26.148.532.524.27.667Zm8.485-3.861A5.643 5.643 0 0 0 20.118 0H5.688A5.642 5.642 0 0 0 .048 5.643v6.714A5.642 5.642 0 0 0 5.689 18h14.43a5.642 5.642 0 0 0 5.642-5.643V5.643Z"
        fill={fill}
      />
    </svg>
  );
};

export default YouTubeIcon;

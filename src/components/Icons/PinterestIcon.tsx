'use client';
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const PinterestIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
  const [fill, setFill] = React.useState<string>(baseFill ?? '#fff');

  const mouseEnterHandler = () => {
    setFill(onHoverFill ?? '#fff');
  };

  const mouseLeaveHandler = () => {
    setFill(baseFill ?? '#fff');
  };

  return (
    <svg
      width={15}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.577 11.742c-.015.052-.029.095-.04.139-.662 2.59-.735 3.165-1.414 4.369-.325.571-.69 1.113-1.093 1.632-.046.058-.088.133-.18.115-.1-.021-.107-.11-.118-.19a13.953 13.953 0 0 1-.142-2.371c.034-1.036.162-1.39 1.496-7.003a.389.389 0 0 0-.03-.234c-.32-.861-.383-1.736-.104-2.622.604-1.915 2.774-2.061 3.154-.482.233.977-.385 2.255-.86 4.145-.393 1.559 1.442 2.667 3.011 1.529 1.446-1.049 2.008-3.565 1.9-5.347-.21-3.554-4.106-4.323-6.58-3.178-2.834 1.31-3.479 4.824-2.199 6.43.162.204.287.33.234.537-.082.32-.155.645-.244.965-.066.237-.265.324-.506.226a2.901 2.901 0 0 1-1.184-.887C.592 8.17.281 5.507 1.718 3.254 3.31.756 6.271-.253 8.974.054c3.23.366 5.27 2.573 5.653 5.076.174 1.14.05 3.952-1.552 5.94-1.842 2.284-4.827 2.435-6.204 1.033-.106-.107-.19-.233-.295-.361Z"
        fill={fill}
      />
    </svg>
  );
};

export default PinterestIcon;

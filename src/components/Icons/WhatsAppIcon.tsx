'use client';
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  baseFill?: string;
  onHoverFill?: string;
}

const WhatsAppIcon = ({ baseFill, onHoverFill, ...props }: IconProps) => {
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
        d="m5.171 14.9.305.181a7.198 7.198 0 0 0 3.68 1.02c3.976 0 7.21-3.235 7.21-7.21 0-3.976-3.234-7.21-7.21-7.21-3.975 0-7.21 3.234-7.21 7.21 0 1.312.365 2.605 1.055 3.738l.187.306-.72 2.69L5.17 14.9ZM.091 18l1.29-4.814A8.863 8.863 0 0 1 .266 8.89C.266 3.99 4.254 0 9.156 0c4.902 0 8.891 3.989 8.891 8.89 0 4.903-3.989 8.891-8.89 8.891a8.875 8.875 0 0 1-4.227-1.077L.09 18Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.463 10.127c-.366-.22-.842-.463-1.273-.287-.33.136-.542.653-.756.918-.11.135-.241.156-.41.089-1.242-.495-2.193-1.324-2.878-2.466-.116-.177-.095-.317.044-.482.208-.243.467-.52.523-.849.056-.328-.098-.712-.234-1.005-.173-.373-.367-.906-.741-1.117-.344-.195-.798-.086-1.104.164-.529.431-.784 1.106-.777 1.775.003.19.026.38.07.563.107.441.31.854.54 1.245.174.296.362.583.565.858a8.71 8.71 0 0 0 2.447 2.273c.478.292.992.549 1.525.725.598.197 1.13.403 1.776.28.676-.128 1.343-.546 1.611-1.197.08-.194.12-.408.075-.612-.092-.421-.662-.671-1.003-.875Z"
        fill={fill}
      />
    </svg>
  );
};

export default WhatsAppIcon;

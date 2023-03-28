import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { SocialMediaDetails } from './types';

interface SocialMediaProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  data: SocialMediaDetails[];
}

const SocialMedia = ({ className, data, ...props }: SocialMediaProps) => {
  return (
    <div className={`flex ${className ?? ''}`} {...props}>
      {data.map((s, idx) => (
        <Link
          className="mr-5 last:mr-0"
          key={idx}
          href={s.link}
          target="_blank"
        >
          {<s.Icon baseFill="#fff" onHoverFill="#000" />}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;

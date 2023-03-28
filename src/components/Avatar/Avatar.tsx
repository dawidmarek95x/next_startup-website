import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  className?: string;
}

const Avatar = ({ className, src, alt, ...props }: AvatarProps) => {
  return (
    <div
      className={`h-[175px] w-[175px] rounded-full ${className ?? ''}`}
      {...props}
    >
      <Image className="object-cover" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;

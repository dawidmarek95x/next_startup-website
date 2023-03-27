'use client';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ResponsivePictureCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant: 'left' | 'right';
  image: ReactNode;
  content: ReactNode;
}

const ResponsivePictureCard = ({
  variant,
  image,
  content,
  className,
  ...props
}: ResponsivePictureCardProps) => {
  const isLeftVariant = variant === 'left';
  const isRightVariant = variant === 'right';

  return (
    <div className={`flex flex-col md:flex-row ${className ?? ''}`} {...props}>
      <div
        className={`${
          isRightVariant && 'md:order-2'
        } mb-[30px] md:mb-0 md:w-1/2`}
      >
        {image}
      </div>
      <div
        className={`${
          isRightVariant && 'md:order-1 md:pr-[50px] lg:pr-[90px] xl:pr-[110px]'
        } ${
          isLeftVariant && 'md:pl-[50px] lg:pl-[90px] xl:pl-[110px]'
        } flex md:w-1/2 md:items-center`}
      >
        {content}
      </div>
    </div>
  );
};

export default ResponsivePictureCard;

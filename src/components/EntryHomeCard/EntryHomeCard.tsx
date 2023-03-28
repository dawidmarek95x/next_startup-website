import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';

interface EntryHomeCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label: string;
  header: string;
  description: string;
}

const EntryHomeCard = ({
  className,
  label,
  header,
  description,
  ...props
}: EntryHomeCardProps) => {
  return (
    <div className={`text-white ${className ?? ''}`} {...props}>
      <Label>{label}</Label>
      <Heading level={3} className="py-[15px] lg:text-[32px] xxl:text-[40px]">
        {header}
      </Heading>
      <p className="pb-[25px] text-white/75">{description}</p>
      <Button variant="primary">Explore</Button>
    </div>
  );
};

export default EntryHomeCard;

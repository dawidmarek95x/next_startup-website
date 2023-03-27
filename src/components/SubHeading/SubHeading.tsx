import { HTMLAttributes, ReactNode } from 'react';

interface SubHeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

const SubHeading = ({ children, className, ...props }: SubHeadingProps) => {
  return (
    <p className={`sub-heading ${className}`} {...props}>
      {children}
    </p>
  );
};

export default SubHeading;

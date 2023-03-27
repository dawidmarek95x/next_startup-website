import { HTMLAttributes, ReactNode } from 'react';

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <p className={`label ${className ?? ''}`} {...props}>
      {children}
    </p>
  );
};

export default Label;

import { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant: 'primary' | 'secondary';
}

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

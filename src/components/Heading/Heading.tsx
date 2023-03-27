import { crimsonText } from '@/helpers/fonts';
import { HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, className, level, ...props }: HeadingProps) => {
  const fontFamily = crimsonText.className;
  let content: JSX.Element;

  switch (level) {
    case 1:
      content = (
        <h1 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h1>
      );
      break;
    case 2:
      content = (
        <h2 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h2>
      );
      break;
    case 3:
      content = (
        <h3 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h3>
      );
      break;
    case 4:
      content = (
        <h4 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h4>
      );
      break;
    case 5:
      content = (
        <h5 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h5>
      );
      break;
    case 6:
      content = (
        <h6 className={`${fontFamily} ${className ?? ''}`} {...props}>
          {children}
        </h6>
      );
      break;
  }

  return <>{content}</>;
};

export default Heading;

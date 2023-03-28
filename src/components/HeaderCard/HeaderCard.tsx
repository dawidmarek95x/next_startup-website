import { HTMLAttributes } from 'react';
import Heading from '../Heading/Heading';
import Label from '../Label/Label';
import SubHeading from '../SubHeading/SubHeading';

interface HeaderCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  header: string;
  subHeading: string;
  className?: string;
}

const HeaderCard = ({
  label,
  header,
  subHeading,
  className,
  ...props
}: HeaderCardProps) => {
  return (
    <div className={`mx-auto ${className ?? ''}`} {...props}>
      <Label className="text-accent">{label}</Label>
      <Heading
        className="my-4 text-2xl md:text-[32px] xxl:text-[40px]"
        level={2}
      >
        {header}
      </Heading>
      <SubHeading>{subHeading}</SubHeading>
    </div>
  );
};

export default HeaderCard;

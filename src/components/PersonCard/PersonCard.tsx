import Avatar from '../Avatar/Avatar';
import Heading from '../Heading/Heading';

interface PersonCardProps {
  className?: string;
  imgSource: string;
  imgAlt: string;
  name: string;
  position: string;
}

const PersonCard = ({
  className,
  imgSource,
  imgAlt,
  name,
  position,
  ...props
}: PersonCardProps) => {
  return (
    <div
      className={`max-w-[279px] rounded-[5px] bg-white px-[38px] pt-5 pb-[19px] shadow-person-card md:max-w-[252px] ${
        className ?? ''
      }`}
      {...props}
    >
      <Avatar className="mx-auto" src={imgSource} alt={imgAlt} />
      <Heading className="mt-[19px] mb-[17px]" level={4}>
        {name}
      </Heading>
      <p className="uppercase text-black/75">{position}</p>
    </div>
  );
};

export default PersonCard;

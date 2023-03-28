import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface PartnerListProps extends HTMLAttributes<HTMLElement> {
  data: PartnerLogo[];
}

const PartnerLogos = ({ className, data, ...props }: PartnerListProps) => {
  return (
    <ul
      className={`sm: my-[55px] grid auto-rows-auto grid-cols-1 sm:grid-cols-2 sm:gap-y-[30px] lg:flex lg:flex-wrap lg:justify-center lg:gap-[30px] xl:gap-[40px] xxl:justify-between ${className}`}
      {...props}
    >
      {data.map((p, idx) => (
        <li
          className="mb-10 justify-self-center last:mb-0 sm:mb-0 sm:last:col-span-2 sm:last:justify-self-center lg:last:col-span-1"
          key={idx}
        >
          <Image src={p.src} alt={p.alt} />
        </li>
      ))}
    </ul>
  );
};

export default PartnerLogos;

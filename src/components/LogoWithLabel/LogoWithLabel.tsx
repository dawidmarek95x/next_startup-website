import React from 'react';
import Image from 'next/image';
import logo from '../../images/header/Logo.svg?url';

interface LogoWithLabelProps {
  label: string;
}

const LogoWithLabel = ({ label }: LogoWithLabelProps) => {
  return (
    <div className="flex">
      <Image
        alt="logo"
        className="mr-2.5 h-[31px] w-[45px] xxl:mr-[18px] xxl:h-[48px] xxl:w-[70px]"
        src={logo}
      />
      <span className="text-3xl font-medium leading-tight xxl:text-[40px]">
        {label}
      </span>
    </div>
  );
};

export default LogoWithLabel;

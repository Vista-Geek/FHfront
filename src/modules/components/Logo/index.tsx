import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface LogoProps {
  width?: number;
  height?: number;
  text?: 'text-xl' | 'text-2xl' | 'text-3xl';
  position?: 'justify-center' | 'justify-start' | 'justify-end' | 'justify-evenly';
  link?: boolean;
}

const index: React.FC<LogoProps> = ({
  width = 40,
  height = 40,
  text = 'text-xl',
  position = 'justify-start',
  link = false
}) => (
  <div className="w-full flex">
    {link ? (
      <>
        <Link href="/">
          <a className={`flex items-center ${position}`}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={width}
              height={height}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <span className={`ml-2 ${text} sm:text-3xl flex justify-center items-center`}>FantasyHouse</span>
      </>
    ) : (
      <a className={`w-full flex items-center ${position}`}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={width}
          height={height}
          className="cursor-pointer"
        />
        <span className={`ml-2 ${text} inline`}>Fantasy House</span>
      </a>
    )}
  </div>
);

export default index;

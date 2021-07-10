import Image from 'next/image';
import Main from '@components/Main';
import React from 'react';

interface AuthContentProps {
  order?: boolean;
  children: React.ReactNode;
}

const AuthContent: React.FC<AuthContentProps> = ({ children, order = false }) => (
  <Main>
    <div className="sm:flex w-full sm:justify-center ">
      <div className="sm:flex">
        <div
          className={`hidden sm:flex mx-11 justify-center items-center ${
            order ? 'order-2' : ''
          }`}
        >
          <Image
            src="/images/primals.png"
            alt="logo"
            width={549}
            height={472}
            className="cursor-pointer"
          />
        </div>
        <div className="sm:mx-11">{children}</div>
      </div>
    </div>
  </Main>
);

export default AuthContent;

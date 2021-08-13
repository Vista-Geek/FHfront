import Image from "next/image";
import Main from "@components/Main";
import React from "react";

interface AuthContentProps {
  order?: boolean;
  children: React.ReactNode;
}

const AuthContent: React.FC<AuthContentProps> = ({
  children,
  order = false,
}) => (
  <Main login>
    <div className="lg:flex w-full lg:justify-center ">
      <div className="lg:flex">
        <div
          className={`hidden  lg:flex mx-11 justify-center items-center ${
            order ? "order-2" : ""
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
        <div className="lg:mx-11 sm:flex sm:justify-center">{children}</div>
      </div>
    </div>
  </Main>
);

export default AuthContent;

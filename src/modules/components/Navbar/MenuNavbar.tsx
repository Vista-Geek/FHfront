import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import ProfileDropdown from "@components/DropDowns/ProfileDropdown";
import { IoMdHeart } from "react-icons/io";

const MenuNavbar = () => {
  return (
    <div className="flex justify-center items-center">
      <ButtonNavbar
        href="/home"
        title="Buy"
        styles="bg-opacity-0 border-b-2 border-purpleCust rounded-none mr-1"
      />
      <ButtonNavbar
        href="/sell"
        title="Sell"
        styles="bg-opacity-0  border-purpleCust rounded-none"
      />
      <ProfileDropdown />
      <div className="mx-6 mr-8 hidden sm:block">
        <Link href="/favorites">
          <a>
            <IoMdHeart className="text-3xl" />
          </a>
        </Link>
      </div>
      <div className=" hidden sm:block">
        <Link href="/profile">
          <a>
            <Image
              src="/images/user.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuNavbar;

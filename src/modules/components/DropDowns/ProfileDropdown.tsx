import Image from "next/image";
import React from "react";
import { IoMdHeart } from "react-icons/io";
const ProfileDropdown = () => {
  return (
    <div className="group inline-block relative sm:hidden">
      <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <Image
          src="/images/user.png"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </button>
      <ul className="absolute -left-5 sm:left-0 hidden  pt-1 group-hover:block">
        <li className="">
          <a
            className="rounded-t bg-purpleCust-card hover:bg-purpleCust-light py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            <IoMdHeart className="text-3xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;

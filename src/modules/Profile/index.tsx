import Navbar from "@components/Navbar/Navbar";
import React from "react";
import { IoMdHeart } from "react-icons/io";
import CardProfile from "./CardProfile";
import Tabs from "@components/Tabs/TabProfile";
import EditProfile from "./EditProfile";
import EditAccount from "./EditAccount";
import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import ProfileDropdown from "@components/DropDowns/ProfileDropdown";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  const renderChildren = () => (
    <div className="flex justify-center items-center">
      <ButtonNavbar
        href="/"
        title="Buy"
        styles="bg-opacity-0 border-b-2 border-purpleCust rounded-none mr-1"
      />
      <ButtonNavbar
        href="/"
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
  return (
    <>
      <Navbar RenderChildren={renderChildren} />
      <div className="pt-20 px-4 flex flex-col sm:flex-row lg:w-9/12 m-auto sm:justify-center">
        <div className="flex justify-center w-full sm:max-h-100 sm:justify-start sm:w-3/6 sm:mr-4">
          <CardProfile />
        </div>
        <div className="sm:w-3/6 mt-4 sm:mt-0 lg:w-5/12">
          <Tabs>
            <EditProfile />
            <EditAccount />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default index;

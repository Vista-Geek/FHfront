import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import ProfileDropdown from "@components/DropDowns/ProfileDropdown";
import { IoMdHeart } from "react-icons/io";

const MenuNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNav = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    /*
      Cambia el overflow del <body> según si el
      Navbar está abierto, para que no haya scroll.
    */
    document.body.classList.toggle("overflow-hidden", isVisible);
  }, [isVisible]);

  /*
    Si el tamaño de la pantalla incrementa y el
    isVisible es true, esto lo setea a false.
  */
  const handleResize = () => {
    if (window.innerWidth > 640) {
      setIsVisible(false);
    }
  };
  useEffect(() => window.addEventListener("resize", handleResize));

  return (
    <>
      <div className="hidden sm:flex justify-center items-center">
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
        <div className="hidden sm:block">
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
      <div className="sm:hidden">
        <button onClick={toggleNav}>
          <i className="fas fa-bars text-2xl pt-1 px-2"></i>
        </button>
        <ul
          className={
            "text-lg font-herbo text-center absolute top-0 left-0 mt-16 w-screen h-screen bg-purpleCust-dark " +
            (isVisible ? "flex flex-col overflow-hidden" : "hidden")
          }
        >
          <li className="hover:text-purpleCust-text hover:font-semibold pt-8">
            <Link href="/home">
              <a>Buy House</a>
            </Link>
          </li>
          <li className="hover:text-purpleCust-text hover:font-semibold pt-8">
            <Link href="/sell">
              <a>Sell House</a>
            </Link>
          </li>
          <li className="hover:text-purpleCust-text hover:font-semibold pt-8">
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
          <li className="hover:text-purpleCust-text hover:font-semibold pt-8">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuNavbar;

import React from "react";
import Link from "next/link";
import Logo from "@components/Logo";

const Footer = () => {
  return (
    <>
      <footer className="bg-purpleCust-dark h-[230px] p-5 sm:pt-16">
        <div className="max-w-screen-md m-auto grid grid-cols-5 gap-4">
          <div className="col-span-5 sm:col-span-2">
            <Logo text="text-3xl" width={45} />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xl">Resources</h4>
            <ul className="font-herbo text-purpleCust-text">
              <li>
                <Link href="/home">
                  <a className="hover:underline">By House</a>
                </Link>
              </li>
              <li>
                <Link href="/sell">
                  <a className="hover:underline">Sell House</a>
                </Link>
              </li>
              <li>
                <Link href="/favorites">
                  <a className="hover:underline">Favorites</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1 order-last sm:order-none">
            <h4 className="text-xl">Follow us</h4>
            <div className="text-purpleCust-text text-2xl">
              <a
                href="#"
                target="_blank"
                className="hover:text-purpleCust pr-3"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-purpleCust pr-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" className="hover:text-purpleCust">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </footer>
      <div className="flex justify-center items-center min-h-[50px]">
        <p className="font-herbo">© 2021, Designed by @VistaGeek</p>
      </div>
    </>
  );
};

export default Footer;

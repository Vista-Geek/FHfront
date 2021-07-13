import React from "react";
import Logo from "@components/Logo";

interface NavbarProps {
  RenderChildren: () => JSX.Element;
}

const Navbar: React.FC<NavbarProps> = ({ RenderChildren }) => {
  return (
    <header className="absolute w-full bg-purpleCust-dark z-50">
      <nav className="sm:w-10/12 m-auto px-2 py-3 flex justify-between">
        <Logo link />
        <RenderChildren />
      </nav>
    </header>
  );
};
export default Navbar;

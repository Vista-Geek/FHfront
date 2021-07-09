import React from 'react';
import Logo from '@components/Logo';

interface NavbarProps {
  RenderChildren: () => JSX.Element;
}

const Navbar: React.FC<NavbarProps> = ({ RenderChildren }) => {
  return (
    <nav className="absolute bg-purpleCust-dark w-full px-2 py-3 flex justify-between">
      <Logo link />
      <RenderChildren />
    </nav>
  );
};
export default Navbar;

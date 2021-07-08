import React from 'react';
import Logo from '@components/Logo';
export default function Navbar() {
  return (
    <nav className="absolute bg-purpleCust-dark w-full px-2">
      <Logo link />
    </nav>
  );
}

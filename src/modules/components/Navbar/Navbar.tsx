import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute bg-purpleCust-dark w-full">
      <Image src="/images/logo.svg" alt="logo" width="64" height="64" />
    </nav>
  );
}

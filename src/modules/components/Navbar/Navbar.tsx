import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute bg-purpleCust-dark w-full">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="64"
            height="64"
            className="cursor-pointer"
          />
        </a>
      </Link>
    </nav>
  );
}

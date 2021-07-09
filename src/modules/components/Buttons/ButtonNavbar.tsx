import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface ButtonNavbarProps {
  title: string;
  href: string;
}

const ButtonNavbar: React.FC<ButtonNavbarProps> = ({ title, href }) => (
  <Button type="button" width="w-full" classnames="bg-purpleCust-light w-24 font-herbo">
    <Link href={href}>
      <a className="block w-full">{title}</a>
    </Link>
  </Button>
);

export default ButtonNavbar;

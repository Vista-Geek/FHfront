import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface ButtonNavbarProps {
  title: string;
  href: string;
  styles?: string;
}

const ButtonNavbar: React.FC<ButtonNavbarProps> = ({
  title,
  href,
  styles = 'bg-purpleCust-light w-24'
}) => (
  <Button type="button" width="w-full" classnames={`font-herbo ${styles}`}>
    <Link href={href}>
      <a className="block w-full">{title}</a>
    </Link>
  </Button>
);

export default ButtonNavbar;

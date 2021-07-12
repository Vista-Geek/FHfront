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
  styles = 'bg-purpleCust-light'
}) => (
  <Button
    type="button"
    width="w-20 sm:w-36"
    classnames={`font-herbo ${styles}`}
    rounded="rounded"
  >
    <Link href={href}>
      <a className="block w-full">{title}</a>
    </Link>
  </Button>
);

export default ButtonNavbar;

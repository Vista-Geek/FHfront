import React from 'react';
import Logo from '@components/Logo';
import Head from 'next/head';
import Button from '@components/Buttons/Button';
import Input from '@components/Inputs';
import Image from 'next/image';

interface CardProps {
  label: string;
  authMode: 'Sign up' | 'Log In';
}

const Card: React.FC<CardProps> = ({ label, authMode }) => {
  return (
    <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-4">
      <Head>
        <title>FantasyHouse | {label}</title>
      </Head>
      <Logo position="justify-center" text="text-3xl" width={50} height={50} />
      <p className="mt-4">
        <span className="text-xl">{label}</span>
      </p>
      <form action="" method="POST" className="font-herbo">
        <Input type="text" label="Username" id="username" />
        <Input type="password" label="Password" id="password" />
        <div className="mt-8 ">
          {/* TODO:  dinamice title */}
          <Button type="submit" width="w-6/12" classnames="bg-purpleCust">
            <span>{label}</span>
          </Button>
        </div>
        <div className="mt-14 mb-5">
          <Button
            type="button"
            width="w-8/12"
            classnames="bg-blueCust flex justify-center items-center m-auto h-13"
          >
            <Image
              src="/images/discord.svg"
              alt="discord logo"
              width={40}
              height={38}
              className="cursor-pointer bg-blueCust"
            />
            <span>{authMode} with Discord</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Card;

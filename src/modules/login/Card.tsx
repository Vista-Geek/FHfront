import React from 'react';
import Logo from '@components/Logo';
import Head from 'next/head';
import Button from '@components/Buttons/Button';
import Input from '@components/Inputs';
const Card = () => {
  return (
    <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-4">
      <Head>
        <title>FantasyHouse | Login</title>
      </Head>
      <Logo position="justify-center" text="text-3xl" width={50} height={50} />
      <p>
        <span className="text-xl">Log In</span>
      </p>
      <form action="" method="POST">
        <Input type="text" label="Username" id="username" />
        <Input type="password" label="Password" id="password" />
        <div>
          {/* TODO:  dinamice title */}
          <Button type="submit" title="Log In" />
        </div>
      </form>
    </div>
  );
};

export default Card;

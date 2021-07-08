import React from 'react';
import Logo from '@components/Logo';
import Head from 'next/head';
const Card = () => {
  return (
    <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-2">
      <Head>
        <title>Fantasy House | Login</title>
      </Head>
      <Logo position="justify-center" text="text-2xl" width={50} height={50} />
    </div>
  );
};

export default Card;

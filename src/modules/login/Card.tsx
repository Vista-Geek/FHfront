import React from 'react';
import Logo from '@components/Logo';
import Head from 'next/head';
const Card = () => {
  return (
    <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-4">
      <Head>
        <title>Fantasy House | Login</title>
      </Head>
      <Logo position="justify-center" text="text-3xl" width={50} height={50} />
      <p>
        <span className="text-xl">Log In</span>
      </p>
      <form action="" method="POST">
        <div className="flex flex-col w-10/12 m-auto mt-4 text-left">
          <label htmlFor="username" className="mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            className="custom-input form-input"
            autoFocus
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col w-10/12 m-auto mt-4 text-left">
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            id="password"
            className="custom-input form-input"
            autoFocus
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Card;

import ButtonNavbar from '@components/Buttons/ButtonNavbar';
import Main from '@components/Main';
import Navbar from '@components/Navbar/Navbar';
import Head from 'next/head';
import React from 'react';

export default function Landing() {
  const renderButRegister = () => (
    <div className="flex">
      <ButtonNavbar title="Log In" href="/login" styles="bg-transparent" />
      <ButtonNavbar title="Sign Up" href="/register" styles="bg-purpleCust" />
    </div>
  );
  return (
    <>
      <Navbar RenderChildren={renderButRegister} />
      <Main>
        <Head>
          <title>Fantasy House - Buy your dream house</title>
        </Head>
        <div className="m-auto">
          <p className="text-3xl sm:text-6xl text-center px-5 sm:px-24 md:px-40 max-w-6xl mb-12 text-white font-medium">
            Search and find your dream home, a place where you can plan your strategies
            and rest at easy.
          </p>
          <div className="w-full sm:pt-4">
            <div className="text-center w-64 sm:w-3/4 m-auto">
              <a
                href="#"
                className="text-xl sm:text-2xl bg-purpleCust py-2 px-14 m-8 block sm:inline text-white rounded-fh"
              >
                Buy House
              </a>
              <a
                href="#"
                className="text-xl sm:text-2xl bg-orangeCust py-2 px-14 m-8 block sm:inline text-white rounded-fh"
              >
                Sell House
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

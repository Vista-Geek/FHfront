import Head from 'next/head';
import React from 'react';

export default function Landing() {
  return (
    <section className="flex h-screen bg-hero">
      <Head>
        <title>Fantasy House - Buy your dream house</title>
      </Head>
      <div className="m-auto">
        <p className="text-4xl text-center px-5 sm:px-24 md:px-40 max-w-3xl mb-12 text-white font-medium">
          Search and find your dream home, a place where you can plan your strategies and
          rest at easy.
        </p>
        <div className="w-full pt-4">
          <div className="text-center w-64 sm:w-3/4 m-auto">
            <a
              href="#"
              className="bg-purpleCust py-2 px-14 m-8 block sm:inline text-white text-xl rounded-fh"
            >
              Buy House
            </a>
            <a
              href="#"
              className="bg-orangeCust py-2 px-14 m-8 block sm:inline text-white text-xl rounded-fh"
            >
              Sell House
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

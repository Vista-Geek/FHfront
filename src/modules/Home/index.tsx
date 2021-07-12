import React from 'react';
import Head from 'next/head';
import ButtonNavbar from '@components/Buttons/ButtonNavbar';
import Navbar from '@components/Navbar/Navbar';

import FilterColumn from './FilterColumn';
import CardsColumn from './CardsColumn';

export default function Home() {
  const renderButRegister = () => (
    <div className="flex">
      <ButtonNavbar title="Log In" href="/login" styles="bg-transparent" />
      <ButtonNavbar title="Sign Up" href="/register" styles="bg-purpleCust" />
    </div>
  );
  return (
    <>
      <Navbar RenderChildren={renderButRegister} />
      <Head>
        <title>FantasyHouse - Home</title>
      </Head>
      <main className="grid grid-cols-5 gap-5 p-5 md:max-w-6xl m-auto pt-24">
        <div className="col-span-5 md:col-span-2">
          <h3 className="text-3xl">Filter your house 🏯</h3>
          <FilterColumn />
        </div>
        <div className="col-span-5 md:col-span-3 mx-2">
          <div className="flex justify-end items-end">
            <h3 className="text-3xl mr-3 sm:mr-4">Sorty by</h3>
            <select
              defaultValue="Newest"
              className="rounded bg-purpleCust text-lg h-8 w-40 py-0 border-none"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Cheapest</option>
            </select>
          </div>
          <CardsColumn />
        </div>
      </main>
    </>
  );
}

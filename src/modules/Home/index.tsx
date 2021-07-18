import React from "react";
import Head from "next/head";
import FilterColumn from "./FilterColumn";
import CardsColumn from "./CardsColumn";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import DiscordBanner from "@components/Banner/DiscordBanner";
import Layout from "@components/Layout/Layout";

export default function Home() {
  return (
    <>
      <GlobalNavbar />
      <Head>
        <title>FantasyHouse - Home</title>
      </Head>
      <Layout>
        <main className="grid grid-cols-5 gap-5 p-5 md:max-w-6xl m-auto pt-24 mb-5">
          <div className="col-span-5 md:col-span-2">
            <h3 className="text-3xl">Filter your house 🏯</h3>
            <FilterColumn />
          </div>
          <div className="col-span-5 md:col-span-3 mx-2">
            <div className="flex justify-end items-end">
              <h3 className="text-2xl mr-3 sm:mr-4">Sort by:</h3>
              <select
                defaultValue="Newest"
                className="rounded bg-purpleCust text-md font-herbo h-8 w-40 py-0 border-none"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
            </div>
            <CardsColumn />
          </div>
        </main>
        <DiscordBanner />
      </Layout>
    </>
  );
}

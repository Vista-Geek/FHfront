import React from "react";
import DiscordBanner from "@components/Banner/DiscordBanner";
import Head from "next/head";
import DetailsCard from "./DetailsCard";
import Layout from "@components/Layout/Layout";

const Details = () => {
  return (
    <>
      <Head>
        <title>Fantasy House - House Details </title>
      </Head>
      <Layout>
        <div className="md:pt-24 pt-20 mb-14 sm:mb-24">
          <DetailsCard />
        </div>
        <DiscordBanner />
      </Layout>
    </>
  );
};

export default Details;

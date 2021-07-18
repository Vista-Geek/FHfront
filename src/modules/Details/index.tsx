import React from "react";
import DiscordBanner from "@components/Banner/DiscordBanner";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
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
        <div className="md:pt-24 pt-20 mb-5">
          <DetailsCard />
        </div>
        <DiscordBanner />
      </Layout>
    </>
  );
};

export default Details;

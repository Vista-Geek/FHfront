import Navbar from "@components/Navbar/Navbar";
import React from "react";
import CardProfile from "./CardProfile";
import Tabs from "@components/Tabs/TabProfile";
import EditProfile from "./EditProfile";
import EditAccount from "./EditAccount";
import MenuNavbar from "@components/Navbar/MenuNavbar";
import Head from "next/head";
import Layout from "@components/Layout/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Fantasy House | Profile</title>
      </Head>
      <Layout>
        <div className="pt-20 px-4 flex flex-col sm:flex-row lg:w-9/12 m-auto sm:justify-center">
          <div className="flex justify-center w-full sm:max-h-100 sm:justify-start sm:w-3/6 sm:mr-4">
            <CardProfile />
          </div>
          <div className="sm:w-3/6 mt-4 sm:mt-0 lg:w-5/12">
            <Tabs>
              <EditProfile />
              <EditAccount />
            </Tabs>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;

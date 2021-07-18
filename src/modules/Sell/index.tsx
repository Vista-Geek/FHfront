import React, { Fragment } from "react";
import Head from "next/head";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import Label from "@components/Buttons/LabelButton";
import NewPostStep from "@components/NewPostStep";
import ProductCard from "@components/ProductCard";
import HouseInfo from "./HouseInfo";

export default function SellPage() {
  const dataCenters = [
    "Aether",
    "Chaos",
    "Crystal",
    "Elemental",
    "Gaia",
    "Korea",
  ];

  const serversNames = [
    "Balmung",
    "Brynhildr",
    "Coeurl",
    "Diabolos",
    "Goblin",
    "Malboro",
    "Mateus",
    "Zalera",
  ];

  const typeOfSale = ["FC", "Relocation"];
  const houseSize = ["Short", "Medium", "Large"];

  return (
    <>
      <GlobalNavbar />
      <Head>
        <title>FantasyHouse - Sell form</title>
      </Head>
      <main className="p-5 m-auto pt-24">
        <form className="mx-auto sm:w-10/12 p-5 bg-none md:bg-purpleCust-dark rounded-lg">
          <div className="sm:max-w-lg lg:max-w-xl mx-auto">
            <h4 className="text-3xl mb-8">Create new post</h4>
            {/* Data Center */}
            <NewPostStep stepTitle="Data Center" stepSecondTitle="Select one">
              {dataCenters.map((item, index) => (
                <Label key={index} inputName="dataCenter" itemName={item} />
              ))}
            </NewPostStep>
            {/* Server */}
            <NewPostStep stepTitle="Server" stepSecondTitle="Select one">
              {serversNames.map((item, index) => (
                <Label key={index} inputName="serverName" itemName={item} />
              ))}
            </NewPostStep>
            {/* House Info */}
            <NewPostStep
              stepTitle="House Information"
              stepSecondTitle="Complete all"
            >
              <HouseInfo typeOfSale={typeOfSale} houseSize={houseSize} />
            </NewPostStep>
            {/* Image */}
            <NewPostStep
              stepTitle="Post images"
              stepSecondTitle="Select your images"
            >
              <div className="w-full mt-8">
                <label className="w-36 h-10 flex flex-col items-center py-2 text-white rounded-lg tracking-wide uppercase cursor-pointer bg-purpleCust-card hover:bg-purpleCust">
                  <span className="text-base ">Select a picture</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </label>
              </div>
              {/* <input
                type="file"
                name="myImage"
                accept="image/*"
                size={10}
                className="w-24"
              /> */}
            </NewPostStep>
            {/* Result of the post */}
            <NewPostStep
              stepTitle="Result Post"
              stepSecondTitle="Verify post info"
            >
              {/* <ProductCard /> */}
            </NewPostStep>
          </div>
        </form>
      </main>
    </>
  );
}

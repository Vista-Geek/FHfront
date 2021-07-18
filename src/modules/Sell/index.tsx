import React, { useState } from "react";
import Head from "next/head";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import Label from "@components/Buttons/LabelButton";
import NewPostStep from "@components/NewPostStep";
import ProductCard from "@components/ProductCard";
import HouseInfo from "./HouseInfo";
// TEMPORAL
import Discord from "@images/discord-purple.svg";

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

  /* Post Result things */
  const [postResult, setPostResult] = useState({});
  /*
    Desde aquí pido disculpas por todo
    lo que he tenido que hacer para pasar
    los valores, pero es el método que
    me salió mejor. 🙏
  */
  const postData = (key: string, value: string): any => {
    const itemData = {
      ...postResult,
      [key]: value,
    };
    setPostResult(itemData);
  };
  //
  return (
    <>
      {console.log(postResult)}
      <GlobalNavbar />
      <Head>
        <title>FantasyHouse - Sell form</title>
      </Head>
      <main className="p-5 pr-0 m-auto pt-24">
        <form className="mx-auto w-[100%] sm:w-10/12 p-5 pb-64 md:px-10 bg-none md:bg-purpleCust-dark rounded-lg">
          <div className="sm:max-w-xl lg:max-w-xl mx-auto">
            <h4 className="text-3xl mb-8">Create new post</h4>
            {/* Data Center */}
            <NewPostStep stepTitle="Data Center" stepSecondTitle="Select one">
              {dataCenters.map((item, index) => (
                <Label
                  key={index}
                  inputName="dataCenter"
                  itemName={item}
                  postData={postData}
                />
              ))}
            </NewPostStep>
            {/* Server */}
            <NewPostStep stepTitle="Server" stepSecondTitle="Select one">
              {serversNames.map((item, index) => (
                <Label
                  key={index}
                  inputName="serverName"
                  itemName={item}
                  postData={postData}
                />
              ))}
            </NewPostStep>
            {/* House Info */}
            <NewPostStep
              stepTitle="House Information"
              stepSecondTitle="Complete all"
            >
              <HouseInfo
                typeOfSale={typeOfSale}
                houseSize={houseSize}
                postData={postData}
              />
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
            </NewPostStep>
            {/* Result of the post */}
            <NewPostStep
              stepTitle="Result Post"
              stepSecondTitle="Verify post info"
            >
              <div className="absolute -left-1 pt-6">
                <ProductCard
                  productTitle={postResult.postTitle ?? ""}
                  productDescription={postResult.postDescription ?? ""}
                  productAuthor={{
                    authorName: "Hugo",
                    stars: 3,
                    avatar: Discord,
                    discord: "Hugo#0000",
                  }}
                  productFeatures={{
                    location: postResult.location ?? "",
                    plotNumber: postResult.plotNumber ?? "",
                    size: postResult.houseSize ?? "",
                    typeOfSale: postResult.typeOfSale ?? "",
                  }}
                  productPrice={postResult.postPrice ?? ""}
                />
              </div>
            </NewPostStep>
          </div>
        </form>
      </main>
    </>
  );
}

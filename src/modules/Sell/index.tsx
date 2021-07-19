import React, { useEffect } from "react";
import Head from "next/head";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import Label from "@components/Buttons/LabelButton";
import NewPostStep from "@components/NewPostStep";
import ProductCard from "@components/ProductCard";
import HouseInfo from "./HouseInfo";
// TEMPORAL
import Discord from "@images/discord-purple.svg";
import { useForm } from "../../hooks/useForm";
import { SellForm } from "../../interfaces/Sell.interface";
import {
  DataCenters,
  ServersNames,
  TypeOfSale,
  HouseSize,
} from "../../interfaces/Sell.interface";
import Button from "@components/Buttons/Button";

export default function SellPage() {
  const dataCenters: DataCenters[] = [
    "Aether",
    "Chaos",
    "Crystal",
    "Elemental",
    "Gaia",
    "Korea",
  ];

  const serversNames: ServersNames[] = [
    "Balmung",
    "Brynhildr",
    "Coeurl",
    "Diabolos",
    "Goblin",
    "Malboro",
    "Mateus",
    "Zalera",
  ];

  const typeOfSale: TypeOfSale[] = ["FC", "Relocation"];
  const houseSize: HouseSize[] = ["Short", "Medium", "Large"];

  /* Post Result things */
  const InitialStateForm: SellForm = {
    dataCenter: "Aether",
    serverName: "Coeurl",
    description: "",
    plotNumber: "",
    location: "",
    price: "",
    title: "",
    size: "Medium",
    typeOfSale: "Relocation",
    image: "/images/noimage.png",
  };

  const { values, handleCustomInputChange, handleInputChange, reset } =
    useForm(InitialStateForm);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const processImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      handleCustomInputChange(event.target.name, imageUrl);
    }
  };
  return (
    <>
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
              <div className="grid grid-cols-3 gap-1 md:grid-cols-4">
                {dataCenters.map((item, index) => (
                  <Label
                    key={index}
                    inputName="dataCenter"
                    itemName={item}
                    handleCustomInputChange={handleCustomInputChange}
                  />
                ))}
              </div>
            </NewPostStep>
            {/* Server */}
            <NewPostStep stepTitle="Server" stepSecondTitle="Select one">
              <div className="grid grid-cols-3 gap-1 md:grid-cols-4">
                {serversNames.map((item, index) => (
                  <Label
                    key={index}
                    inputName="serverName"
                    itemName={item}
                    handleCustomInputChange={handleCustomInputChange}
                  />
                ))}
              </div>
            </NewPostStep>
            {/* House Info */}
            <NewPostStep
              stepTitle="House Information"
              stepSecondTitle="Complete all"
            >
              <HouseInfo
                typeOfSales={typeOfSale}
                houseInfo={{ ...values }}
                houseSize={houseSize}
                handleInputChange={handleInputChange}
                handleCustomInputChange={handleCustomInputChange}
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
                    name="image"
                    onChange={processImage}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </label>
              </div>
            </NewPostStep>
            {/* Result of the post */}
            <NewPostStep
              stepTitle="Result Post"
              stepSecondTitle="Verify post info"
              last
            >
              <div className="absolute lg:left-16 left-10 pt-6">
                <ProductCard
                  image={values.image}
                  title={values.title}
                  description={values.description}
                  author={{
                    authorName: "Hugo",
                    stars: 3,
                    avatar: Discord,
                    discord: "Hugo#0000",
                  }}
                  features={{
                    location: values.location,
                    plotNumber: values.plotNumber,
                    size: values.size,
                    typeOfSale: values.typeOfSale,
                  }}
                  price={Number(values.price)}
                />
                <Button
                  title="Post"
                  type="submit"
                  width="w-2/6"
                  classnames="bg-purpleCust-light"
                  rounded="rounded"
                />
              </div>
            </NewPostStep>
          </div>
        </form>
      </main>
    </>
  );
}

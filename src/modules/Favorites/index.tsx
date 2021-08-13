import React from "react";
import Head from "next/head";
import Layout from "@components/Layout/Layout";
import ProductCard from "@components/ProductCard";
import { ProductI } from "@interfaces/Product.interface";

// Development
import fakeAvatar from "@images/fakeAvatar.png";

export default function Favorites() {
  const fakeCard: ProductI[] = [
    {
      image: "/images/bg-image.png",
      title:
        "House title daosijdasddaosijdasddaosijdasddaosijdasd daosijdasddaosijdasddaosijdasddaosijdasd",
      description:
        "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
      features: {
        location: "The Lavender Beds",
        size: "Medium",
        server: "Chaos",
        plotNumber: "2",
        typeOfSale: "FC",
      },
      author: {
        authorName: "byRedHunter",
        stars: 3,
        avatar: fakeAvatar,
        discord: "Usuario#0000",
      },
      price: 16000000,
    },
    {
      image: "/images/bg-image2.jpeg",
      title: "Descriptive House title i like",
      description:
        "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
      features: {
        location: "The Lavender Beds",
        size: "Medium",
        server: "Chaos",
        typeOfSale: "Relocation",
        plotNumber: "2",
      },
      author: {
        authorName: "byRedHunter",
        stars: 3,
        avatar: fakeAvatar,
        discord: "Usuario#0000",
        isAuthor: false,
      },
      price: 16000000,
    },
  ];
  return (
    <>
      <Head>
        <title>Favorites - FantasyHouse</title>
      </Head>
      <Layout>
        <main className="pt-24">
          <div className="w-[643px] mx-auto">
            {fakeCard.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

import React from "react";
import ProductCard from "@components/ProductCard";
import fakeAvatar from "@images/fakeAvatar.png";
import { ProductI } from "@interfaces/Product.interface";

export default function CardsColumn() {
  const fakeCard: ProductI[] = [
    {
      image: "/images/bg-image.png",
      title:
        "House title daosijdasddaosijdasddaosijdasddaosijdasd daosijdasddaosijdasddaosijdasddaosijdasd",
      description:
        "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
      features: {
        location: "The Lavender Beds, Plot 15",
        size: "Medium",
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
        location: "The Lavender Beds, Plot 15",
        size: "Medium",
        typeOfSale: "Relocation",
        plotNumber: "2",
      },
      author: {
        authorName: "byRedHunter",
        stars: 3,
        avatar: fakeAvatar,
        discord: "Usuario#0000",
        isAuthor: true,
      },
      price: 16000000,
    },
  ];

  return (
    <div className="mt-8">
      {fakeCard.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

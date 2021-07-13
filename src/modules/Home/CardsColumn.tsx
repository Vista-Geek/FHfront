import React from "react";
import ProductCard from "@components/ProductCard";

import imagenNoFinal from "@images/bg-image.png";
import imagenNoFinal2 from "@images/bg-image2.jpeg";
import fakeAvatar from "@images/fakeAvatar.png";

export default function CardsColumn() {
  const fakeCard = [
    {
      image: imagenNoFinal,
      title:
        "House title daosijdasddaosijdasddaosijdasddaosijdasd daosijdasddaosijdasddaosijdasddaosijdasd",
      description:
        "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
      features: {
        location: "The Lavender Beds, Plot 15",
        size: "Medium",
      },
      author: {
        name: "byRedHunter",
        stars: 3,
        avatar: fakeAvatar,
        discord: "Usuario#0000",
      },
      price: 16000000,
    },
    {
      image: imagenNoFinal2,
      title: "Descriptive House title i like",
      description:
        "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
      features: {
        location: "The Lavender Beds, Plot 15",
        size: "Medium",
      },
      author: {
        name: "byRedHunter",
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
        <ProductCard
          key={index}
          productImage={item.image}
          productTitle={item.title}
          productDescription={item.description}
          productFeatures={item.features}
          productAuthor={item.author}
          productPrice={item.price}
        />
      ))}
    </div>
  );
}

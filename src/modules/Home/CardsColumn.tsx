import React from 'react';
import ProductCard from '@components/ProductCard';

import imagenNoFinal from '@images/bg-image.png';
import fakeAvatar from '@images/fakeAvatar.png';

export default function CardsColumn() {
  const fakeCard = {
    image: imagenNoFinal,
    title: 'House title daosijdasd',
    description:
      'A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.',
    features: {
      location: 'The Lavender Beds, Plot 15',
      size: 'Medium'
    },
    author: {
      name: 'byRedHunter',
      stars: 3,
      avatar: fakeAvatar,
      discord: 'Usuario#0000'
    },
    price: 16000000
  };

  return (
    <div className="mt-8">
      <ProductCard
        productImage={fakeCard.image}
        productTitle={fakeCard.title}
        productDescription={fakeCard.description}
        productFeatures={fakeCard.features}
        productAuthor={fakeCard.author}
        productPrice={fakeCard.price}
      />
    </div>
  );
}

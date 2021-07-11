import React from 'react';
import Image from 'next/image';
import Discord from '@images/discord-purple.svg';

interface Product {
  // la imagen será de tipo string con la DB
  productImage: any;
  productTitle: string;
  productDescription: string;
  productFeatures: {
    location: string;
    size: string;
  };
  productAuthor: {
    name: string;
    stars: number;
    // la imagen será de tipo string con la DB
    avatar: any;
    discord: string;
  };
  productPrice: number;
}

export default function ProductCard({
  productImage,
  productTitle,
  productDescription,
  productAuthor,
  productPrice,
  productFeatures
}: Product) {
  return (
    <div className="bg-purpleCust-card mb-0 flex-none sm:flex font-herbo rounded-lg">
      <div>
        <Image
          src={productImage}
          alt={productTitle}
          className="rounded-t-lg"
          width="500px"
          height="500px"
        />
      </div>
      <div className="p-2">
        <div>
          <h5 className="font-display">{productTitle}</h5>
          <span>Sell-FC</span>
        </div>
        <div>
          Location: {productFeatures.location}
          Size: {productFeatures.size}
        </div>
        <div>
          <p>{productDescription}</p>
        </div>
        <div>
          <div className="flex">
            <Image
              src={productAuthor.avatar}
              alt={productAuthor.name}
              width="18px"
              height="18px"
            />
            <p>
              {productAuthor.name} ({productAuthor.stars}⭐️)
            </p>
            <p>
              <Image src={Discord} alt="Discord Logo" width="18px" height="18px" />
              {productAuthor.discord}
            </p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

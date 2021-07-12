import React from 'react';
import Image from 'next/image';
import Discord from '@images/discord-purple.svg';
import Heart from '@images/heart.svg';

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
    <div className="bg-purpleCust-card font-herbo mb-8 sm:h-card flex-none sm:flex mx-auto max-w-xs sm:max-w-full rounded-lg relative">
      <div
        className="sm:w-96 min-w-min relative"
        style={{ height: '240px', maxHeight: '240px' }}
      >
        <Image
          src={productImage}
          alt={productTitle}
          className="rounded-t-lg sm:rounded-none sm:rounded-l-lg"
          objectFit="fill"
          layout="fill"
        />
      </div>
      <div className="px-2 pt-2 pb-2 sm:pt-3 sm:pb-0">
        <span className="absolute top-3 right-3 bg-purpleCust-light text-xs p-2 rounded-md">
          {productPrice} Gil
        </span>
        <div>
          <h5
            className="font-display text-xl hover:underline overflow-ellipsis overflow-hidden"
            style={{ maxWidth: '220px', maxHeight: '60px' }}
          >
            <a href="#">{productTitle}</a>
          </h5>
          <span className="bg-orangeCust px-2 py-0 text-sm rounded-md">Sell-FC</span>
        </div>
        <div className="text-xs my-3">
          <p>
            <span className="font-bold">Location:</span> {productFeatures.location}
          </p>
          <p>
            <span className="font-bold">Size:</span> {productFeatures.size}
          </p>
        </div>
        <div className="text-xs mb-16">
          <p>{productDescription}</p>
        </div>
        <div className="text-xs absolute bottom-3">
          <div className="flex content-between gap-2">
            <div>
              <div className="flex">
                <Image
                  src={productAuthor.avatar}
                  alt={productAuthor.name}
                  width="22px"
                  height="22px"
                  className="rounded-full"
                />
                <p>
                  {productAuthor.name} ({productAuthor.stars}⭐️)
                </p>
              </div>
              <div className="flex">
                <Image src={Discord} alt="Discord Logo" width="18px" height="18px" />
                <p>{productAuthor.discord}</p>
              </div>
            </div>
            <span className="w-24 text-right">
              <Image src={Heart} alt="heart" width="18px" height="18px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

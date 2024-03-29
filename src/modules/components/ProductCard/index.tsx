import React from "react";
import Image from "next/image";
import Discord from "@images/discord-purple.svg";
import { convertStringToCurrency } from "@utils/convertStringToCurrency";
import Link from "next/link";
import Heart from "@images/heart.svg";
import { ProductI } from "@interfaces/Product.interface";

export default function Card({
  image = "/images/noimage.png",
  title,
  description,
  author,
  price,
  features,
}: ProductI) {
  return (
    <div className="bg-purpleCust-card font-herbo mb-8 flex-none sm:flex mx-auto max-w-xs sm:max-w-full rounded-lg relative min-w-[264px] sm:h-[260px]">
      <div
        className="sm:w-96 min-w-[40%] sm:max-w-40 relative"
        style={{ height: "260px", maxHeight: "260px" }}
      >
        <img
          src={image}
          alt={title}
          className="rounded-t-lg sm:rounded-none sm:rounded-l-lg h-full w-full"
        />
      </div>
      <div className="px-2 pt-2 pb-2 sm:pt-3 sm:pb-0 max-w-full sm:min-w-50">
        <span className="absolute top-3 right-3 bg-purpleCust-light text-xs p-2 rounded-md">
          {convertStringToCurrency(price.toString())} Gil
        </span>
        {author.isAuthor && (
          <span
            className="absolute top-3 left-3 bg-purpleCust text-xs p-2 rounded-md hover:cursor-pointer"
            title="Mark as sold"
          >
            ✏️
          </span>
        )}
        <div className=" md:max-w-[10rem] lg:max-w-[15rem]">
          <h5
            className="font-display text-xl hover:underline overflow-ellipsis overflow-hidden"
            style={{ maxHeight: "60px" }}
          >
            <Link href="/">
              <a>{title}</a>
            </Link>
          </h5>
          <span className="bg-orangeCust px-2 py-0 text-sm rounded-md">
            Sell-{features.typeOfSale}
          </span>
        </div>
        <div className="text-xs my-3">
          <p>
            <span className="font-bold">Location:</span>
            {features.location}, Plot {features.plotNumber}
          </p>
          <p>
            <span className="font-bold">Size:</span> {features.size}
          </p>
          <p>
            <span className="font-bold">Server:</span> {features.server}
          </p>
        </div>
        <div className="text-xs mb-16">
          <p className="overflow-ellipsis overflow-hidden break-words max-h-12">
            {description}
          </p>
        </div>
        <div className="text-xs absolute bottom-3 sm:flex gap-5">
          <div className="flex items-center">
            <Image
              src={author.avatar}
              alt={author.authorName}
              width="22px"
              height="22px"
              className="rounded-full"
            />
            <Link href="/">
              <a>
                {author.authorName} ({author.stars}⭐️)
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={Discord}
              alt="Discord Logo"
              width="18px"
              height="18px"
            />
            <Link href="/">
              <a>{author.discord}</a>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-2 right-6">
          <span className="w-24 text-right hover:cursor-pointer">
            <Image src={Heart} alt="heart" width="22px" height="22px" />
          </span>
        </div>
      </div>
    </div>
  );
}

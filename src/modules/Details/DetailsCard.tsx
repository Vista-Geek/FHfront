import React from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import { IoMdHeart } from "react-icons/io";
import Button from "@components/Buttons/Button";
import Rating from "@components/Rating/ProfileStar";
import { convertStringToCurrency } from "@utils/convertStringToCurrency";

const DetailsCard = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const detailsInfo = {
    description:
      "A brief description of the house, how it is, how many floors, approximate size. With a maximum of 3 lines.",
    server: "diabolos",
    location: "The Lavender Beds",
    size: "medium",
    "Type-Of-Sale": "Free Company",
    "Plot-Number": "25",
  };

  return (
    <div className="px-4 py-4 md:rounded-md pb-6 md:bg-purpleCust-card md:w-10/12 md:m-auto md:px-6">
      <div className="mb-7 md:mb-4">
        <span className="text-sm text-purpleCust-text font-herbo hidden md:flex justify-end">
          <IoMdHeart className="text-3xl text-purpleCust-text inline cursor-pointer" />
        </span>
        <div className="flex justify-between">
          <h2 className="text-xl md:text-2xl">House Details</h2>
          <span className="text-xl text-purpleCust-text font-herbo md:hidden">
            Add Favorite
            <IoMdHeart className="text-3xl text-red-600 inline" />
          </span>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-3/6">
          <div className="w-full">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showNav={false}
              thumbnailPosition="bottom"
            />
          </div>
        </div>
        <div className="md:pl-10 md:w-3/6">
          <div className="flex justify-between mb-7 mt-3 sm:mt-0">
            <h3 className="text-xl md:text-2xl self-center">House title</h3>
            <Button
              type="button"
              width="w-28 md:w-32"
              title={`${convertStringToCurrency("16000")} Gil`}
              classnames="bg-purpleCust-light"
              rounded="rounded"
            />
          </div>
          <div>
            <div className="text-left pb-6 pt-2 flex">
              <div className="w-20 mr-5">
                <Image src="/images/user.png" width="100%" height="100%" />
              </div>
              <div className="w-full">
                <h3 className="text-white text-xl bold">ByRedHunter</h3>
                <div className="mt-2 text-white text-xl bold">
                  <Rating rating={4.5} />
                </div>
              </div>
            </div>
            <div>
              <div className="md:grid md:grid-cols-2">
                {Object.entries(detailsInfo).map((detail) => (
                  <div key={detail[0]}>
                    <h4 className="text-xl self-center mb-2 mt-3 capitalize">
                      {detail[0].replace(/-/g, " ")}
                    </h4>
                    <p
                      className={`font-herbo text-base ${
                        detail[0] !== "description" ? "capitalize" : ""
                      }`}
                    >
                      {detail[1]}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xl self-center mb-2 mt-3">Contact</h4>
                <p className="font-herbo text-base">
                  <span className="block">Jhonny Quispe Navarro</span>
                  <span>nameemail@gmail.com</span>
                </p>
              </div>
              <div className="mt-3 flex items-center ">
                <Image
                  src="/images/discord-contact.svg"
                  width={30}
                  height={30}
                />
                <span className="ml-2">Jhonny#4455</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

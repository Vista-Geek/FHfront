// import DiscordBanner from "@components/Banner.tsx/DiscordBanner";
import React from "react";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import ImageGallery from "react-image-gallery";
import { IoMdHeart } from "react-icons/io";

const Details = () => {
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
  return (
    <>
      <GlobalNavbar />
      <div className="pt-24 px-4">
        <div className="flex justify-between mb-7">
          <h2 className="text-xl">House Details</h2>
          <span className="text-xl text-purpleCust-text">
            Add Favorite <IoMdHeart className="text-3xl text-red-600 inline" />
          </span>
        </div>
        <div className="w-full">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            thumbnailPosition="bottom"
          />
        </div>
      </div>
      {/* <DiscordBanner /> */}
    </>
  );
};

export default Details;

import Rating from '@components/Rating/ProfileStar';
//import Image from 'next/image';
import React from 'react';
import { IoMdHome, IoLogoUsd, IoMdCamera } from 'react-icons/io/';
const CardProfile = () => {
  return (
    <div className="rounded-lg  overflow-hidden shadow-xl w-full sm:max-w-xs my-3 bg-purpleCust-card font-display">
      <div className="relative">
        <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
        <label htmlFor="banner_file" className="cursor-pointer">
          <div className="absolute  rounded-sm p-1 text-sm left-2 bg-purpleCust-dark w-32 flex justify-center items-center top-5">
            <IoMdCamera />
            <span className="ml-2">Complete later</span>
          </div>
        </label>
        <input type="file" id="banner_file" className="hidden" />
      </div>
      <div className="flex justify-center -mt-">
        <label htmlFor="profile_file" className="cursor-pointer">
          <div className="border-purpleCust rounded-full w-20 border-3 overflow-hidden relative">
            <img src="/images/user.png" className="w-full" />
            <div className="absolute bg-black bottom-0 w-full flex justify-center">
              <IoMdCamera />
            </div>
          </div>
        </label>
        <input type="file" id="profile_file" className="hidden" />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-white text-xl bold">ByRedHunter</h3>
        <div className="mt-2 text-white text-xl bold flex justify-center items-center">
          <Rating rating={4.5} />
        </div>
      </div>
      <div className="flex pb-3 text-white px-8 text-sm mb-4">
        <div className="flex-1 text-center mr-3 pr-3 flex justify-start items-center">
          <IoMdHome size={40} className="mr-2 text-purpleCust" />
          <span>
            Houses <p>5</p>
          </span>
        </div>
        <div className="flex-1 flex justify-start items-center text-center">
          <IoLogoUsd size={40} className="mr-2 text-purpleCust" />
          <span>
            Sold Houses <p>5</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;

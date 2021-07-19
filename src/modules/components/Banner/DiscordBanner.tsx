import Button from "@components/Buttons/Button";
import Image from "next/image";

import React from "react";

const DiscordBanner = () => {
  return (
    <div className="w-full bg-blueCust relative">
      <div className="p-5 md:w-5/6 md:m-auto md:px-0 md:py-6 md:flex">
        <div className="md:w-4/6">
          <h3 className="text-4xl w-5/6 mb-4">Community in Discord</h3>
          <p className="text-lg text-black font-semibold font-herbo">
            Join the discord community and learn more about us. You will have a
            direct communication to buy your houses.
          </p>
          <div className="flex justify-between">
            <Button
              type="button"
              width="w-40"
              classnames="bg-purpleCust-dark self-center text-lg md:mt-4"
            >
              <a
                rel="nofollow noopener noreferrer"
                href="https://www.discord.com"
              >
                Join Discord
              </a>
            </Button>
            <div className="md:hidden">
              <Image
                src="/images/discord-banner.svg"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-2/6 justify-end">
          <Image src="/images/discord-banner.svg" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default DiscordBanner;

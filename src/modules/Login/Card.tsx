import React from "react";
import Logo from "@components/Logo";
import Head from "next/head";
import Button from "@components/Buttons/Button";
import Image from "next/image";
import Form from "@components/Form/Form";
import { AuthData } from "../../data/auth.form";

interface CardProps {
  label: string;
  authMode: "Sign up" | "Log In";
}

const Card: React.FC<CardProps> = ({ label, authMode }) => {
  return (
    <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-4 sm:w-96">
      <Head>
        <title>FantasyHouse | Log In</title>
      </Head>
      <Logo position="justify-center" text="text-3xl" width={50} height={50} />
      <p className="mt-4">
        <span className="text-xl">Log In</span>
      </p>
      <Form
        InfoForm={AuthData}
        titleHidden
        descHidden
        handleSubmit={(values) => console.log(values)}
      >
        <div className="mt-8 ">
          <Button type="submit" width="w-6/12" classnames="bg-purpleCust">
            <span>{label}</span>
          </Button>
        </div>
        <div className="mt-14 mb-5">
          <Button
            type="button"
            width="w-8/12"
            classnames="bg-blueCust flex justify-center items-center m-auto h-13"
          >
            <Image
              src="/images/discord.svg"
              alt="discord logo"
              width={40}
              height={38}
              className="cursor-pointer bg-blueCust"
            />
            <span>{authMode} with Discord</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Card;

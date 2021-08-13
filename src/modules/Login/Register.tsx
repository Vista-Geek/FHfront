import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import Navbar from "@components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import Button from "@components/Buttons/Button";
import Form from "@components/Form/Form";
import Logo from "@components/Logo";
import Head from "next/head";
import { AuthDataRegister } from "@data/auth.form";
import Main from "@components/Main";

const Register = () => {
  return (
    <>
      <Head>
        <title>FantasyHouse | Register</title>
      </Head>
      <Navbar>
        <ButtonNavbar title="Register" href="/login" />
      </Navbar>
      <Main>
        <div className="my-12">
          <div className="lg:flex">
            <div className="lg:mx-11 sm:flex sm:justify-center">
              <div className="bg-purpleCust-dark w-full min-h-380 mt-5 rounded-card text-center py-4 ">
                <Logo
                  position="justify-center"
                  text="text-3xl"
                  width={50}
                  height={50}
                />
                <p className="mt-4">
                  <span className="text-xl">Register</span>
                </p>
                <Form
                  InfoForm={AuthDataRegister}
                  titleHidden
                  descHidden
                  handleSubmit={(values) => console.log(values)}
                  registerC
                >
                  <div className="mt-8 ">
                    <Button
                      type="submit"
                      width="w-6/12"
                      classnames="bg-purpleCust"
                    >
                      <span>Sign Up</span>
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
                      <span>Register with Discord</span>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Register;

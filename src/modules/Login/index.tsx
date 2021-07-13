import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import Navbar from "@components/Navbar/Navbar";
import React from "react";
import AuthContent from "./AuthContent";
import Card from "./Card";

const index = () => {
  return (
    <>
      <Navbar>
        <ButtonNavbar title="Sign Up" href="/register" />
      </Navbar>
      <AuthContent>
        <Card label="Log In" authMode="Log In" />
      </AuthContent>
    </>
  );
};

export default index;

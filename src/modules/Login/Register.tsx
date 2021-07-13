import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import Navbar from "@components/Navbar/Navbar";
import React from "react";
import Card from "./Card";
import AuthContent from "./AuthContent";

const Register = () => {
  return (
    <>
      <Navbar>
        <ButtonNavbar title="Log In" href="/login" />
      </Navbar>
      <AuthContent order>
        <Card label="Register" authMode="Sign up" />
      </AuthContent>
    </>
  );
};

export default Register;

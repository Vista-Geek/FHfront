import React, { useEffect } from "react";
import ButtonNavbar from "@components/Buttons/ButtonNavbar";
import Navbar from "@components/Navbar/Navbar";
import AuthContent from "./AuthContent";
import Card from "./Card";
import { useAuth } from "@global-stores/useAuth";
import { useRouter } from "next/router";

const Login = () => {
  const { auth } = useAuth((state) => state);
  const router = useRouter();
  useEffect(() => {
    if (auth) {
      router.replace("/");
    }
  }, [auth, router]);
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

export default Login;

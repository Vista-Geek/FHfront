import ButtonNavbar from '@components/Buttons/ButtonNavbar';
import Main from '@components/Main';
import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import Card from './Card';

const Register = () => {
  const renderButRegister = () => <ButtonNavbar title="Log In" href="/login" />;
  return (
    <>
      <Navbar RenderChildren={renderButRegister} />
      <Main>
        <Card label="Register" authMode="Sign up" />
      </Main>
    </>
  );
};

export default Register;

import ButtonNavbar from '@components/Buttons/ButtonNavbar';
import Main from '@components/Main';
import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import Card from './Card';

const index = () => {
  const renderButRegister = () => <ButtonNavbar title="Sign Up" href="/register" />;
  return (
    <>
    <Navbar RenderChildren={renderButRegister} />
    <Main>
      <Card label="Log In" authMode="Log In" />
    </Main>
    </>
  );
};

export default index;

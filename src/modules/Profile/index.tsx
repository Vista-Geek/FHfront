import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import CardProfile from './CardProfile';

const index = () => {
  return (
    <>
      <Navbar RenderChildren={() => <h1>Hi!</h1>} />
      <div className="pt-20 h-full px-4">
        <div className="flex justify-center w-full">
          <CardProfile />
        </div>
      </div>
    </>
  );
};

export default index;

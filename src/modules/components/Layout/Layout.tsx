import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Button from '@components/Buttons/Button';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar
        RenderChildren={() => (
          <Button
            type="button"
            width="w-full"
            classnames="bg-purpleCust-light w-24 font-herbo"
            title="Sign up"
          />
        )}
      />
      {children}
    </>
  );
};

export default Layout;

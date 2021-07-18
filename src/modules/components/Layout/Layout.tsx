import React from "react";
import GlobalNavbar from "@components/Navbar/GlobalNavbar";
import Footer from "@components/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

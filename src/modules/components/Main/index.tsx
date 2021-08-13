import React from "react";

const Main: React.FC<{ login?: boolean }> = ({ children, login }) => {
  return (
    <main
      className={`min-h-screen px-2 flex flex-col justify-center items-center text-white bg-hero bg-no-repeat bg-cover ${
        login && "h-screen"
      }`}
    >
      {children}
    </main>
  );
};

export default Main;

import React from "react";

const Main: React.FC = ({ children }) => {
  return (
    <main className="min-h-screen px-2 flex flex-col justify-center items-center h-screen text-white bg-hero bg-no-repeat bg-cover">
      {children}
    </main>
  );
};

export default Main;

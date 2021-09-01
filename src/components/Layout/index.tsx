import React from "react";
import { tw } from "twind";
import Logo from "assets/logo.jpg";

const Layout: React.FC = ({ children }) => {
  return (
    <div
      data-testid="Layout"
      className={tw`max-w-screen-lg mx-auto px-4 pb-[148px] sm:pb-[108px] pt-4 min-h-screen flex flex-col`}
    >
      <div className={tw`flex justify-center mb-6`}>
        <img src={Logo} alt="logo" />
      </div>
      {children}
    </div>
  );
};

export default Layout;

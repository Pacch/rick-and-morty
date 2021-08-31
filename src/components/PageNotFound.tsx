import React from "react";
import PageNotFoundImage from "assets/page_not_found.jpg";
import { tw } from "twind";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { routes } from "routes/routing";

const PageNotFound: React.FC = () => {
  return (
    <div
      className={tw`h-screen w-screen flex flex-col items-center justify-center space-y-4 px-2`}
    >
      <p className={tw`font-black text-9xl`}>404</p>
      <img src={PageNotFoundImage} alt="page_not_found_image" />
      <Link to={routes.home.base}>
        <Button>Back to home</Button>
      </Link>
      <p className={tw`font-black text-5xl text-center`}>Page not found</p>
    </div>
  );
};

export default PageNotFound;

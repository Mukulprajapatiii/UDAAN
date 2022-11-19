import React from "react";
import { SphereSpinner } from "react-spinners-kit";
import Logo from "../assets/udaan white.png";
import Image from "next/dist/client/image";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 md:space-y-10">
      <div className="w-1/2 animate-bounce">
        <Image src={Logo} />
      </div>
      <SphereSpinner size={40} color="#686769" loading={true} />
    </div>
  );
};
export default Loader;

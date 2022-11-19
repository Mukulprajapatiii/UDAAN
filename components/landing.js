import React from "react";
import bg from "../assets/svg/bg.svg";
import Image from "next/image";
import Navbar from "../components/Navbar";
const Landing = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-9xl font-bold">UDAAN</h1>
            <p className="mb-5">Worried about your Extra Luggage?</p>
            <button className="btn btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import Logo from "../assets/udaan white.png";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ loginId }) => {
  return (
    <div className='hero'>
      <div className="hero-cont">
        <div className='cont-1'>
          <h1>Your luggage is<br/> in Safe hands</h1>
        </div>

        <div className='cont-2'>
          <p>There are many variation of passages of Lorem Ipsum<br/> available, but the majority have suffered.</p>
        </div>

        <li><a href="#Register"><button className='start-btn'> Get Started {'>'}  </button></a></li>
        
        </div>
      </div>
  );
};

export default Hero;

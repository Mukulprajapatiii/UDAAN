import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mintNFT } from "../utils/interactNFT";

const SendNFT = () => {
  const [otp, setOTP] = useState();

  return (
    <div>
      <Navbar />
      <div className="divider" />
      <div className="mt-5 items-start flex flex-col md:flex-row justify-center w-full md:justify-start">
        <div className="flex flex-col items-center flex-1 space-y-5">
          <h1 className="font-bold text-5xl">NFT Requests</h1>
          <div className="m-5 p-5 card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">OTP Request</h2>
              <p>Please Enter the OTP: </p>
              <input
                type="number"
                className="input input-primary"
                placeholder="Enter Otp"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Submit OTP</button>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    mintNFT(
                      "0xc1d8d3dd4A1dCB37bc560B6645878516ad381a80",
                      "10000"
                    )
                  }
                >
                  MInt and Send NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendNFT;

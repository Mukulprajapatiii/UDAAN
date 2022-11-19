import React, { useState, useEffect } from "react";
import {
  createContract,
  getCurrentWalletConnected,
} from "../utils/interact.js";

const SellerDetails = () => {
  const [walletAddress, setWallet] = useState("");
  const myFunction = async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
  };

  useEffect(() => {
    myFunction();
  });
  const [weight, setWeight] = useState();
  const [val, setVal] = useState();

  const onUpdatePressed = async () => {
    //TODO: implement
    const { status } = await createContract(walletAddress, weight, val);
    alert(status);
    alert("NFT Request is Sent");
  };

  return (
    <div className="stats shadow stats-vertical m-5">
      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title">Contact Number :</div>
        <div className="stat-value">7550148119</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title">Luggage (g)</div>
        <div className="stat-value">
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            className="input input-primary"
          />
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title">Luggage Value (gwei)</div>
        <div className="stat-value">
          <input
            type="number"
            onChange={(e) => setVal(e.target.value)}
            value={val}
            className="input input-primary"
          />
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="btn btn-accent" onClick={onUpdatePressed}>
          Create Request
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;

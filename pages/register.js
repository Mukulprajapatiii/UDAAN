import React from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

const register = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
};

export default register;

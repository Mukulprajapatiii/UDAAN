import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import {
  partiesContract,
  connectWallet,
  getCurrentWalletConnected,
} from "../utils/interact.js";
import About from "../components/About";
import UserReg from "../components/UserReg";


export default function Home() {
  const router = useRouter();
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
    DepAir: "",
    DesAir: "",
    Number: "",
    DateTime: "",
  });

  const onSubmit = () => {
    if (
      !state.Fname ||
      !state.Lname ||
      !state.DepAir ||
      !state.DesAir ||
      !state.Number ||
      !state.DateTime
    ) {
      toast.error("Please fill all the fields");
    } else {
      router.push(
        `/results?name=${state.Fname + " " + state.Lname}&DepAir=${
          state.DepAir
        }&DesAir=${state.DesAir}&Number=${state.Number}&DateTime=${
          state.DateTime
        }`
      );
    }
  };
  return (
    <div>

      <Head>
        <title>UDAAN</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About/>
        <Details state={state} setState={setState} onSubmit={onSubmit} />
      </main>
      
      <Footer />
    </div>
  );
}

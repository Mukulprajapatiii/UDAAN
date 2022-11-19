import Image from "next/image";
import React from "react";
import Logo from "../assets/udaan white.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

const Navbar = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [userData, setUserData] = useState("");

  const [alreadyUser, setAlreadyUser] = useState(0);
  const router = useRouter();
  const myFunction = async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    addWalletListener();
  };

  useEffect(() => {
    myFunction();
  });

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus("Install Metamask");
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    alert(walletResponse.status);
    setWallet(walletResponse.address);
    try {
      const snapShot = await getDoc(doc(db, "users", walletAddress));
      console.log(snapShot);
      setAlreadyUser(1);
    } catch (err) {
      setAlreadyUser(0);
    }
  };

  return (
    <div>
      <div className="navbar bg-gray-100 mt-1 px-1 w-full bg-opacity-0">

        <div className="navbar-start ">
          <div className="w-2/5 btn btn-ghost">
            <Image src={Logo} onClick={() => router.push("/")} />
          </div>
        </div>

        <div>
         <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About </a>
          </li>
          
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
         </ul>
            
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end space-x-5">

          {walletAddress || !alreadyUser ? (
            <a
              className="btn btn-primary bg-white border-white"
              onClick={() => router.push("/register")}
            >
              Register User
            </a>
          ) : (
            <></>
          )}
          
          {!walletAddress ? (
            <a className="btn btn-primary bg-white border-white" onClick={connectWalletPressed}>
              Connect Wallet
            </a>
          ) : (
            <></>
          )}

          <div className="flex flex-row items-center space-x-5 bg-white rounded-full bg-accent p-1 text-black rounded-full dropdown dropdown-end">
            {walletAddress.length > 0 ? (
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span className="wallet-btn">Wallet not Connected</span>
            )}
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

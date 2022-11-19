import React, { useState, useEffect } from "react";
import { Image } from "next/image";
import toast from "react-hot-toast";
import {setDoc, db, doc} from "../utils/firebase"
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";
import { useRouter } from "next/router";

const Register = () => {
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
    number: "",
    email: "",
  });

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const myFunction = async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
  };

  useEffect(() => {
    myFunction();
  });

  const onRegister = () => {
    if (!state.Fname || !state.Lname || !state.number || !state.email) {
      toast.error("Please fill all the fields");
    } else {
      setDoc(
        doc(db, "users", walletAddress),
        {
          Fname: state.Fname,
          Lname: state.Lname,
          number: state.number,
          email: state.email,
        },
        { merge: true }
      );
      toast.success("Registered Successfully");
      router.push("/");
    }
  };

return (
  <div className='user-reg'>
      <div className='user-reg-box'>
        <div className='user-reg-head'>
          <h1> Register Now !! </h1>
        </div>
        <div className='user-reg-inputs'>
          <div>
            <input 
              className='user-reg-inp' 
              type='text' 
              value={state.Fname}
              onChange={(e) =>setState({ ...state, Fname: e.target.value })}
              placeholder='First Name'/>

            <input 
              className='user-reg-inp' 
              type='text' 
              value={state.Lname}
              onChange={(e) =>setState({ ...state, Lname: e.target.value })}
              placeholder='Last Name'/>
          </div>

          <div>
            <input 
            className='user-reg-inp' 
            type='email' 
            value={state.email}
            onChange={(e) =>setState({ ...state, email: e.target.value })}
            placeholder='Email'/>

            <input 
            className='user-reg-inp' 
            type='number' 
            value={state.number}
            onChange={(e) =>setState({ ...state, number: e.target.value })}
            placeholder='Phone Number'/>
          </div>
          
          <div>
            <button 
              disabled={!walletAddress}
              onClick={onRegister} 
              className='user-reg-btn'>Register
            </button>

          </div>
          <p>By Clicking "Register", I agree to Udaan's Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

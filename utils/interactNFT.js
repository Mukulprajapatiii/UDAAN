const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY_NFT;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

import { pinJSONToIPFS } from "./pinata.js";

const contractABI = require("./NFTABI.json");
const contractAddress = "0xB54b65E8EEe97AF22B163f1C0406ACAE3B152A3e";

export const NFTContract = new web3.eth.Contract(contractABI, contractAddress);

export const mintNFT = async (name, value) => {
  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image =
    "https://gateway.pinata.cloud/ipfs/QmT55Fz58Y7hBx7K4LXi5CL1AUDvCTyhDcvaNQPwZZYruK";
  metadata.description = "Your baggage's NFT";

  //make pinata call
  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: value,
    data: window.contract.methods
      .mintToken(window.ethereum.selectedAddress, tokenURI, 10000)
      .encodeABI(), //make call to NFT smart contract
  };

  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

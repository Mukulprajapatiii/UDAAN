const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY_SMART_CONTRACT;

console.log(alchemyKey);

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3("https://eth-goerli.alchemyapi.io/v2/dZAgzTegVMnp7zS63JKewmYU3oFIahYN");

const contractABI = require ("./ContractABI.json");
const contractAddress = "0x18E462BC43AE26b65B5befbe9c19491Fd10daa45";

export const partiesContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👍 Wallet Connected",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        status: "😥 " + err.message,
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: "Please install Metamask",
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          status: "👍 Wallet Connected.",
          address: addressArray[0],
        };
      } else {
        return {
          status: "Please connect to Metamask 🦊.",
          address: "",
        };
      }
    } catch (err) {
      return {
        status: "😥 " + err.message,
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: " 😔 Please install Metamask ",
    };
  }
};

export const createContract = async (address, weight, value) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status: "💡 Connect your Metamask wallet.",
    };
  }

  if (weight.trim() === "") {
    return {
      status: "❌ Your weight cannot be an empty string.",
    };
  }
  const amt = parseInt(weight) * 540000000000;
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    value: amt.toString(),
    data: partiesContract.methods.addParty(address, weight, value).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: `Success,${txHash}`,
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

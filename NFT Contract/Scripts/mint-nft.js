require("dotenv").config();
const { API_URL, CONTRACT_ADDRESS, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/ZadToken.sol/ZadToken.json");
//console.log(JSON.stringify(contract.abi));

const contractAddress = CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(walletAddress, val) {
  const nonce = await web3.eth.getTransactionCount(walletAddress, "latest"); //get latest nonce
  const tokenURI =
    "https://gateway.pinata.cloud/ipfs/QmRvnawdnmp15gmAET3TZocWMpaU9eiqnTDM4TpFWwFez1";
  //the transaction
  const tx = {
    from: walletAddress,
    to: contractAddress,
    gas: 1000000,
    maxPriorityFeePerGas: 10999999997,
    value: 10,
    data: nftContract.methods
      .mintToken(walletAddress, tokenURI, val)
      .encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const transactionReceipt = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}

mintNFT(
  "0xc1d8d3dd4A1dCB37bc560B6645878516ad381a80",
  "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP",
  10
);

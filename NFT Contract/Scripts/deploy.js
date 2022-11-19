async function main() {
    // Grab the contract factory
    const ZadToken = await ethers.getContractFactory("ZadToken");
 
    // Start deployment, returning a promise that resolves to a contract object
    const ZAD = await ZadToken.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", ZAD.address);
 }
 


 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
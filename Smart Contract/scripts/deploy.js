async function main() {
    const Parties = await ethers.getContractFactory("Parties");
 
    // Start deployment, returning a promise that resolves to a contract object
    const parties = await Parties.deploy();
    console.log("Contract deployed to address:", parties.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
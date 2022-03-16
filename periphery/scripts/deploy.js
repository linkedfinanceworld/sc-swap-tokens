// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  factory = "0xB9092C56008edc66353f122DC10f05c8Fc3D7748";
  weth = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"; //Testnet
  //weth = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  const Greeter = await hre.ethers.getContractFactory("LFWSwapRouter");
  const greeter = await Greeter.deploy(factory, weth);

  await greeter.deployed();

  console.log("SC deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

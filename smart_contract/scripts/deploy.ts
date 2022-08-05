import { ethers } from "hardhat";

const main = async () => {
  const Transactions = await ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log('Transactions deployed to: ', transactions.address);

  const MyNFT = await ethers.getContractFactory('MyNFT');
  const nft = await MyNFT.deploy();
  await nft.deployed();
  console.log('MyNFT deployed to: ', transactions.address);
};

const startMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

startMain();

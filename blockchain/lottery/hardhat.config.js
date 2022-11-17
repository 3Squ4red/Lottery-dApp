require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: INFURA_API,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   etherscan: {
//     apiKey: "7BUNMI7GHENJDAYNGHRAEYKCU5GC9B12BI",
//   },
//   solidity: "0.8.16",
// };

// hardhat.config.js
const { mnemonic, mainnetMnemonic, bscscanApiKey } = require("./secrets.json");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: { mnemonic: mnemonic },
    },
    mainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: { mnemonic: mainnetMnemonic },
    },
  },

  etherscan: {
    apiKey: bscscanApiKey,
  },
  solidity: "0.8.16",
};

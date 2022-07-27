/* import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
 */

import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers'; // types
import { HardhatUserConfig } from 'hardhat/config';
const config: HardhatUserConfig = {
  solidity: '0.8.0',
};
export default config;

import { Contract, ContractFactory } from "@ethersproject/contracts";
import { MaxUint256 } from "@ethersproject/constants";
import "@nomiclabs/hardhat-ethers";
import { config as dotenvConfig } from "dotenv";
import { ethers } from "hardhat";
import { resolve } from "path";

import FarmAbi from "../artifacts/contracts/UnipilotFarm.sol/UnipilotFarm.json";

dotenvConfig({ path: resolve(__dirname, "../.env") });
// We require the Hardhat Runtime Environment explicitly here. This is optional but useful for running the
// script in a standalone fashion through `node <script>`. When running the script with `hardhat run <script>`,
// you'll find the Hardhat Runtime Environment's members available in the global scope.

import Web3 from "web3";
import { AbiItem } from "web3-utils";

import ERC20Artifact from "@openzeppelin/contracts/build/contracts/ERC20.json";
import UnipilotFarmArtifact from "../artifacts/contracts/UnipilotFarm.sol/UnipilotFarm.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Bytes, formatUnits, parseUnits, AbiCoder } from "ethers/lib/utils";
import { BigNumberish } from "ethers";
import { parentPort } from "worker_threads";
import { stat } from "fs";
import { Wallet } from "ethers";
// import { ContractFactory } from "@ethersproject/contracts";

let privateKey: any = process.env.PRIVATE_KEY;

// let wallet: SignerWithAddress;
let wallet: Wallet;
let unipilotContractInstance: Contract;
let uniStrategyContractInstance: Contract;
let v3OracleContractInstance: Contract;
let liquidityManagerInstance: Contract;
let liquidityMigratorInstance: Contract;
let ulmStateInstance: Contract;
let unipilotFarmInstance: Contract;
async function updateStateVariables(): Promise<void> {
  let PRIVATE_KEY: any = process.env.PRIVATE_KEY;
  // const [_wallet] = await ethers.getSigners();
  let provider = ethers.getDefaultProvider(
    `https://rinkeby.infura.io/v3/${process.env.MAINNET_INFURA_KEY}`,
  );
  const _wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  wallet = _wallet;
}

async function deployUnipilotFarm(): Promise<void> {
  // const [wallet0, wallet1, wallet2] = await ethers.getSigners();

  // let privateKey: any = process.env.PRIVATE_KEY;
  // let provider = ethers.getDefaultProvider(
  //   `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
  // );
  // let account = new ethers.Wallet(privateKey, provider);

  // wallet = account;

  // const unipilotFarm: ContractFactory = await ethers.getContractFactory("UnipilotFarm");
  const unipilotFarm: ContractFactory = await ethers.getContractFactory(
    UnipilotFarmArtifact.abi,
    UnipilotFarmArtifact.bytecode,
    wallet,
  );

  // "0x7b47951986ebb66e5eb9d72b0f389f4ebb458e1a",
  // "0x0d2df9efa55b8b619282b32d4cc6192f38f50fff",
  // "0xc2efad3800d58c379a5131627f3864f42c82af2e",
  // "0x8343fbf24ddb51583f5c260761ab8662221de6cc",
  // "0x6cc805c617232ccb21166ff4c2b3f7431d3ff0d5",  RINKEBY Pools
  // "0x49ae3ef59dd699f843985ea7859ff2f5eb16d5ee",
  // "0xdc314ce190004918d561132be90df5bf1c6da1ac",
  // "0xcf5cdf1fb69672a86971c1f4b1d30c9e72119903",
  // "0x3204fa973fef6b110249df6fd5f6d6f436005d88",
  // "0xba5f5c6ef6859416045be0a3a474b530d3bd8d01",

  const UnipilotFarm: Contract = await unipilotFarm.deploy(
    [
      "0xe17e41e219b2db34eb581d73cce6c748dc158a40",
      "0x5a8b01dcfbe09061fc11c6a416fc04e6e99f7c06",
      "0x9b998f32b638eeed55ed77b78873c621b6c4813f",
      "0x47c12f96e74f3c68ee8de3b8c1ff8492865689da",
      "0xc6c6b2fdeb3bfc78339e36efc645c3475c6a2241",
      "0x793105d58c43d15452a2bd75df01157c5f469138",
      "0x8e27ed377df48337f81e053e6f593f60c545cb94",
      "0xaa33f9a45bda875572d755737962a5a37ab4d050",
      "0x519187400f1ae7a5ff5914c7898e5fb3dcb05047",
      "0xf6415c04acf482d5fe0043734a1215490a86cff4",
    ],
    [
      "500000000000000000",
      "100000000000000000",
      "400000000000000000",
      "200000000000000000",
      "500000000000000000",
      "300000000000000000",
      "900000000000000000",
      "100000000000000000",
      "500000000000000000",
      "500000000000000000",
    ],
    "0xA052BC0c841F822EF60AEdD02E9784E7A97f979c", // ULM
    "0xe7Ef8E1402055EB4E89a57d1109EfF3bAA334F5F", //Gov
  );
  await UnipilotFarm.deployed();

  console.log("Wallet Address -> ", wallet.address);
  console.log("UnipilotFarm deployed to -> ", UnipilotFarm.address);
}
//"["0x2d1491964d47aeebd14d9e9a4bb1b320d8716904"]"
async function main(): Promise<void> {
  await updateStateVariables();
  await deployUnipilotFarm();
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

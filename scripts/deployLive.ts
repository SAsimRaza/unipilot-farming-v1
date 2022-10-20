import { ContractFactory } from "@ethersproject/contracts";

import { config as dotenvConfig } from "dotenv";
import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";

import { resolve } from "path";

import UnipilotFarmAbi from "../artifacts/contracts/UnipilotFarm.sol/UnipilotFarm.json";

import { Wallet } from "ethers";

let args: any = require("../args.js");

dotenvConfig({ path: resolve(__dirname, "../.env") });

let wallet: Wallet;

async function updateStateVariables(): Promise<void> {
  const { chainId, name } = await ethers.provider.getNetwork();

  console.log(`Connected to name: ${name} & chainId: ${chainId}`);

  let privateKey: any = process.env.MAINNET_PVT_KEY;

  let provider = ethers.getDefaultProvider(
    `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_KEY}`,
  );

  const _wallet = new ethers.Wallet(privateKey, provider);
  wallet = _wallet;
}

async function deployUnipilotFarm(): Promise<void> {
  let UnipilotFarm = new ContractFactory(
    UnipilotFarmAbi.abi,
    UnipilotFarmAbi.bytecode,
    wallet,
  );

  let unipilotFarm = await UnipilotFarm.deploy(args, [wallet.address]);

  console.log(`UNIPILOT FARMING :) -----===> Deployed Contract: ${unipilotFarm.address}`);
}

async function main(): Promise<void> {
  await updateStateVariables();
  await deployUnipilotFarm();
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

// let poolList: string[] = [
//   "0xe17e41e219b2db34eb581d73cce6c748dc158a40",
//   "0x5a8b01dcfbe09061fc11c6a416fc04e6e99f7c06",
//   "0x9b998f32b638eeed55ed77b78873c621b6c4813f",
//   "0x47c12f96e74f3c68ee8de3b8c1ff8492865689da",
//   "0xc6c6b2fdeb3bfc78339e36efc645c3475c6a2241",
//   "0x793105d58c43d15452a2bd75df01157c5f469138",
//   "0x8e27ed377df48337f81e053e6f593f60c545cb94",
//   "0xaa33f9a45bda875572d755737962a5a37ab4d050",
//   "0x519187400f1ae7a5ff5914c7898e5fb3dcb05047",
//   "0xf6415c04acf482d5fe0043734a1215490a86cff4",
// ];

// let ULM: string = "0x9803808f798e81a81e9d0e012677a69e00b9cdb1";
// let Unipilot: string = "0x65e2A3a019b70bce0b1b1BdD1700dB8c92D2F948";

// poolList,
// ULM, // ULM
// Unipilot, // Unipilot,

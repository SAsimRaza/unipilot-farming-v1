import { deployContract } from "./utils";
import { constants, Wallet } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ethers, network } from "hardhat";
import { task } from "hardhat/config";
import predictAddress from "../scripts/predictAddress.js";
import { Bytes, formatUnits, parseUnits, AbiCoder } from "ethers/lib/utils";

import { TASK_ACCOUNTS } from "./task-names";

task("deploy-UnipilotFarm", "Deploy UnipilotFarm Contract").setAction(
  async (cliArgs, { ethers, run, network }) => {
    await run("compile");

    const signer = (await ethers.getSigners())[0];
    console.log("Signer");

    console.log("  at", signer.address);
    console.log("  ETH", formatEther(await signer.getBalance()));

    //do change the below values on main net deploy
    // maxTwapDeviation: 1200,
    // twapDuration: 60, // 3600
    // rangeMultiplier: 5, // 60
    // baseMultiplier: 4, // 60

    const args = [
      "0xA7979d0592ecfC59b082552828FF36209ec94B11", //ULM,
      "0xafa13aa8f1b1d89454369c28b0ce1811961a7907", //Governance
      "0x6E665791f0219a10A4D52AC0915931Cf045220B8", //UniilotFarmV1
    ];

    console.log("Network");
    console.log("   ", network.name);
    console.log("Task Args");
    console.log(args);

    const unipilotFarm = await deployContract(
      "UnipilotFarm",
      await ethers.getContractFactory("UnipilotFarm"),
      signer,
      [
        args[0], //Ulm
        args[1], //Gov
        args[2], //farm
      ],
    );

    await unipilotFarm.deployTransaction.wait(5);
    delay(60000);

    console.log("Verifying Smart Contract ...");

    await run("verify:verify", {
      address: unipilotFarm.address,
      constructorArguments: [
        args[0], //Ulm
        args[1], //Gov
        args[2], //farm
      ],
    });
  },
);

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//<MAINNET>
/*  const args = [
      [
        "0xfc9f572124d8f469960b94537b493f2676776c03",   //  PILOT/ETH
        "0xe8c6c9227491c0a8156a0106a0204d881bb7e531",   //  MKR-ETH
        "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",   //  UNI-ETH
        "0xcd83055557536eff25fd0eafbc56e74a1b4260b3",   //  PERP-ETH
        "0x290a6a7460b308ee3f19023d2d00de604bcf5b42",   //  MATIC-ETH
        "0x4c83a7f819a5c37d64b4c5a2f8238ea082fa1f4e",   //  ETH-CRV
        "0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8",   //  LINK-ETH
        "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed",   //  WBTC-ETH
        "0x60594a405d53811d3bc4766596efd80fd545a270",   //  DAI-ETH
        "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",   //  USDC-ETH
        "0x11b815efb8f581194ae79006d24e0d814b7697f6",   //  ETH-USDT
        "0x7379e81228514a1d2a6cf7559203998e20598346",   //  ETH-sETH2
        "0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52",   //  FRAX-USDC
        "0x99ac8ca7087fa4a2a1fb6357269965a2014abc35",   //  WBTC-USDC
        "0x9febc984504356225405e26833608b17719c82ae",   //  1INCH-USDC
        "0x5764a6f2212d502bc5970f9f129ffcd61e5d7563",   //  SHIB-ETH
        "0x6c6bc977e13df9b0de53b251522280bb72383700",   //  DAI-USDC
        "0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf",   //  USDC-USDT
        "0x92560c178ce069cc014138ed3c2f5221ba71f58a",   //  ETH/ENS
      ],
      // [
      //   "1154425261000000",
      //   "685146699700000",
      //   "4106187413000000",
      //   "1086966468000000",
      //   "1223643849000000",
      //   "556681693500000",
      //   "2270135041000000",
      //   "18805165150000000",
      //   "3646294422000000",
      //   "10148148890000000",
      //   "2206782435000000",
      //   "6161627512000000",
      //   "5641314907000000",
      //   "4838848567000000",
      //   "3895012060000000",
      //   "3229809699000000",
      //   "8611288520000000",
      //   "6874525852000000",
      //   "591877585600000",
      // ],
      //ULM,  -> to be soon
      //0xAfA13aa8F1b1d89454369c28b0CE1811961A7907   //Governance
    ]; */

//Rinkeby
// const args = [
//   "0xd21251556da5a7227281f6e8479510ed106eb16b", //ULM,
//   "0xe7Ef8E1402055EB4E89a57d1109EfF3bAA334F5F", //Governance
//   "0x83224c83cF3C5FE15b5F32723406A921f000810d",
// ];

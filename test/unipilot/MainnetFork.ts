const { ethers, network } = require("hardhat");
import { Contract, ContractFactory } from "@ethersproject/contracts";

import erc from "../../artifacts/contracts/erc.sol/ERC.json";

describe("farming contract", function () {
  it("why", async function () {
    const [owner] = await ethers.getSigners();

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x4207837D4Cd914467EB76bf88c4d6e7Ba11ccDf9"],
    });

    const signer1 = await ethers.getSigner("0x4207837D4Cd914467EB76bf88c4d6e7Ba11ccDf9");

    const farm = await ethers.getContractFactory("UnipilotFarm");

    const erc = await ethers.getContractFactory("ERC");

    // const erc721: any = new ContractFactory(
    //   erc.abi,
    //   erc.bytecode,
    //   signer1 ,
    // );

    const erc721 = await erc.attach("0xde5bF92E3372AA59C73Ca7dFc6CEc599E1B2b08C");

    const contract = await farm
      .connect(signer1)
      .deploy(
        "0xa7979d0592ecfc59b082552828ff36209ec94b11",
        "0x4207837D4Cd914467EB76bf88c4d6e7Ba11ccDf9",
      );

    await contract.deployed();

    await contract.initializer(
      ["0xfc9f572124d8f469960b94537b493f2676776c03"],
      [1154425261000000],
    );

    await signer1.sendTransaction({
      to: "0xc36d07ecd1c562ce09dcb63b4d51ce2d5baf4563",
      value: ethers.utils.parseEther("100.421794232874171781"),
    });

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0xc36d07ecd1c562ce09dcb63b4d51ce2d5baf4563"],
    });

    const signer = await ethers.getSigner("0xc36d07ecd1c562ce09dcb63b4d51ce2d5baf4563");
    console.log(erc721);

    await erc721.connect(signer).approve(contract.address, 1);

    const tx = await contract.connect(signer).depositNFT(1);
    console.log(tx);
    // const tx0 = await contract.depositNFT(1);
    //   console.log(tx0);
  });
});

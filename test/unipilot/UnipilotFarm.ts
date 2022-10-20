// import hre from "hardhat";
// import { Artifact } from "hardhat/types";
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

// import { UnipilotFarm } from "../../types/UnipilotFarm";

// import { shouldBehaveLikeUnipilotFarm } from "./UnipilotFarmFunctions/UnipilotFarm.behavior";

// const { deployContract } = hre.waffle;

// describe("Unit tests", function () {
//   describe("Greeter", function () {
//     before(async function () {
//       // const greeting: string = "Hello, world!";
//       const pools: any = [
//         "0x7b47951986ebb66e5eb9d72b0f389f4ebb458e1a",
//         "0x0d2df9efa55b8b619282b32d4cc6192f38f50fff",
//         "0xc2efad3800d58c379a5131627f3864f42c82af2e",
//         "0x8343fbf24ddb51583f5c260761ab8662221de6cc",
//         "0x6cc805c617232ccb21166ff4c2b3f7431d3ff0d5",
//         "0x49ae3ef59dd699f843985ea7859ff2f5eb16d5ee",
//         "0xdc314ce190004918d561132be90df5bf1c6da1ac",
//         "0xcf5cdf1fb69672a86971c1f4b1d30c9e72119903",
//         "0x3204fa973fef6b110249df6fd5f6d6f436005d88",
//         "0xba5f5c6ef6859416045be0a3a474b530d3bd8d01",
//       ];
//       const unipilotFarmArtifact: Artifact = await hre.artifacts.readArtifact(
//         "UnipilotFarm",
//       );
//       this.unipilotFarm = <UnipilotFarm>(
//         await deployContract(this.signers.admin, unipilotFarmArtifact, [
//           pools,
//           "0x82be5ba01b6523860d6acf0b8bcb46cb35a53e6d",
//           "0x960063C7fa5d0BAaca7Aa83923cE191559d9bdAF",
//         ])
//       );
//     });

//     shouldBehaveLikeUnipilotFarm();
//   });
// });

// New
import { use } from "chai";
import { BigNumber, utils, Contract } from "ethers";
import {
  deployWETH9,
  deployStubErc20,
  deployUnipilot,
  deployMintProxy,
  deployMigrator,
  deployOracle,
  deployULM,
  deployIndexFund,
  deployUlmState,
  deployUniStrategy,
  deployUniswapContracts,
} from "./stubs";
import { solidity } from "ethereum-waffle";
import hre from "hardhat";

use(solidity);

describe("Initializing the testing suite", async () => {
  let pilotToken: Contract;
  let weth9: Contract;
  let uniswapV3Factory: any;
  let unipilot: Contract;
  let migrator: Contract;
  let ulm: Contract;
  let uniStrategy: Contract;
  let oracle: Contract;
  let indexFund: Contract;
  let ulmState: Contract;
  let mintProxy: Contract;

  before("Running Tests", async () => {
    const [wallet0, wallet1, wallet2, wallet3] = await hre.ethers.getSigners();
    pilotToken = await deployStubErc20(wallet0, "Pilot", "PILOT", 18);
    weth9 = await deployWETH9(wallet0);
    uniStrategy = await deployUniStrategy(wallet0);
    ulmState = await deployUlmState(wallet0);
    oracle = await deployOracle(wallet0, ulmState.address);
    uniswapV3Factory = await deployUniswapContracts(wallet0, weth9);

    indexFund = await deployIndexFund(wallet0);
    mintProxy = await deployMintProxy(wallet0, wallet0.address);
    unipilot = await deployUnipilot(wallet0, mintProxy.address);
    let args: string[] = [
      oracle.address,
      ulmState.address,
      indexFund.address,
      uniStrategy.address,
      unipilot.address,
    ];
    ulm = await deployULM(wallet0, args);
    migrator = await deployMigrator(wallet0);
  });

  describe("Running the pilot functions", async () => {
    it("Runs Pilot Functions", async function () {
      console.log("PILOT TOKEN", pilotToken.address);
      console.log("WETH9 TOKEN", weth9.address);
      console.log("UniStrategy", uniStrategy.address);
      console.log("ULM State", ulmState.address);
      console.log("Oracle", oracle.address);
      console.log("Index Fund", indexFund.address);
      console.log("Mint Proxy", mintProxy.address);
      console.log("Unipilot", unipilot.address);
      console.log("ULM", ulm.address);
      console.log("Migrator", migrator.address);
      console.log("Uniswap", uniswapV3Factory.address);

      // console.log("LIQUIDITY MANAGER", liquidityManager.address);
      // console.log("PILOT CONTRACT", pilotContract.address);
      // console.log("UNI STRATEGY", uniStrategy.address);
    });
  });
});

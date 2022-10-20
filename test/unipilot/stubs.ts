import UnipilotFarmArtifact from "../../artifacts/contracts/UnipilotFarm.sol/UnipilotFarm.json";
import UniPilotArtifact from "../../artifacts/contracts/test/contracts/Unipilot.sol/Unipilot.json";
import Erc20Artifact from "../../artifacts/contracts/test/ERC20.sol/ERC20.json";
import ULMArtifact from "../../artifacts/contracts/test/contracts/base/UniswapLiquidityManager.sol/UniswapLiquidityManager.json";
import UlmStateArtifact from "../../artifacts/contracts/test/contracts/base/ULMState.sol/ULMState.json";
import UniStrategyArtifact from "../../artifacts/contracts/test/contracts/UniStrategy.sol/UniStrategy.json";
import OracleArtifact from "../../artifacts/contracts/test/contracts/V3Oracle.sol/V3Oracle.json";
import LiquidityMigratorArtifact from "../../artifacts/contracts/test/contracts/LiquidityMigrator.sol/LiquidityMigrator.json";
import IndexFundArtifact from "../../artifacts/contracts/test/IndexFund.sol/IndexFund.json";
import MintProxyArtifact from "../../artifacts/contracts/test/contracts/UnipilotTokenProxy.sol/UnipilotTokenProxy.json";
import WETH9Artifact from "./utils/test/WETH9.json";
import { UniswapV3Deployer } from "./UniswapV3Deployer";

import { deployContract, solidity } from "ethereum-waffle";

import { expect, use } from "chai";
import { BigNumber, utils, Contract, ContractFactory } from "ethers";
import hre from "hardhat";

export async function deployStubErc20(
  deployer: any,
  name: string,
  symbol: string,
  decimal: any,
): Promise<Contract> {
  const erc20: Contract = await deployContract(deployer, Erc20Artifact, [
    name,
    symbol,
    decimal,
  ]);
  return erc20;
}

export async function deployWETH9(deployer: any): Promise<Contract> {
  let weth9: Contract = await deployContract(deployer, WETH9Artifact, [], {
    gasPrice: 90000000000,
  });
  return weth9;
}

export async function deployUniStrategy(deployer: any): Promise<Contract> {
  let uniStrategy: Contract = await deployContract(deployer, UniStrategyArtifact, [], {
    gasPrice: 90000000000,
  });
  return uniStrategy;
}

export async function deployUniswapContracts(
  deployer: any,
  WETH9: Contract,
): Promise<{ [name: string]: Contract }> {
  let uniswapV3 = UniswapV3Deployer.deploy(deployer, WETH9);
  return uniswapV3;
}

export async function deployUlmState(deployer: any): Promise<Contract> {
  let ulmState: Contract = await deployContract(deployer, UlmStateArtifact, [], {
    gasPrice: 90000000000,
  });
  return ulmState;
}

export async function deployOracle(deployer: any, ulmState: string): Promise<Contract> {
  let oracle: Contract = await deployContract(deployer, OracleArtifact, [ulmState], {
    gasPrice: 90000000000,
  });
  return oracle;
}

export async function deployMintProxy(
  deployer: any,
  timelock: string,
): Promise<Contract> {
  let mintProxy: Contract = await deployContract(deployer, MintProxyArtifact, [timelock]);
  return mintProxy;
}

export async function deployMigrator(deployer: any): Promise<Contract> {
  let liquidityMigrator = await deployContract(deployer, LiquidityMigratorArtifact, [], {
    gasPrice: 90000000000,
  });
  return liquidityMigrator;
}
export async function deployIndexFund(deployer: any): Promise<Contract> {
  let indexFund = await deployContract(
    deployer,
    IndexFundArtifact,
    [deployer.address, [deployer.address]],
    { gasPrice: 90000000000 },
  );
  return indexFund;
}

export async function deployULM(deployer: any, args: string[]): Promise<Contract> {
  let ulm = await deployContract(deployer, ULMArtifact, args, { gasPrice: 90000000000 });
  return ulm;
}

export async function deployUnipilot(
  deployer: any,
  ulmAddress: string,
): Promise<Contract> {
  let unipilot = await deployContract(deployer, UniPilotArtifact, [ulmAddress], {
    gasPrice: 90000000000,
  });
  return unipilot;
}

export async function deployUnipilotFarm(
  deployer: any,
  arg1: string,
  arg2: string,
): Promise<Contract> {
  let unipilotFarm = await deployContract(deployer, UnipilotFarmArtifact, [arg1, arg2], {
    gasPrice: 90000000000,
  });
  return unipilotFarm;
}

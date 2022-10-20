/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IULMState, IULMStateInterface } from "../IULMState";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentageShare",
        type: "uint256",
      },
    ],
    name: "calculateShare",
    outputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "getPoolAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "getPoolDetails",
    outputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint16",
        name: "poolCardinality",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "liquidityManagerAddress",
        type: "address",
      },
    ],
    name: "getPositionDetails",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowth0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowth1",
        type: "uint256",
      },
    ],
    name: "getTokensOwedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "tokensOwed0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensOwed1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobal1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokensOwed0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokensOwed1",
        type: "uint256",
      },
    ],
    name: "getUserAndIndexShares",
    outputs: [
      {
        internalType: "uint256",
        name: "indexAmount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "indexAmount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userAmount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userAmount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidityManagerAddress",
        type: "address",
      },
    ],
    name: "shouldReadjust",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IULMState__factory {
  static readonly abi = _abi;
  static createInterface(): IULMStateInterface {
    return new utils.Interface(_abi) as IULMStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IULMState {
    return new Contract(address, _abi, signerOrProvider) as IULMState;
  }
}

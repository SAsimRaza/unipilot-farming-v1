/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniStrategy, UniStrategyInterface } from "../UniStrategy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "baseMultiplier",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "baseThreshold",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "rangeMultiplier",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "maxTwapDeviation",
            type: "int24",
          },
          {
            internalType: "uint32",
            name: "twapDuration",
            type: "uint32",
          },
        ],
        internalType: "struct IUniStrategy.PoolStrategy",
        name: "params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "changeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getTicks",
    outputs: [
      {
        internalType: "int24",
        name: "baseLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "baseUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "bidLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "bidUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "askLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "askUpper",
        type: "int24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getTwap",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
    inputs: [],
    name: "pricethreshold",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rangeMultiplier",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_baseMultiplier",
        type: "int24",
      },
    ],
    name: "setBaseMutiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_twapDeviation",
        type: "int24",
      },
    ],
    name: "setMaxTwapDeviation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_priceThreshold",
        type: "uint16",
      },
    ],
    name: "setPricethreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_rangeMultiplier",
        type: "int24",
      },
    ],
    name: "setRangeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_twapDuration",
        type: "uint32",
      },
    ],
    name: "setTwapDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805460018054603c63ffffffff199091161762ffffff60201b1916660186a000000000179055336001600160a01b0319909116176001600160e81b0316604b60ec1b1762ffffff60a01b1916600160a21b1762ffffff60b81b1916600360b81b178155611a0d90819061008690396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80639456c13111610081578063cfe33d871161005b578063cfe33d87146101a7578063d60a0955146101ba578063f0cc9295146101c2576100d4565b80639456c1311461016c578063accae09514610181578063c433c80a14610194576100d4565b806357829029116100b2578063578290291461012a5780635aa6e67514610132578063802036f514610147576100d4565b8063378af1f8146100d95780633cbff3fe146100ee5780633d47d22714610101575b600080fd5b6100ec6100e7366004611540565b6101d5565b005b6100ec6100fc366004611540565b61026c565b61011461010f366004611455565b6102d4565b6040516101219190611780565b60405180910390f35b610114610468565b61013a610478565b6040516101219190611722565b61015a610155366004611455565b610487565b6040516101219695949392919061178e565b6101746107cb565b6040516101219190611977565b6100ec61018f366004611578565b6107de565b6100ec6101a2366004611708565b6108fe565b6100ec6101b5366004611648565b610944565b6101146109c8565b6100ec6101d0366004611540565b6109d8565b6000546001600160a01b031633146102085760405162461bcd60e51b81526004016101ff90611940565b60405180910390fd5b60008160020b1361022b5760405162461bcd60e51b81526004016101ff906117c2565b6000805460029290920b62ffffff16600160b81b027fffffffffffff000000ffffffffffffffffffffffffffffffffffffffffffffff909216919091179055565b6000546001600160a01b031633146102965760405162461bcd60e51b81526004016101ff90611940565b6000805460029290920b62ffffff16600160e81b027cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909216919091179055565b60408051600280825260608201835260009283929190602083019080368337019050506001600160a01b03841660009081526002602052604081205482519293506901000000000000000000900463ffffffff169183919061033257fe5b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061035b57fe5b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526000906001600160a01b0385169063883bdbfd9061039f908590600401611736565b60006040518083038186803b1580156103b757600080fd5b505afa1580156103cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103f39190810190611478565b506001600160a01b03851660009081526002602052604081205482519293506901000000000000000000900463ffffffff1660030b60060b9183919061043557fe5b60200260200101518260018151811061044a57fe5b60200260200101510360060b8161045d57fe5b05925050505b919050565b600054600160a01b900460020b81565b6000546001600160a01b031681565b60008060008060008060008061049c89610a66565b6001600160a01b038b1660009081526002602081905260409091205492945090925090810b900b61058857600080546001600160a01b038b16825260026020819052604083208054600160b81b909304820b8502820b62ffffff90811662ffffff19909416939093178082558454600160a01b9004830b830b841663010000000265ffffff00000019909116178082559354600160e81b9004820b90910b90911666010000000000000268ffffff0000000000001990921691909117808255600154690100000000000000000063ffffffff909116026cffffffff000000000000000000199091161790555b6001600160a01b03891660009081526002602081905260408220805483547fffffff000000ffffffffffffffffffffffffffffffffffffffffffffffffffff16600160d01b62ffffff6301000000909304850b8702850b9290921682021780855591549104820b820b90820b90910b1361060e57600054600160d01b900460020b61062d565b6001600160a01b038a16600090815260026020819052604090912054900b5b90508181620d89e719010160020b8360020b1361065c5760405162461bcd60e51b81526004016101ff90611870565b8181620d89e719600003030360020b8360020b1261068c5760405162461bcd60e51b81526004016101ff906118e0565b60006106978b610b63565b905060008160020b8560020b136106b0578482036106b4565b8185035b6001600160a01b038d166000908152600260208190526040909120549192506601000000000000909104810b810b9082900b13156107045760405162461bcd60e51b81526004016101ff906118c3565b60006107108686610c8e565b905060008582019050600260008f6001600160a01b03166001600160a01b0316815260200190815260200160002060000160009054906101000a900460020b82039c50600260008f6001600160a01b03166001600160a01b0316815260200190815260200160002060000160009054906101000a900460020b82019b506000601a9054906101000a900460020b82039a508199508098506000601a9054906101000a900460020b810197505050505050505091939550919395565b600154640100000000900462ffffff1681565b6000546001600160a01b031633146108085760405162461bcd60e51b81526004016101ff90611940565b6108868260000151826001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561084957600080fd5b505afa15801561085d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610881919061155c565b610cda565b81516001600160a01b039091166000908152600260208181526040928390208054918601519390950151820b62ffffff90811666010000000000000268ffffff0000000000001994840b821663010000000265ffffff000000199690940b90911662ffffff1990921691909117939093161716179055565b6000546001600160a01b031633146109285760405162461bcd60e51b81526004016101ff90611940565b6001805463ffffffff191663ffffffff92909216919091179055565b6000546001600160a01b0316331461096e5760405162461bcd60e51b81526004016101ff90611940565b620f42408161ffff16108015610988575060008161ffff16115b6109a45760405162461bcd60e51b81526004016101ff906117f7565b6001805466ffffff00000000191661ffff9290921664010000000002919091179055565b600054600160b81b900460020b81565b6000546001600160a01b03163314610a025760405162461bcd60e51b81526004016101ff90611940565b60008160020b13610a255760405162461bcd60e51b81526004016101ff906117c2565b6000805460029290920b62ffffff16600160a01b027fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b600080826001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610aa257600080fd5b505afa158015610ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ada9190611664565b5050604080516334324e9f60e21b815290519497506001600160a01b038916955063d0c93a7c94600480830195506020945090925090829003018186803b158015610b2457600080fd5b505afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c919061155c565b9050915091565b600080826001600160a01b0316631a6865026040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9f57600080fd5b505afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190611618565b90506fffffffffffffffffffffffffffffffff8116610c7c576000836001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610c2b57600080fd5b505afa158015610c3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c639190611664565b5050505050509050610c7481610d58565b925050610c88565b610c85836102d4565b91505b50919050565b6000808260020b8460020b81610ca057fe5b05905060008460020b128015610cc757508260020b8460020b81610cc057fe5b0760020b15155b15610cd157600019015b90910292915050565b60008260020b13610cfd5760405162461bcd60e51b81526004016101ff90611839565b620d89e8600283900b1315610d245760405162461bcd60e51b81526004016101ff9061188c565b8060020b8260020b81610d3357fe5b0760020b15610d545760405162461bcd60e51b81526004016101ff906118fc565b5050565b60006401000276a36001600160a01b03831610801590610d94575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b610dc9576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110610e7357607f810383901c9150610e7d565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461107e57886001600160a01b03166110628261108d565b6001600160a01b031611156110775781611079565b805b611080565b815b9998505050505050505050565b60008060008360020b126110a4578260020b6110ac565b8260020b6000035b9050620d89e88111156110ea576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661110b5770010000000000000000000000000000000061111d565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611151576ffff97272373d413259a46990580e213a0260801c5b6004821615611170576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561118f576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156111ae576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156111cd576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156111ec576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561120b576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561122b576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561124b576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561126b576ff3392b0822b70005940c7a398e4b70f30260801c5b61080082161561128b576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156112ab576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156112cb576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156112eb576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561130b576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561132c576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561134c576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561136b576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611388576b048a170391f7dc42444e8fa20260801c5b60008460020b13156113a357806000198161139f57fe5b0490505b6401000000008106156113b75760016113ba565b60005b60ff16602082901c0192505050919050565b600082601f8301126113dc578081fd5b815160206113f16113ec836119ab565b611987565b828152818101908583018385028701840188101561140d578586fd5b855b85811015611434578151611422816119c9565b8452928401929084019060010161140f565b5090979650505050505050565b803563ffffffff8116811461046357600080fd5b600060208284031215611466578081fd5b8135611471816119c9565b9392505050565b6000806040838503121561148a578081fd5b825167ffffffffffffffff808211156114a1578283fd5b818501915085601f8301126114b4578283fd5b815160206114c46113ec836119ab565b82815281810190858301838502870184018b10156114e0578788fd5b8796505b848710156115105780518060060b81146114fc578889fd5b8352600196909601959183019183016114e4565b5091880151919650909350505080821115611529578283fd5b50611536858286016113cc565b9150509250929050565b600060208284031215611551578081fd5b8135611471816119e1565b60006020828403121561156d578081fd5b8151611471816119e1565b60008082840360a081121561158b578283fd5b6080811215611598578283fd5b506040516080810181811067ffffffffffffffff821117156115b657fe5b60405283356115c4816119e1565b815260208401356115d4816119e1565b602082015260408401356115e7816119e1565b60408201526115f860608501611441565b60608201529150608083013561160d816119c9565b809150509250929050565b600060208284031215611629578081fd5b81516fffffffffffffffffffffffffffffffff81168114611471578182fd5b600060208284031215611659578081fd5b8135611471816119f0565b600080600080600080600060e0888a03121561167e578283fd5b8751611689816119c9565b602089015190975061169a816119e1565b60408901519096506116ab816119f0565b60608901519095506116bc816119f0565b60808901519094506116cd816119f0565b60a089015190935060ff811681146116e3578283fd5b60c089015190925080151581146116f8578182fd5b8091505092959891949750929550565b600060208284031215611719578081fd5b61147182611441565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b8181101561177457835163ffffffff1683529284019291840191600101611752565b50909695505050505050565b60029190910b815260200190565b600296870b815294860b602086015292850b604085015290840b6060840152830b608083015290910b60a082015260c00190565b6020808252818101527f556e6953747261746567793a3a20494e56414c49445f4d554c5449504c494552604082015260600190565b60208082526022908201527f556e6953747261746567793a3a20496e76616c696420507269636520496d706160408201526118dd60f21b606082015260800190565b6020808252601b908201527f556e6953747261746567793a3a207468726573686f6c64203e20300000000000604082015260600190565b602080825260029082015261151360f21b604082015260600190565b6020808252601f908201527f556e6953747261746567793a3a20737472617465677920746f6f206869676800604082015260600190565b60208082526003908201526226aa2360e91b604082015260600190565b6020808252600290820152610a8960f31b604082015260600190565b60208082526024908201527f556e6953747261746567793a3a2073747261746567792025207469636b53706160408201526363696e6760e01b606082015260800190565b60208082526019908201527f53747261746567793a3a204e6f7420676f7665726e616e636500000000000000604082015260600190565b62ffffff91909116815260200190565b60405181810167ffffffffffffffff811182821017156119a357fe5b604052919050565b600067ffffffffffffffff8211156119bf57fe5b5060209081020190565b6001600160a01b03811681146119de57600080fd5b50565b8060020b81146119de57600080fd5b61ffff811681146119de57600080fdfea164736f6c6343000706000a";

export class UniStrategy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniStrategy> {
    return super.deploy(overrides || {}) as Promise<UniStrategy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniStrategy {
    return super.attach(address) as UniStrategy;
  }
  connect(signer: Signer): UniStrategy__factory {
    return super.connect(signer) as UniStrategy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniStrategyInterface {
    return new utils.Interface(_abi) as UniStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniStrategy {
    return new Contract(address, _abi, signerOrProvider) as UniStrategy;
  }
}
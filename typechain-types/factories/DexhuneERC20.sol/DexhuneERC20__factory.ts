/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DexhuneERC20,
  DexhuneERC20Interface,
} from "../../DexhuneERC20.sol/DexhuneERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cooldownTimeout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferCooldown",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260016000806101000a81548160ff021916908315150217905550603c600261002c919061009e565b6001557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60025534801561005f57600080fd5b506100e0565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006100a982610065565b91506100b483610065565b92508282026100c281610065565b915082820484148315176100d9576100d861006f565b5b5092915050565b610c70806100ef6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806368f162931161007157806368f162931461016857806370a082311461018657806395d89b41146101b6578063a9059cbb146101d4578063bbf7924614610204578063dd62ed3e14610222576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610252565b6040516100c39190610807565b60405180910390f35b6100e660048036038101906100e191906108c2565b61028f565b6040516100f3919061091d565b60405180910390f35b610104610381565b6040516101119190610947565b60405180910390f35b610134600480360381019061012f9190610962565b61038b565b604051610141919061091d565b60405180910390f35b610152610489565b60405161015f91906109d1565b60405180910390f35b610170610492565b60405161017d919061091d565b60405180910390f35b6101a0600480360381019061019b91906109ec565b6104a3565b6040516101ad9190610947565b60405180910390f35b6101be6104ec565b6040516101cb9190610807565b60405180910390f35b6101ee60048036038101906101e991906108c2565b610529565b6040516101fb919061091d565b60405180910390f35b61020c610540565b6040516102199190610947565b60405180910390f35b61023c60048036038101906102379190610a19565b610546565b6040516102499190610947565b60405180910390f35b60606040518060400160405280600781526020017f44657868756e6500000000000000000000000000000000000000000000000000815250905090565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161036f9190610947565b60405180910390a36001905092915050565b6000600254905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054421161040e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040590610b17565b60405180910390fd5b6104198484846105cd565b60008054906101000a900460ff161561047e576001544261043a9190610b66565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600190509392505050565b60006012905090565b60008054906101000a900460ff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606040518060400160405280600381526020017f4458480000000000000000000000000000000000000000000000000000000000815250905090565b60006105363384846105cd565b6001905092915050565b60015481565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000828261061f9190610b9a565b1015610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790610c1a565b60405180910390fd5b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106af9190610b9a565b9250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107059190610b66565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107699190610947565b60405180910390a350505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107b1578082015181840152602081019050610796565b60008484015250505050565b6000601f19601f8301169050919050565b60006107d982610777565b6107e38185610782565b93506107f3818560208601610793565b6107fc816107bd565b840191505092915050565b6000602082019050818103600083015261082181846107ce565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108598261082e565b9050919050565b6108698161084e565b811461087457600080fd5b50565b60008135905061088681610860565b92915050565b6000819050919050565b61089f8161088c565b81146108aa57600080fd5b50565b6000813590506108bc81610896565b92915050565b600080604083850312156108d9576108d8610829565b5b60006108e785828601610877565b92505060206108f8858286016108ad565b9150509250929050565b60008115159050919050565b61091781610902565b82525050565b6000602082019050610932600083018461090e565b92915050565b6109418161088c565b82525050565b600060208201905061095c6000830184610938565b92915050565b60008060006060848603121561097b5761097a610829565b5b600061098986828701610877565b935050602061099a86828701610877565b92505060406109ab868287016108ad565b9150509250925092565b600060ff82169050919050565b6109cb816109b5565b82525050565b60006020820190506109e660008301846109c2565b92915050565b600060208284031215610a0257610a01610829565b5b6000610a1084828501610877565b91505092915050565b60008060408385031215610a3057610a2f610829565b5b6000610a3e85828601610877565b9250506020610a4f85828601610877565b9150509250929050565b7f54686973207472616e73616374696f6e2063616e6e6f7420626520636f6d706c60008201527f65746564206265636175736520796f7572206163636f756e742069732065787060208201527f657269656e63696e6720636f6f6c646f776e2e20506c6561736520747279206160408201527f6761696e20696e206120636f75706c65206f66206d696e757465732e00000000606082015250565b6000610b01607c83610782565b9150610b0c82610a59565b608082019050919050565b60006020820190508181036000830152610b3081610af4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b718261088c565b9150610b7c8361088c565b9250828201905080821115610b9457610b93610b37565b5b92915050565b6000610ba58261088c565b9150610bb08361088c565b9250828203905081811115610bc857610bc7610b37565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000610c04601483610782565b9150610c0f82610bce565b602082019050919050565b60006020820190508181036000830152610c3381610bf7565b905091905056fea2646970667358221220651a2f43091a0f69cc7b7e704e9ed2c65cf0bc3f24c85c57a6693d1a5950861b64736f6c63430008120033";

type DexhuneERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DexhuneERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DexhuneERC20__factory extends ContractFactory {
  constructor(...args: DexhuneERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DexhuneERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DexhuneERC20__factory {
    return super.connect(runner) as DexhuneERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexhuneERC20Interface {
    return new Interface(_abi) as DexhuneERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DexhuneERC20 {
    return new Contract(address, _abi, runner) as unknown as DexhuneERC20;
  }
}

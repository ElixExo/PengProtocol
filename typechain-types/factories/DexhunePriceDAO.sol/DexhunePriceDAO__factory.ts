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
  DexhunePriceDAO,
  DexhunePriceDAOInterface,
} from "../../DexhunePriceDAO.sol/DexhunePriceDAO";

const _abi = [
  {
    inputs: [],
    name: "AlreadyVoted",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEligibleToVote",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposalDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposalHasExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposalIsStillActive",
    type: "error",
  },
  {
    inputs: [],
    name: "VotingDeactivated",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "oldPrice",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newPrice",
        type: "string",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "passed",
        type: "bool",
      },
    ],
    name: "ProposalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "VotedDown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "VotedUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "addedNFTCollection",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "removedNFTCollection",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferredOwnership",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "NFTCollections",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PriceProposals",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "votesUp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votesDown",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "finalized",
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
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "addNFTCollection",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "finalizeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestProposal",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "votesUp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votesDown",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "proposalExpiresAt",
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
        internalType: "string",
        name: "_desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "_price",
        type: "string",
      },
    ],
    name: "proposePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "removeNFTCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timeout",
        type: "uint256",
      },
    ],
    name: "setCooldownTimeout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "setTransferTimeout",
    outputs: [],
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
        name: "_address",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voteDown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voteUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEndsAt",
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
] as const;

const _bytecode =
  "0x608060405260016000806101000a81548160ff021916908315150217905550603c60026200002e9190620001d3565b6001553480156200003e57600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600067ffffffffffffffff8111156200009e576200009d6200021e565b5b604051908082528060200260200182016040528015620000cd5781602001602082028036833780820191505090505b5060049080519060200190620000e5929190620000ec565b506200024d565b82805482825590600052602060002090810192821562000168579160200282015b82811115620001675782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200010d565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001e0826200019a565b9150620001ed836200019a565b9250828202620001fd816200019a565b91508282048414831517620002175762000216620001a4565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61245b806200025d6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806398d5fdca116100a2578063c2b7983611610071578063c2b7983614610299578063c2d52751146102ba578063c4dc1556146102d6578063d65ced17146102e0578063f2fde38b146102fe57610116565b806398d5fdca14610249578063b07672ae14610267578063b525ef0d14610271578063bbf792461461027b57610116565b806368f16293116100e957806368f16293146101a55780637c14a418146101c35780637ec24d7c146101df5780638b98ecaa1461020f5780638da5cb5b1461022b57610116565b806302de9f2e1461011b57806330002eef14610137578063578a72d314610153578063605c736e14610171575b600080fd5b6101356004803603810190610130919061175c565b61031a565b005b610151600480360381019061014c9190611832565b6104ed565b005b61015b61060e565b6040516101689190611878565b60405180910390f35b61018b600480360381019061018691906118bf565b610618565b60405161019c959493929190611986565b60405180910390f35b6101ad61077b565b6040516101ba91906119e7565b60405180910390f35b6101dd60048036038101906101d89190611a2e565b61078c565b005b6101f960048036038101906101f491906118bf565b6107b0565b6040516102069190611a6a565b60405180910390f35b610229600480360381019061022491906118bf565b6107ef565b005b6102336109be565b6040516102409190611a6a565b60405180910390f35b6102516109e4565b60405161025e9190611a85565b60405180910390f35b61026f610a76565b005b610279610ca4565b005b610283610ef1565b6040516102909190611878565b60405180910390f35b6102a1610ef7565b6040516102b19493929190611aa7565b60405180910390f35b6102d460048036038101906102cf91906118bf565b6110b5565b005b6102de6110c7565b005b6102e861127b565b6040516102f59190611878565b60405180910390f35b61031860048036038101906103139190611832565b611285565b005b6000600380549050905060008111156103ae57600360018261033c9190611b29565b8154811061034d5761034c611b5d565b5b906000526020600020906005020160040160009054906101000a900460ff166103ad574360075411156103ac576040517fa9174b1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b5b60006040518060a00160405280858152602001848152602001600081526020016000815260200160001515815250905061012c60026103ed9190611b8c565b436103f89190611bce565b600681905550610258600261040d9190611b8c565b436104189190611bce565b6007819055506003819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908161045f9190611e0e565b5060208201518160010190816104759190611e0e565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050507fc8c078bfee58e5822588f08b4509ed1eb5058e03f666cca84dd2d44bf5c288a88285336040516104df93929190611ee0565b60405180910390a150505050565b6104f5611354565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610564576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055b90611f90565b60405180910390fd5b600060048054905090506004829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f82eda5d64185c894c1ba8ca4d84b96a074187302830b342fa1611e06c6805f288183604051610602929190611fb0565b60405180910390a15050565b6000600654905090565b6003818154811061062857600080fd5b906000526020600020906005020160009150905080600001805461064b90611c31565b80601f016020809104026020016040519081016040528092919081815260200182805461067790611c31565b80156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b5050505050908060010180546106d990611c31565b80601f016020809104026020016040519081016040528092919081815260200182805461070590611c31565b80156107525780601f1061072757610100808354040283529160200191610752565b820191906000526020600020905b81548152906001019060200180831161073557829003601f168201915b5050505050908060020154908060030154908060040160009054906101000a900460ff16905085565b60008054906101000a900460ff1681565b610794611354565b806000806101000a81548160ff02191690831515021790555050565b600481815481106107c057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107f7611354565b6000811015801561080c575060048054905081105b61084b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108429061204b565b60405180910390fd5b60006004828154811061086157610860611b5d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600460016004805490506108a29190611b29565b815481106108b3576108b2611b5d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600483815481106108f2576108f1611b5d565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600480548061094c5761094b61206b565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590557fb6f7db2d5083e9ae2b0b0e374dbcdc50d76e778e5e84b9186adbe5968b134dbb82826040516109b2929190611fb0565b60405180910390a15050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600580546109f390611c31565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1f90611c31565b8015610a6c5780601f10610a4157610100808354040283529160200191610a6c565b820191906000526020600020905b815481529060010190602001808311610a4f57829003601f168201915b5050505050905090565b610a7e6113e6565b610ab4576040517f7fb16f1b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600380549050610ac89190611b29565b90506000610ad582611599565b90506006544310610b12576040517f9bd4d19f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460000b905060018160000b1480610ba857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b145b15610bdf576040517f7c9a1cf900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816002016000815480929190610bf49061209a565b919050555060016008600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055507f39c53468031ad719fb1805945cb8128e48f9c189c15308e05b73c48e98b4bc243384604051610c979291906120e2565b60405180910390a1505050565b610cac6113e6565b610ce2576040517f7fb16f1b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600380549050610cf69190611b29565b90506000610d0382611599565b90506006544310610d40576040517f9bd4d19f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460000b905060018160000b1480610dd657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b145b15610e0d576040517f7c9a1cf900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816003016000815480929190610e229061209a565b91905055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6008600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055507fec5739509ee72ce4062c5e252e7186d35b5a2c72221af047c2a53b1cb5c90ef43384604051610ee49291906120e2565b60405180910390a1505050565b60015481565b606080600080600060036001600380549050610f139190611b29565b81548110610f2457610f23611b5d565b5b90600052602060002090600502016040518060a0016040529081600082018054610f4d90611c31565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7990611c31565b8015610fc65780601f10610f9b57610100808354040283529160200191610fc6565b820191906000526020600020905b815481529060010190602001808311610fa957829003601f168201915b50505050508152602001600182018054610fdf90611c31565b80601f016020809104026020016040519081016040528092919081815260200182805461100b90611c31565b80156110585780601f1061102d57610100808354040283529160200191611058565b820191906000526020600020905b81548152906001019060200180831161103b57829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050806000015181602001518260400151836060015194509450945094505090919293565b6110bd611354565b8060018190555050565b600060016003805490506110db9190611b29565b905060006110e882611599565b9050436006541115611126576040517fa9174b1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6007544310611161576040517fc1f1c4df00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060040160009054906101000a900460ff161561117f575050611279565b80600301548160020154111561121e577f4d599ac90c3e5e1d64df26da87c79a4e007380a838c05d4d211f33c111e690bd6005826001016040516111c492919061218f565b60405180910390a180600101600590816111de91906121f1565b507fb5ac567fcf1b069e0235e4f16734625c6cf54c1b40517fd9eb85517f6e1265a78260016040516112119291906122d9565b60405180910390a1611259565b7fb5ac567fcf1b069e0235e4f16734625c6cf54c1b40517fd9eb85517f6e1265a78260006040516112509291906122d9565b60405180910390a15b60018160040160006101000a81548160ff02191690831515021790555050505b565b6000600754905090565b61128d611354565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa77b1597453f945cb89178ec89d7d37698b9f9b07adbbb854775e48131186d2581600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051611348929190612302565b60405180910390a15050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113db906123c3565b60405180910390fd5b565b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020544310156114385760019050611596565b60005b6004805490508110156115905760006004828154811061145e5761145d611b5d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016114cb9190611a6a565b602060405180830381865afa1580156114e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150c91906123f8565b111561157b57610e1060026115219190611b8c565b4361152c9190611bce565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019350505050611596565b505080806115889061209a565b91505061143b565b50600090505b90565b600060038054905082106115d9576040517fd9c78e0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600382815481106115ed576115ec611b5d565b5b90600052602060002090600502019050919050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61166982611620565b810181811067ffffffffffffffff8211171561168857611687611631565b5b80604052505050565b600061169b611602565b90506116a78282611660565b919050565b600067ffffffffffffffff8211156116c7576116c6611631565b5b6116d082611620565b9050602081019050919050565b82818337600083830152505050565b60006116ff6116fa846116ac565b611691565b90508281526020810184848401111561171b5761171a61161b565b5b6117268482856116dd565b509392505050565b600082601f83011261174357611742611616565b5b81356117538482602086016116ec565b91505092915050565b600080604083850312156117735761177261160c565b5b600083013567ffffffffffffffff81111561179157611790611611565b5b61179d8582860161172e565b925050602083013567ffffffffffffffff8111156117be576117bd611611565b5b6117ca8582860161172e565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117ff826117d4565b9050919050565b61180f816117f4565b811461181a57600080fd5b50565b60008135905061182c81611806565b92915050565b6000602082840312156118485761184761160c565b5b60006118568482850161181d565b91505092915050565b6000819050919050565b6118728161185f565b82525050565b600060208201905061188d6000830184611869565b92915050565b61189c8161185f565b81146118a757600080fd5b50565b6000813590506118b981611893565b92915050565b6000602082840312156118d5576118d461160c565b5b60006118e3848285016118aa565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561192657808201518184015260208101905061190b565b60008484015250505050565b600061193d826118ec565b61194781856118f7565b9350611957818560208601611908565b61196081611620565b840191505092915050565b60008115159050919050565b6119808161196b565b82525050565b600060a08201905081810360008301526119a08188611932565b905081810360208301526119b48187611932565b90506119c36040830186611869565b6119d06060830185611869565b6119dd6080830184611977565b9695505050505050565b60006020820190506119fc6000830184611977565b92915050565b611a0b8161196b565b8114611a1657600080fd5b50565b600081359050611a2881611a02565b92915050565b600060208284031215611a4457611a4361160c565b5b6000611a5284828501611a19565b91505092915050565b611a64816117f4565b82525050565b6000602082019050611a7f6000830184611a5b565b92915050565b60006020820190508181036000830152611a9f8184611932565b905092915050565b60006080820190508181036000830152611ac18187611932565b90508181036020830152611ad58186611932565b9050611ae46040830185611869565b611af16060830184611869565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b348261185f565b9150611b3f8361185f565b9250828203905081811115611b5757611b56611afa565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611b978261185f565b9150611ba28361185f565b9250828202611bb08161185f565b91508282048414831517611bc757611bc6611afa565b5b5092915050565b6000611bd98261185f565b9150611be48361185f565b9250828201905080821115611bfc57611bfb611afa565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c4957607f821691505b602082108103611c5c57611c5b611c02565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611cc47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611c87565b611cce8683611c87565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611d0b611d06611d018461185f565b611ce6565b61185f565b9050919050565b6000819050919050565b611d2583611cf0565b611d39611d3182611d12565b848454611c94565b825550505050565b600090565b611d4e611d41565b611d59818484611d1c565b505050565b5b81811015611d7d57611d72600082611d46565b600181019050611d5f565b5050565b601f821115611dc257611d9381611c62565b611d9c84611c77565b81016020851015611dab578190505b611dbf611db785611c77565b830182611d5e565b50505b505050565b600082821c905092915050565b6000611de560001984600802611dc7565b1980831691505092915050565b6000611dfe8383611dd4565b9150826002028217905092915050565b611e17826118ec565b67ffffffffffffffff811115611e3057611e2f611631565b5b611e3a8254611c31565b611e45828285611d81565b600060209050601f831160018114611e785760008415611e66578287015190505b611e708582611df2565b865550611ed8565b601f198416611e8686611c62565b60005b82811015611eae57848901518255600182019150602085019450602081019050611e89565b86831015611ecb5784890151611ec7601f891682611dd4565b8355505b6001600288020188555050505b505050505050565b6000606082019050611ef56000830186611869565b8181036020830152611f078185611932565b9050611f166040830184611a5b565b949350505050565b7f416e204e465420636f6c6c656374696f6e2063616e6e6f74206861766520616e60008201527f20656d7074792061646472657373000000000000000000000000000000000000602082015250565b6000611f7a602e836118f7565b9150611f8582611f1e565b604082019050919050565b60006020820190508181036000830152611fa981611f6d565b9050919050565b6000604082019050611fc56000830185611869565b611fd26020830184611a5b565b9392505050565b7f54686520726571756573746564204e465420636f6c6c656374696f6e20646f6560008201527f73206e6f74206578697374000000000000000000000000000000000000000000602082015250565b6000612035602b836118f7565b915061204082611fd9565b604082019050919050565b6000602082019050818103600083015261206481612028565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60006120a58261185f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120d7576120d6611afa565b5b600182019050919050565b60006040820190506120f76000830185611a5b565b6121046020830184611869565b9392505050565b6000815461211881611c31565b61212281866118f7565b9450600182166000811461213d576001811461215357612186565b60ff198316865281151560200286019350612186565b61215c85611c62565b60005b8381101561217e5781548189015260018201915060208101905061215f565b808801955050505b50505092915050565b600060408201905081810360008301526121a9818561210b565b905081810360208301526121bd818461210b565b90509392505050565b6000815490506121d581611c31565b9050919050565b60008190508160005260206000209050919050565b8181036121ff5750506122d7565b612208826121c6565b67ffffffffffffffff81111561222157612220611631565b5b61222b8254611c31565b612236828285611d81565b6000601f8311600181146122655760008415612253578287015490505b61225d8582611df2565b8655506122d0565b601f198416612273876121dc565b965061227e86611c62565b60005b828110156122a657848901548255600182019150600185019450602081019050612281565b868310156122c357848901546122bf601f891682611dd4565b8355505b6001600288020188555050505b5050505050505b565b60006040820190506122ee6000830185611869565b6122fb6020830184611977565b9392505050565b60006040820190506123176000830185611a5b565b6123246020830184611a5b565b9392505050565b7f54686973206d6574686f642063616e206f6e6c792062652063616c6c6564206260008201527f7920746865206f776e6572206f66207468697320736d61727420636f6e74726160208201527f6374000000000000000000000000000000000000000000000000000000000000604082015250565b60006123ad6042836118f7565b91506123b88261232b565b606082019050919050565b600060208201905081810360008301526123dc816123a0565b9050919050565b6000815190506123f281611893565b92915050565b60006020828403121561240e5761240d61160c565b5b600061241c848285016123e3565b9150509291505056fea2646970667358221220ab1458ac89058227ea35b371300f0f4e3c909bfe220285a92ec0a84baa7c72ce64736f6c63430008120033";

type DexhunePriceDAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DexhunePriceDAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DexhunePriceDAO__factory extends ContractFactory {
  constructor(...args: DexhunePriceDAOConstructorParams) {
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
      DexhunePriceDAO & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DexhunePriceDAO__factory {
    return super.connect(runner) as DexhunePriceDAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexhunePriceDAOInterface {
    return new Interface(_abi) as DexhunePriceDAOInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DexhunePriceDAO {
    return new Contract(address, _abi, runner) as unknown as DexhunePriceDAO;
  }
}

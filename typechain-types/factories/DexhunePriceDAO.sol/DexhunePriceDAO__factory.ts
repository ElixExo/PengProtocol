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
        components: [
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
        internalType: "struct DexhuneBase.PriceProposal",
        name: "",
        type: "tuple",
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
  "0x608060405260016000806101000a81548160ff021916908315150217905550603c60026200002e9190620001d3565b6001553480156200003e57600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600067ffffffffffffffff8111156200009e576200009d6200021e565b5b604051908082528060200260200182016040528015620000cd5781602001602082028036833780820191505090505b5060049080519060200190620000e5929190620000ec565b506200024d565b82805482825590600052602060002090810192821562000168579160200282015b82811115620001675782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200010d565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001e0826200019a565b9150620001ed836200019a565b9250828202620001fd816200019a565b91508282048414831517620002175762000216620001a4565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61251d806200025d6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806398d5fdca116100a2578063c2b7983611610071578063c2b7983614610299578063c2d52751146102b7578063c4dc1556146102d3578063d65ced17146102dd578063f2fde38b146102fb57610116565b806398d5fdca14610249578063b07672ae14610267578063b525ef0d14610271578063bbf792461461027b57610116565b806368f16293116100e957806368f16293146101a55780637c14a418146101c35780637ec24d7c146101df5780638b98ecaa1461020f5780638da5cb5b1461022b57610116565b806302de9f2e1461011b57806330002eef14610137578063578a72d314610153578063605c736e14610171575b600080fd5b6101356004803603810190610130919061176a565b610317565b005b610151600480360381019061014c9190611840565b6104ea565b005b61015b61060b565b6040516101689190611886565b60405180910390f35b61018b600480360381019061018691906118cd565b610615565b60405161019c959493929190611994565b60405180910390f35b6101ad610778565b6040516101ba91906119f5565b60405180910390f35b6101dd60048036038101906101d89190611a3c565b610789565b005b6101f960048036038101906101f491906118cd565b6107ad565b6040516102069190611a78565b60405180910390f35b610229600480360381019061022491906118cd565b6107ec565b005b6102336109bb565b6040516102409190611a78565b60405180910390f35b6102516109e1565b60405161025e9190611a93565b60405180910390f35b61026f610a73565b005b610279610ca1565b005b610283610eee565b6040516102909190611886565b60405180910390f35b6102a1610ef4565b6040516102ae9190611b9a565b60405180910390f35b6102d160048036038101906102cc91906118cd565b611092565b005b6102db6110a4565b005b6102e5611258565b6040516102f29190611886565b60405180910390f35b61031560048036038101906103109190611840565b611262565b005b6000600380549050905060008111156103ab5760036001826103399190611beb565b8154811061034a57610349611c1f565b5b906000526020600020906005020160040160009054906101000a900460ff166103aa574360075411156103a9576040517fa9174b1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b5b60006040518060a00160405280858152602001848152602001600081526020016000815260200160001515815250905061012c60026103ea9190611c4e565b436103f59190611c90565b600681905550610258600261040a9190611c4e565b436104159190611c90565b6007819055506003819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908161045c9190611ed0565b5060208201518160010190816104729190611ed0565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555050507fc8c078bfee58e5822588f08b4509ed1eb5058e03f666cca84dd2d44bf5c288a88285336040516104dc93929190611fa2565b60405180910390a150505050565b6104f2611331565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055890612052565b60405180910390fd5b600060048054905090506004829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f82eda5d64185c894c1ba8ca4d84b96a074187302830b342fa1611e06c6805f2881836040516105ff929190612072565b60405180910390a15050565b6000600654905090565b6003818154811061062557600080fd5b906000526020600020906005020160009150905080600001805461064890611cf3565b80601f016020809104026020016040519081016040528092919081815260200182805461067490611cf3565b80156106c15780601f10610696576101008083540402835291602001916106c1565b820191906000526020600020905b8154815290600101906020018083116106a457829003601f168201915b5050505050908060010180546106d690611cf3565b80601f016020809104026020016040519081016040528092919081815260200182805461070290611cf3565b801561074f5780601f106107245761010080835404028352916020019161074f565b820191906000526020600020905b81548152906001019060200180831161073257829003601f168201915b5050505050908060020154908060030154908060040160009054906101000a900460ff16905085565b60008054906101000a900460ff1681565b610791611331565b806000806101000a81548160ff02191690831515021790555050565b600481815481106107bd57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107f4611331565b60008110158015610809575060048054905081105b610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f9061210d565b60405180910390fd5b60006004828154811061085e5761085d611c1f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506004600160048054905061089f9190611beb565b815481106108b0576108af611c1f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600483815481106108ef576108ee611c1f565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060048054806109495761094861212d565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590557fb6f7db2d5083e9ae2b0b0e374dbcdc50d76e778e5e84b9186adbe5968b134dbb82826040516109af929190612072565b60405180910390a15050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600580546109f090611cf3565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1c90611cf3565b8015610a695780601f10610a3e57610100808354040283529160200191610a69565b820191906000526020600020905b815481529060010190602001808311610a4c57829003601f168201915b5050505050905090565b610a7b6113c3565b610ab1576040517f7fb16f1b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600380549050610ac59190611beb565b90506000610ad282611576565b90506006544310610b0f576040517f9bd4d19f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460000b905060018160000b1480610ba557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b145b15610bdc576040517f7c9a1cf900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816002016000815480929190610bf19061215c565b919050555060016008600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055507f39c53468031ad719fb1805945cb8128e48f9c189c15308e05b73c48e98b4bc243384604051610c949291906121a4565b60405180910390a1505050565b610ca96113c3565b610cdf576040517f7fb16f1b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006001600380549050610cf39190611beb565b90506000610d0082611576565b90506006544310610d3d576040517f9bd4d19f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460000b905060018160000b1480610dd357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b145b15610e0a576040517f7c9a1cf900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816003016000815480929190610e1f9061215c565b91905055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6008600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055507fec5739509ee72ce4062c5e252e7186d35b5a2c72221af047c2a53b1cb5c90ef43384604051610ee19291906121a4565b60405180910390a1505050565b60015481565b610efc6115df565b60036001600380549050610f109190611beb565b81548110610f2157610f20611c1f565b5b90600052602060002090600502016040518060a0016040529081600082018054610f4a90611cf3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7690611cf3565b8015610fc35780601f10610f9857610100808354040283529160200191610fc3565b820191906000526020600020905b815481529060010190602001808311610fa657829003601f168201915b50505050508152602001600182018054610fdc90611cf3565b80601f016020809104026020016040519081016040528092919081815260200182805461100890611cf3565b80156110555780601f1061102a57610100808354040283529160200191611055565b820191906000526020600020905b81548152906001019060200180831161103857829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff161515151581525050905090565b61109a611331565b8060018190555050565b600060016003805490506110b89190611beb565b905060006110c582611576565b9050436006541115611103576040517fa9174b1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600754431061113e576040517fc1f1c4df00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060040160009054906101000a900460ff161561115c575050611256565b8060030154816002015411156111fb577f4d599ac90c3e5e1d64df26da87c79a4e007380a838c05d4d211f33c111e690bd6005826001016040516111a1929190612251565b60405180910390a180600101600590816111bb91906122b3565b507fb5ac567fcf1b069e0235e4f16734625c6cf54c1b40517fd9eb85517f6e1265a78260016040516111ee92919061239b565b60405180910390a1611236565b7fb5ac567fcf1b069e0235e4f16734625c6cf54c1b40517fd9eb85517f6e1265a782600060405161122d92919061239b565b60405180910390a15b60018160040160006101000a81548160ff02191690831515021790555050505b565b6000600754905090565b61126a611331565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa77b1597453f945cb89178ec89d7d37698b9f9b07adbbb854775e48131186d2581600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516113259291906123c4565b60405180910390a15050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b890612485565b60405180910390fd5b565b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020544310156114155760019050611573565b60005b60048054905081101561156d5760006004828154811061143b5761143a611c1f565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016114a89190611a78565b602060405180830381865afa1580156114c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e991906124ba565b111561155857610e1060026114fe9190611c4e565b436115099190611c90565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019350505050611573565b505080806115659061215c565b915050611418565b50600090505b90565b600060038054905082106115b6576040517fd9c78e0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600382815481106115ca576115c9611c1f565b5b90600052602060002090600502019050919050565b6040518060a00160405280606081526020016060815260200160008152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116778261162e565b810181811067ffffffffffffffff821117156116965761169561163f565b5b80604052505050565b60006116a9611610565b90506116b5828261166e565b919050565b600067ffffffffffffffff8211156116d5576116d461163f565b5b6116de8261162e565b9050602081019050919050565b82818337600083830152505050565b600061170d611708846116ba565b61169f565b90508281526020810184848401111561172957611728611629565b5b6117348482856116eb565b509392505050565b600082601f83011261175157611750611624565b5b81356117618482602086016116fa565b91505092915050565b600080604083850312156117815761178061161a565b5b600083013567ffffffffffffffff81111561179f5761179e61161f565b5b6117ab8582860161173c565b925050602083013567ffffffffffffffff8111156117cc576117cb61161f565b5b6117d88582860161173c565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061180d826117e2565b9050919050565b61181d81611802565b811461182857600080fd5b50565b60008135905061183a81611814565b92915050565b6000602082840312156118565761185561161a565b5b60006118648482850161182b565b91505092915050565b6000819050919050565b6118808161186d565b82525050565b600060208201905061189b6000830184611877565b92915050565b6118aa8161186d565b81146118b557600080fd5b50565b6000813590506118c7816118a1565b92915050565b6000602082840312156118e3576118e261161a565b5b60006118f1848285016118b8565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611934578082015181840152602081019050611919565b60008484015250505050565b600061194b826118fa565b6119558185611905565b9350611965818560208601611916565b61196e8161162e565b840191505092915050565b60008115159050919050565b61198e81611979565b82525050565b600060a08201905081810360008301526119ae8188611940565b905081810360208301526119c28187611940565b90506119d16040830186611877565b6119de6060830185611877565b6119eb6080830184611985565b9695505050505050565b6000602082019050611a0a6000830184611985565b92915050565b611a1981611979565b8114611a2457600080fd5b50565b600081359050611a3681611a10565b92915050565b600060208284031215611a5257611a5161161a565b5b6000611a6084828501611a27565b91505092915050565b611a7281611802565b82525050565b6000602082019050611a8d6000830184611a69565b92915050565b60006020820190508181036000830152611aad8184611940565b905092915050565b600082825260208201905092915050565b6000611ad1826118fa565b611adb8185611ab5565b9350611aeb818560208601611916565b611af48161162e565b840191505092915050565b611b088161186d565b82525050565b611b1781611979565b82525050565b600060a0830160008301518482036000860152611b3a8282611ac6565b91505060208301518482036020860152611b548282611ac6565b9150506040830151611b696040860182611aff565b506060830151611b7c6060860182611aff565b506080830151611b8f6080860182611b0e565b508091505092915050565b60006020820190508181036000830152611bb48184611b1d565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bf68261186d565b9150611c018361186d565b9250828203905081811115611c1957611c18611bbc565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611c598261186d565b9150611c648361186d565b9250828202611c728161186d565b91508282048414831517611c8957611c88611bbc565b5b5092915050565b6000611c9b8261186d565b9150611ca68361186d565b9250828201905080821115611cbe57611cbd611bbc565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d0b57607f821691505b602082108103611d1e57611d1d611cc4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611d867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611d49565b611d908683611d49565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611dcd611dc8611dc38461186d565b611da8565b61186d565b9050919050565b6000819050919050565b611de783611db2565b611dfb611df382611dd4565b848454611d56565b825550505050565b600090565b611e10611e03565b611e1b818484611dde565b505050565b5b81811015611e3f57611e34600082611e08565b600181019050611e21565b5050565b601f821115611e8457611e5581611d24565b611e5e84611d39565b81016020851015611e6d578190505b611e81611e7985611d39565b830182611e20565b50505b505050565b600082821c905092915050565b6000611ea760001984600802611e89565b1980831691505092915050565b6000611ec08383611e96565b9150826002028217905092915050565b611ed9826118fa565b67ffffffffffffffff811115611ef257611ef161163f565b5b611efc8254611cf3565b611f07828285611e43565b600060209050601f831160018114611f3a5760008415611f28578287015190505b611f328582611eb4565b865550611f9a565b601f198416611f4886611d24565b60005b82811015611f7057848901518255600182019150602085019450602081019050611f4b565b86831015611f8d5784890151611f89601f891682611e96565b8355505b6001600288020188555050505b505050505050565b6000606082019050611fb76000830186611877565b8181036020830152611fc98185611940565b9050611fd86040830184611a69565b949350505050565b7f416e204e465420636f6c6c656374696f6e2063616e6e6f74206861766520616e60008201527f20656d7074792061646472657373000000000000000000000000000000000000602082015250565b600061203c602e83611905565b915061204782611fe0565b604082019050919050565b6000602082019050818103600083015261206b8161202f565b9050919050565b60006040820190506120876000830185611877565b6120946020830184611a69565b9392505050565b7f54686520726571756573746564204e465420636f6c6c656374696f6e20646f6560008201527f73206e6f74206578697374000000000000000000000000000000000000000000602082015250565b60006120f7602b83611905565b91506121028261209b565b604082019050919050565b60006020820190508181036000830152612126816120ea565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60006121678261186d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361219957612198611bbc565b5b600182019050919050565b60006040820190506121b96000830185611a69565b6121c66020830184611877565b9392505050565b600081546121da81611cf3565b6121e48186611905565b945060018216600081146121ff576001811461221557612248565b60ff198316865281151560200286019350612248565b61221e85611d24565b60005b8381101561224057815481890152600182019150602081019050612221565b808801955050505b50505092915050565b6000604082019050818103600083015261226b81856121cd565b9050818103602083015261227f81846121cd565b90509392505050565b60008154905061229781611cf3565b9050919050565b60008190508160005260206000209050919050565b8181036122c1575050612399565b6122ca82612288565b67ffffffffffffffff8111156122e3576122e261163f565b5b6122ed8254611cf3565b6122f8828285611e43565b6000601f8311600181146123275760008415612315578287015490505b61231f8582611eb4565b865550612392565b601f1984166123358761229e565b965061234086611d24565b60005b8281101561236857848901548255600182019150600185019450602081019050612343565b868310156123855784890154612381601f891682611e96565b8355505b6001600288020188555050505b5050505050505b565b60006040820190506123b06000830185611877565b6123bd6020830184611985565b9392505050565b60006040820190506123d96000830185611a69565b6123e66020830184611a69565b9392505050565b7f54686973206d6574686f642063616e206f6e6c792062652063616c6c6564206260008201527f7920746865206f776e6572206f66207468697320736d61727420636f6e74726160208201527f6374000000000000000000000000000000000000000000000000000000000000604082015250565b600061246f604283611905565b915061247a826123ed565b606082019050919050565b6000602082019050818103600083015261249e81612462565b9050919050565b6000815190506124b4816118a1565b92915050565b6000602082840312156124d0576124cf61161a565b5b60006124de848285016124a5565b9150509291505056fea2646970667358221220151f2834b85f9035ce5629270aebd284cd5133fdfaaba3a02cab0c5f1d93b38d64736f6c63430008120033";

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

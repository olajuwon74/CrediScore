export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountGiven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_loanDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_repaymentDate",
        type: "uint256",
      },
    ],
    name: "takeLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "calculateCollateral",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "LoanTracker",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loanDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaymentDate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "repaid",
        type: "bool",
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
    name: "Tracker",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loanDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaymentDate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "repaid",
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
        name: "",
        type: "address",
      },
    ],
    name: "trackLoan",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loanDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaymentDate",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "repaid",
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
        name: "",
        type: "address",
      },
    ],
    name: "Tracklog",
    outputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "myCreditScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfLoansTaken",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const crediScore_CONTRACT_ADDRESS =
  "0x0b2ca44262c7694e5b17bc99d803cc5546646771";

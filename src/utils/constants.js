export const MAX_ELECTION_TITLE_LENGTH = 24;

export const ELECTION_CONTRACT_ABI = [{"inputs":[{"internalType":"string","name":"title","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"candidateName","type":"string"}],"name":"addCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"voterAddress","type":"address"}],"name":"authorizeVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"votesNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"electionTitle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllCandidates","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"votesNumber","type":"uint256"}],"internalType":"struct Election.Candidate[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllVoters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"candidateID","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"exist","type":"bool"},{"internalType":"bool","name":"alreadyVoted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votersAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

export const ELECTION_CONTRACT_BYTE_CODE = "60806040523480156200001157600080fd5b5060405162000d9338038062000d93833981016040819052620000349162000072565b600080546001600160a01b031916331790556001620000548282620001d6565b5050620002a2565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008657600080fd5b82516001600160401b03808211156200009e57600080fd5b818501915085601f830112620000b357600080fd5b815181811115620000c857620000c86200005c565b604051601f8201601f19908116603f01168101908382118183101715620000f357620000f36200005c565b8160405282815288868487010111156200010c57600080fd5b600093505b8284101562000130578484018601518185018701529285019262000111565b600086848301015280965050505050505092915050565b600181811c908216806200015c57607f821691505b6020821081036200017d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001d157600081815260208120601f850160051c81016020861015620001ac5750805b601f850160051c820191505b81811015620001cd57828155600101620001b8565b5050505b505050565b81516001600160401b03811115620001f257620001f26200005c565b6200020a8162000203845462000147565b8462000183565b602080601f831160018114620002425760008415620002295750858301515b600019600386901b1c1916600185901b178555620001cd565b600085815260208120601f198616915b82811015620002735788860151825594840194600190910190840162000252565b5085821015620002925787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ae180620002b26000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063462e91ec11610066578063462e91ec146101335780638da5cb5b14610146578063a3ec138d14610159578063c546c3b2146101bf578063fd47b368146101d457600080fd5b80630121b93f146100a35780631af10679146100b85780632e6997fe146100e85780633477ee2e146100fd57806335bbe70e1461011e575b600080fd5b6100b66100b13660046106d7565b6101e7565b005b6100cb6100c63660046106d7565b610293565b6040516001600160a01b0390911681526020015b60405180910390f35b6100f06102bd565b6040516100df9190610736565b61011061010b3660046106d7565b6103b8565b6040516100df9291906107ac565b610126610474565b6040516100df91906107ce565b6100b6610141366004610831565b6104d6565b6000546100cb906001600160a01b031681565b6101986101673660046108e2565b6004602052600090815260409020546001600160a01b0381169060ff600160a01b8204811691600160a81b90041683565b604080516001600160a01b03909416845291151560208401521515908201526060016100df565b6101c7610554565b6040516100df9190610912565b6100b66101e23660046108e2565b6105e2565b33600090815260046020526040902054600160a01b900460ff16151560011461020f57600080fd5b33600090815260046020526040902054600160a81b900460ff161561023357600080fd5b336000908152600460205260409020805460ff60a81b1916600160a81b17905560028054600191908390811061026b5761026b610925565b9060005260206000209060020201600101600082825461028b919061093b565b909155505050565b600381815481106102a357600080fd5b6000918252602090912001546001600160a01b0316905081565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156103af578382906000526020600020906002020160405180604001604052908160008201805461031490610962565b80601f016020809104026020016040519081016040528092919081815260200182805461034090610962565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b50505050508152602001600182015481525050815260200190600101906102e1565b50505050905090565b600281815481106103c857600080fd5b90600052602060002090600202016000915090508060000180546103eb90610962565b80601f016020809104026020016040519081016040528092919081815260200182805461041790610962565b80156104645780601f1061043957610100808354040283529160200191610464565b820191906000526020600020905b81548152906001019060200180831161044757829003601f168201915b5050505050908060010154905082565b606060038054806020026020016040519081016040528092919081815260200182805480156104cc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104ae575b5050505050905090565b6000546001600160a01b031633146104ed57600080fd5b604080518082019091528181526000602082018190526002805460018101825591819052825191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190819061054490826109eb565b5060208201518160010155505050565b6001805461056190610962565b80601f016020809104026020016040519081016040528092919081815260200182805461058d90610962565b80156105da5780601f106105af576101008083540402835291602001916105da565b820191906000526020600020905b8154815290600101906020018083116105bd57829003601f168201915b505050505081565b6000546001600160a01b031633146105f957600080fd5b6001600160a01b038116600090815260046020526040902054600160a01b900460ff161561062657600080fd5b604080516060810182526001600160a01b03928316808252600160208084018281526000858701818152858252600490935295862094518554915192511515600160a81b0260ff60a81b19931515600160a01b026001600160a81b031990931691909816171716949094179091556003805493840181559091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90910180546001600160a01b0319169091179055565b6000602082840312156106e957600080fd5b5035919050565b6000815180845260005b81811015610716576020818501810151868301820152016106fa565b506000602082860101526020601f19601f83011685010191505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561079e57888303603f1901855281518051878552610781888601826106f0565b91890151948901949094529487019492509086019060010161075d565b509098975050505050505050565b6040815260006107bf60408301856106f0565b90508260208301529392505050565b6020808252825182820181905260009190848201906040850190845b8181101561080f5783516001600160a01b0316835292840192918401916001016107ea565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561084357600080fd5b813567ffffffffffffffff8082111561085b57600080fd5b818401915084601f83011261086f57600080fd5b8135818111156108815761088161081b565b604051601f8201601f19908116603f011681019083821181831017156108a9576108a961081b565b816040528281528760208487010111156108c257600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156108f457600080fd5b81356001600160a01b038116811461090b57600080fd5b9392505050565b60208152600061090b60208301846106f0565b634e487b7160e01b600052603260045260246000fd5b8082018082111561095c57634e487b7160e01b600052601160045260246000fd5b92915050565b600181811c9082168061097657607f821691505b60208210810361099657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156109e657600081815260208120601f850160051c810160208610156109c35750805b601f850160051c820191505b818110156109e2578281556001016109cf565b5050505b505050565b815167ffffffffffffffff811115610a0557610a0561081b565b610a1981610a138454610962565b8461099c565b602080601f831160018114610a4e5760008415610a365750858301515b600019600386901b1c1916600185901b1785556109e2565b600085815260208120601f198616915b82811015610a7d57888601518255948401946001909101908401610a5e565b5085821015610a9b5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212208d61b8b67fedc4edfa011f220ec933d8fbbc9dd270c9488da66764ae2c9a8b4864736f6c63430008110033";
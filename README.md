# gx-registry

A blockchain registry for the Gx package manager

## Blockchain

The goal of using a blockchain is to track the head of a list of published packages. This uses [ipfs-ethereum-log](https://github.com/nginnever/ipfs-ethereum-log) to accomplish this.

#### Ethereum

The blockchain used for gx-registry is Ethereum. The source code is in ```/contracts/Registry.sol```. The ethereum EVM provides a good scripting platform for code execution in blocks but it is not the only option and can be swapped out in the future if needed.

#### Permissions

The contract will register the ```msg.sender``` public key with the provided human readable names. Currently only the public key that initialized the registry of the package will be able to edit the link to packages.

#### Database

gx-registry uses an append only log to store the registrations. Each node in the list is a mapping from ```<key> name => <struct> IPFS``` where ```IPFS``` is a struct memory block containing the ipfs hash of the repository and any other desired meta information. 

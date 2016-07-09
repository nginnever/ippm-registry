# gx-registry

A blockchain registry for the Gx package 

As with gx, gx-registry is Alpha Quality. It's not perfect yet. It will cost a small amount of money to publish while reading and searching the registry will always be free. All publish fees go to the blockchain miners processing the scripts in the transaction to set the registration. See ToDo for more info.

## Blockchain

The goal of using a blockchain is to track the head of a list of published packages. This uses [ipfs-ethereum-log](https://github.com/nginnever/ipfs-ethereum-log) to accomplish this.

#### Ethereum

The blockchain used for gx-registry is Ethereum. The source code is in ```/contracts/Registry.sol```. The ethereum EVM provides a good scripting platform for code execution in blocks but it is not the only option and can be swapped out in the future if needed.

#### Permissions

The contract will register the ```msg.sender``` public key with the provided human readable names. Currently only the public key that initialized the registry of the package will be able to edit the link to packages.

#### Database

gx-registry uses an append only log to store the registrations. Each node in the list is a mapping from ```<key> name => <struct> IPFS``` where ```IPFS``` is a struct memory block containing the ipfs hash of the repository and any other desired meta information. 


## API

to interface with the log, load the contract abi and instantiate with the contract address. Currently the registry is running on a test net.

#### contract ABI: ```/contracts/RegistryABI.js``` 

#### contract address:  ```0xb5f546d5bc8ab6ce0a4091c8bf906800627912cd```

#### test net info: ```--networkid 1337```

### Javascript
```
var registryContract = ABI
var regInstance = eth.contract(ABI).at(Address)
```


Two functions are exposed.

### Init

```regInstance.init(name, multihash)```
Where
- String name, is the gx package name
- String multihash, the base58 encoded version of the multihash

The public key used in the signing of the init transaction will be given ownership of the node added to the linked list. From this point on only that public key can change the data in the node.

### Publish

```regInstance.publish(name, multihash)```

Where
- String name, is the gx package name
- String multihash, the base58 encoded version of the multihash

The log is set to only allow the public that initialized the entry to be able to publish new information to it. 

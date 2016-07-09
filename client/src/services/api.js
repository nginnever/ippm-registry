import Web3 from 'web3'
import lightwallet from 'eth-lightwallet'
import web3hook from 'hooked-web3-provider'

let web3
//import {createDaemon} from '../utils/ipfs'


 function getIPFS () {
    if (daemon) return Promise.resolve(daemon)

    return createDaemon().then((ipfs) => {
      daemon = ipfs
      return daemon
    })
  } 

function setWeb3Provider(keystore) {
  var web3Provider = new web3hook({
    host: "http://localhost:8545",
    transaction_signer: keystore
  })

  web3.setProvider(web3Provider)
}

function newAddress(password) {

  if (password == undefined) {
    password = prompt('Enter password', 'password')
  }

  lightwallet.keystore.deriveKeyFromPassword()
}

export const newWallet = (entropy) => {
  const extraEntropy = entropy
  const randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy)
  const password = prompt('Your wallet seed is: ' + randomSeed + '\n\n' + 'Please enter a password to encypt your seed', 'password')

  lightwallet.keystore.deriveKeyFromPassword(password, (err, pwDerivedKey) => {
    var newKeystore = new lightwallet.keystore(
      randomSeed,
      pwDerivedKey
    )
    console.log(newKeystore)
    var test = newKeystore.isDerivedKeyCorrect(pwDerivedKey)
    console.log('weee')
    newKeystore.generateNewAddress(pwDerivedKey)
    //console.log(newKeystore.getAddresses())
    //newAddresses(password)
    setWeb3Provider(newKeystore)

  })
  console.log(randomSeed)

}

export const search = (term) => {
  return new Promise((resolve, reject) => {

    resolve(term)
  })

}

export const init = () => {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.0.28:8545"));
    //web3 = new web3()
  }
  
  //newAddress()
  web3.eth.getBlock(48, function(error, result){
    if(!error)
      console.log(result)
    else
      console.error(error);
  })  

}


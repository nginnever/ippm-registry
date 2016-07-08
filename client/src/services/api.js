import OrbitDB from 'orbit-db'

import {createDaemon} from '../utils/ipfs'

const network = null
const user = 'ipfspad'
const password = 'shh'
const LOG_NAME = 'pad'

let orbitdb
let el
let daemon

function getIPFS () {
	if (daemon) return Promise.resolve(daemon)

	return createDaemon().then((ipfs) => {
		daemon = ipfs
		return daemon
	})
}

function db () {
  if (orbitdb) return Promise.resolve(orbitdb)

  return getIPFS().then((ipfs) => {
  	return OrbitDB.connect(network, user, password, ipfs)
  }).then((o) => {
  	orbitdb = o
  	return orbitdb
  })
}

db()
  .catch((err) => {
  	console.log('error starting')
  	console.log(err.stack)
  })
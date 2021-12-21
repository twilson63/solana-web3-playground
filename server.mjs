import bs58 from 'bs58'
import nacl from 'tweetnacl'

const mBytes = new TextEncoder().encode('Hello')
const pkBytes = bs58.decode('BipSMDUqX1UwQAw4QWpV7pyYTxBQaVBSxm4CwdzRM8CU')
const sigBytes = bs58.decode('dzEh6EB22G8cUcgnXVHLhivnpk1XfvfVt8jJVi3q9EcLCUnCoeKh42XM5n9YZc4KzSvmfcx5sSDFsTZK1sZSz4q')

const result = nacl.sign.detached.verify(mBytes, sigBytes, pkBytes)
console.log(result)
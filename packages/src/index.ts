
import {
  rpcUrl,
  priKey,
  carvRegistrarControllerAbi,
  carvRegistrarControllerAddress,
  carvPublicResolverAbi,
  carvPublicResolverAddress,
} from "./const";

import { 
  Contract, 
  getDefaultProvider, 
  Wallet,
  keccak256,
  toUtf8Bytes
} from "ethers";

const namehash = require('eth-ens-namehash');
const tld = "play";
const labelhash = (label:string) => keccak256(toUtf8Bytes(label))

export async function getNames(address: string): Promise<string[]> {
  
  const rpc =  getDefaultProvider( rpcUrl);
  const wallet = new Wallet( priKey, rpc);
  const carvRegistrarControllerContract = new Contract(carvRegistrarControllerAddress, carvRegistrarControllerAbi, wallet);
  const names = await carvRegistrarControllerContract.getNames(address);

  return names;
  
}

export async function getAddress(name: string): Promise<string> {

  const rpc =  getDefaultProvider( rpcUrl);
  const wallet = new Wallet( priKey, rpc);
  const carvPublicResolverContract = new Contract(carvPublicResolverAddress, carvPublicResolverAbi, wallet);

  let subNodeHash = getSubNode(name);

  var address = await carvPublicResolverContract.addr(subNodeHash)
  return address;

}

function getSubNode(name:string){

  let rootNameHash = namehash.hash(tld);
  let packageHex = rootNameHash + labelhash(name).substring(2)
  return keccak256(packageHex);

}



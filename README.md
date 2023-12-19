<h1 align="center">PNSJS-V1 SDK</h1>
<p align="center"> </p>
<div align="center">

</div>

## Features

- Super fast response times
- Easy call batchability
- Written in TypeScript
- Supports the most cutting edge PNS features
- Full tree-shaking support

## Installation

Install @xuxinlai2002/pnsjs

```sh
yarn add @xuxinlai2002/pnsjs
```

## Dependencies
Make sure you're running a version of node compliant with the `engines` requirement in `package.json`, or install Node Version Manager [`nvm`](https://github.com/creationix/nvm) and run `nvm use` to use the correct version of node.

Requires `nodejs` ,`yarn` and `npm`.

```shell
# node -v 
v16.0.0
# yarn version
yarn version v1.22.17 
# npm -v
8.5.3
```

## Getting Started

The easiest way to get started is to refer to the [example] code, which contains the implementation codes for getAddress and getNames.

```ts
// Import viem transport, viem chain, and PNSjs
import { getNames, getAddress} from '@xuxinlai2002/pnsjs'

const testAddress = "0x36cb680f411a6471947a491271fcc0741176b561";
const main = async () => {

  const names = await getNames(testAddress);
  console.log("names is :",names);

  const address = await getAddress("carv-id");
  console.log("address is :",address);
}

main()
```

## Contribution
Thank you for considering to help out with the source code! We welcome contributions from anyone on the internet, and are grateful for even the smallest of fixes!

If you'd like to contribute to NSJS-V1, please fork, fix, commit and send a pull request for the maintainers to review and merge into the main code base. 

## Docs

Docs can be found [here](). Full docs site coming soon.


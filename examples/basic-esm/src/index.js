import { getNames, getAddress} from '@xuxinlai2002/pnsjs'

const testAddress = "0x36cb680f411a6471947a491271fcc0741176b561";
const main = async () => {

  const names = await getNames(testAddress);
  console.log("names is :",names);

  const address = await getAddress("carv-id");
  console.log("address is :",address);
}

main()




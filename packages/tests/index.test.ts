import { getNames ,getAddress} from "../src";

const testAddress = "0x36cb680f411a6471947a491271fcc0741176b561";
test("get names from address",async () => {

  const names = await getNames(testAddress);
  expect(names[0]).toBe("carv-id");
  expect(names[1]).toBe("qxdz888888888");

});

test("get address from name",async () => {

  const address = await getAddress("carv-id");
  expect(address.toLowerCase()).toBe(testAddress);

});
const mathOperations = require('./calculator');

describe("Calculator tests", () => {
  test("adding 17 + 33 should return 50", () => {
    expect( mathOperations.sum(17, 33) ).toBe(50)
  });
  test("adding 7 + 3 should return 10", () => {
    expect( mathOperations.sum(7, 3) ).toBe(10);
  });
  test("adding 3 + -7 should return -4", () => {
    expect( mathOperations.sum(3, -7) ).toBe(-4);
  });
  test("subtracting 8 from 17 should return 9", () => {
    expect( mathOperations.difference(17, 8) ).toBe(9)
  });
  test("subtracting 3.23 from 10.99 should return 7.76", () => {
    expect( mathOperations.difference(10.99, 3.23) ).toBe(7.76)
  });
  test("subtracting 17 from 5 should return -12", () => {
    expect( mathOperations.difference(5, 17) ).toBe(-12)
  });
  test("multiplying 8 and 4 should return 32", () => {
    expect( mathOperations.product(8, 4) ).toBe(32)
  });
  test("multiplying 2.5 and 3 should return 7.5", () => {
    expect( mathOperations.product(2.5, 3) ).toBe(7.5)
  });
  test("multyplying -10 and -10 should return 100", () => {
    expect( mathOperations.product(-10, -10) ).toBe(100)
  });
  test("dividing 42 by 6 should return 7", () => {
    expect( mathOperations.quotient(42, 6) ).toBe(7)
  });
  test("dividing 72 by 8 should return 9", () => {
    expect( mathOperations.quotient(72, 8) ).toBe(9)
  });
  test("dividing 9 by 2 should return 4.5", () => {
    expect( mathOperations.quotient(9, 2) ).toBe(4.5)
  });
  test(
    "dividing 7 by 3 should return remainder of 1",
    () => {
      expect( mathOperations.modulus(7, 3) ).toBe(1)
  });
  test(
    "dividing 17 by 3 should return remainder of 2",
    () => {
      expect( mathOperations.modulus(17, 3) ).toBe(2)
  });
  test(
    "dividing 12 by 9 should return remainder of 3",
    () => {
      expect( mathOperations.modulus(12, 9) ).toBe(3)
  });
});

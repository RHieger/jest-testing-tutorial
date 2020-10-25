const {
  mathOperations,
  truthiness,
  numberMatchers
} = require("./calculator");

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

describe("Calculator Matchers: Equality/Inequality", () => {
  test("4 + 3 should equal 7", () => {
    expect( mathOperations.sum(4, 3) ).toBe(7)
  });
  test("-5 + -6 should equal -11", () => {
    expect( mathOperations.sum(-5, -6) ).toBe(-11)
  });
  test("-7 + 13 should equal 6", () => {
    expect( mathOperations.sum(-7, 13) ).toBe(6)
  });
  test("3 + 3 should not equal 33", () => {
    expect( mathOperations.sum(3, 3) ).not.toBe(33)
  });
  test("-3 + 7 should not equal 10", () => {
    expect( mathOperations.sum(-3, 7) ).not.toBe(33)
  });
  test("-7 + -3 should not equal 10", () => {
    expect( mathOperations.sum(-7, -3) ).not.toBe(10)
  });
  test("7 - 3 should equal 4", () => {
    expect( mathOperations.difference(7, 3) ).toBe(4)
  });
  test("-10 - 5 should equal -15", () => {
    expect( mathOperations.difference(-10, 5) ).toBe(-15)
  });
  test("-10 - -25 should equal 15", () => {
    expect( mathOperations.difference(-10, -25) ).toBe(15)
  });
  test("10 - -5 should not equal 5", () => {
    expect( mathOperations.difference(10, -5) ).not.toBe(5)
  });
  test("32 - 3 should not equal 30", () => {
    expect( mathOperations.difference(32, 3) ).not.toBe(30)
  });
  test("22 - 23 should not equal 1", () => {
    expect( mathOperations.difference(22, 23) ).not.toBe(1)
  });
  test("3 * 3 should equal 9", () => {
    expect( mathOperations.product(3, 3) ).toBe(9)
  });
  test("8 * -7 should equal -56", () => {
    expect( mathOperations.product(8, -7) ).toBe(-56)
  });
  test("-8 * -8 should equal 64", () => {
    expect( mathOperations.product(-8, -8) ).toBe(64)
  });
  test("11 * 5 should not equal 38", () => {
    expect( mathOperations.product(11, 5) ).not.toBe(38)
  });
  test("-22 * -2 should not equal -44", () => {
    expect( mathOperations.product(-22, -2) ).not.toBe(-44)
  });
  test("10 * 2.5 should not equal 30", () => {
    expect( mathOperations.product(10, 2.5) ).not.toBe(30)
  });
  test("7 / 2 should equal 3.5", () => {
    expect( mathOperations.quotient(7, 2) ).toBe(3.5)
  });
  test("122 / 2 should equal 61", () => {
    expect( mathOperations.quotient(122, 2) ).toBe(61)
  });
  test("-7 / 2 should equal -3.5", () => {
    expect( mathOperations.quotient(-7, 2) ).toBe(-3.5)
  });
  test("10 / 3 should not equal 3", () => {
    expect( mathOperations.quotient(10, 3) ).not.toBe(3)
  });
  test("-6 / 2 should not equal -2", () => {
    expect( mathOperations.quotient(-6, 2) ).not.toBe(-2)
  });
  test("72 / 11 should not equal 9", () => {
    expect( mathOperations.quotient(72, 11) ).not.toBe(9)
  });
  test("33 / 3 should leave a remainder of 0", () => {
    expect( mathOperations.modulus(33, 3) ).toBe(0)
  });
  test("46 / 4 should leave a remainder of 2", () => {
    expect( mathOperations.modulus(46, 4) ).toBe(2)
  });
  test("-29 / 3 should leave a remainder of -2", () => {
    expect( mathOperations.modulus(-29, 3) ).toBe(-2)
  });
  test("10 / 3 should not leave a remainder of 0", () => {
    expect( mathOperations.modulus(10, 3) ).not.toBe(0)
  });
  test("25 / 3 should not leave a remainder of 3", () => {
    expect( mathOperations.modulus(25, 3) ).not.toBe(3)
  });
  test("-32 / 5 should not leave a remainder of 2", () => {
    expect( mathOperations.modulus(-32, 5) ).not.toBe(2)
  });
});

describe("Calculator Matchers: Truthiness", () => {
  test("myNullValue should evaluate null", () => {
    const myNullValue = null;
    expect( truthiness.evaluatesNull(myNullValue) ).toBeNull()
  });
  test("'Bobby' should not evaluate null", () => {
    const myName = "Bobby";
    expect( truthiness.evaluatesNotNull(myName) ).not.toBeNull()
  });
  test("'A truthy value' should evaluate as truthy", () => {
    const truthyValue = "A truthy value";
    expect( truthiness.evaluatesTruthy(truthyValue) ).toBeTruthy()
  });
  test("NaN, 'twenty' evaluated as number, should evaluate as falsy", () => {
    const notNumber = "twenty";
    expect( truthiness.evaluatesFalsy(notNumber) ).toBeFalsy()
  });
  test("0 should evaluate as falsy", () => {
    expect( truthiness.evaluatesFalsy(0) ).toBeFalsy()
  });
});

describe("Calculator: Number Matchers", () => {
  const greaterThanNumber = -7;
  const lessThanNumber = 100;
  const lessThanOrEqualNumber = 195;
  const greaterThanOrEqualNumber = 750.59;
  test("-7 is greater than -15", () => {
    expect(greaterThanNumber).toBeGreaterThan(-15)
  });
  test("100 > 500", () => {
    expect(lessThanNumber).toBeLessThan(500)
  });
  test("195 <= 195", () => {
    expect(lessThanOrEqualNumber).toBeLessThanOrEqual(195)
  });
  test("750.59 >= 750.03", () => {
    expect(greaterThanOrEqualNumber).toBeGreaterThanOrEqual(750.03)
  });
});

describe("String Matchers", () => {
  const myString = "Any string value contains substrings.";
  const mySubString = myString.substring(26, 35);
  const myFailedString = "strange";
  test("'substrings' is contained in myString", () => {
    expect(mySubString).toMatch(/substring/)
  });
  test("'strong' is not contained in myFailedString", () => {
    expect(myFailedString).not.toMatch(/strong/)
  });
});

const { TestScheduler } = require('jest');
const mathOperations = require('./calculator');

describe("Calculator tests", () => {
  test("adding 17 + 33 should return 50", () => {
    expect( mathOperations.sum(17, 33) ).toBe(50)
  });
});

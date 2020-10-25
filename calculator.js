const mathOperations = {
  sum: function(a, b) {
    return a + b;
  },
  difference: function(a, b) {
    return a - b;
  },
  product: function(a, b) {
    return a * b;
  },
  quotient: function(a, b) {
    return a / b;
  },
  modulus: function(a, b) {
    return a % b;
  }
};

const truthiness = {
  evaluatesNull: function(value) {
    return value = null;
  },
  evaluatesNotNull: function(value) {
    return value !== null;
  },
  evaluatesTruthy: function(value) {
    return value = true;
  },
  evaluatesFalsy: function(value) {
    return value = false;
  }
};

module.exports = {
  mathOperations,
  truthiness
};

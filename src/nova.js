const allTests = [];

/**
 * Execute all declared tests.
 */
exports.runAllTests = function () {
    console.log(allTests);
};

/**
 * Declare a test.
 *
 * @param name Name of the test
 * @param testFunction Test itself
 */
exports.test = function (name, testFunction) {
    allTests.push({name: name, testFunction: testFunction});
};

/**
 * Assert that expected is equal to actual.
 *
 * @param expected Expected value
 * @param actual Actual value
 *
 * @throws If expected is not equal actual
 */
exports.assertEquals = function (expected, actual) {
};

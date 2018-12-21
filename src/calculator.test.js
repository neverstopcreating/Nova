const {runAllTests, test, assertEquals} = require("./nova");
const {sum} = require("./calculator");

test("sum(2, 2) = 4", () => {
    assertEquals(4, sum(2, 2));
});

test("sum(3, 4) = 7", () => {
    assertEquals(7, sum(3, 4));
});

runAllTests();

const assert = require("assert");
const { label } = require("./button");

assert.strictEqual(label(), "Pay now (second shared fix)");
console.log("ok");

const assert = require("assert");
const { label } = require("./button");

assert.strictEqual(label(), "Pay now (shared fix)");
console.log("ok");

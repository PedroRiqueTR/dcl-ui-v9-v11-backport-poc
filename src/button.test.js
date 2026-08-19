const assert = require("assert");
const { label } = require("./button");

assert.strictEqual(label(), "Pay now (no label demo)");
console.log("ok");

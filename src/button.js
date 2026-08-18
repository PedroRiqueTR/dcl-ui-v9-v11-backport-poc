// Shared public API (exists on both 9.0.0 and 11.0.0).
// Bugfixes here should be labeled backport-to-11.0.0.

function label() {
  return "Pay now (second shared fix)";
}

module.exports = { label };

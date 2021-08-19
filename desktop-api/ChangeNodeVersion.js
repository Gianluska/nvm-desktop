const Runner = require("./Runner");
const CommandGet = require("./CommandGet");

function ChangeNodeVersion(version) {
  return Runner(`nvm use ${version}`);
}

module.exports = ChangeNodeVersion;

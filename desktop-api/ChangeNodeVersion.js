const Runner = require("./Runner");

function ChangeNodeVersion(version) {
  return Runner(`nvm use ${version}`);
}

module.exports = ChangeNodeVersion;

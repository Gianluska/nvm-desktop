const cmd = require("node-cmd");

function Runner(command) {
  const run = cmd.runSync(command);
  
  if (run.err || run.etderr) {
    throw new Error('NVM não esta instalado!')
  }
  return run.data
}

module.exports = Runner;

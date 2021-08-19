const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "node.png");

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip("NVM Desktop");
  
  return tray;
}

module.exports = createTray();

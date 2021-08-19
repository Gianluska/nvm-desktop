const { BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 410,
    show: false,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    autoHideMenuBar: true,
  });

  win.loadFile("./src/index.html");

  return win;
}

module.exports = createWindow();

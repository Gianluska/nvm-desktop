function ControlWindow(win, tray) {
  function toggle() {
    if (win.isVisible()) {
      win.hide();
    } else {
      show();
    }
  }

  function show() {
    const { x, y } = getPosition();
    win.setPosition(x, y, false);
    win.show();
    win.focus();
  }

  function getPosition() {
    const winBounds = win.getBounds();
    const trayBounds = tray.getBounds();

    const x = Math.round(
      trayBounds.x + trayBounds.width / 2 - winBounds.width / 2
    );
    const y = Math.round(
      trayBounds.y < 100
        ? trayBounds.y + trayBounds.height + 3
        : trayBounds.y - winBounds.height - 3
    );

    return { x, y };
  }

  return {
    toggle,
  };
}

module.exports = ControlWindow;

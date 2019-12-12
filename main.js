const { app, BrowserWindow, dialog  } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({
    frame: true,
    width: 660,
    height: 660,
    webPreferences: {
      nodeIntegration: true
    }
  })
 
  win.loadFile('index.html')
}
 
app.on('ready', () => {
  console.log('Hello from Electron');
  createWindow();
  //const response = dialog.showMessageBox(BrowserWindow);
});
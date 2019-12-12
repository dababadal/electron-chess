const { app, BrowserWindow, dialog  } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({
    frame: true,
    width: 580,
    height: 580,
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
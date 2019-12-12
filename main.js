const { app, BrowserWindow } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
 
  win.loadFile('first-page/index.html')
}
 
app.on('ready', createWindow)
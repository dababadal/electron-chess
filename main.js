const { app, BrowserWindow } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({
    frame: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })
 
  win.loadFile('index.html')
}
 
app.on('ready', createWindow)
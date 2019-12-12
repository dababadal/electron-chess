const { app, BrowserWindow, dialog  } = require('electron')
 
function createWindow () {
  let win = new BrowserWindow({
    frame: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
 
  win.loadFile('index.html')
}
 
app.on('ready', () => {

  createWindow();
  
});
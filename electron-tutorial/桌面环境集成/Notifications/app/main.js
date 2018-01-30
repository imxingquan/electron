const {app, BrowserWindow} = require('electron')
var path = require('path')

let mainWindow = null
 
app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具

  mainWindow = new BrowserWindow()
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
  
})

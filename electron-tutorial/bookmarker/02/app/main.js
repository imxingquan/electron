const {app, BrowserWindow} = require('electron')
 
let mainWindow = null
 
app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具

  mainWindow = new BrowserWindow()
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
    mainWindow.openDevTools();
  //mainWindow.webContents.loadURL("http://baidu.com")
})
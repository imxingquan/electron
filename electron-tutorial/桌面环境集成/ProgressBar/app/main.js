const {app, BrowserWindow} = require('electron')
var path = require('path')

let mainWindow = null
 
app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具

  mainWindow = new BrowserWindow()
  //mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
  mainWindow.webContents.loadURL("http://baidu.com")

  //任务栏 进度条
  mainWindow.setProgressBar(0.5)
  
})

//https://www.w3cschool.cn/electronmanual/lz4y1ql3.html

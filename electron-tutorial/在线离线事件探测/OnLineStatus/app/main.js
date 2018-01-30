const {app, BrowserWindow,ipcMain,Notification} = require('electron')

let mainWindow = null

app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具

  mainWindow = new BrowserWindow()
  mainWindow.webContents.loadURL(`file://${__dirname}/online-status.html`);
  mainWindow.openDevTools();
  
  //任务栏 进度条
  mainWindow.setProgressBar(0.5)
  
})

ipcMain.on('online-status-changed', (event, status) => {
  console.log(status);
});





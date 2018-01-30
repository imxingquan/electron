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

//使用 app.setUserTasks API 来设置你的应用中的用户任务
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: '这是标题',
    description: 'This is Description!'
  }
]);

//调用 app.setUserTasks 并传入空数组就可以清除你的任务列表
//app.setUserTasks([]);
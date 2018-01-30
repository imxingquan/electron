const {app, BrowserWindow} = require('electron')
var path = require('path')
 
let mainWindow = null
 
app.on('ready', () => {
  console.log('Hello from Electron.')
  // 打开开发工具
  mainWindow = new BrowserWindow()
 mainWindow.setThumbarButtons([
  {
    tooltip: "button1",
    icon: path.join(__dirname, 'button1.png'),
    click: function() { console.log("button2 clicked"); }
  },
  {
    tooltip: "button2",
    icon: path.join(__dirname, 'button2.png'),
    flags:['enabled', 'dismissonclick'],
    click: function() { console.log("button2 clicked."); }
  }
]);
  
  
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
  //mainWindow.webContents.loadURL("http://baidu.com")
  
})

